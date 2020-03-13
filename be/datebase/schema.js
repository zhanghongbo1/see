/* 
  骨架不止一个
*/

const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  shop_address: String,
  shop_canyin_img: String,
  shop_category: Array,
  shop_end_time: String,
  shop_feature: Array,
  shop_id: String,
  shop_info: String,
  shop_logo_img: String,
  shop_name: String,
  shop_phone: String,
  shop_slogan: String,
  shop_start_time: String,
  shop_yinye_img: String,
  shop_youhui: String,
})


const userSchema = {
  usename: String,
  password: String,
  phonenumber: String,
}


module.exports = {
  shopSchema,
  userSchema
}