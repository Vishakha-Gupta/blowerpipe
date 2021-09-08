class boll 
{
  constructor(x, y,r) 
  {
    let options={
    restitution:0.8,
    density:0.01

    }
    
    this.body = Bodies.circle(x, y,r,options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    stroke(255);
    fill(127);
    ellipse(0,0, this.r, this.r);
    pop();
  }
  
}


