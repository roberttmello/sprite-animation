const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "../assets/images/shadow_dog.png";
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let frameX = 0;
let frameY = 5;
let gameFrame = 0;
const STAGGER_FRAMES = 4;

function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  context.drawImage(
    playerImage,
    frameX * SPRITE_WIDTH,
    frameY * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );

  if (gameFrame % STAGGER_FRAMES === 0) {
    if (frameX < 4) frameX++;
    else frameX = 0;
  }
  gameFrame++;

  //My frame loop
  requestAnimationFrame(animate);
}
animate();
