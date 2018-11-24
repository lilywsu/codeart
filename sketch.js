var img1;
function preload(){
  img1 = loadImage("sky.jpg")
  img2 = loadImage("rainbow.png")
}

let t = 1;

function setup() {
  createCanvas(1260, 700);
  noStroke();
  fill(200, 1, 100);
}

function draw() {
  background(50, 0,100);

    //image
 // imageMode(CORNER):
  imageMode(CORNER);
  image(img1,0,0);
  imageMode(CENTER);
  image(img2, mouseX, mouseY);



  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      let xAngle = map(mouseX, 1, width, -2 * PI, 10 * PI, true);
      let yAngle = map(mouseY, 1, height, -5 * PI, 5 * PI, true);
      let angle = xAngle * (x / width) + yAngle * (y / height);

      let myX = x + 100 * cos(1 * PI * t + angle);
      let myY = y + 90 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 4);
  }

  t = t + 0.003; 



}
