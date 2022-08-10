import { BigInt } from '@graphprotocol/graph-ts';
import { Draw } from '../../generated/schema';

export function loadOrCreateDraw(id: string, timestamp: BigInt): Draw {
  let draw = Draw.load(id);

  if (draw == null) {
    draw = new Draw(id);
    draw.createdAtTimestamp = timestamp;
  }

  return draw as Draw;
}
