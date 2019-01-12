//original syntax
const x = 32;
const y = 21;
var add = function(x, y) {
  return x + y;
};

//arrow function

var add2 = (x, y) => x + y;

//usage

let greetUser = username => `Hello, ${username}!`;
let greetUser2 = username => {
  return `Hello, ${username}!`;
};
console.log(greetUser("Kenn") === greetUser2("Kenn"));

//above function will return false if greet user and greet user 2 are not the same and will return true if they are
