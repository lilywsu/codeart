var img1;
function preload(){
  img1 = loadImage("sky.jpg")
  img2 = loadImage("rainbow.png")
}

let t = 1; // time variable

function setup() {
  createCanvas(1260, 700);
  noStroke();
  fill(200, 1, 100);
}

function draw() {
  background(50, 0,100); // translucent background (creates trails)

    //image
 // imageMode(CORNER):
  imageMode(CORNER);
  image(img1,0,0);
  imageMode(CENTER);
  image(img2, mouseX, mouseY);


  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 1, width, -2 * PI, 10 * PI, true);
      let yAngle = map(mouseY, 1, height, -5 * PI, 5 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 100 * cos(1 * PI * t + angle);
      let myY = y + 90 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 4); // draw particle
    }
  }

  t = t + 0.003; // update time



}
