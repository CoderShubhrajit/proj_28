class Stone
{
    constructor(r)
    {
        var options = {
            'restitution': 0.8,
            'density': 1.0
        }
        this.r = r;
        this.body = Bodies.circle(100,445,this.r,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.r,this.r);
        //circleMode(RADIUS);
        //circle(this.body.position.x,this.body.position.y,20);
        pop();
    }
}