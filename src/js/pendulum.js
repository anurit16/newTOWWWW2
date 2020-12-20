class Pendulum{
    constructor(x,y,r,color){
     var options = {
         restitution:1,
         friction:0,
         frictionAir: 0.0,
         slop :1,
         inertia: Infinity

     };
     console.log(x);
     console.log(y);
    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r=r;
    this.color = color;
    World.add(world,this.body);
    console.log(this.body);

    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        noStroke();
        fill (this.color);
        ellipseMode(RADIUS);ellipse(0,0,this.r);
        pop();

    }
    
}