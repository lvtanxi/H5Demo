/**
 * Created by rt11007 on 2016-09-29.
 */
//需要换一张图片
var stage = new createjs.Stage("gameView")
var ss =new createjs.SpriteSheet({
    "images":["0.jpg"],
    "frames":{
        "height":292.5,
        "width":165.75,
        "count":64
    },
    "animations":{
        "run":[0,25,"jump"],
        "jump":[26,63,"run"]
    }
})

var s =new createjs.Sprite(ss, "run")

s.x =100

s.y = 100

stage.addChild(s)
createjs.Ticker.setFPS(60)

createjs.Ticker.addEventListener("tick",stage)