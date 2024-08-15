
let firstrun = true;
let inverted = false;
let currentFrame = 0;
const frames = [];
const xPos = [1152, 1080, 1008, 936, 864, 792, 720, 648, 576, 504, 432, 360, 288, 216, 144, 72, 0, -72, -144];
const invertedxPos= [-138, -264, -390, -516, -642, -768, -894, -1020, -1146, -1272, -1398, -1524, -1650, -1776, -1902, -2028, -2154, -2280, -2406, -2532
];
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

    banana = loadImage('assets/banana.png');
    hat = loadImage('assets/hat.png');
    
    firstrun = false;
  }
  background(0, 50)//background colour 
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  ellipseMode(CENTER);
  textSize(24);

  if(counter > 4250 && counter < 4550){
    inverted = true;
  } else if(counter > 7600 && counter < 7950){
    inverted = true;
  }else if(counter > 9350 && counter < 9550){
    inverted = true;
  }else{
    inverted = false;
  }
  
  bananaBarY(other, centerX); //tracks other 
  bananaBarX(bass, centerY); // tracks bass

  drawHat(vocal); // tracks vocal
 
  
  if(counter % 5 == 1) {
    if(currentFrame != 25){
      currentFrame +=1; 
    }else{
      currentFrame = 0;
    }
  }
  if(currentFrame <= frames.length - 1){
    drawMonkey(currentFrame);
  }

}


function bananaBarY(track, xPosition) {
  let trackMap = map(track, 0, 100, 1, 10); 

  for (let i = 0; i < trackMap; i++) {
    let lineStep = i * 40; // Space between bananas
    push();
    scale(0.1, 0.1);
    // Draw bananas above the center
    image(banana, xPosition * 10, (centerY - lineStep) * 10);
    // Draw bananas below the center
    image(banana, xPosition * 10, (centerY + lineStep) * 10);
    pop();
  }
}
function bananaBarX(track, yPosition) {
  let trackMap = map(track, 0, 100, 1, 10); 

  for (let i = 0; i < trackMap; i++) {
    let lineStep = i * 40; // Space between bananas
    push();
    scale(0.1, 0.1);
    // Draw bananas to the left of the center
    image(banana, (centerX - lineStep) * 10, yPosition * 10);
    // Draw bananas to the right of the center
    image(banana, (centerX + lineStep) * 10, yPosition * 10);
    
    pop();
  }
}


function drawHat(track) {
  let trackMap = map(track, 0 , 100, 0.1, 1);
  push();
  imageMode(CENTER);
  image(hat, 950, 600);
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


