// represent four main cardinal point (east, north, west, south)
const cardinalPoint = ['E', 'N', 'W', 'S'];

class Coordinate {
  constructor(x, y, head) {
    this._x = +x;
    this._y = +y;
    this._head = head.toUpperCase();
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get head() {
    return this._head;
  }

  set x(n) {
    this._x += n;
  }
  set y(n) {
    this._y += n;
  }

  set head(dir) {
    let index = cardinalPoint.indexOf(this.head);
    if (dir == 'L') this._head = index == cardinalPoint.length-1 ? cardinalPoint[0] : cardinalPoint[index+1];
    if (dir == 'R') this._head = index == 0 ? cardinalPoint[cardinalPoint.length-1] : cardinalPoint[index-1];
  }

  toString() {
    return `${this.x} ${this.y} ${this.head}`
  }
}

module.exports = Coordinate;
