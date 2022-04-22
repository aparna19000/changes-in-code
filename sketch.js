var gameState,player,score,player_image, coin_image, block_image, spike_image,bg_img;
var border,spike1, coin1;
var normalBlocks = [];
var spikeBlocks = [];
var coinBlocks = [];
gameState = 0;


function preload(){
  bg_img = loadImage("images/start_image.png");
  //player_image = loadImage("");
  coin_image = loadImage("images/coin.png");
  spike_image = loadImage("images/spike.png");
  block_image = loadImage("images/block1.png");
}
function setup(){
  
  createCanvas(500,500);
  

  if(gameState ===0){
    start();
    level_1();
  }
 
  
}

function draw(){
  background(bg_img);
   spike1 = new killB(200,200);
  spike1.display();
  coin1 = new coinB(300, 200);
  coin1.display();
 
  

  
}
//end of draw
function level_1(){
 
    for(var i = 0;i < 19; i++){
     var border = new normaB(10,10);
      border.display();
      normalBlocks.push(border);
    }
  
}



function start(){
    
    
    //image(bg_img,400,400,window.width,window.height);
    if(gameState ==0){
      this.input = createInput("").attribute("placeholder", "Enter your name");
    }
    
  
}
