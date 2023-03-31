class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.xVel = 2;
    this.yVel = 0;
  }

  update() {
    if (this.x > canvas.width + this.r) {
      this.x = canvas.width / 2;
    }

    this.x += this.xVel;
    this.y += this.yVel;
  }

  draw(ctx) {
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
