export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = [...map];
  }

  searchEntryAndApply<t1>(key: string, func: (entry: [string, t]) => t1, fallback: () => t1): t1 {
    for (const pair of this.map) {
      if (pair[0] === key) {
        return func(pair);
      }
    }
    return fallback();
  }

  has(key: string): boolean {
    const func = () => true;
    const fallback = () => false;
    return this.searchEntryAndApply<boolean>(key, func, fallback);
  }

  get(key: string): t | undefined {
    const func = (entry: [string, t]) => entry[1];
    const fallback = () => undefined;
    return this.searchEntryAndApply<t | undefined>(key, func, fallback);
  }

  set(newPair: [string, t]): NaiveMap<t> {
    const func = (entry: [string, t]) => {
      entry[1] = newPair[1];
      return this;
    };
    const fallback = () => {
      this.map.push([...newPair]);
      return this;
    };
    return this.searchEntryAndApply<NaiveMap<t>>(newPair[0], func, fallback);
  }

  delete(key: string): boolean {
    let entryDeleted = false;
    const newMap = [];
    for (const pair of this.map) {
      if (pair[0] !== key) {
        newMap.push(pair);
      } else {
        entryDeleted = true;
      }
    }
    this.map = newMap;
    return entryDeleted;
  }
}
