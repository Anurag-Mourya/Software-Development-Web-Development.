
// Def- An array is an ordered list of values.

//////////////////// Array Methods /////////////

////////////.splice()(Array mutation)/////////
// array.splice(startIndex, deleteCount, item1, item2, ...)

// .splice() - .splice() is used to add, remove, or replace elements in an array. splice() is an array method used to add, remove, or replace elements by modifying the original array

// What is does.
// 1. Remove elements.> Remove a element or remove multiple elements.
// 2. Add Elements. > Without Removing or Add elements with removing.
// 3. Replace Elements. 
// 4. With negative Index.
// 5. Remove all elements form index. 

// Examples. --- 

const arr = [12, 34, 53, 11, 56, 23, 63]

// Remove a element.
// arr.splice(3, 1)// 11 will remove. //from index,  number to be remove//

// Remove Multiple elements. 
// arr.splice(1, 3)// remove 34, 53, 11

// Add elements without removing. 
// arr.splice(2, 0, 35, 36)// after 34 add 35,36.. //from index-1,0, number to be added.

// Add element with removing.  // this is also the ex. of replace. 
// arr.splice(4, 2, 12, 13)// add element at the place of 56 and 23 is 12, 13.

// Remove al elements from index.
// arr.splice(3)// remove all element from 11 includes

// Negative index. 
arr.splice(-4, 4)// 
// console.log(arr)


////////////.slice()(Shallow copy of an Array)/////////

//  array.slice(startIndex[included], endIndex[excluded])
// slice = .slice() returns a shallow copy of a portion of an array into a new array.,,,

// ex. 

const names = ["anurag", "krishan", "amit"];

// copy a part.
const copyName = names.slice(1, 3)// copy krishna and amit
// console.log(copyName)

// copy krishna and amit this way also
const copyName2 = names.slice(1)// copy krishna and amit
const copyName3 = names.slice(-2);// this is also copy krishna and amit
// console.log(copyName2)
// console.log(copyName3)


// Full copy. 
let copy = names.slice();
// console.log(copy); 


// Negative Index.
const neg = names.slice(-2);
// console.log(neg)


// This is the example of shallow copy example........

let arr1 = [{ name: "A" }, { name: "B" }];

let copy1 = arr1.slice();

copy1[0].name = "Z";

// console.log(arr1[0].name); // "Z"
// console.log(arr1)
// console.log(copy1)


// Code example.

//  How slice() is 