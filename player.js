class Player {
  constructor(side, ball) {
    this.side = side;
    this.ball = ball;
    this.controlls = new Controlls(side);

    this.w = 20;
    this.h = 100;

    switch (side) {
      case "right":
        this.x = canvas.width - this.w - 10;
        break;

      case "left":
        this.x = 10;

        break;
    }
    this.y = canvas.height / 2 - this.h / 2;
    this.vel = 2;
    this.score = 0;
  }

  checkBallColision() {
    if (
      this.side === "right" &&
      this.ball.x + this.ball.r > this.x &&
      this.ball.y > this.y &&
      this.ball.y < this.y + this.h
    ) {
      this.ball.playerBounce();
    }

    if (
      this.side === "left" &&
      this.ball.x - this.ball.r < this.x +this.w &&
      this.ball.y > this.y &&
      this.ball.y < this.y + this.h
    ) {
      this.ball.playerBounce();
    }
  }

  update() {
    this.controlls.update();
    if (this.controlls.up) {
      this.y -= this.vel;
    }

    if (this.controlls.down) {
      this.y += this.vel;
    }

    this.checkBallColision();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
