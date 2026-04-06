// Difference between for of and for in loop. 

////////////////////////// for .... of loop(Iterates values). /////////////

// Def -It is Used to iterate over values of iterable objects.
// Iterable objects = values of an Array, values of a String, map, set. It is not worked with objects. 

// ex-
const names = ["Anurag", "Krishan"];
for (let val of names) {
    // console.log(val)
}// Anurag, Krishna same as sting.....


// ///////////////////////////for ..... in loops.(Iterates keys) ///////////////////
//Def-  Used to iterate over keys (properties) of an object.

// ex- 
const userDetails = {
    name: "Anurag",
    age: 28,
    class: "First"
}

for (let key in userDetails) {
    // console.log(key);
}

// Note - for .... in loops also works with array, stings but it's not recomended to use because it is return indexes not values.
// ex- 

for (let value in names) {
    // console.log(value);
}// 0, 



///////////////////// How to do itration with object using for of loop//////////

//  Normally for of loop given error for objects. Because object are not iterable. 
//ex. -
const obj = { cat: "Electronics", subCat: "Mouse" };
// for (let Ival of obj) {
//     console.log(Ival)
// }// Uncaught TypeError: obj1 is not iterable. we found 

for (let key of Object.keys(obj)) {
    // console.log(key);
}// cat, subCat. How - because Object.keys(obj) return an arry of object keys ['cat', 'subCat'] and for of is works on array simple ....

// This is the example of get object values. 
for (let value of Object.values(obj)) {
    // console.log(value);
}

// console.log(Object.entries(obj))
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}//cat Electronics and subCat Mouse




// Code example of for or and for in loops.

// for .... of with array and string,
// fetch the object keys and then values and then keys and values using for ...of loop
//  for... in loop

