class Sling{
    constructor(bodyA,pointB){
        var options ={
        bodyA: bodyA,
        pointB : pointB,
         // pointB : {x :offsetX, y:offsetY},
          stiffness: 1,
          angularStiffness: 1,
          length:220

        };
        this.pointB = pointB;
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);


    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           // var pocX = pointB.x + this.offsetX;
            //var pocY = pointB.y + this.offsetY;
            push();
            strokeWeight(3.5);
            stroke ("red");
            fill("red");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
            
        }
    }
}