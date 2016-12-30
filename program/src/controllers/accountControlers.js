/**
 * Created by Administrator on 2016/12/30 0030.
 */
'use strict';
const fs= require('fs');
//处理获取登录页面的逻辑
exports.getLoginPage=(req,res)=>{
    console.log(12);
    fs.readFile('./views/login.html',(err,content)=>{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(content);
    })

}