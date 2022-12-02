import hello, { numbers, Greeting } from "./export.js";

console.log(numbers);
hello();
let greet = new Greeting("Arushi");
console.log(greet.greeting);