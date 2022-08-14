// var mongoose = require('mongoose');

// // json属性存储
// module.exports = new mongoose.Schema({
//     _id:String,
//     type:String,
//     properties:Object,
//     coordinates:Array,
//     geometryType:String
// });
var mongoose = require('mongoose');

// json属性存储,操作3.在这里设定字段
var myschema=new mongoose.Schema({
    _id:String,
    type:String,
    properties:Object, 
    geodata:Object
});
myschema.path('geodata').index('2dsphere')//给geojson字段添加控件索引
module.exports =myschema