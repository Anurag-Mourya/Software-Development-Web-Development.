///////////

// Q. 1, Find the sum of array. 
//Using With - for loop, for......of loop, .reduce(),  .forEach()

//With For Loop
const arr = [2, 3, 4, 5, 6, 7];
let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

//With for......of loop
// for (let valueOfArr of arr) {
//     sum += valueOfArr
// }

// console.log(sum)

// For .reduce()
const totalr = arr.reduce((acc, current) => acc + current, 0)
// console.log(totalr);

// with .forEach();

// arr.forEach((val) => sum += val);


///////////////////////////// Reverse the strng. //////////////////////////////////
// Method 1. - 
// const str = "hello";
// const reverse = str.split("").reverse().join("");


// via for loop
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // append characters from end
    }
    return reversed;
}
// console.log(reverseString("hello")); // "olleh"

// console.log(reverse);


// via for of loop and prepanding.

const char = "hello";
let reverse = ""

// for (let ch of char) {
//     reverse = ch + reverse// h> h, e+h> eh
// }
// console.log(reverse)

////////////////////////////////////////////// Check If it is palindrome ////////////////////////////

// With string. 

let str = "level";

// function isParendorm(stirng) {

//     const reverseStr = stirng.split("").reverse().join("");
//     // console.log(reverseStr)
//     if (reverseStr === stirng) {
//         console.log("Yes it the given str is Parendom")
//     } else {
//         console.log("Not ");
//     }
// }
// isParendorm(str)


// ////////////////////////// Count Vowels /////////////////

// let volStr = "Anurag Mourya";
// function vowls() {
//     const vowChar = "aeiou";

//     let count = 0;

//     for (let i = 0; i < volStr.length; i++) {
//         const volChars = volStr[i].toLowerCase();
//         if (vowChar.includes(volChars)) {
//             count++
//         }
//     }
//     console.log(count);
// }
// vowls();



//////////////////////// Remove dublicate from a number. ///////////////////// 

const num = [1, 2, 3, 2, 4, 3, 5];

// methods
const arr2 = [1, 2, 1, 2, 3, 2, 3, 6, 4];

const arr1 = [];


// For for...of loop
// for(a of arr2){
//     if(!arr1.includes(a)){
//         arr1.push(a)
//     }
// }

// For main for iteration loop....
for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
        arr1.push(arr2[i])
    }
}
console.log(arr1)

    // method one. with filter() and indexOf()
    (function numbers() {
        const unique = num.filter((value, index, self) => self.indexOf(value) === index);
        // console.log(unique)
    })();

// method two. with .set()
const unique = new Set(num);
// console.log(unique) 


///////////////////////////////////// Reverse Each word in sentence //////////////////////////////

const sentence = "Anurag Mourya";
(function () {
    const arr = sentence.split(" ")
    const reverse = arr.map((val) => val.split("").reverse().join(""));
    const joinArr = reverse.join(" ")
    // console.log(joinArr)
})()



////////////////////////// Flattern Nested Array. ////////////////////////


// With arr.flate(infinity);
const nestArr = [2, 3, [4, 2]];

// console.log(nestArr.flat(Infinity)) //  // Infinity → flattens all levels


// Using Recursion.
const nestA = [1, [2, [3, [4]], 5]];

function recursive(arr, flatArr = []) {

    for (val of arr) {
        if (Array.isArray(val)) {
            recursive(val, flatArr);
        } else {
            // console.log(flatArr)
            flatArr.push(val);
        }
    }

    return flatArr

}

console.log(recursive(nestA))
// console.log(nestedArrayFun([1, [2, [3, 4]]]));


// method 2
function flattenArray(arr) {
    return arr.toString().split(",").map(Number);

    // or 
    //   const str= arr.toString()
    //   return JSON.parse(`[${str}]`);

}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]


////////////////////////////////// Rotate elements with k position ////////////////////////////

let arr5 = [2, 3, 5, 6, 6]
let pos = 3;
function rotateElement(arr, k) {
    k = k % arr.length;
    let remove = arr.splice(-k);// [5,6,6]
    arr.unshift(...remove);
    return arr
}

// console.log(rotateElement(arr5, pos))


/////////////////////////////////// Longest word in sentence ////////////////////////////////

let word = "Hii my name is AnuragMourya";

function longest(w) {
    let wArr = w.split(" ");
    let lw = "";
    for (let i = 0; i < wArr.length; i++) {
        if (wArr[i].length > lw.length) {
            lw = wArr[i];
        }
    }
    // console.log(lw)
}
// longest(word)

// method 2- Using .sort(a,b)

function longest(w) {
    let wArr = w.split(" ");

    let sortA = wArr.sort((a, b) => b.length - a.length)[0];//a/b.length = number of characters in string a and b
    console.log(sortA)
}
// longest(word)



//////////////////////////////////// Capital first Letter of String. or Array ////////////////////

/// capitalize first letter

let str5 = "i love javascript";

function cap(st) {
    const stA = st.split(" ");
    const capA = stA.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    return capA.join(" ");
}
console.log(cap(str5))


////////////////////////////// remove vowels on a stings. ///////////////////////////////////

let st = "Hello World";

function removeVowels(str) {
    let result = "";
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}

removeVowels(st)



//////////////////////// count the words in sentence. //////////////////////

let words = "    I    Love      Javascript";

const countWords = words.split(" ").filter((val) => val !== "").length

let trimedWord = words.trim();
console.log(countWords)



// /////////////////////////////// Convert str to readeable words./////////////////
const av = "i love javascript";

const readWord = av.split(" ").map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
console.log(readWord)



// ////////////////////////////////////// Check is str is unique ////////////////////// 

let str2 = "qwe";
const unique1 = new Set(str2).size === str2.length;
console.log(unique1);

////////////////////////////////////  count occerance in vlues of an array ////////////////////
const arr6 = [1, 2, 2, 3, 1]

let obj = {}
for (val of arr6) {
    console.log("objjj", obj)
    obj[val] = (obj[val] || 0) + 1;
}

// console.log(obj)


////////////////////////////////////////// Invert Object keys and values ////////////////////////////////

const obj1 = { a: 1, b: 2, c: 3 };

let newObj = {};

for (key in obj1) {
    newObj[obj1[key]] = key;
}
// console.log(newObj)


/////////////////////////////// Delete object Properties /////////////////////


function removeKey(obj, rP) {
    const makeCopy = { ...obj };
    delete makeCopy[rP]
    console.log(makeCopy)
}

// removeKey(obj,"name")

///////////////////////////////// Sum of all the keys of object. //////////////////////////

const obj3 = { a: 10, b: 20, c: 30 };

// sum of all the values. 
let total = 0;
for (key in obj3) {
    total += obj3[key]
}
console.log(total)


/////////////////////////////////// Convert object to array and array to object. ///////////////////

// sum of all the values. 
let ar = [];
for (key in obj) {
    ar.push([key, obj[key]])
}

console.log(arr)

// other method//
const obj2 = { a: 10, b: 20 };

const arrq = Object.entries(obj2);

console.log(arrq);


// reverse array to object. 
const arrs = [["a", 10], ["b", 20]];

const objs = Object.fromEntries(arrs);

console.log(objs); // { a: 10, b: 20 }

// using loop
function arrayToObject(arr) {
    let obj = {};

    for (let [key, value] of arr) {
        obj[key] = value;
    }

    return obj;
}

const arrd = [["a", 10], ["b", 20]];
console.log(arrayToObject(arrd));


//////////////////////////////////////// Recursion /////////////////////
// Q - Add the arry element using recursion. 
let arrf = [1, 2, 3, 4];

// console.log(arr.slice(2))

function rec(arrf) {
    if (arrf.length === 0) return 0;
    return arrf[0] + rec(arrf.slice(1));
}

console.log(rec(arrf))


//////////////////////////////////// factorial using reqursion///////////////////////////////
// function fact(n){
//     if(n<=1) return 1;
//     return n* fact(n-1);
// }
// console.log(fact(133334))

// this is another
// Reflect.deleteProperty(obj, "name");
// console.log(obj)

// ///////////////////////////////////// Flatten nested array ///////////////////////////////////



