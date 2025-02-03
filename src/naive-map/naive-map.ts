export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = [...map];
  }

  searchEntryAndApply<t1>(
    key: string,
    func: (entry: [string, t]) => t1,
    fallback: () => t1
  ): t1 {
    for (const pair of this.map) {
      if (pair[0] === key) {
        return func(pair);
      }
    }
    return fallback();
  }

  has(key: string): boolean {
    return this.searchEntryAndApply<boolean>(
      key,
      () => true,
      () => false
    );
  }

  get(key: string): t | undefined {
    return this.searchEntryAndApply<t | undefined>(
      key,
      (entry) => entry[1],
      () => undefined
    );
  }

  set(newPair: [string, t]): NaiveMap<t> {
    return this.searchEntryAndApply<NaiveMap<t>>(
      newPair[0],
      (entry) => {
        entry[1] = newPair[1];
        return this;
      },
      () => {
        this.map.push([...newPair]);
        return this;
      }
    );
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
