/**
 * Created by kange666 on 2019/4/11.
 */
var fs = require('fs')
//var Furniture = require('./furniture')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')
var Furniture = require('./furniture')

// 1. 创建一个路由容器
var router = express.Router()


//渲染登录页面
router.get('/login', function (req, res) {
    res.render('login.html')
})

//渲染销售页面
router.get('/sell', function (req, res) {
    res.render('sell.html')
})

//添加订单
//商品
router.post('/sell/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    Furniture.saveOrder(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/sell')
    })
})
//地址
router.post('/sell/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    Furniture.updateOrderById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        //console.log(req.body);
        ////res.redirect('/store')
    })
})


//渲染库房页面
router.get('/store', function (req, res) {
    res.render('store.html')
})
//添加新品
router.post('/store/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    Furniture.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
       //res.redirect('/store')
    })
})

/*
 * 处理编辑库存
 */
router.post('/furnitures/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    Furniture.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/store')
    })
})

/*
 * 处理删除商品
 */
router.post('/furnitures/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据

    Furniture.deleteById(req.body.ID, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        // console.log(req.body.ID)
        res.redirect('/store')
    })
})

/*
 * 处理编辑订单
 */
router.post('/dd/edit', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    Furniture.updateOrderById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        //res.redirect('/store')
    })
})

/*
 * 处理删除订单
 */
router.post('/dd/delete', function (req, res) {
    // 1. 获取要删除的 id
    // 2. 根据 id 执行删除操作
    // 3. 根据操作结果发送响应数据

    Furniture.deleteOrderById(req.body.ID, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/store')
    })
})


//添加缺货提醒
router.post('/sell/qhtx', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //    将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    Furniture.saveQh(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        //res.redirect('/store')
    })
})

//定价修改
router.post('/sell/djxg', function (req, res) {
    // 1. 获取表单数据
    //    req.body
    // 2. 更新
    //    Student.updateById()
    // 3. 发送响应
    Furniture.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
    })
})

module.exports = router