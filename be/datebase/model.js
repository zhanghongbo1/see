/* 
  这是mongoose模型 - 操作mongodb数据库的增删改查
*/ 

const mongoose = require('mongoose')


// mongoose.model( 集合名称【 复数 】, 骨架)

const shopModel = ( collectionName, schema ) => {
  return mongoose.model( collectionName, schema )
}


const userModel = ( collectionName, schema ) => {
  return mongoose.model( collectionName, schema )
}

module.exports = {
  shopModel,
  userModel 
}