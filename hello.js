const sayHello = function (name) {
  console.log("Hello " + name);
}

sayHello("Shaun");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
sayHello("Jim")



const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

console.log(greeting);