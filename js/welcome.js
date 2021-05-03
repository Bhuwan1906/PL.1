class Welcome  {
  constructor() {
    this.button1=createButton('Existing Planter');
    this.button2=createButton('New Planter');


    
  }

  display(){
    
    
    
    var button1 = createButton('Existing Planter');
    var button2= createButton('New Planter');
   
    button1.position(250, 200);
    button2.position(350, 200);

    button1.mousePressed(function(){
      button2.hide();
      button1.hide();
      gameState=1
     
     
    });
    button2.mousePressed(function(){
      button2.hide();
      button1.hide();
      
      gameState=2
     
     
    });
    hide()
      this.button1.hide();
      this.button2.hide();
  
    }
}

