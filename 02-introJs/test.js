console.log("Hola Mundo");
const obj1 ={ property1:'15'};  
const obj2 =Object.freeze(obj1);  
obj2.property1='20';  
console.log(obj2.property1); 

console.log(( 1 +"2" ));
console.log(("2" + 1));
console.log(( 1 +"1" ) * ("1" + 1));


var counter = require('./src/counter');

counter.counter = 2
console.log(counter,counter.counter);