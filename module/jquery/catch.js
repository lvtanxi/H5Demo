/**
 * Created by rt11007 on 2016-09-29.
 */
$(document).ready(function () {
    $("#btn1").click(function () {
        console.log($("#text").text());
    })
    $("#btn2").click(function () {
        console.log($("#text").html());
    })
    $("#btn3").click(function () {
        console.log($("#input").val());
    })
    $("#btn4").click(function () {
        console.log($("#aid").attr("href"));
    })
    $("#btn5").click(function () {
        $("#p1").text("ji ke xue yuan")
        $("#aid").attr("href","http://www.google.com")
        $("#aid").attr({
            "href":"http://www.google.com",
            "title":"谷歌地址"
        })
    })
    //添加元素 append prepend before after
    $("#btn6").click(function () {
        $("#p1").append(" this is xx append")
        $("#p1").prepend(" this is xx prepend")
        $("#p1").before(" this is xx before")
        $("#p1").after(" this is xx after")
    })
    $("#btn7").click(function () {
        appendText()
    })
    $("#btn8").click(function () {
       $("#div1").remove()//自已移除
        //$("#div1").empty()//移除自己的子元素
    })

    function appendText() {
        /**
         * html jquery Dom
         */
        var text1 = "<p>测试1</p>"
        var text2 = $("<p></p>").text("测试2")
        var text3 = document.createElement("p")
        text3.innerHTML ="测试3"
        $("body").append(text1,text2,text3)
    }
})