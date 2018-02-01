$(document).ready(function() {
	$('#loading').hide();
})

var ctr = 0;
var noiseScale=0.02;

function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas(width, height);

	$(document).click(function() {noiseSeed(random()*1000);})
}

function draw() {
	ctr += .2;
	background('#000')

	for (var i = 0; i < width+20; i++) {	
		var noiseVal = noise((mouseX+i+ctr)*noiseScale, (mouseY+ctr)*noiseScale);
		colorMode(HSL,256);
		colorMode(HSB, 256);
		var h = noise((mouseX+i+ctr/2)/100)*256
		var h2 = noise((i-ctr)/300)*256
		var s = mouseX /width * 255
		var l = mouseY / height * 255
		//h = h2 = 1
		s = 0
		l = 256 
		//l = 0
		var c1 = color(h, s, l);
		var c2 = color(h2, s, l);
		var c = lerpColor(c1, c2,0.5)
		stroke(c)
		//rotate(.001);
		//line( 0, (i + (noiseVal+0)*1)-20, width, (i+(noiseVal+.0)*15)-20)
		line( (i + (noiseVal+0)*20)-20, height, (i+(noiseVal+.0)*1)-20, 0)
		// noise Line
		//line(i, 0+noiseVal*200, i, height-(2*noiseVal*200))
	}
}
