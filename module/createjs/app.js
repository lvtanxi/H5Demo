/**
 * Created by rt11007 on 2016-09-29.
 */
var  stage =new createjs.Stage("gameView")
var text =new createjs.Text("hello easeljs","36px Arial","#777")
stage.addChild(text)
stage.update()
var rect = new createjs.Shape()
rect.graphics.beginFill("#fff6666")
rect.graphics.drawRect(100,100,50,50)
stage.addChild(rect)
stage.update()