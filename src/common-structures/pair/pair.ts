export type Pair<T, U> = (first: boolean) => T | U | null;

export const createPair =
  <T, U>(fst: T, snd: U): Pair<T, U> =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <T, U>(pair: Pair<T, U>) => pair(true);
export const second = <T, U>(pair: Pair<T, U>) => pair(false);
