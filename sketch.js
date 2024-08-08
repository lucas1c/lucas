let cor;
let posiçãohorizontal; // x
let posiçãovertical; // y

function setup() {
  createCanvas(400, 400);
  background(color(100,0,0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posiçãohorizontal = 200;
  posiçãovertical = 200;
 }

function draw() {
  fill(cor);
  circle(posiçãohorizontal, posiçãovertical, 50);

  if (mouseX < posiçãohorizontal) {
    posiçãohorizontal = posiçãohorizontal - 1;
  }

  if (mouseX > posiçãohorizontal) {
    posiçãohorizontal = posiçãohorizontal + 1;
  }

  if (mouseY < posiçãovertical) {
    posiçãovertical--;
  }

  if (mouseY > posiçãovertical) {
    posiçãovertical++;
  }
}
