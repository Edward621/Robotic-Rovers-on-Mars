var assert = require('assert');
const Coordinate = require('../src/coordinate');
const Rover = require('../src/rover');

describe('Coordinate', function() {
  describe('#Turn Left', function() {
    it('Head should change from N to W', function() {
      var coordinate = new Coordinate(1, 2, 'N');
      coordinate.head = 'L';
      assert.equal(coordinate.head, 'W');
    });
  });
  describe('#Turn Right', function() {
    it('Head should change from E to S', function() {
      var coordinate = new Coordinate(1, 2, 'E');
      coordinate.head = 'R';
      assert.equal(coordinate.head, 'S');
    });
  });
});

describe('Rover', function() {
  describe('#Move towards on x-axis', function() {
    it('x coordinate must change to 2', function() {
      var coordinate = new Coordinate(1, 2, 'E');
      var rover = new Rover(coordinate);
      rover.move('M');
      assert.equal(rover.coordinate.head, 'E');
      assert.equal(rover.coordinate.x, 2);
      assert.equal(rover.coordinate.y, 2);
    });
    it('x coordinate must change to 3', function() {
      var coordinate = new Coordinate(4, 2, 'W');
      var rover = new Rover(coordinate);
      rover.move('M');
      assert.equal(rover.coordinate.head, 'W');
      assert.equal(rover.coordinate.x, 3);
      assert.equal(rover.coordinate.y, 2);
    });
  });
  describe('#Move towards on y-axis', function() {
    it('y coordinate must change to 3', function() {
      var coordinate = new Coordinate(1, 2, 'N');
      var rover = new Rover(coordinate);
      rover.move('M');
      assert.equal(rover.coordinate.head, 'N');
      assert.equal(rover.coordinate.x, 1);
      assert.equal(rover.coordinate.y, 3);
    });
    it('y coordinate must change to 1', function() {
      var coordinate = new Coordinate(4, 2, 'S');
      var rover = new Rover(coordinate);
      rover.move('M');
      assert.equal(rover.coordinate.head, 'S');
      assert.equal(rover.coordinate.x, 4);
      assert.equal(rover.coordinate.y, 1);
    });
  });
  describe('#rover combination of movement and turns', function() {
    it('1 2 N => LMLMLMLMM => 1 3 N', function() {
      var coordinate = new Coordinate(1, 2, 'N');
      var rover = new Rover(coordinate);
      rover.move('LMLMLMLMM');
      assert.equal(rover.coordinate.toString(), '1 3 N');
    });
    it('#3 3 E => MMRMMRMRRM => 5 1 E', function() {
      var coordinate = new Coordinate(3, 3, 'E');
      var rover = new Rover(coordinate);
      rover.move('MMRMMRMRRM');
      assert.equal(rover.coordinate.toString(), '5 1 E');
    });
  });
});
