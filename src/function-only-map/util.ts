export const createPair =
  <t1, t2>(fst: t1, snd: t2) =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <t>(pair: (first: boolean) => t) => pair(true);
