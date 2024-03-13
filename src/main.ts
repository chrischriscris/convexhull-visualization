import "./style.css";

// Canvas setup
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Types
type Pair = [number, number];

// State
interface State {
  points: Pair[];
  lines: Pair[][];
}

const state: State = {
  points: [],
  lines: [],
};

function clearState() {
  state.points = [];
  state.lines = [];
}

// Drawing logic
function drawPoint(point: Pair) {
  ctx.fillStyle = "black";
  const [x, y] = point;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

function drawLineBetween(p1: Pair, p2: Pair) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  ctx.beginPath();
  ctx.setLineDash([9, 15]);
  ctx.strokeStyle = "red";

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function generatePoints(nPoints: number): Pair[] {
  return Array.from({ length: nPoints }, () => [
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight,
  ]);
}

// Event handlers
function addPointToCanvas(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  drawPoint([x, y]);
  state.points.push([x, y]);
}

function deleteAllPoints() {
  clearCanvas();
  clearState();
}

function generateNewPoints() {
  deleteAllPoints();

  state.points.push(...generatePoints(30));
  state.points.forEach(drawPoint);
}


// Event listeners
document.addEventListener("click", addPointToCanvas);
document.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    generateNewPoints();
  } else if (event.key === "c") {
    deleteAllPoints();
  }
});

// Main
state.points.push(...generatePoints(30));

state.points.forEach(drawPoint);
