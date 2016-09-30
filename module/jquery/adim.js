/**
 * Created by rt11007 on 2016-09-29.
 */

$(document).ready(function () {
    $("#pbtn0").on("click", function () {
        $("p").toggle(1000)
    })
    $("#pbtn1").on("click", function () {
        $("p").fadeToggle(1000)
    })

    $("#pbtn2").click(function () {
        $("div").slideToggle(1000)
    })
    $("#pbtn3").click(function () {
        $("div").slideToggle(1000,function () {
            console.log("动画结束");
        })
    })
    $("#pbtn4").click(function () {
        $("div").slideToggle(1000).slideToggle(1000)
    })
})