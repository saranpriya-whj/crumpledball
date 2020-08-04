class paper {
    constructor(x, y){
        var options ={
            isStatic:false,
            'restitution':0.05,
            'friction':1,
            'density':1.2
                   }
             this.paper= Bodies.circle(x,y,10,options);
             this.r = 10;
    World.add(world,this.paper)
                }

display(){
    var pos=this.paper.position;
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.r);

    }

}