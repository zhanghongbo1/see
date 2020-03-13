/* 
  * 数据库连接
*/

const mongoose = require('mongoose')

const databaseName = 1909

const url = `mongodb://127.0.0.1:27017/${ databaseName }`

const connectFn = () => {
  mongoose.connect( url, err => {
    if ( err ) {
      console.log('数据库连接失败')
    } else {
      console.log('数据库连接成功')
    }
  })
}


module.exports = connectFn

