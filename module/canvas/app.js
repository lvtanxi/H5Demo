var canvas
var stage
var count = 0
var txt
window.onload =function () {
    canvas = document.getElementById("canvas")
    stage =new createjs.Stage(canvas)
    txt =new createjs.Text("number->0","20px Arial","#ff7700")
    stage.addChild(txt)
    createjs.Ticker.setFPS(30)
    createjs.Ticker.addEventListener("tick",_tick)
}
function _tick() {
    count++
    txt.text = "number->0"+count
    stage.update()
}