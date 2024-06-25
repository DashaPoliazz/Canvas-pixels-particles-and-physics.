const IMAGE_ID = "mock-image";

const RIPPLE_EFFECT_X = 5;
const RIPPLE_EFFECT_Y = 5;

class Cell {
  constructor(effectInstance, x, y) {
    this.effect = effectInstance;
    this.x = x;
    this.y = y;

    this.slideX = Math.random() * RIPPLE_EFFECT_X;
    this.slideY = Math.random() * RIPPLE_EFFECT_Y;

    this.width = effectInstance.cellWidth;
    this.height = effectInstance.cellHeight;

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
    this.slideX = Math.random() * RIPPLE_EFFECT_X;
    this.slideY = Math.random() * RIPPLE_EFFECT_Y;
  }
}

export default Cell;
