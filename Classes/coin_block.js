class coinB{
    constructor(x,y){
        this.width = 20;
        this.height = 20;
        //this.image = "images/tiles/coin.png";
        this.scale = 2;
        this.posX = x;
        this.posY = y;
        
  }
    


  display(){
    
  
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(this.posX,this.posY, this.width, this.height);
    pop();
      
  }
}