# JavaScript Weird Type Conversion

Why:

```js id="z3n4q2"
[] + []        // ""
[] + {}        // "[object Object]"
+ []        // 0
```

# `[] + []`

The `+` operator in JavaScript has these main works:

* Addition
* String concatenation 
* Coercion [implicit(automatically) conversion]

Arrays are objects, not numbers therefore JavaScript converts arrays into primitive values(string).

For arrays the default primitive representation is a string.

For arrays, JS uses:

```js id="on6kr7"
[].toString() // ""
```

So:

```js id="gk3c6g"
console.log([] + [])
```

```js
[].toString() // ""
[].toString() // ""
```

Internally:

```js id="kbh0m0"
[] + []
↓
"" + ""
↓
""
```

Result:

```js id="pr6c8t"
""
```

# `[1,2] + [3,4]`

```js id="jff5tl"
console.log([1,2] + [3,4])
```

Arrays convert into strings:

```js id="7x6s4d"
[1,2].toString() // "1,2"
[3,4].toString() // "3,4"
```

So:

```js id="j5tjlwm"
"1,2" + "3,4"
↓
"1,23,4"
```

Result:

```js id="2tvjaj"
"1,23,4"
```

# `[] + {}`

Arrays become:

```js id="xwxy1f"
[] -> ""
```

Object become:

Objects, converts into primitive values(string).

For default primitive representation is a string.

For Object, JS uses:

```js id="on6kr7"
{}.toString() // "[object, object]"
```

```js id="gyn0tv"
"" + "[object Object]"
↓
"[object Object]"
```


So:

```js id="m7e85p"
console.log([] + {})
```



Result:

```js id="6fyg03"
"[object Object]"
```

# `+ []`

```js id="hylr2d"
console.log(+ [])
```

Result:

```js id="qh1x5n"
0
```


Now:

```js id="c9x06g"
+[]
```

means:

```js id="hkhfmp"
Number([])
```

Array converts to:

```js id="b4f8dg"
""
```

Then:

```js id="rdjlwm"
Number("")
↓
0
```

Final result:

```js id="1tq2x7"
0
```
---


# Explanation of iteration with let and val with setTimeOut()

## Why this prints `3 3 3` with var and why print 0 1 2 with let?

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

## Remember

> `setTimeout` runs after the loop finishes first.

> The loop executes completely before the callback inside `setTimeout` runs.

## `var` has function scope

`var` is not block-scoped.
So inside a loop block, the same variable `i` is reused.

It behaves roughly like this:

```js
var i;

for (i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

There is only one shared `i`.

---

# What happens internally

The loop runs 3 times:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

```txt
i = 0
i = 1
i = 2
```

On the last iteration:

```txt
2 < 3   // true
```

Loop body runs, then:

```js
i++
```

So now:

```txt
i = 3
```

Then condition checks again:

```txt
3 < 3   // false
```

Loop stops.

So after the loop finishes:

```js
i === 3
```

---

# Then `setTimeout` callbacks run

Now all callbacks execute.

Each callback checks the same variable `i`.

At this moment:

```js
i === 3
```

So all print:

```txt
3
3
3
```

---

# Conceptual view

```js
{
   var i = 3;
   setTimeout(() => console.log(i), 100);
}

{
   var i = 3;
   setTimeout(() => console.log(i), 100);
}

{
   var i = 3;
   setTimeout(() => console.log(i), 100);
}
```

All callbacks reference the same `i`.

---

# Fix

## Option 1 — Use `let`

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

---

## Why `let` works

> `let` is block-scoped.

With `let`, JavaScript creates a new variable for every loop iteration.

Conceptually:

```js
{
   let i = 0;
   setTimeout(() => console.log(i), 100);
}

{
   let i = 1;
   setTimeout(() => console.log(i), 100);
}

{
   let i = 2;
   setTimeout(() => console.log(i), 100);
}
```

So output becomes:

```txt
0
1
2
```

---

# Option 2 — Cover `var` with a function (closure)

```js
for (var i = 0; i < 3; i++) {
    ((x) => {
        setTimeout(() => console.log(x), 100);
    })(i);
}
```
* or

```js
for (var i = 0; i < 3; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x);
        }, 100);
    })(i);
}
```

---

# Why this works

Each function call gets its own copy:

```txt
x = 0
x = 1
x = 2
```

So callbacks print:

```txt
0
1
2
```

---

# Final Summary

* `setTimeout` runs after loop completion
* `var` creates one shared variable
* after loop ends, `i === 3`
* all callbacks print same `i`
* `let` creates a new variable per iteration
* closures/functions can also preserve values separately


# Questions. 

```js 
function createFunctions() {
    const result = [];
    for (var i = 0; i < 3; i++) {
        result.push(function() { return i * i; });
    }
    return result;
}
const fns = createFunctions();
console.log(fns[0](), fns[1](), fns[2]());
```

A. 0, 1, 4 <br>
B. 0, 0, 0 <br>
C. 9, 9, 9 <br>
D. undefined, undefined, undefined

----

# Arrow Functin and Regural function 

```js
const obj = {
    value: 42,
    regular: function() { 
        return this.value; 
        },
    arrow: () => this.value,

    nested: {
        value: 99,
        regular: function(){
            return this.value;
        },
        arrow: () => this.value
    }
};

console.log(obj.regular());
console.log(obj.arrow());
console.log(obj.nested.regular());
console.log(obj.nested.arrow());

A. 42, 42, 99, 99
B. 42, undefined, 99, 42
C. 42, undefined, 99, undefined
D. 42, 42, 99, undefined
```


## Basic Concepts. 

### Regular Functions
* A regular function gets this <br> from the object that calls it.
```js
obj.regular();
obj.nested.regular();
```

### Arrow Functions
* Arrow functions do not have their own this.
* They take this from the surrounding <br> scope (lexical scope) otherwise undefined.






# React Render "", 0 and NaN as a text node. 


## These all are the falsy value.
0
false
undefined
null
NaN
""

* But at the time of rendering only "", NaN and 0 are render on jsx. Because these are the Numbers. 
* only for jsx

```jsx
0 || "fallback"          // 0
false || "fallback"      // fallback
undefined || "fallback"  // fallback
null || "fallback"       // fallback
NaN || "fallback"        // NaN
"" || "fallback"         // ""
```
