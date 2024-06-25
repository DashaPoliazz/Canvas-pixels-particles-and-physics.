import Effect from "./components/Effect.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 564;
canvas.height = 1107;

const effect = new Effect(canvas);

function animate() {
  effect.render(ctx);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
