import "./style.css";
import { generatePoints, clearState } from "./state";
import { drawState } from "./draw";
import { addPoint } from "./events";

// ===== Canvas setup =====
export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// ===== Event listeners =====
canvas.addEventListener("click", (event) => {
  addPoint(event);
  drawState();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    generatePoints(30);
  } else if (event.key === "c") {
    clearState();
  }

  console.log("this event ran");
  drawState();
});

// ===== Main function =====
function start() {
  generatePoints(30);
  drawState();
}

start();
