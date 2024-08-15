
let firstrun = true;
let inverted = true;
let currentFrame = 0;
const frames = [];
const xPos = [800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 0, -50, -100];
const invertedxPos= [-150, -200, -250, -300, -350, -400, -450, -500, -550, -600, -650, -700, -750, -800, -850, -900, -950, -1000, -1050, -1100];

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
    
    firstrun = false;
  }
  background(0)//background colour 
  textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  ellipseMode(CENTER);
  textSize(24);

  if(!inverted){
    volumeBar(bass, color(105, 16, 230), color(235, 16, 227), 0); //purple to pink maping bass
    volumeBar(drum, color(255, 115, 250), color(48, 23, 235), 140); //pink to blue maping drum
    volumeBar(vocal, color(237, 26, 223), color(116, 25, 227), 280); //pink to purple maping vocal
    volumeBar(other, color(240, 74, 187), color(237, 161, 213), 420); //pink to light pink maping other
  }else{

  }

  
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
//equalizer bars function alls me to draw multiple in different positions
function volumeBar(track, softColor, brightColor, xPosition) {

  let color1 = softColor;
  let color2 = brightColor; 

  let volumeMapForColor = map(track, 0, 100, 0, 1); 
  let strokeColor = lerpColor(color1, color2, volumeMapForColor);//lets volume bar colour go from one colour to another depending on intensity of volume  
  strokeWeight(5); //size of lines 
  stroke(strokeColor);// colour of lines 

  let volumeMapForLines = map(track, 0, 100, 20, 60); 
  let lenghtOfLine = 110; //50
  let lineStart = 200; // first x pos
  let lineEnd = lineStart + lenghtOfLine; // end 


  for (let i = 1; i <= volumeMapForLines; i++) {//for loop for volume bar function 
    let lineStep = (i * 10) + 200; // + x where x is the starting y pos
    line(lineStart + xPosition, lineStep, lineEnd + xPosition, lineStep);
  }
}


function invertedVolumeBar(track, softColor, brightColor, xPosition) {

  let color1 = softColor;
  let color2 = brightColor; 

  let volumeMapForColor = map(track, 0, 100, 0, 1); 
  let strokeColor = lerpColor(color1, color2, volumeMapForColor);//lets volume bar colour go from one colour to another depending on intensity of volume  
  strokeWeight(5); //size of lines 
  stroke(strokeColor);// colour of lines 

  let volumeMapForLines = map(track, 0, 100, 20, 60); 
  let lenghtOfLine = 110; //50
  let lineStart = 200; // first x pos
  let lineEnd = lineStart + lenghtOfLine; // end 


  for (let i = 1; i <= volumeMapForLines; i++) {//for loop for volume bar function 
    let lineStep = (i * 10) + 200; // + x where x is the starting y pos
    line(lineStart + xPosition, lineStep, lineEnd + xPosition, lineStep);
  }
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

