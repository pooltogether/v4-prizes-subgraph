import { Aggregate } from '../../generated/schema';

export function loadOrCreateAggregate(id: string): Aggregate {
  let aggregate = Aggregate.load(id);

  if (aggregate == null) {
    aggregate = new Aggregate(id);
  }

  return aggregate as Aggregate;
}
