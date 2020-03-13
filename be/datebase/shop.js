const shop = () => {
  // 2. 创建骨架 - 骨架就是给我们数据定义字段
  
  const { shopSchema } = require('./schema')
  
  // 3. 创建模型
  
  const { shopModel } = require('./model')

  const colleactionName = 'shops'

  const shopMod = shopModel( colleactionName, shopSchema )


  return shopMod
}


module.exports = shop 