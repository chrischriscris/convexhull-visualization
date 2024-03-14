import { Point, Line } from "../types";
import { ctx, canvas } from "../main";
import { state } from "../state";

function drawPoint(point: Point) {
  ctx.fillStyle = "black";
  const [x, y] = point;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(line: Line) {
  const [p1, p2] = line;
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  ctx.beginPath();
  ctx.setLineDash([9, 15]);
  ctx.strokeStyle = "red";

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawState() {
  clearCanvas();
  state.points.forEach(drawPoint);
  state.lines.forEach(drawLine);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export { drawState };
