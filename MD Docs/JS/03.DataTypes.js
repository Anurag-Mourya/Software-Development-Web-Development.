// Data types

// Which type of data stored in variables. 

// Types of Data types 

// key// 
// Primitive = stored by value (string, Number, Boolean)
// Non-Primitive = stored by reference(object, array, functions)

// 1. Primitive Data types - variables stores single, simple values like, String, Number, Boolean, undefined, Null, Symbol, BigInt

//////////////////////////////////////
// Importants of Data types. 

// Infinity and NaN is Number data type and typof null is object. 

// undefine = The Variable is declered but not assigned some value inside it or a variable is accessing even befoure initialize it at the case of var. 
// example of undefined
let x;
// console.log(x); //undefined not an error. 

///////////////////////////////////////////


// 2. Non Primitive data types - Variables are stored multiple values, like object array functions and other and are stored by reference. 


// examples of premitive and non primitive

const obj = {
    name: 'Anurag',
    age: "28"
}

// console.log("name", obj.name)// Anurag, By reference

// And//

let a = 10;
let b = a;
b = 20;
// console.log(a); // 10,  Primitive (Copy by Value)
//  other examples

console.log(typeof null)// object. 
console.log(typeof [])// object. 
console.log(typeof {})// object. 
console.log(typeof NaN)// number. 


// Questions and Answers.....

// Difference between null and undefined? - Undefined means no value assigned, null means empty value intentionally.


//////////////// Type Coercion////////
// Def- Type coercion is automatic conversion of data types by JavaScript during operations.
// ex- "5" + 2 = "52", String → Number

//////////// Type Coercion ////////
// Def- Type Conversion means the developer manually converts one data type into another.
// ex- Number("123");   // 123
// parseInt("123"); // 123
// +"123";          // 123

// importanct type coresion
console.log(2 * "3");   // 6
console.log(2 * "a");   // NaN (Not a Number)
console.log("5" - 2);   // 3
console.log("5" + 2);   // "52" (string concatenation)

///////////////////// parseInt va Number comparision ////////////

// | Feature             | `parseInt()`     | `Number()`      |
// | ------------------- | ---------------- | --------------- |
// | Converts            | String → Integer | Any → Number    |
// | Decimal support     | ❌ No             | ✅ Yes           |
// | Stops at non-number | ✅ Yes            | ❌ No            |
// | Radix support       | ✅ Yes            | ❌ No            |
// | Strictness          | Loose            | Strict          |
// | "100px"             | 100              | NaN             |
// | Use case            | Extract number   | Validate number |