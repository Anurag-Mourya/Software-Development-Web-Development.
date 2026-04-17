/////////////////////Object Methods./////////////////////////////
// 1. Object.keys()
// def- Return an array with keys.
// ex. - 
const user = {
    name: "Anurag",
    age: 28
}
// console.log(Object.keys(user))// ["name", "age"].

// 2. Object.values()
//def- Return an array with values. 
//ex- From above user example the out put is- 
// console.log(Object.values(user));// ["Anurag", 28].

// 3. Object.entries()
// def- Object.entries are return an big array and inside an arry Each key-value pair of object is returned as a small array. 
// ex- 
// console.log(Object.entries(user));// [["name","Anurag"],["age",28]]



//////////////////////Object Prototypes. //////////////////////////////
// def- Prototype is an object that is automatically attached to every JavaScript object, from which it can inherit properties and methods. Function also have a prototype//// In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from other objects. It’s a core concept behind JavaScript’s object-oriented behavior

// Why we use - Instead of copying methods again and again, we use prototype.
// ex. -  If we use .__proto__) we can see all the object that attached with js object. 
const user1 = {
    name: "Anurag"
};

// console.log(user1.__proto__);
// use to see the functions prototype.
function test() { }
console.log(test.prototype);


