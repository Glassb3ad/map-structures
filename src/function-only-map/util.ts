type Pair<t> = (first: boolean) => t | null;

export const createPair =
  <t>(fst: t, snd: t): Pair<t> =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <t>(pair: Pair<t>) => pair(true);
export const second = <t>(pair: Pair<t>) => pair(false);
