var es, prop, img, w, h;
function preload(){img = loadImage("https://dl.dropboxusercontent.com/s/hmz8y0y6xzhn3t3/p21_1200px.png");}

function setup() {
  w = img.width;
	h = img.height;
  prop = (w/(h/windowHeight));
  
  createCanvas(prop, windowHeight+(windowHeight/100));
  colorMode(HSB);
  background(random(0, 255), random(0, 40), random(230, 255));
  frameRate(2);}

function keyPressed() {
  //87 is W, for restart & refill canvas with a new color
  //83 is S, for save canvas
  //80 is P, for pause; 82 is R, for run 
  if (keyCode === 87) 
  {background(random(0, 255), random(0, 40), random(230, 255)) 
  {loop()}}
  if (keyCode === 83) {saveCanvas("artwork", "png");}
  if (keyCode === 80) {noLoop();}
  if (keyCode === 82) {loop();}}

function draw() {
  image(img, 0, 0, prop, windowHeight);
  noStroke();
  es = random(100, 300);

  if (mouseIsPressed) {
    fill(random(0, 255), random(30, 80), random(40, 110));
    rect(mouseX, mouseY, random(0, 80), random(40, 100), 10);
    ellipse(pmouseX, random(0, height), es, es);
    push();
    translate(30, 50)
    strokeWeight(1)
    stroke(random(0, 255), random(30, 80), 100)
    line(random(0, width), random(0, height), pmouseX, pmouseY);
    pop();}}