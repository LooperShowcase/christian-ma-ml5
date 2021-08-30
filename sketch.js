let player;

let bgImage;
let playerImage;
let obstacleImage;
let obstcles = [];

let worldClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.gif");
  obstacleImage = loadImage("obstcle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  worldClassifier = ml5.soundClassifier("speechcommands18w", options);
}

function setup() {
  createCanvas(1000, 700);
  player = new Player();
  worldClassifier.classify(heardWord);
}
function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstcles.push(new Obstcles());
  }
  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstcles) {
    obs.show();
    obs.move();

    if (player.collided(obs)) {
      console.log("Game_over");
      noLoop();
      textSize(32);
      text("Game_Over", width / 2 - 70, height / 2);
      fill(0, 102, 153);
    }
  }
}
