import { BigInt } from '@graphprotocol/graph-ts';
import { Account, Draw, AccountDraw } from '../../generated/schema';

import { generateCompositeId } from '../helpers/common';

export function loadOrCreateAccountDraw(account: Account, draw: Draw, payout: BigInt): AccountDraw {
  const id = generateCompositeId(account.id.toString(), draw.id);

  let accountDraw = AccountDraw.load(id);

  if (accountDraw == null) {
    accountDraw = new AccountDraw(id);
    accountDraw.account = account.id.toString();
    accountDraw.claimed = payout;
    accountDraw.draw = draw.id.toString();
  }

  // Just save
  accountDraw.save();

  return accountDraw as AccountDraw;
}
