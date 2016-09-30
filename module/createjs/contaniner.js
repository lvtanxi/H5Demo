/**
 * Created by rt11007 on 2016-09-29.
 */

var  stage =new createjs.Stage("gameView")
var container = new createjs.Container();
stage.addChild(container)
var c =new childContainer()
container.addChild(c)

var cc =new createjs.Shape()

cc.graphics.beginFill("#ff00ff")
cc.graphics.drawEllipse(50,50,50,40)
container.addChild(cc)

var ccc = new Circle()
ccc.setCirclType(Circle.GREEN)
container.addChild(ccc)
ccc.addEventListener("click",function (event) {
    console.log("点击了图形"+event.localX+":"+event.localY);
})
stage.update()
createjs.Ticker.setFPS(5)
createjs.Ticker.addEventListener("tick", handleTick);
var speddx = 10
function handleTick() {
    // 每一次行动都进行了一次（也就是框架）
    if(cc.x <=0){
        speddx +=Math.abs(speddx)
    }else if(cc.x >=300){
        speddx = -Math.abs(speddx)
    }
    cc.x +=speddx
    stage.update()
}