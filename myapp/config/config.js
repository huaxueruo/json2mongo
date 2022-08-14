// module.exports = {
//     port: 3000,//端口号
//     mongodb:[][][][][][]//连接本地数据库
// };

module.exports = {
    //主服务器端口配置
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3000),
    //数据库用户配置
    admin_pwd:'Tdbadmin:fdyt6666',
    //api服务器端口配置
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    //数据库服务器端口配置 操作1在在此处修改端口名和数据库名
    dbHost:'127.0.0.1',
    dbPort:'27017',
    dbDatabase:'testluojie',
    //项目描述？
    app:{
        title:'FDYT SERVER',
        description:'A SERVER for FDYT',
        head:{
            titleTemplate:'server',
            meta:[
                {
                    name:'description',
                    content:'SERVER for FDYT'
                },
                {
                    charset:'utf-8'
                }
            ]
        }
    }
};