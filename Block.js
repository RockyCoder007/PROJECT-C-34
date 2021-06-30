class Block{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    fill("red");
    rect(x, y, width, height)
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity=255;
  }
  display(){


  
    if((this.body.speed)<2.5){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("green")
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, width, height)
      pop();
    
    
    }


    if((this.body.speed)<3){
      push()
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER)
      rect(this.body.position.x, this.body.position.y, width, height);
      pop();


    }
    else{

      World.remove(world,this.body);
      push()
      
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity)
      pop();


      
      
      
      }
   
    
  }
}
