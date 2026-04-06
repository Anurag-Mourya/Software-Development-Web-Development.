
// > JavaScript is Single Threaded = One task at a time.


//////////////////////////////////////Event Loop ///////////////////////////
// The Event Loop is a core mechanism in JavaScript that enables asynchronous, non-blocking behavior. It continuously monitors the Call Stack and the Task Queues (Callback Queue and Microtask Queue). When the Call Stack becomes empty, the Event Loop first processes all tasks from the Microtask Queue (like Promises), and then processes tasks from the Callback Queue (like setTimeout). Web APIs handle asynchronous operations in the background and push their callbacks into these queues once completed."

// Before Event Loop, we must know 3 things: 

//  Call Stack → Web APIs → Callback Queue(macrotask queue) → Event Loop

// Task Queues (Plural)
//    ├── Microtask Queue (Promises, queueMicrotask)
//    └── Callback Queue / Macrotask Queue (setTimeout, setInterval, events)

// Here = Callback queue is also known as -Callback Queue, task Queue and macrotask queue. 

//  1. Call Stack = This is the place where JS run the code. After completely run the code call Stack is empty. 

////// Blocking The JS code Example. //////////
// Blocking happens when long-running synchronous code occupies the call stack."

// console.log("Start");
for (let i = 0; i < 1000000000; i++) { }
// console.log("End");

//Here js code wait for loop and then print End. this is called blocking. and this is happen in synchronous code.
// Output is Start > ...wait a few milisecond > End. 
// We see this delay because of loop blocked the call stack.

// 2. Web APIs = setTimeOut(), Dom Events and  fetch api's- These are not the part of JS these are the part of browser. and they are stored in callback queue(task queue). called web apis

///////////////// Async Js Example ////////////////
// def- When the asynce code is run on js The js code is not blocked. 
// console.log("Start");
setTimeout(() => {// While running it goes to web apis
    // console.log("Timer Done");
}, 2000);
// console.log("End");// Here Js is not wait for run timer and then print end. 

/////////////// Step By Step Execution of above code ////////////////
// How It Actually Works (Step-by-Step)
// Step 1:
// console.log("Start") → Call Stack → executed.
// Step 2:
// setTimeout → goes to Web API.
// Timer starts there.
// Step 3:
// console.log("End") runs.
// Step 4:
// Timer finishes → callback goes to:
// 👉 Callback Queue
// Step 5:
// Event Loop checks:
// 👉 "Is Call Stack empty?"
// YES ✅
// 👉 Move callback → Stack.
// Execute.

// ////////////////example of these queues /////////////////

console.log("Start");
// callback queue
setTimeout(() => {
    console.log("Call back queue")
}, 0)
// microtask queue
Promise.resolve().then(() => {
    console.log("Primise")
})
console.log("End")

// outputs - see the sequence of output and periority.

// Start
// End
// Primise
// Call back queue

//Promises execute before setTimeout because microtask queue has higher priority than the callback queue.
// Microtask > Callback Queue

// The Event Loop is a continuous process that checks the call stack and executes tasks from the microtask and callback queues, enabling JavaScript to handle asynchronous operations without blocking the main thread.
// Checks stack → runs microtasks → runs callbacks.



// Code example//////////////

// > synchronus code of Blocking loop example of js.
// > asynchronus code of how setTimeout is not block code.
// > Give us full exmaple of micro task queue