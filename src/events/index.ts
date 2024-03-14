import { pushStatePoint } from "../state";
import { canvas } from "../main";

function addPoint(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  pushStatePoint([x, y]);
}

export { addPoint };
