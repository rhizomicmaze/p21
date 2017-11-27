var es, prop, r, frm, bg, bio, loading;
var img = [];

function preload() {
	loading = createImg('loading.gif').position(70, 110);
	bio = loadSound("https://dl.dropboxusercontent.com/s/ilocrkca2kytl1q/malevich.mp3");
	img[0] = "https://dl.dropboxusercontent.com/s/qel7iq9d2qn1v3i/p21_frame_square_618px.png";
	img[1] = "https://dl.dropboxusercontent.com/s/ggax2ju59l7sunl/p21_frame_rect_618px.png";
	r = floor(random(0, img.length));
	frm = loadImage(img[r]);
}

function setup() {
	loading.hide();
	createCanvas(618, 705);
	colorMode(HSB);
	background(random(0, 255), random(0, 40), random(230, 255));
	frameRate(3);
	bio.playMode('restart');
	bio.setVolume(0.5);
}

function keyPressed() {
	if (keyCode === 82) {
		background(random(0, 255), random(0, 40), random(230, 255));
		loop();
	} //RESTART (R)
	if (keyCode === 83) {
		saveCanvas("process", "png");
	} //SAVE (S)
	if (keyCode === 80) {
		noLoop();
	} //PAUSE (P)
	if (keyCode === 85) {
		loop();
	} //UNPAUSE (U)
	
	if (keyCode === 66 && bio.isPlaying()) {
	    bio.stop();
	  } else {
	    bio.play();
	 } //BIO (B)
}


function draw() {
	image(frm, 0, 0);
	es = random(100, 350);
	noStroke();
	if (mouseIsPressed) {
		fill(random(0, 255), random(30, 80), random(40, 110));
		rect(mouseX, mouseY, random(0, 80), random(40, 100), 10);
		ellipse(pmouseX, random(0, height), es, es);
		push();
		translate(30, 50)
		strokeWeight(1)
		stroke(random(0, 255), random(30, 80), 100)
		line(random(0, width), random(0, height), pmouseX, pmouseY);
		pop();
	}
}
