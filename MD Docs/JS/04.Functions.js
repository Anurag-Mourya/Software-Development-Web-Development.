
////////////// Functions decleratin and expression/////////////
// Def-  function decleratin    

// A function declaration defines a named function using the function keyword.
// Hoisted completely(able to fech the value)...
// ex. - 
// function greet() {
//   console.log("Hello!");
// }

// Def - Function expression. 
// A function expression defines a function and assigns it to a variable.
// not fully hoisted. 
const fnexpre = function greet() {
    console.log("Hello!");
}



////////// Types of functions in JS//////////////////////

// JavaScript functions support arrow syntax, default and rest parameters, callbacks, higher order functions, and IIFE to write clean, reusable, and powerful code.
// 1. Arrow Function - This is the shorter way of writing function using arrow => in js without using function key word.
// example - 
const square = x => x * x;
// console.log(square(3))

// important point - Arrow function do not there own this. 
// example
const obj = {
    name: "Anurag",

    arrFun: () => {
        console.log("arrow", this.name)
    },

    normalFun: function () {
        console.log("normal", this.name)
    }
}

// obj.arrFun() //arrow [blank or undefine output]
// obj.normalFun()// normal Anurag


////////////// Parameter and Argument. /////////////////////

//Paremeter - Are the variables passed in function definitions. example = function name(params) {}
//Argumants - Are  actual values passed to the function.. example = name("Anurag")
// Parameters receive values, arguments send values.

// /////////////////// Rest parameter////////////////

// Definition - Rest parameter collects multiple arguments into an array.
// example- 
const sumOfNos = function (...numbers) {
    let total = 0;
    for (num of numbers) {
        total += num;
    }
    // console.log(total);
}
sumOfNos(2, 3, 4, 5)

////////Call Back Function////////

//Definitions - A Function pass inside an another function as an argumant.
// example - setTimeout is also an example of Call back Fucntion

function normalFun(name, callbackFun) {
    console.log(name);
    callbackFun();
}
function argFun() {
    console.log("Call back function is called.")
}
normalFun("Anurag", argFun);
//////////////////////////////

//////////High Order Fucntions (HOF)///////////////
// Definitions - . These type of function also returns a function. Or These types of functions also accept callback functions. examples = .map, .filter, .reduce they are return and when we pass fuction as call back then the calling fucntion is HOF, 

function calculate(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
// console.log(calculate(5, 3, add)); // 8


/////////////// Difference of call back fucntion and hight order function ////////////
function greet(name, callback) {   // HOF, because use call back
    console.log(name);
    callback();
}

function sayHi() {
    console.log("Hi!");
}

// greet("Anurag", sayHi);

// greet → Higher-order function
// sayHi → Callback function, it pass to another functions as an argument.


// HOF without with reutrn a fucntion
function outer() {
    return function () {
        // console.log("Hello");
    };
}

//////////////IIFE (Immediately Invoked Function Expression)//////////////////

// definition - A function that runs immediately after it is defined.
// examples - 
(function () {
    // console.log("I am IIFE");
})();

// arrow iife
(() => {
    // console.log("Arrow IIFE");
})();

/////////////////////////////////////////////////////////////////////////////
//Why IIFE is used?
// Answer:
// To avoid global variables and execute code immediately.



//////////////////////SCOPE//////////////////

// Definitions - Scope is decides where a variable can be accessed in the code. 
// ex- 

let x = 10;
function test() {
    console.log(x);
}
// here in this code x is in the global scope, it can be accessed inside the function."

///////////////////LEXICAL SCOPE ///////////////////
// From above example

// x is declared in the global scope
// test() is in a function scope
// A function can access variables from its outer (parent) scopes where it was defined.
// This behavior is called Lexical Scope



///////////////////////EXECUTION CONTEXT//////////////////
// Definition- Execution Context is an environment where JS code is executed. 
// There are two types of EC is 1. Global EC and 2. Functions Execution Context. 
// When The JS code is runs it creates two phases 1. Memory Creation phase(at that time all the variables stored undefined(hoisting) and all the functions are fully stored.) and 2. code Execution Phase(code runs line by line and variable allowcate values). 

/////////////////Call Stack //////////////////////
// Definition - Call Stack is a stack that keeps track of function calls.

// example- 
function one() {
    two();
}

function two() {
    three();
}

function three() {
}

one();

// Call Stack flow accourding to above example. 
// Global
// one()
// two()
// three()

// LIFO → Last In First Out - "Jo last aata hai, woh pehle jaata hai."



//////////////////Garbage Collection///////////////
// Def- JS Garbage Collection removes unused variables from memory automatically.
// ex- x removed after function execution
function test() {
    let x = 10;
}
test();


// JavaScript uses lexical scoping and execution contexts to manage memory and execution. Code runs in two phases, tracked by the call stack. Closures allow functions to retain access to outer variables, and garbage collection cleans unused memory.



// code examples./////

// > Funtions decleration and expression.
// > Hoisting. with Fucntions decleration and expression
// > examples of all types of functions (arrow, IIFE)
// > Normal funciton have there own this and arrow function do not there own this code it.
// > Rest parameter. function
// > Hight order fucntion and callbacks function. > HOF with return function. 