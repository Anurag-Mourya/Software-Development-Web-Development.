// let age;   // declaration
// age = 25;  // assignment
// let age = 25;//Initialization
// let age = 25; // here age is Identifire. 

//////////////SCOPE CONFUTION let var and const//////////////////
// Def. Scope - Scope means: where a variable can be used in your code.

// True Statement 

// 1.var → function scope

// 2. let/const → block scope

// 3. Function is also a block, behaves same for let/const but not for var That’s why we include function scope

//  Let understand the Statement number 1. A variable declared with var inside a function is only accessible inside that function.
// But if var is declared inside a block ({}), it is still accessible outside that block (within the function).
// That’s why we say var has function scope.

// Examples.

// Var is only accessible inside the function not block.

function varAccessible() {
  var myName = "Anurag";
  console.log("Inside fucntion with var->", myName);// accessible ✅
}
varAccessible();
// console.log("Outside fucntion with var->", myName);// 01.Day.js:27 Uncaught ReferenceError: myName is not defined ❌

// but If we do same thing with block then it is accessibale completelly.

if (true) {
  var aNum = 3434;
}
console.log("Outside block with var->", aNum);// accessible ✅

// because of this, give an error, illigal Shadowing. 
// let a = 33;
// {
//   var a = 55;
//   console.log(a)
// }


// Hence prove the var has fucntion scope and global scope


// Statement 2- let and const have block scope, meaning they are accessible only inside the block {} in which they are declared—whether it’s an if, else, loop, or function block.

// examples?

if (true) {
  let a = 10;
}

console.log(a); // ❌ ReferenceError


function test() {
  const b = 20;
  console.log(b); // ✅
}

console.log(b); // ❌ ReferenceError 

{
  let x = 1;

  {
    let y = 2;
    console.log(x); // ✅
  }

  console.log(y); // ❌
}

////////////////////////////////////////////////////////////////////


//////////////////////// DIFFERENCE BETWEEN THEM IF INTERVIEWER ASK///////////////////////////////////////

// The main differences between var, let, and const are scope, mutability, and hoisting.
// var is function-scoped, while let and const are block-scoped.
// In terms of mutability, var can be re-declared and reassigned, let can be reassigned, but cannot be re-declared in the same scope, and const can neither be re-declared nor reassigned and must be initialized at declaration.

// Also, all three are hoisted, but var is initialized with undefined, whereas let and const remain in the Temporal Dead Zone until they are declared.

///////////////////// Practice with code. ////////////////////////

// > define scope for all var,let and const.

// > Define the mutability.
// > Define the hoisting. 



/////////////////////////////////// Leagal and Illigal Shadowing /////////////////////////

// Shadowing or Legal Shadowing --------------

// DEF - Shadowing in JavaScript occurs when a variable in an inner scope has the same name as a variable in an outer scope. The inner variable hides the outer variable within that scope. Shadowing works because of lexical scoping.

// ex. 

let a = 33;
{
  let a = 55;
  console.log(a)
}


// Illigal Shadowing. 

// Def- let and const are block-scoped, while var is function-scoped. Illegal shadowing occurs when var conflicts with an existing let or const declaration in the same scope. var tries to shadow a let or const in same scope

let a = 33;

// here var a have global scope while it is inside the block, because it is function scope, so now both variables are in global scope so conflict is produce and given re-declered error. 
{
  var a = 55;
  console.log(a)
}// to fix this wrape inside the function because var is function scope.

function a() {
  var a = 55;
}

