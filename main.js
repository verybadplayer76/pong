const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 800;

const ball = new Ball(200, 100, 10);
const player = new Player("right",ball);
const player2 = new Player("left",ball);

function animate() {
  canvas.height = 500;

  ball.update();
  player.update();
  player2.update();

  ball.draw(ctx);
  player.draw(ctx);
  player2.draw(ctx);

  goalCheck(ball, player, player2);

  requestAnimationFrame(animate);
}

animate();

function goalCheck(ball, p1, p2) {
  if (ball.x > canvas.width - ball.r) {
    ball.resetPosition();
    p1.score++;
  }

  if (ball.x < ball.r) {
    ball.resetPosition();
    p2.score++;
  }
}
