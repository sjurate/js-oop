
console.clear();

import { Cat } from './js/Cat.js';
import { Dog } from './js/Dog.js';

const rexas = new Dog('Rexas', 'brown');
const rainis = new Cat('Rainis');

console.log(rexas.intro());
console.log(rainis.intro());

console.log(rexas.triukas());
console.log(rainis.triukas());

console.log(rexas.getAge());
rexas.getOlder();
console.log(rexas.getAge());
rexas.getOlder();
console.log(rexas.getAge());

console.log(rainis.getAge());
rainis.getOlder();
console.log(rainis.getAge());
rainis.getOlder();
console.log(rainis.getAge());

console.log(rainis);
console.log(rexas);