var mongoose = require('mongoose');
var TTestSchema = require('../Schema/Testindex');

//操作4.在此处修改表名，即collectionname1
module.exports =  mongoose.model('collectionname2',TTestSchema,'collectionname2');
