/* 
  接收图片
*/
const express = require('express')

const router = express.Router()

const multer = require('multer')

const path = require('path')

// 将我们上传的图片存储在后端资源目录中

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  path.join( __dirname, '../public/uploads') )
  },
  filename: function (req, file, cb) {
    console.log('file',file.originalname.split('.')[1])
    const filename = file.filename + '-' +Date.now() + '.' + file.originalname.split('.')[1]
    req.filename = filename 
    cb(null, filename)
  }
})

var upload = multer({ storage: storage })


router.route('/image')
  .post(upload.any(),(req,res,next) => {
    res.json({
      status: 2,
      info: '图片上传成功',
      imgUrl: `http://localhost:5000/uploads/${ req.filename }`
    })
  })

module.exports = router