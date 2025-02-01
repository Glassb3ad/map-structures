export class NaiveMap<t> {
  map: Array<[string, t]> = [];

  constructor(map: Array<[string, t]> = []) {
    this.map = map;
  }
}
