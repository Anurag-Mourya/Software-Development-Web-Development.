# Master Coding Questions: var, let, and const

Here is every type of coding question an interviewer can ask you about `var`, `let`, and [const](file:///c:/Users/dell/Desktop/WebDevelopment%20Interview/script.js#66-69), with fully explained answers.

---

## 🟢 Level 1: The Basics (Scope)

### Q1: Block vs Function Scope
```javascript
{
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a);
console.log(b);
console.log(c);
```
### ✅ Answer
**Output:**
```
1
Uncaught ReferenceError: b is not defined
```
**Why does this happen?**
1. **`var a` (Function Scope)**: `var` ignores the block `{}` walls. Since there is no function surrounding it, `a` becomes part of the global scope. That's why `console.log(a)` works.
2. **`let b`, `const c` (Block Scope)**: These are strictly loyal to the block `{}` they are in. As soon as the code passes the closing bracket `}`, variable `b` and `c` are destroyed from memory. Trying to access them outside causes an error.

---

### Q2: Re-declaration
```javascript
var x = 10;
var x = 20; // Valid?

let y = 10;
let y = 20; // Valid?
```
### ✅ Answer
- **`var x` (Valid)**: `var` is messy. It allows you to re-declare the same name, and it just overwrites the old one. `x` becomes 20.
- **`let y` (Error)**: **SyntaxError**. `let` does NOT allow re-declaration in the same scope. It protects you from accidentally creating duplicate variables.

---

## 🟡 Level 2: Hoisting & TDZ

### Q3: Temporal Dead Zone (TDZ)
```javascript
console.log(a);
console.log(b);
var a = 10;
let b = 20;
```
### ✅ Answer
**Output:**
```
undefined
Uncaught ReferenceError: Cannot access 'b' before initialization
```
**Why does this happen?** (Memory Creation Phase)
1. **`var a`**: During the memory phase, JavaScript finds `var a` and hoists it to the top, giving it a default value of `undefined`. So `console.log(a)` prints `undefined`.
2. **`let b`**: JavaScript also finds `let b` and hoists it. BUT, it puts it in a special "Temporal Dead Zone" (TDZ). It is forbidden to touch `b` until the execution reaches line 4 (`let b = 20`). Accessing it early crashes the code.

---

### Q4: Function Scope Hoisting
```javascript
function test() {
    console.log(a);
    var a = 10; 
}
test();
```
### ✅ Answer
**Output:** `undefined`
**Why?**
Hoisting happens inside the scope where the variable is.
- `var a` is inside `test()`.
- JS moves `var a` to the **top of `test()`**, not the top of the file.
- So getting `a` before assignment gives `undefined`.

---

## 🟠 Level 3: Shadowing (The Tricky Part)

### Q5: Valid Shadowing
```javascript
let a = 100;
{
    let a = 20;
    console.log(a);
}
console.log(a);
```
### ✅ Answer
**Output:**
```
20
100
```
**Why does this happen?**
This is called **Shadowing**.
- Inside the block, the inner `let a = 20` creates a **new** variable that hides the outer `a`.
- When you ask for `a` inside the block, JS gives you the closest one (20).
- Outside the block, the inner `a` is gone, so you see the original `a` (100).

---

### Q6: Illegal Shadowing
```javascript
let a = 10;
{
    var a = 20; // Error!
}
```
### ✅ Answer
**Output:** **SyntaxError: Identifier 'a' has already been declared**
**Why?**
- `var` tries to attach itself to the nearest function (or global) scope.
- It looks up and sees `let a` is already there in the same scope.
- JS forbids `var` from invading a scope already occupied by a `let` variable of the same name.
- **Note:** The reverse (`let` inside `var`) is totally fine because `let` stays trapped inside its block.

---

## 🔴 Level 4: The Loop "Closure" Problem

### Q7: setTimeout with var
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```
### ✅ Answer
**Output:** `3, 3, 3`
**Why does this happen?**
- `var i` is single global shared variable.
- The loop runs 3 times very fast. `i` becomes 0, 1, 2, then 3 (loop ends).
- **Then** (after 1 second), `setTimeout` runs. It looks at the shared `i`, which is now **3**. So all of them print 3.

---

### Q8: setTimeout with let
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```
### ✅ Answer
**Output:** `0, 1, 2`
**Why?**
- `let` is block-scoped.
- For **each iteration** of `for(let i...)`, JavaScript creates a **completely new `i`** in memory.
- `setTimeout` in iteration 1 gets the copy of `i` where value is 0.
- `setTimeout` in iteration 2 gets the copy of `i` where value is 1.
- They don't share the same `i`.

---

## 🟣 Level 5: Const Objects

### Q9: const Mutability
```javascript
const a = 10;
a = 20; // Error?

const obj = { name: "Alice" };
obj.name = "Bob"; // Error?
```
### ✅ Answer
- `a = 20`: **TypeError** (Assignment to constant variable). You cannot point the variable arrow to a new value.
- `obj.name = "Bob"`: **Allowed!**
**Why?**
[const](file:///c:/Users/dell/Desktop/WebDevelopment%20Interview/script.js#66-69) only locks the **container label** (binding). It does not freeze the **contents** inside the object. You can still modify properties of the object.

---

## 🧠 Brain Teaser

### Q10: Priority
```javascript
var a = 10;
{
    console.log(a); 
    // What if I uncomment the line below?
    // let a = 20; 
}
```
### ✅ Answer
**Scenario 1 (As is):**
Output: `10`
**Why?** Variable lookup finds global `a`.

**Scenario 2 (Uncomment `let a = 20`):**
Output: **ReferenceError** on `console.log(a)`
**Why?**
- Even though `var a` exists outside, the presence of `let a` inside the block puts `a` in the **Temporal Dead Zone (TDZ)** for that entire block.
- The block effectively says: "I have my own `a` coming later, so I refuse to see the outer `a`. But you can't use my `a` yet because you're too early."
