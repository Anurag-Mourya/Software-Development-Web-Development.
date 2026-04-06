/////////////////////////////// 

// Definition --- A Closure is a combination of functions and its lexical scope. Thats allow a functon can access our outer variable ever after execution. 

// example 

function outer() {
    let count = 0;

    return function inner() {
        count++;
        // console.log(count);
    }
}

const counterFun = outer();
counterFun(); //1
counterFun();//2

// example explanatin - The inner function remembers the variable count because of a closure, which is created due to lexical scope. The variable count is preserved in memory because the returned function still references it.


// Example 2

function greet(name) {
    return function (message) {
        console.log(message + " " + name);
    };
}

const sayHello = greet("Anurag");
// sayHello("Hello"); // Hello Anurag

// closure is used to maintain the data, hide the data, to create private variables. 



//////////////////////////////Data Hiding with closure////////////////////////////

// def - Data Hiding means the restricting to direct access variable so it can't access directily. 

// ex- 
function counter() {
    let count = 0; // 🔒 private variable

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // 1
increment(); // 2

// here We cannot access count directly from outside, so it is hidden using closure. This is called data hiding..



// Closure is also works with curring. (nested functions.)---- Closures enable currying by allowing inner functions to remember and access parameters of their outer functions even after the outer function has executed. This memory makes it possible to pass arguments one at a time and use them later


//////////////// Code examples. //////////////
// > closuser counter example.
// > say hello exmaple of cloure. 

