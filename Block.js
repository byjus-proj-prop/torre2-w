class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
      this.opc = 255;
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed >= 1 && this.opc >= 10){
        tint(this.opc);
        this.opc-=5;
      } else tint(this.opc);
      if(this.opc > 10) image(this.image,pos.x,pos.y-20,this.width, this.height);
    }
}