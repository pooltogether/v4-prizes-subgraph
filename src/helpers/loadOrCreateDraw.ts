import { Draw } from '../../generated/schema';

export function loadOrCreateDraw(id: string): Draw {
  let draw = Draw.load(id);

  if (draw == null) {
    draw = new Draw(id);
  }

  return draw as Draw;
}
