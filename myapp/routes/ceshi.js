var express = require('express');
var router = express.Router();
var TTestindex=require('../models/TTestindex')
const fs=require('fs')
const path =require('path');
const { json } = require('body-parser');

//定义读取文件位置：操作2.在这里修改读取的文件名
const readFile=path.resolve(__dirname,'../public/ceshigeojson/地类图斑2014_法定面.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('hello ceshi')

  const data =fs.readFileSync(readFile,'utf8').toString()
  if(data){
    let jsonarr=JSON.parse(data)

    //如果字段名有修改在此处对应修改
    let i=0;
    for( i in jsonarr['features']){
      // console.log(jsonarr['features'][i]['type'])
      // console.log(jsonarr['features'][i]['properties'])
      // console.log(jsonarr['features'][i]['geometry'])

      let createtes=new TTestindex({
        _id:i,
        type:jsonarr['features'][i]['type'],
        properties:jsonarr['features'][i]['properties'],
        geodata:jsonarr['features'][i]['geometry']
      })
      createtes.save().then(result => {
      console.log(result)
  })
  
    }
    console.log("读取完成")
  }else{
    console.log("文件读取错误")
  }
});



module.exports = router;