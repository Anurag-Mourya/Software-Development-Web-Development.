

// Definition - The Map, Filter and Reduce are the array methods used to transform data without changing original array.
// map, filter, and reduce are array prototype methods, so they work directly on arrays.

// They are high order functions and they use callback functions

/////////////////////Map,Filter, Reduce Definitions//////////////////

// Map- Map creates new array by changing each elements
// Filter- Filter creates new array with elements that pass a conditions.
// Reduce- Reduce reduce an element into single value.

//////////////////map////////////
// ex- 
// santax of map. -- array.map((item, index, array) => {});

const users = [
    { name: "Anurag", age: 25 },
    { name: "Rahul", age: 30 },
    { name: "Krishna", age: 28 }
];
const names = users.map(user => user.name);
// console.log("names", names)

///////////////filter///////////////
// ex.
const below30 = users.filter(user => user.age < 30);
// console.log(below30);

//////////////reduce///////////
// santax of reudce 
// array.reduce((accumulator, current, index, array) => {
//   return updatedAccumulator;
// }, initialValue);

// ex.
const num = [1, 2, 3, 4];
const sum = num.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// What is acc and curr and initialValue
// the acc is the initialValue value. which is 0 in example and it changes after complete a loop ex- acc is 2 and curr is 3 then 2+3 the acc is not 5.
// curr is actual array values 1,2,3,4.

//if reduce have not initial value then first element become acc 

// brek down of reduce working.
// step 1 acc is 0
// step 2 curr is 1 and after addition the acc is 1.
// step 3 the acc is now 1 and curr is 2 then acc is 3.
// step 4 the acc is now 3 and curr is 3 then acc is 6.
// step 5 the acc is now 6 and curr is 4 then acc is 10.
// loops end and the result is 10


//////////////////////Chaining (map + filter + reduce)///////////////
// ex. 

const numbers = [2, 4, 5, 6, 7, 8];
const chaning = numbers.filter(num => num % 2 === 0).
    map(num => num * 20).
    reduce((acc, curr) => acc + curr, 0)
// console.log(chaning);



// Code examples ////////////
// >  Code with examples of map, filter, and reduce. 
