/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 *
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */

var fs = require('fs')

var dbPath = './public/json/fct.json'
var order = './public/json/order.json'
var qhtx = './public/json/qhtx.json'


exports.findById = function (ID, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)
        var ret = furnitures.find(function (item) {
            return item.ID === ID
        })
        callback(null, ret)
    })
}

/**
 * 添加保存商品
 * @param  {Object}   furniture  商品对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (furniture, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)


        // 把用户传递的对象保存到数组中
        furnitures.push(furniture)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

    /**
     * 添加保存订单
     * @param  {Object}   furniture  商品对象
     * @param  {Function} callback 回调函数
     */
    exports.saveOrder = function (furniture, callback) {
        fs.readFile(order, 'utf8', function (err, data) {
            if (err) {
                return callback(err)
            }
            var furnitures = JSON.parse(data)


            // 把用户传递的对象保存到数组中
            furnitures.push(furniture)

            // 把对象数据转换为字符串
            var fileData = JSON.stringify(furnitures)

            // 把字符串保存到文件中
            fs.writeFile(order, fileData, function (err) {
                if (err) {
                    // 错误就是把错误对象传递给它
                    return callback(err)
                }
                // 成功就没错，所以错误对象是 null
                callback(null)
            })
        })
    }

/**
 * 更新
 */
exports.updateById = function (furniture, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)

        //// 注意：这里记得把 id 统一转换为数字类型
        //student.id = parseInt(student.id)

        // 你要修改谁，就需要把谁找出来
        // EcmaScript 6 中的一个数组方法：find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
        var stu = furnitures.find(function (item) {
            return item.ID === furniture.ID
        })


        for (var key in furniture) {
            stu[key] = furniture[key]
        }
        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

exports.updateOrderById = function (furniture, callback) {
    fs.readFile(order, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)

        //// 注意：这里记得把 id 统一转换为数字类型
        //student.id = parseInt(student.id)

        // 你要修改谁，就需要把谁找出来
        // EcmaScript 6 中的一个数组方法：find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
        var stu = furnitures.find(function (item) {
            return item.ID === furniture.ID
        })


        for (var key in furniture) {
            stu[key] = furniture[key]
        }
        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(order, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 删除商品
 */
exports.deleteById = function (ID, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)

        // findIndex 方法专门用来根据条件查找元素的下标
        var deleteId = furnitures.findIndex(function (item) {
            return item.ID === ID
        })

        // 根据下标从数组中删除对应的学生对象
        furnitures.splice(deleteId, 1)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 删除订单
 */
exports.deleteOrderById = function (ID, callback) {
    fs.readFile(order, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)

        // findIndex 方法专门用来根据条件查找元素的下标
        var deleteId = furnitures.findIndex(function (item) {
            return item.ID === ID
        })

        // 根据下标从数组中删除对应的学生对象
        furnitures.splice(deleteId, 1)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(order, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 添加缺货提醒
 * @param  {Object}   furniture  商品对象
 * @param  {Function} callback 回调函数
 */
exports.saveQh = function (furniture, callback) {
    fs.readFile(qhtx, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var furnitures = JSON.parse(data)


        // 把用户传递的对象保存到数组中
        furnitures.push(furniture)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify(furnitures)

        // 把字符串保存到文件中
        fs.writeFile(qhtx, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}
