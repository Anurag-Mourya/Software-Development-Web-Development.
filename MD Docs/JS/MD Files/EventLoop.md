# Event Loop in JavaScript

---

# What is JavaScript?

JavaScript is a **synchronous** and **single-threaded** language.

## Synchronous

In synchronous execution, the next instruction starts only after the current instruction finishes executing.

This behavior can block the execution of other code.

```js
console.log("Start");

for (let i = 0; i < 1000000000; i++) {
    // Long-running task
}

console.log("End");
```

### Output

```js
Start
// waits a few seconds
End
```

Here, JavaScript waits for the loop to finish before executing the next line.

---

## Single-Threaded

JavaScript can execute only one operation at a time.

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

### Execution Order

```js
Task 1
Task 2
Task 3
```

Only one task runs at a time on the main thread.

---

# Why Do We Need the Event Loop?

JavaScript is single-threaded, but applications still need to handle asynchronous operations such as:

* Timers
* API calls
* User interactions
* File reading
* Database queries

If JavaScript waited for every operation to complete, applications would freeze and become unresponsive.

The Event Loop solves this problem.

---

# What the Event Loop Does

The Event Loop makes JavaScript asynchronous and non-blocking.

It allows JavaScript to:

* Continue executing other code
* Handle asynchronous operations in the background
* Execute callbacks later when they are ready
* Keep applications fast and responsive

---

# Core Components of the Event Loop

## 1. Call Stack

The Call Stack is where JavaScript executes code.

It follows the **LIFO (Last In, First Out)** principle.

When a function is called, it is pushed onto the stack.
When it finishes execution, it is removed from the stack.

---

## 2. Web APIs

Web APIs are provided by the browser (not by JavaScript itself).

Examples:

* `setTimeout`
* DOM Events
* `fetch`
* `setInterval`

These APIs handle asynchronous operations in the background.

---

## 3. Microtask Queue

Also called:

* Job Queue
* Promise Queue

Microtasks include:

* `Promise.then`
* `catch`
* `finally`
* `queueMicrotask`

Microtasks have higher priority than macrotasks.

---

## 4. Macrotask Queue

Also called:

* Callback Queue
* Task Queue

Macrotasks include:

* `setTimeout`
* `setInterval`
* DOM events

---

# How the Event Loop Works

The Event Loop continuously checks:

1. Is the Call Stack empty?
2. If yes, execute all Microtasks.
3. Then execute one Macrotask.
4. Repeat the process.

---

# Blocking in JavaScript

Blocking happens when synchronous code occupies the Call Stack for a long time.

During this time, no other code can execute.

## Example

```js
console.log("Start");

for (let i = 0; i < 1000000000; i++) {}

console.log("End");
```

### Output

```js
Start
// waits
End
```

The loop blocks the Call Stack until it finishes.

---

# Asynchronous JavaScript Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer Done");
}, 2000);

console.log("End");
```

### Output

```js
Start
End
// after 2 seconds
Timer Done
```

JavaScript does not wait for the timer.

---

# Step-by-Step Execution

## Step 1

```js
console.log("Start");
```

Runs immediately on the Call Stack.

---

## Step 2

```js
setTimeout(() => {
    console.log("Timer Done");
}, 2000);
```

* `setTimeout` is sent to the Web API.
* The timer starts in the background.
* JavaScript continues execution without waiting.

---

## Step 3

```js
console.log("End");
```

Executes immediately.

---

## Step 4

After 2 seconds:

* The callback moves to the Macrotask Queue.

---

## Step 5

The Event Loop checks whether the Call Stack is empty.

---

## Step 6

If the stack is empty:

* The callback moves from the queue to the Call Stack.
* The callback executes.

---

# Microtask Queue vs Macrotask Queue

Microtasks always execute before Macrotasks.

## Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Callback Queue");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Output

```js
Start
End
Promise
Callback Queue
```

---

# Why Does This Happen?

## Execution Flow

### 1. Synchronous Code Runs First

```js
console.log("Start");
console.log("End");
```

---

### 2. `setTimeout` Goes to Web APIs

After completion, its callback enters the Macrotask Queue.

---

### 3. Promise Callback Goes to Microtask Queue

```js
Promise.resolve().then(...)
```

---

### 4. Call Stack Becomes Empty

The Event Loop starts processing queues.

---

### 5. Microtasks Execute First

```js
Promise
```

---

### 6. Macrotask Executes After That

```js
Callback Queue
```

---

# Priority Order

```text
Call Stack
   ↓
Microtask Queue
   ↓
Macrotask Queue
```

Microtasks always have higher priority than Macrotasks.

---

# queueMicrotask Example

```js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
});

queueMicrotask(() => {
    console.log("Promise 2");
});

setTimeout(() => {
    console.log("Callback Queue");
}, 0);

console.log("End");
```

### Output

```js
Start
End
Promise 1
Promise 2
Callback Queue
```

This demonstrates that:

* Promise callbacks are Microtasks
* `queueMicrotask()` also creates Microtasks
* Microtasks execute before `setTimeout`

---

# Without the Event Loop

Without the Event Loop, JavaScript would behave like this:

1. Run code
2. Wait for async tasks to complete
3. Freeze the application
4. Continue later

Applications would become slow and unusable.

---

# Final Summary

* JavaScript is synchronous and single-threaded.
* The Event Loop enables asynchronous behavior.
* Web APIs handle background operations.
* Completed async callbacks move to queues.
* Microtasks execute before Macrotasks.
* The Event Loop continuously checks the Call Stack and queues.
* This system keeps JavaScript non-blocking and responsive.
