export type Entry<T> = [string, T];
export type Entries<T> = Array<Entry<T>>;

export abstract class Map<t> {
  abstract toArray(): Entries<t>;
  abstract has(key: string): boolean;
  abstract get(key: string): t | undefined;
  abstract set(newPair: Entry<t>): Map<t>;
  abstract delete(key: string): boolean;
}

export type Create<t> = (map?: Entries<t>) => Map<t>;
