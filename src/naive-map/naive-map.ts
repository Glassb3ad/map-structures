export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = map;
  }

  has(key: string): boolean {
    return this.map.some((pair) => pair[0] === key);
  }

  get(key: string): t | undefined {
    return this.map.find((pair) => pair[0] === key)?.[1];
  }
}
