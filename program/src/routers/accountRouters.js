/**
 * Created by Administrator on 2016/12/30 0030.
 */
'use strict';
const express=require('express');
//创建路由
const accountRouter = express.Router();
//导入accountControlers
const accountCtrl=require('../controllers/accountControlers.js');
//4.处理子路由的规则
accountRouter.get('/login',accountCtrl.getLoginPage);
module.exports = accountRouter;