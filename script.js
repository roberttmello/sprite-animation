// Selecionando e guardando a referência para o canvas criado no html
const canvas = document.getElementById("canvas1");
// Criando contexto(2d) para acessar as respectivas funções do canvas
const context = canvas.getContext("2d");

// Setando o tamanho do canvas
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// Usando a classe Image do javascript para carregar uma imagem
const playerImage = new Image();
playerImage.src = "../assets/images/shadow_dog.png";

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const STAGGER_FRAMES = 4;

function animateSprite() {
  /**
   *"clearRect" limpa todos os pixels do nosso canvas a cada frame executado.
    Seus parâmetros são as coordenadas(x,y) do ponto inicial do retângulo e lagura e altura do mesmo. 
  */
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // drawImage(image, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);
  /**
   * "image" -> Imagem original com as sprites da animação.
   * "sourceX, sourceY, sourceW, sourceH" -> Determina qual parte da sua imagem original,
   você irá cortar.
   * "destX, destY, destW, destH" -> Determina em qual parte do nosso canvas iremos mostrar a imagem cortada. 
   */

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
    if (frameX < 6) frameX++;
    else frameX = 0;
  }
  gameFrame++;

  /**
   *"requestAnimationFrame" executa a função passada como argumento(animateSprite)
     para cada frame da nossa tela(60fps geralmente). Logo, aqui temos nosso loop da nossa animação. 
   */
  requestAnimationFrame(animateSprite);
}
animateSprite();
