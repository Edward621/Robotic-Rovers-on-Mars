const Coordinate = require('./coordinate');

function Rover(coordinate) {
  this.coordinate = coordinate;
}

//get instructions string and move the rover base on the instructions
Rover.prototype.move = function(instructions) {
  for (let inst of instructions.toUpperCase()) {
    if (inst == 'L') this.turnLeft();
    if (inst == 'R') this.turnRight();
    if (inst == 'M') this.changePosition();
  }
}

Rover.prototype.changePosition = function() {
  if (this.coordinate.head == 'N') this.coordinate.y = 1;
  if (this.coordinate.head == 'S') this.coordinate.y = -1;
  if (this.coordinate.head == 'E') this.coordinate.x = 1;
  if (this.coordinate.head == 'W') this.coordinate.x = -1;
}

Rover.prototype.turnLeft = function() {
  this.coordinate.head = 'L';
}

Rover.prototype.turnRight = function() {
  this.coordinate.head = 'R';
}

module.exports = Rover;
