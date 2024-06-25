import Cell from "./Cell.js";

/*
 * Each cell on the canvas should take 1/35 of height and 1/55 of width
 */
const CELL_WIDTH = 35;
const CELL_HEIGHT = 55;
const MOUSE_RADIUS = 100;
const CANVAS_ID = "canvas1";

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

    this.mouse = {
      x: undefined,
      y: undefined,
      radius: MOUSE_RADIUS,
    };
    document.addEventListener("mousemove", (e) => {
      if (e.target.id !== CANVAS_ID) return;

      this.mouse.x = e.offsetX;
      this.mouse.y = e.offsetY;

      console.log(this.mouse);
    });
    document.addEventListener("mouseleave", (e) => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    });
  }

  #initGrid() {
    for (let y = 0; y < this.height; y += this.cellHeight) {
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.imageGrid.push(new Cell(this, x, y));
      }
    }
  }

  render(context) {
    this.imageGrid.forEach((cell) => {
      cell.update();
      cell.draw(context);
    });
  }
}

export default Effect;
