export type Pair<T, U> = (first: boolean) => T | U | null;

export const createPair =
  <T, U>(fst: T, snd: U): Pair<T, U> =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <T, U>(pair: Pair<T, U>) => pair(true);
export const second = <T, U>(pair: Pair<T, U>) => pair(false);

export const toPair = <T, U>([fst, snd]: [T, U]) => createPair(fst, snd);

export const toPairs = <T, U>(entries: Array<[T, U]>) => entries.map(a => toPair(a));
