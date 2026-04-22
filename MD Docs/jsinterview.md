# JavaScript Scope Types

## 1. Global Scope
- Variables declared outside any function or block are in global scope.
- They can be accessed from anywhere in the file.

```js
var appName = "Interview Prep"; // global scope

function showName() {
  console.log(appName); // accessible here
}

console.log(appName); // accessible here too
```

## 2. Function Scope
- Variables declared with `var` inside a function are function-scoped.
- They are only accessible inside that function.

```js
function greet() {
  var message = "Hello";
  console.log(message); // works
}

greet();
// console.log(message); // Error: message is not defined
```

## 3. Block Scope
- Variables declared with `let` or `const` inside `{}` are block-scoped.
- They exist only inside that block (`if`, `for`, `while`, etc.).

```js
if (true) {
  let age = 25;
  const city = "Delhi";
  console.log(age, city); // works
}

// console.log(age);  // Error
// console.log(city); // Error
```

## 4. Lexical Scope
- JavaScript uses lexical (static) scoping.
- A function can access variables from its outer scope
- A function can access variables from its outer (parent) scopes where it was defined.

```js
const outer = "I am outside";

function parent() {
  const parentVar = "I am in parent";

  function child() {
    console.log(outer);     // from global scope
    console.log(parentVar); // from parent scope
  }

  child();
}

parent();
```

### Quick Summary
- `var` -> function scope (or global if outside function)
- `let`, `const` -> block scope
- Lexical scope -> inner functions remember outer variables based on where they are written

---

# Promises, Stages, Callbacks, and Async/Await

## Interview Definition
- A **Promise** in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.


## Interview Question
**What are promises, what are their stages, and how do they differ from callbacks and async/await?**

## Very Simple Definition (Purpose)
- A **Promise** is an object that represents a future result of an asynchronous task.
- It helps us handle operations like API calls, file reading, and timers in a cleaner way.
- Main purpose: avoid deeply nested callbacks and write readable async code.


## Promise Stages (States)
1. **Pending**
- Initial state.
- Operation is still running.

2. **Fulfilled**
- Operation completed successfully.
- Promise has a resolved value.

3. **Rejected**
- Operation failed.
- Promise has a reason/error.

```js
const p = new Promise((resolve, reject) => {
  const ok = true;

  if (ok) {
    resolve("Success"); // fulfilled
  } else {
    reject("Failed");   // rejected
  }
});

p.then((data) => console.log(data))
 .catch((err) => console.log(err));
```

## Promise vs Callback vs Async/Await

### 1) Callback
- A function passed into another function to run later.
- Works, but can create "callback hell" if nested too much.

```js
setTimeout(() => {
  console.log("Callback executed");
}, 1000);
```

### 2) Promise
- Better structure than nested callbacks.
- Uses `.then()` and `.catch()`.

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

### 3) Async/Await
- Syntactic sugar on top of promises.
- Looks like synchronous code, easier to read.

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

## One-Line Difference (Interview Ready)
- **Callback**: old style, can become nested.
- **Promise**: cleaner async flow with `.then/.catch`.
- **Async/Await**: cleanest readable style built on promises.


| Feature                 | Normal Function                                                                                           | Arrow Function                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Definition**          | A traditional function defined using the `function` keyword.                                              | A shorter syntax function introduced in ES6 using `=>`.                                                      |
| **Syntax Example**      | `javascript function add(a, b) { return a + b; } `                                                        | `javascript const add = (a, b) => a + b; `                                                                   |
| **`this` Binding**      | Has its **own `this`**, determined by how it's called.                                                    | **No own `this`**, inherits from surrounding scope (lexical).                                                |
| **`this` Example**      | `javascript const obj = { name: "A", greet: function() { console.log(this.name); } }; obj.greet(); // A ` | `javascript const obj = { name: "A", greet: () => { console.log(this.name); } }; obj.greet(); // undefined ` |
| **`arguments` Object**  | Available (built-in).                                                                                     | Not available.                                                                                               |
| **`arguments` Example** | `javascript function test() { console.log(arguments); } test(1,2); `                                      | `javascript const test = () => console.log(arguments); // ❌ error `                                          |
| **Constructor (`new`)** | Can be used as constructor.                                                                               | Cannot be used as constructor.                                                                               |
| **Constructor Example** | `javascript function Person(name) { this.name = name; } new Person("Ram"); `                              | `javascript const Person = (name) => { this.name = name; }; new Person("Ram"); // ❌ error `                  |
| **Prototype**           | Has `prototype` property.                                                                                 | No `prototype`.                                                                                              |
| **Prototype Example**   | `javascript function A() {} console.log(A.prototype); `                                                   | `javascript const A = () => {}; console.log(A.prototype); // undefined `                                     |
| **Return Behavior**     | Requires explicit `return`.                                                                               | Can have implicit return.                                                                                    |
| **Return Example**      | `javascript function sum(a,b){ return a+b; } `                                                            | `javascript const sum = (a,b) => a+b; `                                                                      |
| **Hoisting**            | Function declarations are hoisted.                                                                        | Not hoisted (behaves like variables).                                                                        |
| **Hoisting Example**    | `javascript hello(); function hello(){ console.log("Hi"); } `                                             | `javascript hello(); const hello = () => {}; // ❌ error `                                                    |
| **Use as Method**       | Best for object methods.                                                                                  | Not suitable for methods.                                                                                    |
| **Method Example**      | `javascript const obj = { val: 10, getVal: function(){ return this.val; } }; `                            | `javascript const obj = { val: 10, getVal: () => this.val }; // ❌ wrong `                                    |
| **Event Handlers**      | `this` refers to the element.                                                                             | `this` does NOT refer to element.                                                                            |
| **Event Example**       | `javascript btn.addEventListener("click", function(){ console.log(this); }); `                            | `javascript btn.addEventListener("click", () => { console.log(this); }); `                                   |
| **Best Use Case**       | Constructors, methods, dynamic `this`.                                                                    | Callbacks, short functions, functional programming.                                                          |
| **Callback Example**    | `javascript arr.map(function(x){ return x*2; }); `                                                        | `javascript arr.map(x => x*2); `                                                                             |

