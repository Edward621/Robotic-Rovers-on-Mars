const readline = require('readline');
const Rover = require('./rover');
const Coordinate = require('./coordinate');

var numberOfLine = 0;//number of line enter by user
var result = [];//result of moving each rover

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
  history: []
});

rl.on('line', line=>{
  numberOfLine += 1;
  if (numberOfLine == 1) rl.history.pop();//this can be used to validate movement!
  if (numberOfLine % 2 == 1 && numberOfLine != 1) main();//calculate movement after each 2 lines of input.
});

rl.on('SIGINT', ()=>{//ctr+c will show current location for every rover in order && terminate app
  result.forEach(res=>{
    console.log(res);
  });
  rl.close();
});

function main() {
  let position = rl.history.pop().split(" ");
  let instructions = rl.history.pop();

  var coordinate = new Coordinate(...position);
  var rover = new Rover(coordinate);
  rover.move(instructions);
  result.push(rover.coordinate.toString());
}
