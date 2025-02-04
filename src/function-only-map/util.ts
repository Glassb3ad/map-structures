type Pair<t1, t2> = (first: boolean) => t1 | t2 | null;

export const createPair =
  <t1, t2>(fst: t1, snd: t2): Pair<t1, t2> =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <t1, t2>(pair: Pair<t1, t2>) => pair(true);
export const second = <t1, t2>(pair: Pair<t1, t2>) => pair(false);
