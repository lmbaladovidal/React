const array =[1,2,3,4];


console.log(`Soy array al principio: ${array}`);

array.push(5);
array.push(6);
array.push(7);
array.push(8);
console.log(`Soy array con pushes: ${array}`);

let array2 = array;
array2.push(159);
console.log(`Soy array: ${array}`);
console.log(`Soy array2: ${array2}`);

let array3 = [...array];
array3.push(741);
console.log(`Soy array: ${array}`);
console.log(`Soy array3: ${array3}`);

let array4 = array3.map((element)=>{return element*2})
console.log(`Soy array4: ${array4}`);