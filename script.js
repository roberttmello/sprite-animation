// Selecionando e guardando a referência para o canvas criado no html
const CANVAS = document.getElementById("canvas1");

// Criando o contexto(2d) para acessar as respectivas funções do canvas
const CONTEXT = CANVAS.getContext("2d");

// Setando o tamanho do canvas
const CANVAS_WIDTH = (CANVAS.width = 600);
const CANVAS_HEIGHT = (CANVAS.height = 600);

// Usando a classe Image do javascript para carregar uma imagem
const PLAYER_IMAGE = new Image();
PLAYER_IMAGE.src = "../assets/images/shadow_dog.png";

// Tamanho de cada sprite
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

const SPRITE_ANIMATIONS = {
  idle: { animationId: 0, quantFrames: 6 },
  jump: { animationId: 1, quantFrames: 6 },
  fall: { animationId: 2, quantFrames: 6 },
  run: { animationId: 3, quantFrames: 8 },
  dizzy: { animationId: 4, quantFrames: 10 },
  sit: { animationId: 5, quantFrames: 4 },
  roll: { animationId: 6, quantFrames: 6 },
  bite: { animationId: 7, quantFrames: 6 },
  ko: { animationId: 8, quantFrames: 11 },
  getHit: { animationId: 9, quantFrames: 3 },
};

// Constante que controla a velocidade da animação.
const ANIMATION_VELOCITY = 4;

let animation = "run";
let frameX = 0;
let gameFrame = 0;
let animationID = SPRITE_ANIMATIONS[animation]["animationId"];

function animateSprite() {
  /**
   *"clearRect" limpa todos os pixels do nosso canvas a cada frame executado.
    Seus parâmetros são as coordenadas(x,y) do ponto inicial do retângulo e lagura e altura do mesmo. 
  */
  CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // drawImage(image, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);
  /**
   * "image" -> Imagem original com as sprites da animação.
   * "sourceX, sourceY, sourceW, sourceH" -> Determina qual parte da sua imagem original,
   você irá cortar.
   * "destX, destY, destW, destH" -> Determina em qual parte do nosso canvas iremos mostrar a imagem cortada. 
   */

  CONTEXT.drawImage(
    PLAYER_IMAGE,
    frameX * SPRITE_WIDTH,
    animationID * SPRITE_HEIGHT,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );

  if (gameFrame % ANIMATION_VELOCITY === 0) {
    if (frameX < SPRITE_ANIMATIONS[animation]["quantFrames"]) frameX++;
    else frameX = 0;
  }

  // "gameFrame" é incrementado a cada frame da animação.
  gameFrame++;

  /**
   *"requestAnimationFrame" executa a função passada como argumento(animateSprite)
     para cada frame da nossa tela(60fps geralmente). Logo, aqui temos nosso loop da nossa animação. 
   */
  requestAnimationFrame(animateSprite);
}
animateSprite();
