class Player {
  constructor() {
    this.size = 50;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1;
  }

  jump() {
    if (this.y == height - this.size) this.velocityY = -20 ;
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(playerImage, this.x, this.y, 60, 60);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 25,
      this.size - 25,
      currentObs.x,
      currentObs.y,
      currentObs.size - 25,
      currentObs.size - 25
    );
    return isColliding;
  }
}
