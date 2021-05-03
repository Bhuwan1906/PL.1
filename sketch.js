var gameState = 0;

var rose,welcome,buyinglink,app;
var screen1;

var form, planter, game;



function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  rose= new Rose();
  app= new App();
  welcome=new Welcome();
  buyinglink= new Buyinglink();
  screen1=new Screen1();

}


function draw(){
  text("Plant",200,200);if(gameState===0){
    welcome.display();
   
   }
   if(gameState===1){
     screen1.display();
 
   }
   if(gameState===2){
     signuppage.display();
 



  }
}