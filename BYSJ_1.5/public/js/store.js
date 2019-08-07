/**
 * Created by kange666 on 2019/2/21.
 */
$(function () {
    //导航切换
    $("#bs-example-navbar-collapse-1>ul>li").eq(0).on("click", function () {
        $("#kc").show().siblings().hide();
    });
    $("#bs-example-navbar-collapse-1>ul>li").eq(1).on("click", function () {
        $("#xpsj").show().siblings().hide();
    });
    $("#bs-example-navbar-collapse-1>ul>li").eq(2).on("click", function () {
        $("#ddgl").show().siblings().hide();
    });
    //缺货通知
    $("#qhtz").on('click', function () {
       $("#tz-modal").modal('show');
    });
    $.ajax({
        type: "get",
        dataType: "json",
        url: "./public/json/qhtx.json",
        success: function (data) {
            $("#qhtz").find('span').text(data.length);
            $('#qh-fct').empty();//删除之前的数据
            var $s = '';
            for (var i = 0; i < data.length; i++){
                $s += '<tr>' +
                    '<td>' + data[i].ID + '</td>' +
                    '<td>' + data[i].name + '</td>' +
                    '<td>' + data[i].num + '</td>' +
                    '</tr>';
            }
            //console.log($s);
            $('#qh-fct').append($s);
        },
        error: function (error) {
            alert(" 错误");
        }
    });



    //库存表格
    function kcTable(){
        window.operateEvents ={
            "click #xgkc-i" : function (e,value,row,index) {
                setTimeout(function () {
                    $("#kc-modal").modal('show');
                    var $inp = $("#kc-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(3)").children().text();
                    var $id = $("#kc-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(1)").text();
                    //console.log($inp);
                    //console.log($id);
                    $("#kcgg").val($inp);
                    $("#kcid").val($id)
                },1);

            },
            "click #del-i" : function (e,value,row,index) {
                // $("#del-conf").show(200).delay(1500).hide(200);
                setTimeout(function () {
                    $("#delfct-mod").modal('show');
                    //console.log($(this).parent().parent().index());
                    var $id = $("#kc-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(1)").text();
                    $("#del-inp").val($id)
                    // var $sel = $("#kc-tab").find(".bs-checkbox input:checked").parent().parent();
                    // $sel.remove();
                },1);
            }
        };
    //库存表格
    $table = $('#kc-tab').bootstrapTable({
        url: "/public/json/fct.json",                      //请求后台的URL（*）
        method: 'GET',                      //请求方式（*）
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: rows,                     //每页的记录行数（*）
        pageList: [5,10,15],                //可供选择的每页的行数（*）
        search: true,                      //是否显示表格搜索
        strictSearch: true,                 //精确查询
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        //得到查询的参数
        columns: [
            {
                checkbox:true,
                visible:true
            },
            {
                field:"ID",
                title:"型号",
                sortable:true
            },
            {
                field:"name",
                title:"名称"
            },
            {
                field:"num",
                title:"库存",
                sortable:true,
                formatter:numFormatter
            },
            {
                field:"operate",
                title:"操作",
                width:120,
                align:"center",
                //valign: "middle",
                events:operateEvents,
                formatter: actionFormatter
            }],
        onLoadSuccess: function () {
        },
        onLoadError: function () {
            showTips("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
            var id = row.ID;
            EditViewById(id, 'view');
        },
        //得到查询的参数
        queryParams : function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp = {
                rows: params.limit,                         //页面大小
                page: (params.offset / params.limit) + 1,   //页码
                sort: params.sort,      //排序列名
                sortOrder: params.order //排位命令（desc，asc）
            };
            return temp;
        }

    });
//            baseBLL.FindWithPager(where, pagerInfo, sort.SortName, sort.IsDesc);
    //操作栏的格式化
    function actionFormatter(e,value,row,index) {
        var result = "";
        result += "<a id='xgkc-i' href='#' class='btn btn-xs green '  title='修改库存'><span class='glyphicon glyphicon-pencil'></span></a>";
        result += "<a id='del-i' href='#'  class='btn btn-xs blue '  title='删除'><span class='glyphicon glyphicon-remove'></span></a>";
        return result;
    }
    //自定义函数处理queryParams的批量增加
//            $.fn.serializeJsonObject = function () {
//                var json = {};
//                var form = this.serializeArray();
//                $.each(form, function () {
//                    if (json[this.name]) {
//                        if (!json[this.name].push) {
//                            json[this.name] = [json[this.name]];
//                        }
//                        json[this.name].push();
//                    } else {
//                        json[this.name] = this.value || '';
//                    }
//                });
//                return json;
//            };
    function numFormatter(value) {
        if (value == "0") { color = 'Red'; }
        else { color = 'black'; }

        return '<div  style="color: ' + color + '">' + value + '</div>';
    }
    var rows = $table.bootstrapTable('getSelections');
    if (rows.length > 0) {
        ID = rows[0].ID;
    }



    }


    //订单表格
    function DdTable() {
        window.operateEvents ={
            "click #xgkc-i" : function (e,value,row,index) {
                setTimeout(function () {
                    $("#dd-modal").modal('show');
                    var $id = $("#dd-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(2)").text();
                    //console.log($id);
                    $("#ddid").val($id);
                },1)
            },
            "click #del-i" : function (e,value,row,index) {
                // $("#del-conf").show(200).delay(1500).hide(200);
                setTimeout(function () {
                    $("#delord-mod").modal('show');
                    var $id = $("#dd-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(2)").text();
                    //console.log($id);
                    $("#delord-inp").val($id);
                    // var $sel = $("#dd-tab").find(".bs-checkbox input:checked").parent().parent();
                    // $sel.remove();
                },1);
            }
        };
        //记录页面bootstrap-table全局变量$table，方便应用
        $table = $('#dd-tab').bootstrapTable({
            url: "/public/json/order.json",                      //请求后台的URL（*）
            method: 'GET',                      //请求方式（*）
            //toolbar: '#toolbar',              //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
            pageSize: rows,                     //每页的记录行数（*）
            pageList: [5,10,15],                //可供选择的每页的行数（*）
            search: true,                      //是否显示表格搜索
            strictSearch: true,                 //精确查询
            showColumns: true,                  //是否显示所有的列（选择显示的列）
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                  //是否显示父子表
            //得到查询的参数
            columns: [
                {
                    checkbox:true,
                    visible:true
                },
                {
                    field:"date",
                    title:"日期",
                    sortable:true
                },
                {
                    field:"ID",
                    title:"型号",
                    sortable:true
                },
                {
                    field:"num",
                    title:"数量"
                },
                {
                    field:"name",
                    title:"联系人"
                },
                {
                    field:"tel",
                    title:"电话"
                },
                {
                    field:"ads",
                    title:"地址"
                },
                {
                    field:"state",
                    title:"状态",
                    sortable:true,
                    formatter:sexFormatter
                },
                {
                    field:"rem",
                    title:"备注"
                },
                {
                    field:"operate",
                    title:"操作",
                    width:120,
                    align:"center",
                    valign: "middle",
                    events:operateEvents,
                    formatter: actionFormatter
                } ],
            onLoadSuccess: function () {
            },
            onLoadError: function () {
                showTips("数据加载失败！");
            },
            onDblClickRow: function (row, $element) {
                var id = row.ID;
                EditViewById(id, 'view');
            },
            //得到查询的参数
            queryParams : function (params) {
                //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            }

        });
//            baseBLL.FindWithPager(where, pagerInfo, sort.SortName, sort.IsDesc);
        //操作栏的格式化
        function actionFormatter(value, row, index) {
            var id = value;
            var result = "";
            result += "<a id='xgkc-i' href='javascript:;' class='btn btn-xs green '  title='修改库存'><span class='glyphicon glyphicon-pencil'></span></a>";
            result += "<a id='del-i' href='#'  class='btn btn-xs blue '  title='删除'><span class='glyphicon glyphicon-remove'></span></a>";
            return result;
        }
        //自定义函数处理queryParams的批量增加
//            $.fn.serializeJsonObject = function () {
//                var json = {};
//                var form = this.serializeArray();
//                $.each(form, function () {
//                    if (json[this.name]) {
//                        if (!json[this.name].push) {
//                            json[this.name] = [json[this.name]];
//                        }
//                        json[this.name].push();
//                    } else {
//                        json[this.name] = this.value || '';
//                    }
//                });
//                return json;
//            };
        function sexFormatter(value) {
            if (value == "未送达") { color = 'Red'; }
            else if (value == "已到货") { color = 'Green'; }
            else { color = 'black'; }

            return '<div  style="color: ' + color + '">' + value + '</div>';
        }
        var rows = $table.bootstrapTable('getSelections');
        if (rows.length > 0) {
            ID = rows[0].ID;
        }
        //实现删除数据的方法
//            function Delete(ids) {
//                var ids = "";//得到用户选择的数据的ID
//                var rows = $table.bootstrapTable('getSelections');
//                for (var i = 0; i < rows.length; i++) {
//                    ids += rows[i].ID + ',';
//                }
//                ids = ids.substring(0, ids.length - 1);
//
//                DeleteByIds(ids);
//            }
    }

    //缺货表格
    function QhTable() {
        //记录页面bootstrap-table全局变量$table，方便应用
        $table = $('#qh-tab').bootstrapTable({
            url: "/public/json/qhtx.json",                      //请求后台的URL（*）
            method: 'GET',                      //请求方式（*）
            //toolbar: '#toolbar',              //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
            pageSize: rows,                     //每页的记录行数（*）
            pageList: [5,10,15],                //可供选择的每页的行数（*）
            search: true,                      //是否显示表格搜索
            strictSearch: true,                 //精确查询
            showColumns: true,                  //是否显示所有的列（选择显示的列）
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                  //是否显示父子表
            //得到查询的参数
            columns: [
                {
                    checkbox:true,
                    visible:true
                },
                {
                    field:"date",
                    title:"日期",
                    sortable:true
                },
                {
                    field:"ID",
                    title:"型号",
                    sortable:true
                },
                {
                    field:"num",
                    title:"数量"
                },
                {
                    field:"name",
                    title:"联系人"
                },
                {
                    field:"tel",
                    title:"电话"
                },
                {
                    field:"ads",
                    title:"地址"
                },
                {
                    field:"state",
                    title:"状态",
                    sortable:true,
                    formatter:sexFormatter
                },
                {
                    field:"rem",
                    title:"备注"
                },
                {
                    field:"operate",
                    title:"操作",
                    width:120,
                    align:"center",
                    valign: "middle",
                    events:operateEvents,
                    formatter: actionFormatter
                } ],
            onLoadSuccess: function () {
            },
            onLoadError: function () {
                showTips("数据加载失败！");
            },
            onDblClickRow: function (row, $element) {
                var id = row.ID;
                EditViewById(id, 'view');
            },
            //得到查询的参数
            queryParams : function (params) {
                //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                var temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return temp;
            }

        });
//            baseBLL.FindWithPager(where, pagerInfo, sort.SortName, sort.IsDesc);
        //操作栏的格式化
        function actionFormatter(value, row, index) {
            var id = value;
            var result = "";
            result += "<a id='xgkc-i' href='javascript:;' class='btn btn-xs green '  title='修改库存'><span class='glyphicon glyphicon-pencil'></span></a>";
            result += "<a id='del-i' href='/dd/delete' target='dd_iframe' class='btn btn-xs blue '  title='删除'><span class='glyphicon glyphicon-remove'></span></a>";
            return result;
        }

        function sexFormatter(value) {
            if (value == "未送达") { color = 'Red'; }
            else if (value == "已到货") { color = 'Green'; }
            else { color = 'black'; }

            return '<div  style="color: ' + color + '">' + value + '</div>';
        }
        var rows = $table.bootstrapTable('getSelections');
        if (rows.length > 0) {
            ID = rows[0].ID;
        }

    }




    kcTable();
    DdTable();
    //QhTable()

});

window.load = function () {
    $("#kc-tab tbody a span").on('click', function () {
        console.log("hh");
        $("#kc-modal").modal('show');
    });
};