import Cell from "./Cell.js";

/*
 * Each cell on the canvas should take 1/35 of height and 1/55 of width
 */
const CELL_WIDTH = 35;
const CELL_HEIGHT = 55;

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.height = canvas.height;
    this.width = canvas.width;

    this.cellWidth = this.width / CELL_WIDTH;
    this.cellHeight = this.height / CELL_HEIGHT;
    this.cell = new Cell(this, 0, 0);

    this.imageGrid = [];
    this.#initGrid();

    this.image = document.getElementById("mock-image");
  }

  #initGrid() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.imageGrid.push(new Cell(this, x, y));
      }
    }
  }

  render(context) {
    context.drawImage(this.image, 0, 0);
    this.imageGrid.forEach((cell) => cell.draw(context));
  }
}

export default Effect;
