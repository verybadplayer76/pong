const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 500;
canvas.width = 800;

const ball = new Ball(200, 100, 10);

function animate() {
  canvas.height = 500;
  ball.update();
  ball.draw(ctx);
  requestAnimationFrame(animate);
}

animate();
