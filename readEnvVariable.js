const firstName = "Pritish"
const greet = "Hello";

console.log(process);
console.log(greet + " " + firstName);

// SET TEST="hello world"
// $env:TEST = "hello world"

// $env:USERNAME = "PRITISH"

// _set USERNAME=Pritish


// process.env.NODE_ENV = "USERNAME"

process.env.USERNAME = 'PRITISH';

console.log(greet + " " + process.env.USERNAME);

console.log(process.env.USERNAME);