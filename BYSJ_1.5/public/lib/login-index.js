/**
 * Created by kange666 on 2019/3/21.
 */
$(function () {


    //function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            /*window.location.href="你的手机版地址";*/
            $("#item-tip").hide();
            //alert("mobile")
        }
        else {
            /*window.location.href="你的电脑版地址";    */
            //alert("pc")
        }
    //}
    //goPAGE();
});