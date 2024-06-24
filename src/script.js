import Effect from "./components/Effect.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;

const effect = new Effect(canvas);
console.log(effect);
