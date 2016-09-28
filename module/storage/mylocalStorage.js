/**
 * Created by rt11007 on 2016-09-28.
 */
var ta
var btn
window.onload =function () {
    ta = document.getElementById("ta")
    if(localStorage.text){
        ta.value = localStorage.text
    }
    btn = document.getElementById("btn")
    btn.onclick = function () {
        console.log(ta.value);
        localStorage.text = ta.value
    }
}