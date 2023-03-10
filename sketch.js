/*
  Forest
  Based on work by Lior Ben-Gai
*/

function setup(){
  //createCanvas(1280,320);
  background(320);
  stroke(100);
  fill(200);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML
  rectMode(CENTER);
}

function draw(){
  drawTree();

  if(frameCount % 7 == 0)drawFog(); 
}


function drawFog(){
  push();
  fill(32, 16);
  noStroke();
  rect(0,0,3960,2080);
  //rectMode(CENTER);

  pop();
}


function drawTree(){
    let bLen = random(300,10);
    let bAng = PI*0.3;

    push();
    translate(random(width), height);
    branch(bLen, -bAng); 
    pop();
}


function branch(len, theta){
  push();
  rotate(theta);
  strokeWeight(sqrt(len)*0.11);
  stroke(255,255,0);
  line(0,0, len, 0);
  stroke(100);
  rect(0,0,len*0.1,len);
  stroke(100);
  fill(4,153,255);
  ellipse(-1,0,len*0.1,len*0.1);
  fill(64,33,255,45);
  triangle(0, 20, len*0.05, len*0.05,len*1,len*3)
  noStroke();
  fill(229,204,255);
  rect(0, 20, len*0.05, len*0.05);
  translate(len,0); 

  if(len > 4.0){ 
    let newAng = random(PI*1); 
    let newLen = len * random(0.1,0.8); 
    branch(len * random(0.4,0.8), - newAng);
    branch(len * random(0.4,0.8), newAng); 
  }else{
    rect(0, 20, len*0.01, len*0.01); 
  }
  pop();
}


function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  

}