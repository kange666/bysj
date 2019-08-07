/**
 * Created by kange666 on 2019/2/18.
 */
$(function () {
    //导航
    function Nav(){
        var $nav =  $("#bs-example-navbar-collapse-1>ul>li");
        //首页
        $nav.eq(0).on("click", function () {
            $("#sy").show().siblings().hide();
            $("#title").hide();
        });
        //全部商品
        $nav.eq(1).on("click", function () {
            $("#all-fct").show().siblings().hide();
            $("#title").show();
            $("#title>div>span").eq(1).show().siblings().hide().eq(0).show();
        });
        //订单管理
        $nav.eq(2).on("click", function () {
            $("#ddgl").show().siblings().hide();
            $("#title").show();
            $("#title>div>span").eq(2).show().siblings().hide().eq(0).show();
        });
        //运营统计
        $("#myModal0").css({
            position: "fix",
            top:"300px"
        });
        $nav.eq(3).on("click", function () {
            $("#myModal0").modal('show');
        });
        $("#asc-yzm").on('click', function () {
            var $val = $("#myModal0 input").val();
            if($val == 123){
                $("#myModal0").modal('hide');
                $("#yytj").show().siblings().hide();
                $("#title").show();
                $("#title>div>span").eq(3).show().siblings().hide().eq(0).show();
                $('#myModal0').on('hidden.bs.modal', function () {
                    $("#wel-yy").show(200).delay(1500).hide(200);
                })
            }else{
                $("#yzm-err").show();
            }
        });
        //返回首页
        $("#back-sy1").on("click", function () {
            // $("#content-2 form,#content-3 form,#content-4 form")[0].reset();
            $("#sy").show().siblings().hide();
            $("#title").hide();
        });
        //管理员
        $("#myModal").css({
            position: "fix",
            top:"300px"
        });
        $("#admin").on("click", function () {
            //模态框
            $("#myModal").modal('show');
        });
        $("#asc-mm").on('click', function () {
            var $val = $("#myModal input").val();
            if($val == 'admin'){
                $("#myModal").modal('hide');
                $(".sidebar").show();
                $("#tol-sto").show();
                $("#admin").parent().hide();
                $('#myModal').on('hidden.bs.modal', function () {
                    $("#wel-adm").show(200).delay(1500).hide(200);
                });
                setCookie();
            }else{
                $("#mm-err").show();
            }
        });
    }

    //首页
    function Sy(){
        //步骤点击事件
        var $process = $("#process>div>a");
        //步骤1
        $process.eq(0).on("click", function () {
            $("#content-1").show();
            $("#content-2").hide();
            $("#content-3").hide();
            $("#content-4").hide();
        });
        //步骤2
        $process.eq(1).on("click", function () {
            $("#content-1").hide();
            $("#content-2").show();
            $("#content-3").hide();
            $("#content-4").hide();
        });
        //步骤3
        $process.eq(2).on("click", function () {
            $("#content-1").hide();
            $("#content-2").hide();
            $("#content-3").show();
            $("#content-4").hide();
        });
        //步骤4
        $process.eq(3).on("click", function () {
            $("#content-1").hide();
            $("#content-2").hide();
            $("#content-3").hide();
            $("#content-4").show();
        });

        //销售对象选择
        $("#pfs").on('click', function () {
           $("#xsdx").val("P")
        });
        $("#lss").on('click', function () {
            $("#xsdx").val("L")
        });

        //选择家具按钮模态框
        $("#sell-fct").on("click", function () {
            $("#selfct-modal").modal("show");
        });
        //去除不可选属性
        //        保存订单
        $("#pst-dd").click(function() {
            // console.log("hh");
            $("#dd-table").wordExport("订单");
        });
        $("#xgjg").on("click", function () {
            $("#xgjg-inp").removeAttr("disabled");

        });
        $("#spdz").on("click", function () {
            $("#spdz-inp").removeAttr("disabled");
        });
        //供应商
        //$("#content-1>div").eq(0).on("mouseenter", function () {
        //   $(this).animate({backgroundColor:"#000"});
        //    console.log("11")
        //});
        $("#content-1>div>div>button").on("click",function () {
            $("#content-1").hide();
            $("#content-2").show();
            $process.eq(1).removeClass("disabled").addClass("active").siblings().removeClass("active");
            $process.eq(0).addClass("completed");
            console.log($process.eq(0));
        });
        var $allPrice ;
        //确定商品按钮点击事件
        $("#assign-fct").on("click", function () {
            $("#content-2").hide();
            $("#content-3").show();
            $process.eq(2).removeClass("disabled").addClass("active").siblings().removeClass("active");
            $process.eq(1).addClass("completed");
            $("#fid3").val($("#spbh").val());

        });
        //得到地址
        $("#ads-group").on('change',"#provence,#city,#address", function () {
            var $address = $("#provence>option").eq($("#provence").val()).text()+$("#city").val()+$("#address").val();
            console.log($address);
            $("#address-all").val($address)
        });
        //确定地址按钮点击事件
        $("#assign-adr").on("click", function () {
            $("#content-3").hide();
            $("#content-4").show();
            $process.eq(3).removeClass("disabled").addClass("active").siblings().removeClass("active");
            $process.eq(2).addClass("completed");
            $allPrice = $("#num").val() * $("#xgjg-inp").val();
            $("#spbh-4").val($("#spbh").val());
            $("#num-4").val($("#num").val());
            $("#allP").val($allPrice);
        });
        //确定订单
        var $psel = $("#pay-sel>li");
        var $pshow = $("#pay-show>div");
        $psel.eq(0).on("click", function () {
           $(this).addClass("active").siblings().removeClass("active");
            $pshow.eq(0).show().siblings().hide().eq(4).show();
        });
        $psel.eq(1).on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $pshow.eq(1).show().siblings().hide().eq(4).show();
        });
        $psel.eq(2).on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $pshow.eq(2).show().siblings().hide().eq(4).show();
        });
        $psel.eq(3).on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $pshow.eq(3).show().siblings().hide().eq(4).show();
        });
        $("#assign-ord").on("click", function () {
            $("#content-4").hide();
            $("#pay-success").show();
            $process.eq(3).addClass("completed");
            $process.removeClass("active").addClass("disabled");
        });
        //返回首页按钮点击事件
        $("#back-sy").on("click", function () {
            $("#pay-success").hide();
            $("#content-1").show();
            $process.removeClass("completed");
            $process.eq(0).removeClass("disabled").addClass("active");
        });
        var cities = [
            ['请选择'],
            ['昆明','曲靖','玉溪','保山','昭通','丽江','普洱','临沧','安宁市','宣威市','个旧市','开远市','景洪市','楚雄市','大理市','潞西市','瑞丽市'],
            ['成都','绵阳','德阳','广元','自贡','攀枝花','乐山','南充','内江','遂宁','广安','泸州','达州','眉山','宜宾','雅安','资阳'],
            ['贵阳','六盘水','遵义','安顺']
        ];
        $("#provence").change(function () {
            $("#city").empty();
            var val = this.value;
    //            alert(val);
            $.each(cities,function(i,n){
    //                alert(i+":"+n);
                if(val==i){
                    $.each(cities[i], function(j,m) {
    //                        alert(m);
                        var textNode = document.createTextNode(m);

                        var opEle = document.createElement('option');
                        $(opEle).append($(textNode));
                        $('#city').append($(opEle));
                    })
                }
            })
        });

        //选择商品表
        //记录页面bootstrap-table全局变量$table，方便应用
        $table = $('#selfct-tab').bootstrapTable({
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
            pageSize: 5,                     //每页的记录行数（*）
            pageList: [5,10],        //可供选择的每页的行数（*）
            search: true,                      //是否显示表格搜索
            //strictSearch: true,                 //精确查询
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
                    field:"P-price",
                    title:"批发价"
                },
                {
                    field:"L-price",
                    title:"零售价"
                }
                 ],
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
        function numFormatter(value) {
            if (value == "0") { color = 'Red'; }
            else { color = 'black'; }

            return '<div  style="color: ' + color + '">' + value + '</div>';
        }
        $("#conf-selfct").on("click", function () {

            if($("#xsdx").val() == "P"){
                var $pfj = $("#selfct-tab").find('.selected').children().eq(4).text();
                $("#xgjg-inp").val($pfj);
            }else if($("#xsdx").val() == "L"){
                var $lsj = $("#selfct-tab").find('.selected').children().eq(5).text();
                $("#xgjg-inp").val($lsj);
            }
            var $sel = $("#selfct-tab").find('.selected').children().eq(1).text();
            $("#spbh").val($sel);
        })
    }

    //全部商品
    var $table;
    function FctTable() {
        $("#asc-qh").on("click" , function () {
            $("#qhtx-mod").modal("hide");
            $("#wel-yhtx").show(200).delay(1500).hide(200);
        });
        window.operateEvents ={
            "click #yhtx" : function (e,value,row,index) {
                $("#qhtx-mod").modal("show");
                setTimeout(function () {
                    var $id = $("#fct-table").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(1)").text();
                    var $name = $("#fct-table").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(2)").text();
                    var $num = $("#fct-table").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(3)").text();
                    $("#qh_id").val($id);
                    $("#qh_name").val($name);
                    $("#qh_num").val($num);
                    //console.log($fct);
                },1);
                //$("#ddgg").val($inp);
            }
        };
        //记录页面bootstrap-table全局变量$table，方便应用
        $table = $('#fct-table').bootstrapTable({
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
            pageSize: 5,                     //每页的记录行数（*）
            pageList: [5,10],        //可供选择的每页的行数（*）
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
                    field:"P-price",
                    title:"批发价",
                    sortable:true
                },
                {
                    field:"L-price",
                    title:"零售价",
                    sortable:true
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
            result += "<a href='javascript:;' class='btn btn-xs green' id='yhtx'  title='要货提醒'><span class='glyphicon glyphicon-open'></span></a>";
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
        var count = 0;

        $(".arrow-right").click(function () {
            count++;


            if(count == $(".slider li").length){
                count = 0;
            }
            //console.log(count);
            //让count渐渐的显示，其他兄弟渐渐的隐藏
            $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
        });
        //定时刷新
        var ref = "";
        function RefreshImg(){
            count++;


            if(count == $(".slider li").length){
                count = 0;
            }
            //console.log(count);
            //让count渐渐的显示，其他兄弟渐渐的隐藏
            $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
        }
        ref = setInterval(function(){
            RefreshImg();
        },4000);
        $(".slider li").on("mouseenter", function () {
            console.log("ss");
            clearInterval(ref);
        });
        //$(".slider li").on("mouseleave", function () {
        //   setInterval(ref);
        //    console.log("hh");
        //});
        $(".arrow-left").click(function () {
            count--;

            if(count == -1){
                count = $(".slider li").length - 1;
            }
            //console.log(count);
            //让count渐渐的显示，其他兄弟渐渐的隐藏
            $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
        });

    }

    //订单管理
    function DdTable() {
        //记录页面bootstrap-table全局变量$table，方便应用
        $table = $('#dd-table').bootstrapTable({
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
                    //{
                    //    checkbox:true,
                    //    visible:true
                    //},
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
                    }
                    //{
                    //    field:"operate",
                    //    title:"操作",
                    //    width:120,
                    //    align:"center",
                    //    valign: "middle",
                    //    formatter: actionFormatter
                    //}
                ],
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
        //function actionFormatter(value, row, index) {
        //    var id = value;
        //    var result = "";
        //    result += "<a href='javascript:;' class='btn btn-xs green' onclick=\"EditViewById('" + id + "', view='view')\" title='查看'><span class='glyphicon glyphicon-search'></span></a>";
        //    result += "<a href='javascript:;' class='btn btn-xs blue' onclick=\"EditViewById('" + id + "')\" title='编辑'><span class='glyphicon glyphicon-pencil'></span></a>";
        //    return result;
        //}
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

    //运营统计图表
    function YytjChar() {
        //切换按钮
        $("#tog-chart").on("click", function () {
            $("#zt-tog").toggle();
            $("#bt-tog").toggle();
        });
        //营业额
        var myChart = echarts.init(document.getElementById("yesr"));
        var myChart2 = echarts.init(document.getElementById("dpxs"));
        var myChart3 = echarts.init(document.getElementById("jjzl"));
        option = {
            title: [{
                text: '营业收入',
                x: 'center' //居右显示
            },
                {
                    text: '万元',
                    x: '100', //居右显示
                    y: '48',
                    textStyle: {
                        color: '#959595',
                        fontSize: 14
                    }
                }],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            //toolbox: {
            //    feature: {
            //
            //        magicType: {show: true, type: ['line', 'bar']},
            //
            //    }
            //},
            legend: {
                data: ['完成值', '目标额'],
                textStyle: {
                    color: '#959595', // 图例文字颜色
                    fontSize: '14'
                },

                x: '700',//居右显示
                y: "30"
            },

            xAxis: {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','0月','11月','12月'],
                axisLabel: {
                    interval: 0,//横轴信息全部显示
                    rotate: 45,//45度角倾斜显示
                    fontSize: 12
                },
                axisTick: {
                    "show": false
                },
                axisLine: {
                    lineStyle: {
                        color: '#959595',
                        width: 1
                    }
                }


                //axisPointer: {
                //    type: 'shadow'
                //}
            },


            yAxis: [
                {
                    type: 'value',
                    name: ' ',
                    min: 0,
                    max: 300,
                    interval: 100,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#959595',
                        fontSize: 14
                    }
                },
                {
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                }

            ],
            series: [
                {
                    name: '完成值',
                    type: 'bar',
                    //柱图宽度
                    barWidth: 36,
                    data: [123, 154, 134, 115, 176, 145, 198, 182.2, 148.7, 118.8, 116.0, 122.3],
                    //柱图颜色
                    itemStyle: {
                        normal: {
                            color: '#8ed5f6'
                        }
                    }
                },
                {
                    name: '目标额',
                    type: 'line',
                    data: [113, 112.2, 123.3, 154.5, 176.3, 210.2, 201.3, 123.4, 123.0, 126.5, 182.0, 136.2],
                    //节点元大小
                    symbolSize: 10,
                    //折线图颜色宽度
                    lineStyle: {
                        normal: {
                            color: '#fcb20d',
                            width: '3'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fcb20d',
                            borderColor: '#fcb20d',//拐点边框颜色
                            border: "3"
                        }
                    }
                }
            ]
        };
        option2 = {
            color:['#D53A35','#6AB0B8'],
            title : {
                text: '批发零售占比',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['批发','零售']

            },
            series : [
                {
                    name: '批发零售占比',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value:535, name:'批发'},
                        {value:230, name:'零售'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        option3 = {
            color:["#3CB2EF","#AEFDCA","#FFF065","#F66BBF","#ACA5FF","#9084FF"],
            title : {
                text: '分类销售统计',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['欧式','实木','真皮','铁艺','玻璃']

            },
            series : [
                {
                    name: '类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {value:335, name:'欧式'},
                        {value:310, name:'实木'},
                        {value:234, name:'真皮'},
                        {value:135, name:'铁艺'},
                        {value:154, name:'玻璃'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        myChart2.setOption(option2);
        myChart3.setOption(option3);

    }

    //管理员
    function Admin() {
        //侧边栏隐藏
        //获取classs为sidebar的div，设置点击鼠标事件
        $(".sidebar").on({
            //鼠标覆盖：改变div宽度
            mouseover : function(){
                $(this).stop().animate({width: "160px"}, 'fast');//stop()：停止当前动画，animate：执行自定义动画速度为快
            },
            //鼠标移开，减小宽度
            mouseout : function(){
                $(this).stop().animate({width: "60px"}, 'fast');
            }
        });
        //菜单设置
        //获取class为menus下的ul下li标签，得到class为seconds的标签，设置点击事件
        $(".menus ul li").on("click", function() {
            $(this).addClass('active').siblings().removeClass("active");
        });
        //切换按钮
        //$("#tol-sto button").on("click", function () {
        //    //setCookie();
        //    //$.cookie('username','admin',{ expires: 7,path:'/space/BYSJ/store' })
        //});
        //功能切换按钮
        var $admf = $("#adm-f>li");
        $admf.eq(0).on("click", function () {
            $("#person-modal").modal('show');
        });
        $admf.eq(1).on("click", function () {
            $("#usen-modal").modal('show');
        });
        $admf.eq(2).on("click", function () {
            $("#main").hide();
            $("#djxg").show();
            //$("#price-modal").modal('show');
        });
        $admf.eq(3).on("click", function () {
            $("#pay-modal").modal('show');
        });
        $admf.eq(4).on("click", function () {
            $("#pft-modal").modal('show');
        });

        // 管理员功能
        //    人员

        //    账号

        //    定价
            window.operateEvents ={
                "click #xgdj" : function (e,value,row,index) {
                    $("#price-modal").modal('show');
                    setTimeout(function (){
                        var $id = $("#djxg-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(1)").text();
                        var $name = $("#djxg-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(2)").text();
                        var $P_price = $("#djxg-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(3)").text();
                        var $L_price = $("#djxg-tab").find(".bs-checkbox input:checked").parent("td").parent().find("td:eq(4)").text();
                        $("#xg-spbh").val($id);
                        $("#xg-name").val($name);
                        $("#P-price").val($P_price);
                        $("#L-price").val($L_price);
                    },1);

                }
            };
            $("#conf-djxg").on("click", function () {
                $("#price-modal").modal('hide');
                $("#wel-djxg").show(200).delay(1500).hide(200);

            });

            $table = $('#djxg-tab').bootstrapTable({
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
                pageSize: 10,                     //每页的记录行数（*）
                pageList: [5,10],        //可供选择的每页的行数（*）
                search: true,                      //是否显示表格搜索
                strictSearch: true,                 //精确查询
                showColumns: true,                  //是否显示所有的列（选择显示的列）
                showRefresh: true,                  //是否显示刷新按钮
                minimumCountColumns: 2,             //最少允许的列数
                clickToSelect: true,                //是否启用点击选中行
                //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
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
                        field:"P-price",
                        title:"批发价",
                        sortable:true
                    },
                    {
                        field:"L-price",
                        title:"零售价",
                        sortable:true
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
            //操作栏的格式化
            function actionFormatter(value, row, index) {
                var id = value;
                var result = "";
                result += "<a href='javascript:;' id='xgdj' class='btn btn-xs blue'  title='修改定价'><span class='glyphicon glyphicon-pencil'></span></a>";
                return result;
            }

            var rows = $table.bootstrapTable('getSelections');
            if (rows.length > 0) {
                ID = rows[0].ID;
            }

        //定价页面跳转设置
        $("#back").on("click", function () {
            $("#djxg").hide();
           $("#main").show();
        });

        //    薪酬
        //    利润
        var myChart = echarts.init(document.getElementById("pft-char"));

        //指定图标的配置项和数据
        var option = {
            tooltip: {},
            xAxis:
            {
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','0月','11月','12月'],
                nameGap:{
                    default: 50
                },
                lineStyle: {
                    color: '#00f',
                    shadowColor: '#00f',
                    shadowOffsetY: -50
                }
            },
            yAxis:{},
            series: [{
                name: '销量',
                type: 'bar',
                data: [123, 154, 134, 115, 176, 145, 198, 182.2, 148.7, 118.8, 116.0, 122.3],
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            position:"top",
                            textStyle:{
                                color:"white",
                                fontSize:18,
                                nameGap:{
                                    default: 50
                                }
                            }
                        }
                    }
                }
            }

            ]
        };
        //显示图表
        myChart.setOption(option);
    }

    //代办
    function itemsLayer(){
        //退货
        $(".thcl_db").on('click', function () {
            $("#ddgl").show().siblings().hide();
            $("#title").show();
            $("#title>div>span").eq(2).show().siblings().hide().eq(0).show();
        });
        //新增库存
        $(".xzkc-db").on('click', function () {
            $("#all-fct").show().siblings().hide();
            $("#title").show();
            $("#title>div>span").eq(1).show().siblings().hide().eq(0).show();
        });
        //新品
        $(".xpsj_db").on('click', function () {
            $("#all-fct").show().siblings().hide();
            $("#title").show();
            $("#title>div>span").eq(1).show().siblings().hide().eq(0).show();
        });
    }


    //函数调用
    Nav();
    Sy();
    FctTable();
    DdTable();
    YytjChar();
    Admin();
    itemsLayer()
});
