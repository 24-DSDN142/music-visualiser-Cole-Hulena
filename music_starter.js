
let firstrun = true;
let inverted = false;
let currentFrame = 0;
let lastDrawnFrame = 0;
let star1X = 0;
let star2X = 720;
let star3X = 1100;
const frames = [];
const bananaFrames = [];
const xPos = [1152, 1080, 1008, 936, 864, 792, 720, 648, 576, 504, 432, 360, 288, 216, 144, 72, 0, -72, -144];
const invertedxPos= [-138, -210, -282, -354, -426, -498, -570, -642, -714, -786, -858, -930, -1002, -1074, -1146, -1218, -1290, -1362, -1434, -1506];
let myFont;


const centerX = 720;
const centerY = 410;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstrun) {
    frames.push(loadImage('assets/1.png'));
    frames.push(loadImage('assets/2.png'));
    frames.push(loadImage('assets/3.png'));
    frames.push(loadImage('assets/4.png'));
    frames.push(loadImage('assets/5.png'));
    frames.push(loadImage('assets/6.png'));
    frames.push(loadImage('assets/7.png'));
    frames.push(loadImage('assets/8.png'));
    frames.push(loadImage('assets/1.png'));
    frames.push(loadImage('assets/2.png'));
    frames.push(loadImage('assets/3.png'));
    frames.push(loadImage('assets/4.png'));
    frames.push(loadImage('assets/5.png'));
    frames.push(loadImage('assets/6.png'));
    frames.push(loadImage('assets/7.png'));
    frames.push(loadImage('assets/8.png'));
    frames.push(loadImage('assets/1.png'));
    frames.push(loadImage('assets/2.png'));
    frames.push(loadImage('assets/3.png'));
    frames.push(loadImage('assets/4.png'));
    frames.push(loadImage('assets/5.png'));

    bananaFrames.push(loadImage('assets/B1.png'));
    bananaFrames.push(loadImage('assets/B2.png'));
    bananaFrames.push(loadImage('assets/B3.png'));
    bananaFrames.push(loadImage('assets/B4.png'));
    bananaFrames.push(loadImage('assets/B5.png'));
    bananaFrames.push(loadImage('assets/B6.png'));
    bananaFrames.push(loadImage('assets/B7.png'));
    bananaFrames.push(loadImage('assets/B8.png'));

    myFont = loadFont('assets/ScriptMTBold.ttf');
    
    firstrun = false;
  }
  background(8, 14, 75, 50)//background colour 
  textFont(myFont); // please use CSS safe fonts
  //rectMode(CENTER)
  
  if(counter > 4250 && counter < 4550){
    inverted = true;
  } else if(counter > 7600 && counter < 7950){
    inverted = false;
  }else if(counter > 9350 && counter < 9550){
    inverted = true;
  }
  
  //frame counter for monkey
  if(counter % 5 == 1) {
    if(currentFrame != 25){
      currentFrame +=1; 
    }else{
      currentFrame = 0;
    }
  }

  drawStarVocal(40, bass);
  drawStarBass(400, vocal);
  drawStarOther(780, other);

  //draw bananas
  drawDrum(drum, counter);

  //draw monkey
  if(currentFrame <= frames.length - 1){
    drawMonkey(currentFrame);
  }

  if(counter > 4250 && counter < 4350 || counter > 9350 && counter < 9550){
    push();
    scale(-1,-1);
    textAlign(CENTER);
    textFont(myFont);
    textSize(103);
    fill(238, 220, 130);
    text("Upside down", -centerX, -centerY);
    textSize(100);
    fill(255,13,0);
    text("Upside down", -centerX, -centerY);
    pop();
  }else if(counter > 7600 && counter < 7950){
    push();
    textAlign(CENTER);
    textFont(myFont);
    textSize(103);
    fill(238, 220, 130);
    text("Upside down", centerX, centerY);
    textSize(100);
    fill(255,13,0);
    text("Upside down", centerX, centerY);
    pop();
  }
   


}

function drawDrum(input, count){
  //works out what image

  if(input > 20){
    inputVol = Math.floor(map(input, 20, 80, 0, 7));
  }else if(input < 80){
    inputVol = 7;
  }else{
    inputVol = 0;
  }
    //Draws image smoothish
  if(count % 10 == 1){
    lastDrawnFrame = inputVol;
  }
  push();
  imageMode(CENTER);
  scale(0.4, 0.4);
  image(bananaFrames[lastDrawnFrame], centerX * 2.5, centerY * 2.5);
  pop();
  
}


function drawMonkey(frame){
  if(!inverted){
    image(frames[frame],xPos[frame],650); 
  }else{
    push();
    scale(-1, -1);
    image(frames[frame],invertedxPos[frame], -180); 
    pop();
  }
}

//1440 x

// 820 y

function drawStarVocal(y , input){
  let size;
  if(input >= 20 && input <= 50){
  size = map(input, 20, 50, 1, 10);
  }else if(input >= 40 && input <= 80){
    size = map(input, 40, 80, 10, 40);
  }else if(input < 20 ){
    size = 1;
  }else{
    size = 40;
  }

  //increase x
  if(star1X <= 1440){
    star1X += 2;
  }else{
    star1X = 0;
  }
  

  //draw star
  push();
  ellipseMode(CENTER);
  fill(255);
  ellipse(star1X, y, size, size);
  fill(50);
  ellipse(star1X, y, size/2, size/2);
  pop();
}
function drawStarBass(y , input){
  let size;
  if(input >= 20 && input <= 80){
  size = map(input, 20, 80, 1, 30);
  }else if(input < 20 ){
    size = 1;
  }else{
    size = 30;
  }

  //increase x
  if(star2X <= 1440){
    star2X += 3;
  }else{
    star2X = 0;
  }


  //draw star
  push();
  fill(255);
  ellipse(star2X, y, size, size);
  pop();
}
function drawStarOther(y , input){
  let size;
  if(input >= 20 && input <= 80){
  size = map(input, 20, 80, 1, 30);
  }else if(input < 20 ){
    size = 1;
  }else{
    size = 30;
  }

  //increase x
  if(star3X <= 1440){
    star3X += 4;
  }else{
    star3X = 0;
  }
  

  //draw star
  push();
  fill(255);
  ellipse(star3X, y, size, size);
  pop();
}



