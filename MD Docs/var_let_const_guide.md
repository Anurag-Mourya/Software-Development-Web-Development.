# var, let, and const: Technical Guide (English + Hindi)

Basics guide to understand how to store data in JavaScript.
Interview me yeh topic 100% pucha jata hai.

---

## 1. Technical Definitions

### `var` - Function Scope
- **Description:** Variables declared with `var` are **Function Scoped**.
- **Hinglish:** Iska scope pure function mein hota hai. Agar block `{}` ke andar bhi banaya, toh bhi function ke bahar access ho sakta hai.
- **Problem:** It creates issues because it is not limited to specific blocks like loops or if-statements.

### `let` - Block Scope
- **Description:** Variables declared with `let` are **Block Scoped**.
- **Hinglish:** Yeh sirf ussi block `{}` ke andar accessible hota hai jahan isse banaya gaya hai.
- **Feature:** You can change the value later (Re-assignable).

### `const` - Block Scope & Constant Value
- **Description:** Like `let`, it is **Block Scoped**, but the value cannot be changed once assigned.
- **Hinglish:** Yeh `let` jaisa hi hai (block scope), lekin iski value assign hone ke baad badal nahi sakti.
- **Feature:** Cannot be re-assigned.

---

## 2. Comparison Table (Interview Cheat Sheet)

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** (Kahan milega?) | Function Scope | Block Scope `{}` | Block Scope `{}` |
| **Re-declaration** (Dobara bana sakte hain?) | ✅ Yes | ❌ No | ❌ No |
| **Re-assignment** (Value badal sakte hain?) | ✅ Yes | ✅ Yes | ❌ No |
| **Hoisting** (Upar move hota hai?) | ✅ Yes (`undefined`) | ❌ No (TDZ Error) | ❌ No (TDZ Error) |

---

## 3. Deep Dive with Scenarios

### Scenario A: Scope (Block vs Function)

**Code:**
```javascript
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); // ✅ Output: 10
console.log(b); // ❌ Error: b is not defined
console.log(c); // ❌ Error: c is not defined
```

**Explanation:**
1.  **`var`**: Ignores the block `{}` and attaches to the global or function scope.
    - **Hindi:** `var` block ki boundary ko ignore karta hai.
2.  **`let` / `const`**: Are destroyed as soon as code execution leaves the block `{}`.
    - **Hindi:** `let` aur `const` block ke bahar exist nahi karte.

---

### Scenario B: Shadowing

**Code:**
```javascript
let x = 100; // Global x
{
    let x = 10; // Block x (Shadows global x)
    console.log(x); // Output: 10
}
console.log(x); // Output: 100
```
**Why?**
- The inner `x` **shadows** (hides) the outer `x` within that specific block.
- **Hindi:** Block ke andar wala `x` temporary hai, wo bahar wale `x` ko replace nahi karta, bas chhupa deta hai us block ke liye.

---

### Scenario C: Hoisting & TDZ (Temporal Dead Zone)

**Code:**
```javascript
console.log(a); // Output: undefined
var a = 10;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20;
```

**What is TDZ?**
- **Definition:** The time between **Memory Creation Phase** (variable hoisting) and **Code Execution Phase** (actually assigning the value).
- **Explanation:**
    - `var` is initialized with `undefined` immediately during memory creation.
    - `let` and `const` are hoisted but placed in a **Temporal Dead Zone**. Accessing them before initialization throws a Reference Error.
- **Hindi:** `let` memory mein aa chuka hota hai, lekin use initialize hone se pehle access nahi kar sakte.

---

## 4. `const` Tricky Question

**Question:** Can I change a `const` object?
**Code:**
```javascript
const user = { name: "Rahul" };
user.name = "Anjali"; // ✅ Allowed!
user = { name: "Anjali" }; // ❌ Error!
```

**Why?**
- `const` prevents re-assigning the **Variable identifier**, not the **Object properties**.
- **Hindi:** `const` variable ka reference lock karta hai. Aap object ke andar ki values change kar sakte hain, lekin variable ko naya object nahi de sakte.

## Final Summary
- Use `const` by default.
- Use `let` only if value will change.
- **Never use `var`** (Unless maintaining legacy code).
