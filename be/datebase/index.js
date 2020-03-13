/* 
  * 用于数据库操作的模块
*/

const mongoose = require('mongoose')
const connectFn = require('./connect')
const shop = require('./shop')
const user = require('./user')

// 1. 连接数据库

connectFn()

// 引入shop这个集合的操作模块
 
const shopModel = shop() // 用于shop的增删改查

const userModel = user() // 用于user的增删改查


// 5. 数据库增删改查


const db = {
  shop: {
    add ( data ) {
      return new Promise(( resolved,rejected ) => {

        console.log('data',data)
        const shopEnity = new shopModel( data ) // 实例化模型得到实体
  
        // 判断我们添加的当前数据在不在已有数据库中 
        shopModel.find({},( err,docs ) => {
          // doc [{},{}]
          const f = docs.some( item => item.shop_id == data.shop_id )
  
          if ( f ) {
            // true 这个店铺已经添加过了，不能在添加了
            resolved({
              status: 2,
              info: '当前店铺已经存在',
            })
          } else {
  
            shopEnity.save( err => {
              if ( err ) {
                rejected({
                  status: 0,
                  info: '店铺添加失败'
                })
              } else {
                resolved({
                  status: 1,
                  info: '店铺添加成功'
                })
              }
            })
  
          }
        })

      })

    },
    del ( _id ) {
      return new Promise(( resolve,reject) => {
        // 通过_id 先删除_id的这一条，还要将删除后的数据重新返回给前端
        shopModel.findById( _id, ( err,doc ) => {
          //doc就是我们根据_id查到的对应数据
          doc.remove( err => {
            if ( err ) {
              reject({
                status: 0,
                info: '删除失败'
              })
            } else {
              shopModel.find({},( err,docs ) => {
                if ( err ) {
                  reject({
                    status: 2,
                    info: '删除成功，查询失败'
                  })
                } else {
                  resolve({
                    status: 1,
                    info: '删除成功',
                    data: docs 
                  })
                }
              })
            }
          })
        })
      })
    },
    modify ( data ) {
      console.log('data',data)
      // 修改数据
      return new Promise(( resolve,reject ) => {
        shopModel.findById( data._id, ( err,doc ) => {
          // doc -> { ... }
          // doc.shop_name = data.shop_name // 修改
          for ( var key in data ) {
            doc[ key ] = data[ key ]
          }
          doc.save( err => {
            if ( err ) {
              reject({
                status: 0,
                info: '修改失败'
              })
            } else {
              resolve({
                status: 1,
                info: '修改成功'
              })
            }
          })
        })
      })
    },
    query () {
      return new Promise(( resolved,rejected ) => {
        shopModel.find({},( err,docs ) => {
          if ( err ) {
            rejected({
              status: 0,
              info: '查询结果有误',
              data: null 
            })
          } else {
            resolved({
              status: 1,
              info: '查询成功',
              data: docs 
            })
          }
        })
      })
    }
  },
  user: {
    add () {},
    del () {},
    modify () {},
    query () {}
  }
}

module.exports = {
  shop: db.shop,
  user: db.user
}