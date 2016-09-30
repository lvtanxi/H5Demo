/**
 * Created by rt11007 on 2016-09-29.
 */

function Circle() {
    createjs.Shape.call(this)

    this.setCirclType=function (type) {
        if(type==Circle.RED){
            this.setColor("#ff0000")
        }else if(type==Circle.GREEN){
            this.setColor("#00ff00")
        }
    }

    this.setColor =function (color) {
        this.graphics.beginFill(color)
        this.graphics.drawCircle(150,150,50,50)
        this.graphics.endFill()
    }
    this.setCirclType(Circle.RED)
}
Circle.prototype =new createjs.Shape()

Circle.RED = 1
Circle.GREEN =2
