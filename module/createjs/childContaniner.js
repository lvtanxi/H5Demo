/**
 * Created by rt11007 on 2016-09-29.
 */
function childContainer() {
    var rect = new createjs.Shape()
    rect.graphics.beginFill("#ff6666")
    rect.graphics.drawRect(0,0,50,50)
    rect.graphics.endFill()
    var text = new createjs.Text("1","30px","#ffffff")
    this.addChild(rect)
    this.addChild(text)
}
childContainer.prototype=new createjs.Container()