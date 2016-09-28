/**
 * Created by rt11007 on 2016-09-28.
 */
var sp
var btn
var num = 0
window.onload =function () {
    sp = document.getElementById("txt")
    btn = document.getElementById("btn")
    if(sessionStorage.num){
        num = sessionStorage.num
    }else {
        num = 0
    }
    btn.onclick = function () {
       num++
        sessionStorage.num =num
        sp.innerHTML = num
    }
}