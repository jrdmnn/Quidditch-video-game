const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(900, 500);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

// Have to add others keys (go up and go down)
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }

  if (keyCode === 39) {
    game.player.goForward();
  }

  if (keyCode === 37) {
    game.player.goBack();
  }

}
