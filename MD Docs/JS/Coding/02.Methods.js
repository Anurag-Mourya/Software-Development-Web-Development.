// ///////////////////////////// Strings Methods. ////////////////////////////////////

// String methods are not stored inside the string value. They are stored on String.prototype.

// JavaScript strings are immutable. 

// Strings are primitive Data type. 

// Lest create string with No-Primitiv way. 
let s2 = new String("hello"); // This create string object
// console.log(s2)

// ////////////////////// Types of string methods and functions /////////////////////////

// Search methods
// Extract methods
// Change/format methods
// Split/convert methods
// Character/code methods
// Compare/utility methods
// Static String functions


////////////////////////////////// 1. includes() //////////////////////////

// In JavaScript, the .includes() method is used to check whether a value exists inside a collection. It works on specific data types that are iterable or list-like. Returns true or false. 

// Works with strings and array perfectily. 

// ex-

const str = "Anurag Mourya";
// console.log(str.includes("Mou"));//true.

const arr = ["Anurag", "Mourya", "Anurag", "Mourya"];
// console.log(arr.includes("Mourya"));//true.

// Q. Remove all the vowels in string a string. 


////////////////////////////////// 2. indexOf() //////////////////////////
// def- .indexOf() returns the index of the first occurrence of a specified value in a string or array. If not found, it returns -1.

// important point is - first occurrence -> Help to remve duplicacy on arrays with filter. 

// ex
// console.log(str.indexOf("A"))// 0
// console.log(arr.indexOf("Mourya"))//1

// ////////////////////////////// 3. lastIndexOf() ///////////////
// Def - lastIndexOf() is used to find the last occurrence of a value in a string or array.
// console.log(str.lastIndexOf("a"))// 12
// console.log(arr.lastIndexOf("Mourya"))//3

///////////////////////////////////////////// 4. Start with and end with/////////////////
// Checks whether a string starts with a given value. works with stings only. Retrn true or false
// console.log(str.startsWith("Anu"))//true//

// Checks whether a string ends with a given value.
let str1 = "image.png";
// console.log(str1.endsWith(".png")); // true



//////////////////////////////////// 5. slice() and substring()  /////////////////////////////////
// def - Extracts part of a string or array from start index to end index, end index is not included.
// syntax - slice(startIndex, endIndex);

let str2 = "JavaScript";
// console.log(str2.slice(0, 4)); // Java
// console.log(str2.slice(-6)); // Script

// The only difference of substing and slice is If you pass negative values, substring() treats them like 0.
// console.log(str2.substring(0, 4)); // Java
// console.log(str2.substring(-6)); // Script



///////////////////////////////////// 5.1  .splice() ///////////////////////
// 
// array.splice(start, deleteCount, item1, item2, ...), and it change the original array
let arr3 = [1, 2, 3, 4];
arr3.splice(1, 2);
// console.log(arr3);// [1,4]

//////////////////////////////////// 6. charAt() and at() /////////////////////////////////
// def - Returns the character at a specific index. -ve index is not given any value. charAt() in JavaScript is only meant for strings. It does NOT work directly with all data types.

let str3 = "Hello";
// console.log(str3.charAt(4)); // 0
// console.log(str3.charAt(-1)); // empty value given.

// use at()for -ve values from last index and +ve value for first index.
// console.log(str3.at(1)); // empty value given.

////////////////////////// replace() and replaceAll() ///////////////////
// they works only with strings

// def- replace() is Replaces first match only.
let str4 = "I like JS";
// console.log(str4.replace("JS", "JavaScript"));// I like JavaScript

// def- replaceAll() is Replaces Replaces all matches. match only.
let str5 = "apple apple apple";
// console.log(str5.replaceAll("apple", "mango"));// mango mango mango

/////////////////////// 7. split()   /////////////////////

// it only works directly on strings. For other data types, must convert them to strings first.

// def - Converts a string into an array using a separator.

let str6 = "a,b,c";
// console.log(str6.split(",")); // ["a", "b", "c"]

////////////////// 8. concat() //////////////////////////////
let a = "Hello";
let b = "World";
// console.log(a.concat(" ", b)); // Hello World


///////////////////9. repeat()/////////////////
// it only works directly on strings. For other data types, must convert them to strings first.
let str7 = "ha";
// console.log(str7.repeat(2)); // hahaha



//////////////////////////////////////// 10. .concat()? ///////////////////////////

// .concat() is an array method in JavaScript used to merge arrays or add values to an array.

// ex- 
// Merge two arrays
const a1 = [1, 2];
const b1 = [3, 4];

const result = a1.concat(b1);
console.log(result); // [1, 2, 3, 4]

// Add values
const arr2 = [1];

arr2.concat(2, "hello", true); // [1, 2, "hello", true]



//////////////////////////////////// 11. .unshift() ////////////////////////
// def - The .unshift() method in JavaScript is used to add one or more elements to the beginning of an array.

// ex - array.unshift(item1, item2, ...)

let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);//[1, 2, 3, 4]




/////////////////////////////  Methods and properties of new Set();///////////////////////////////

// | Method / Property | Description                | Example                            | Output             |
// | ----------------- | -------------------------- | ---------------------------------- | ------------------ |
// | `add(value)`      | Adds a value to the Set    | `set.add(4)`                       | `Set {1, 2, 3, 4}` |
// | `has(value)`      | Checks if value exists     | `set.has(2)`                       | `true`             |
// | `delete(value)`   | Removes a value            | `set.delete(2)`                    | `Set {1, 3}`       |
// | `clear()`         | Removes all elements       | `set.clear()`                      | `Set {}`           |
// | `size`            | Returns number of elements | `set.size`                         | `3`                |
// | `forEach()`       | Iterates over values       | `set.forEach(v => console.log(v))` | prints values      |
// | `for...of`        | Loop through Set           | `for (let v of set)`               | prints values      |


////////////////////////////////////////////////////////////////////////////////////////

// | Method   | Array | String | Notes        |
// | -------- | ----- | ------ | ------------ |
// | includes | ✅     | ✅      | Same concept |
// | indexOf  | ✅     | ✅      | Same         |
// | slice    | ✅     | ✅      | Works both   |
// | concat   | ✅     | ✅      | Works both   |
// | length   | ✅     | ✅      | property     |

// Methods only for arrays

// Most methods:
// push, pop
// shift, unshift
// map, filter, reduce
// find, findIndex
// some, every
// flat, flatMap
// sort, reverse
// splice
