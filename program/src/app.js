/**
 * Created by Administrator on 2016/12/30 0030.
 */
'use strict';
const express=require('express');
const app=express();
app.use(express.static('./statics'));
//设置路由
const accountRouter=require('./routers/accountRouters.js');
app.use('/account',accountRouter);
//开启服务监听
app.listen(6688,'127.0.0.1',()=>{
    console.log('开发环境下的 web 服务器启动')
});
