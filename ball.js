class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.xVel = 2;
    this.yVel = 0;
  }

  playerBounce() {
    this.xVel = -this.xVel;
    this.yVel = Math.random() * 3 + 1;
  }

  wallBounce() {
    this.yVel = -this.yVel;
  }

  resetPosition() {
    this.x = canvas.width / 2;
  }

  update() {
    this.x += this.xVel;
    this.y += this.yVel;

    if (this.y < this.r || this.y + this.r > canvas.height) {
      this.wallBounce();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
