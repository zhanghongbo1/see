const express = require('express')


const router = express.Router()

const { shop } = require('../datebase')


router.route('/shop')
  .post( async ( req,res,next ) => { // 数据添加
    console.log( req.body )

    const result = await shop.add( req.body )

    res.json({
      status: result.status,
      info: result.info
    })
  })
  .get(async (req,res,next) => { // 数据查询
    const result = await shop.query()
    res.json({
      status: result.status,
      info: result.info,
      data: result.data
    })
  })
  .delete( async ( req,res,next) => { // 数据删除
    const { _id } = req.query
    const result = await shop.del( _id )
    res.json({
      status: result.status,
      info: result.info,
      data: result.data
    })
  })
  .put( async (req,res,next) => {
    // 完成数据库操作
    const result = await shop.modify( req.body )
    res.json({
      status: result.status,
      info: result.info
    })
  })


module.exports =  router 