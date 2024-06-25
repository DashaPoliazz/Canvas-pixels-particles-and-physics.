const IMAGE_ID = "mock-image";

const RIPPLE_EFFECT_X = 0;
const RIPPLE_EFFECT_Y = 0;

class Cell {
  constructor(effectInstance, x, y) {
    this.effect = effectInstance;
    this.x = x;
    this.y = y;

    this.slideX = RIPPLE_EFFECT_X;
    this.slideY = RIPPLE_EFFECT_Y;

    this.width = effectInstance.cellWidth;
    this.height = effectInstance.cellHeight;
    this.vx = 0; // velocity
    this.vy = 0;

    this.image = document.getElementById(IMAGE_ID);
  }

  draw(context) {
    context.drawImage(
      // source image
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      // destination canvas
      // dx
      this.x + this.slideX,
      // dy
      this.y + this.slideY,
      // dwidth
      this.width,
      // dheight
      this.height,
    );
  }

  update() {
    const dx = this.effect.mouse.x - this.x;
    const dy = this.effect.mouse.y - this.y;
    const distance = Math.hypot(dx, dy);
    if (distance < this.effect.mouse.radius) {
      const force = distance / this.effect.mouse.radius;
      this.vx = force;
      this.vy = force;
    } else {
      this.vx = 0;
      this.vy = 0;
    }
    this.slideX += this.vx;
    this.slideY += this.vy;
  }
}

export default Cell;
