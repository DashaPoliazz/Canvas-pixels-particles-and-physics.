class Cell {
  constructor(effectInstance, x, y) {
    this.effect = effectInstance;
    this.x = x;
    this.y = y;

    this.width = effectInstance.cellWidth;
    this.height = effectInstance.cellHeight;
  }

  draw(context) {
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default Cell;
