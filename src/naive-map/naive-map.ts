export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = [...map];
  }

  has(key: string): boolean {
    for (const pair of this.map) {
      if (pair[0] === key) {
        return true;
      }
    }
    return false;
  }

  get(key: string): t | undefined {
    for (const pair of this.map) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
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
