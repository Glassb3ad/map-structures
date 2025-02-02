export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = [...map];
  }

  has(key: string): boolean {
    return this.map.some((pair) => pair[0] === key);
  }

  get(key: string): t | undefined {
    return this.map.find((pair) => pair[0] === key)?.[1];
  }

  set(newPair: [string, t]): NaiveMap<t> {
    for (const pair of this.map) {
      if (pair[0] === newPair[0]) {
        pair[1] = newPair[1];
        return this;
      }
    }
    this.map.push([...newPair]);
    return this;
  }

  delete(key: string): boolean {
    const index = this.map.findIndex((pair) => pair[0] === key);
    if (index === -1) {
      return false;
    }
    this.map = this.map.slice(0, index).concat(this.map.slice(index + 1));
    return true;
  }
}
