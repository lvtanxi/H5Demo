/**
 * Created by rt11007 on 2016-09-29.
 */
$(document).ready(function () {
    $("#btn").click(function () {
        var e = jQuery.Event("MyEvent")
        $("#btn").trigger(e)
    })
    $("#btn").on("MyEvent",function (event) {
        console.log(event);
    })
})