import { Point, Line } from "../types";
import { canvas } from "../main";

interface State {
  points: Point[];
  lines: Line[];
}

const state: State = {
  points: [],
  lines: [],
};

function clearState() {
  state.points = [];
  state.lines = [];
}

function generatePoints(nPoints: number) {
  state.points = [];
  for (let i = 0; i < nPoints; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    state.points.push([x, y]);
  }
}

function pushStatePoint(p: Point) {
  state.points.push(p);
}

export { state, clearState, generatePoints, pushStatePoint };
