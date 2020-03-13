const user = () => {
  // 2. 创建骨架 - 骨架就是给我们数据定义字段
  
  const { userSchema } = require('./schema')
  
  // 3. 创建模型
  
  const { userModel } = require('./model')

  const colleactionName = 'users'

  const userMod = userModel( colleactionName, userSchema )


  return userMod
}


module.exports = user 