

//////////////////////////// 1. For Loop ///////////////////////

// Def - A loop where you control start, condition, and increment manually.

//Note-> They works with index bases like array, string, numbers(count print), object(not works directily, It works with Object.keys, because object are not iterable.)

// ex -
// for (initialization; condition; increment) {
//     // code
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }



// For loop ex with objects.
// let user = { name: "Anurag", age: 25 };

// let keys = Object.keys(user);

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     console.log(key, user[key]);
// }


// Coding Examples ---
// 1. For loop with - Array, Strings, Numbers, and Object, Infinite for loop(;;).


////////////////////////////////// 2. for...in Loop //////////////////////////////////

// Def - Used to iterate over keys (property names) of an object.




/////////////////////////////////// 3. for...of Loop /////////////////////////////////

// Def - Used to iterate over values of iterable objects(Array,String,Map, Set). Not workds with object directily.

//  When we use value directily.






///////////////// Loops with Array's///////////////////

const arr = [1, 2, 4, 5];
// Fetch array values with for loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

// Fetch array values with for...of loop
for (let value of arr) {
    // console.log(value)
}

// for...in with Array (⚠️ Not Recommended)
for (let index in arr) {
    // console.log(arr[index])
}


///////////////// Loops with Objects///////////////////


const obj = {
    name: "Anurag",
    age: 29,
}

// With for loop important.  same with // with for.....of using object keys
const objkeys = Object.keys(obj);
for (let i = 0; i < objkeys.length; i++) {
    const key = objkeys[i];
    // console.log( key,  obj[key])
}

// With for......in loop.
for (let key in obj) {
    console.log(`${key}:`, obj[key])
}





// Coding Examples ---
// Code all types of for loops with objects and arry's ..............







