/**
 * Created by rt11007 on 2016-09-29.
 */

$(document).ready(function () {
    $("#btn0").click(function () {
        $(".pcalss").text("pcalss被修改了")
        $(this).hide()
    })
    $("#btn1").dblclick(function () {
        $(this).hide()
    })
    $(".pcalss").mouseenter(function () {
        $(this).text("覆盖了")
    })
    $(".pcalss").mouseleave(function () {
        $(this).text("离开了")
    })
    $("#btn2").on("click",function () {
        console.log("dianji");
        $("#btn2").off("click")
    })
    $("#btn2").on("click",function () {
        console.log("dianji222");
    })
})
//事件冒泡
$(document).ready(function () {
    $("body").on("click",function (event) {
        console.log(event);
    })
    $("div").on("click",function (event) {
        console.log(event);
        event.stopPropagation()//阻止当前事件
        //vent.stopImmediatePropagation()//阻止所有事件
    })
    $("div").on("click",function (event) {
        console.log(">>>>>>>>>>>>>>");
    })
})