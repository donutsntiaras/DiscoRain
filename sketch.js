var raindrops =[];

function setup() {
  createCanvas(800,600);
  
  for (var i = 0; i < 500; i++) {
    raindrops[i] = new raindrop();
  }
  
}

function draw() {
  background(0);  
  
  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].rainfall();
    raindrops[i].display();
  }
  
  drawSprites();
}