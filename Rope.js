class Rope{
    constructor(bodyX, pointY){
        var options = {
            bodyA:bodyX,
            pointB:pointY,
            stiffness:0.05,
            length:100
        }
        this.pointB = pointY
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display(){
       var pointA = this.Slingshot.bodyA.position
       var pointB = this.pointB
       strokeWeight(5)
       fill("white")
       line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}