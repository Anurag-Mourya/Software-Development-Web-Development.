
 # <h1 style="color:pink; text-align:center;">HTML AND CSS</h1>
##



<details>
<summary>Solution</summary>

```javascript
console.log([1,2,3] + [2,3,4]) // string - 1,2,32,3,4.

console.log(0.1 + 0.4 === 0.5) // true.

console.log(0.1 + 0.2 === 0.3) // false.
// false because of binary representation
// 0.1 is 0.0001100110011001100110011001100110011001100110011001101...
// 0.2 is 0.001100110011001100110011001100110011001100110011001101...
// Then we add these it gonna false.




The answere of these question are in -  GPT this link
https://chatgpt.com/g/g-p-69c77c61bafc819180f94e576fcbff62-react-js-interview/project

 ## <div style="color:yellow"> Q. What are reflow and repaint. 
 ## <div style="color:yellow"> Q. What are the semantic elements and why we use these element, given an examples also?

 ## <div style="color:yellow"> Q. What are the difference between position absolute and fix. 

 ## <div style="color:yellow"> Q. What are the CSS Units: px, em, rem, %. </div>

| Unit | Type     | Based On      | Behavior     |
| ---- | -------- | ------------- | ------------ |
| px   | Absolute | Fixed         | Always same  |
| em   | Relative | Parent        | Can compound |
| rem  | Relative | Root (`html`) | Consistent   |
| %    | Relative | Parent        | Flexible     |

----

## <div style="color:yellow">Q. Define Flex Box

- Css flex box is used to arrange elements(clildrens) in a flexible way inside a container(parent). 
- CSs Flex box are One-dimensional layout. Works in one direction only Row Or Column x and y axis. It is best for align items in a line. ex - [1] [2] [3]

#### Key Concept
- You have a flex container (parent)
- And flex items (children)

## <div style="color:yellow">Q. Css Grid Vs Flex box. 
 - Both are CSS layout systems, but they are used for different purposes.
 - Flexbox is a one-dimensional layout system used to arrange items in a row or column in a line only x and y axis, while Grid is a two-dimensional layout system used to create complex layouts with rows and columns x, y and z axis. 

#### Flex Box.
 - CSs Flex box are One-dimensional layout. Works in one direction only Row Or Column x and y axis. It is best for align items in a line. ex - [1] [2] [3]

#### CSS Grid. 
- Css grid is 2 dimentional layout. It works in 2 directions at same time row AND column x, y and z axis. It is best for full page layouts. ex -  <br>
[1] [2] [3] <br>
[4] [5] [6]




## <div style="color:yellow">Q. How do we responsive any image in css
- Making an image responsive in CSS means it adjusts its size automatically for different screen sizes (mobile, tablet, desktop).
---
 Example-

```css
{
    max-width:"100%",  /* The image is never exceeds its container */
    height: auto, /* keeps correct aspect ratio */
}
```

## <div style="color:yellow">Q. How to Make Background Images Responsive

```css
 {
  background-image: url("image.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## <div style="color:yellow">Q. Define Local, Sessition and Cookee storage.

- Basically Local, Sessition and Cookees are the web storage or web apis that allows a browser to the clint to store any data. 

#### Local Storage. 
- Local Storage is a browser storage that stores data with no expiration time. Data remains even after browser is closed.
- It stores data up to 5 md. 
- It shared data accross the tab from the origin
- Local Storage and Session Storage store data in key–value pairs, where both key and value are always stored as strings.
- Best for Dark and light theme, Language Preference, UI Setting. 

#### Session Storage. 
- Session Storage stores data only for one browser tab session. Data is deleted when tab is closed.
- It does not shared data to the tab, Shared only open tab. 
- It stores data up to 5 md. 
- Local Storage and Session Storage store data in key–value pairs, where both key and value are always stored as strings.
- Bes for store (Best for temporary data) like Form Data, Opt Flow, Temporary state

#### Cookee. 
- Cookies are small data storage(4kb) in the browser and sent to the server with every HTTP request.
- However, they can be shared across subdomains if configured properly.

#### Combine Definition
- LocalStorage stores data permanently in the browser, SessionStorage stores data only for a single tab session, and Cookies store small data that is also sent to the server with each request. Local and Session storage have larger capacity (~5MB), while cookies are limited (~4KB) but can be made secure using HttpOnly and Secure flags.
- Best for Server needs the data, Authentication required


##
 # <h1 style="color:pink; text-align:center;">JAVASCRIPT</h1>


## <div style="color:yellow">Q. Difference between Var, Let and const.

- So, the difference between var, let, and const is mainly based on scope, immutability, and hoisting. 

#### If I talk about scope:

- If I talk about scope, then: var has function scope. let and const have block scope, not global scope necessarily (they can be global if declared outside, but conceptually they are block-scoped).

#### If I talk about immutability:

- Var can be redeclared and reassigned. let can be reassigned but cannot be redeclared in the same scope. const cannot be redeclared or reassigned, and it must be initialized at the time of declaration.

#### If I talk about hoisting:

- var, let, and const all are hoisted, but in different ways. var is hoisted and initialized with undefined during memory allocation. let and const are also hoisted, but they are in a Temporal Dead Zone (TDZ), so they cannot be accessed before initialization — otherwise it gives a ReferenceError.

#### Temporal Dead Zone

- And Temporal Dead Zone means the time between hoisting and initialization, where the variable exists but cannot be accessed


## <div style="color:yellow">Q. Event Delegation, Event Bubling, Event Propagation,  Event Capturing


#### Event Propagation 
 - Event Propagation is the process by which an event moves through the DOM tree when triggered. It can be top to bottom(capturing) or bottom to top(bubbling),  It has 3 phases:

- Capturing phase → top to bottom (ancestor → target)
- Target phase → event occurs at the element itself
- Bubbling phase → bottom to top (target → ancestors)

#### Event Delegation 
- Event delegation is attaching a single listener to a parent to handle events for multiple children, instead of attaching to each child.


## <div style="color:yellow">Q. What is the out put of [] === [] and {} = {}

| Expression    | Result | Reason                  |
| ------------- | ------ | ----------------------- |
| `{ } === { }` | false  | Different references    |
| `{ } == { }`  | false  | Different references    |
| `[] === []`   | false  | Different references    |
| `[] == []`    | false  | Different references    |
| `[] == ""`    | true   | Array coerces to string |
| `[1] == "1"`  | true   | Array coerces to string |


## <div style="color:yellow">Q. Debouncing And Throttling. 

#### Debouncing. 
- Debouncing is ensure the function is call for a given delay if user stop trigering an event. 




## <div style="color:yellow">Q. Out put based question. 

```js 
console.log([1,2,3]  + [2,3,4])//sting - 1,2,32,3,4.
```

```js 
console.log(0.1 + 0.4 === 0.5)// true.

console.log(0.1 + 0.2 === 0.3)// false.
//false because of binary representation 
// 0.1 is 0.0001100110011001100110011001100110011001100110011001101...
// 0.2 is 0.001100110011001100110011001100110011001100110011001101...
// Then we add these it gona false. 
```

## <div style="color:yellow">Q. Define Deep Copy, Shallow Copy and Reference Copy.

#### Reference Copy
- A Reference copy creates a new object to copy the memory address of main object. Both variables point to the same object in memory.Changing one variable will affect the other.

```js
let obj1 = { name: "Anurag" };
let obj2 = obj1; // reference copy

obj2.name = "Dev";

console.log(obj1.name); // Dev ❗
```

#### Shallow Copy
- A shallow copy creates a new object and it copies only first level properties of an object not neststed object. Changes in nested data will affect the original object. Commonly created using spread operator (...) or Object.assign(). 

```js
let obj1 = {
  name: "Anurag",
  address: { city: "Indore" }// nested object
};
// here name and address is first level properties, and {city:"Indore"} is nested object

let obj2 = { ...obj1 }; // shallow copy

obj2.name = "Dev"; // safe
obj2.address.city = "Bhopal"; // affects original ❗

console.log(obj1.name); // Anurag ✅
console.log(obj1.address.city); // Bhopal ❗. Changes in nested data will affect the original object.
```
#### Deep copy.

-  A Deep copy creates a new object and it copies all level of properties and all the nested objects. Changes in nested data do not affect the original object. Commonly created using susing structuredClone() or JSON methods (with limits). 

```js
let obj1 = {
  name: "Anurag",
  address: { city: "Indore" }
};

let obj2 = structuredClone(obj1); // deep copy

obj2.address.city = "Bhopal";

console.log(obj1.address.city); // Indore ✅

// with JSON
let obj = {
  date: new Date(),
  func: () => {}
};

let copy = JSON.parse(JSON.stringify(obj));

console.log(copy.date); // string ❗
console.log(copy.func); // undefined ❗

```

## <div style="color:yellow">Q. How Does js mangae memory. 
- JavaScript manages memory automatically using allocation, usage, and garbage collection.
- It uses stack memory for primitives and heap memory for objects or functions.
- Garbage collection works using the mark-and-sweep algorithm to remove unused objects.
- Memory leaks can occur if references are not properly cleaned. 

#### Garbage Collection 
- Garbage Collection is the process by which JavaScript automatically removes unused memory so that the program runs efficiently.
- Working - An object is kept in memory if it is reachable If it is not reachable → it will be deleted so he main concept is Reachability


## <div style="color:yellow">Q. WeakMap nad Weakset in JS.Explain browser rendering pipeline.

-“WeakMap and WeakSet store objects with weak references, meaning they do not prevent garbage collection. WeakMap stores key-value pairs with object keys, while WeakSet stores only unique objects. They are mainly used to avoid memory leaks and store private data.”


## <div style="color:yellow">Q. Explain browser rendering pipeline.
- DOM Creation> SCCOM Creation> Render Tree> Layout, Reflow> Paint> Composition. 
- Browser rendering pipeline is the process by which the browser converts HTML, CSS, and JavaScript into a visible web page on the screen.
It involves parsing code, building structures like DOM and CSSOM, creating layout, and finally painting pixels on the screen.

## <div style="color:yellow">Q. Async, Await and Promice.
- Async/await is built on top of promises and We can use .then() and .catch() with async functions because they return promises,
- Together, async, await they help write asynchronous code in a cleaner and more readable way.
- The async keyword is used to declare an asynchronous function and it always returns a promise.
- The await keyword is used inside an async function to pause execution until a promise is resolved. 
- async and await Use Try catch to show the success and failer

- Async/await is built on top of promises, and promises support .then() and .catch()., we can also use try(), and cathc()
```js 
// try catch
const getInvoice = async () => {
  try {
    const res = await fetch("/api/invoice");
    const data = await res.json();
    
    // Update UI
    setInvoice(data);
  } catch (err) {
    console.log(err);
  }
};

// .then
async function getData() {
  return "Hello";
}

// Using .then()
getData().then(data => {
  console.log(data); // Hello
});
```

#### Promise
- A Promise in JavaScript is used to handle asynchronous operations like API calls. It has three states: pending, resolved, and rejected. When we call an API using fetch, it returns a promise. We handle success using .then() and errors using .catch(), or we can use async/await for cleaner code.

```js
function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      return response.json(); // convert to JSON
    })
    .then(function(data) {
      console.log("Users:", data); // success
    })
    .catch(function(error) {
      console.log("Error:", error); // error
    });
}

getUsers();
```
#### Promise Chaning 
Promise chaining is a technique where we use multiple .then() methods one after another to handle a sequence of asynchronous operations, where each step depends on the result of the previous one.

```js 
// with promise chaning with .then(). 
getCustomer()
  .then(customer => getOrders(customer.id))
  .then(orders => calculateTotal(orders))
  .then(total => console.log("Total:", total))
  .catch(err => console.error(err));

  // fix with promise. 
  async function process() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const total = calculateTotal(orders);
    console.log(total);
  } catch (err) {
    console.log(err);
  }
}
```
- And The main difference is the promise chaning with .then and .catch in regular Promise object and with async await is not happen workes simply with try and catch 


## <div style="color:yellow">Q. Coding Questions. 

- Reverse the string without using .reverse();
- Solution with for loop and filter.
```js
const arr = [1,2,3,2,4,2,1];
const unique = (a) =>{
    let seen = {};
    let unqArr = [];
    for(let i = 0; i<a.length; i++){
        if(seen[a[i]]==="Anurag"){
            continue;
        }else{
            unqArr.push(a[i])
            seen[a[i]] = "Anurag";
        }
    }
    
    return unqArr;
}
console.log(unique(arr));

const unique1 = arr.filter((val,index,main)=>main.indexOf(val)===index);

console.log(unique1);
```


```js
console.log([]+[])// out put is empty string.
console.log({}+{})// out put is [object Object][object Object] in a string.
```

```js
Promise.resolve()
.then(()=>Promise.reject("print error"))
.catch(e=>console.log(e))// print error is print here
// Why. 

// Inside the .then(), you return Promise.reject("print error").
// Returning a rejected promise from .then() is equivalent to throwing an error in that .then() callback.
// This rejection propagates down the promise chain.

// .catch() catches any rejection in the chain.
// The rejected value "print error" is passed to e.
// console.log(e) prints it.
```

``` js
const arr = [1,2,3];
arr.length = 0;
console.log(arr)// [] will print
```


## <div style="color:yellow">Q. Find the first repeated charactor of a sting Anurag Mourya  
```js
const str = "anurag mourya"// output will must be a
// Approch--------

function firstRepeatedChar(str) {
  const freq = {};

  for (let char of str) {
    //   console.log(freq)
    if (freq[char]) {
      return char;
    }
    freq[char] = true;
  }
  return null;
}

console.log(firstRepeatedChar(str));
```

## <div style="color:yellow">Q. Find the 2nd repeated charactor of a sting Anurag Mourya  
```js
const str = "anurag mourya"// output will must be a
// Approch--------

function lastRepeatedChar(str) {
  const freq = {};
  let lastChar = null;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] > 1) lastChar = char;
  }

  return lastChar;
}

console.log(lastRepeatedChar("fdderfgfsddcgh")); // Output: 'd'
```

## <div style="color:yellow">Q. We have two unshorted array. Mearge it one array and sort arry. 
```js
const arr1 = [1,2,3]// 
const arr1 = [4,5,6]// output will must be a [1,2,3,4,5,6]
// Approch--------
```

##
 # <h1 style="color:pink; text-align:center;">REACT JS</h1>

## <div style="color:yellow">Q. Difference between Function and Class Components. 
- Function Component → Simple function, uses Hooks, no this, modern approach
- Class Component → Uses class, has lifecycle methods, uses this, older approach

- keys For difference -  UI, Latest More useable,props, states and this keyword, lifecycle,  code complexity,  

#### Function Component
- A Function Component in React is a simple JavaScript function that returns UI (JSX).
- It is the modern and most commonly used way to create components. Function components are easy to write, easy to understand, and need less code compared to class components.
- They can accept inputs called props and return what should be shown on the screen. They do not use this keyword. 
-Function compoents have Hooks (like useState, useEffect), they can also manage state and side effects and lifecycle methods.

#### Class Component
- A Class Component in React is a JavaScript class that extends React.Component and returns UI using a render() method.
- It was the traditional way of creating components before hooks were introduced.
- They use the this keyword to access props and state.
- Class components can manage their own state and lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
- Class components require more code and are more complex compared to function components.
- State in class components is defined inside a constructor, and updated using this.setState().

## <div style="color:yellow">Q. Virtual Dom, Re-Concillation and Diffing

#### Virtual Dom
- Virtual DOM is a lightweight copy of the real DOM that React uses to compare changes and update only the required parts efficiently.

#### Diffing
- Instead of directly changing the real DOM every time something updates, React first updates the Virtual DOM. Then it compares the new Virtual DOM(full new UI/DOM copy (not just changed part)) with the previous one full (old UI/DOM copy). This process is called diffing.

#### Re-Concillation
- After comparing, React finds only the changed parts and updates only those parts in the real DOM. This process is called reconciliation.

##
 # <h1 style="color:pink; text-align:center;">OTHER TOPICS.</h1>

## <div style="color:yellow">Q. Tell me full testing process on your project.?

“In my projects, I follow a structured testing process to ensure quality and stability.

First, during development, I do unit-level testing by validating individual components and functions. For example, I check if React components render correctly with different props and states.

Next, I perform integration testing, where I verify how different modules work together—like ensuring API data is correctly displayed in UI components such as Invoice or Customer modules.

Then comes functional testing, where I test complete user flows, such as creating an invoice, applying calculations, or booking a service, to ensure everything works as expected.

I also focus heavily on UI testing, checking responsiveness, cross-browser compatibility, and consistency across different devices.

For APIs, I use tools like Postman to test endpoints, validate responses, and handle edge cases like errors or empty data.

Before deployment, I perform regression testing to make sure new changes don’t break existing features.

Finally, after deployment, I monitor the application for any issues and quickly fix bugs if they arise.

Overall, my approach combines manual testing with practical validation at every stage to deliver a stable and user-friendly application.”





## <div style="color:yellow">Q. React Batching. 
- React batching is a process where multiple state updates are grouped together and applied in a single re-render to improve performance.
- Event Triggered → Multiple setState updates → Batch → Single Render
- React batching happens when multiple state updates occur together, not just on page load.
- Automatic batching was introduced in React 18. Before React 18, batching only worked inside React event handlers.

```js
// they are render on ui at a time not one-by-one.
setLoading(true);
setInvoices([100, 200, 300]);
setTotal(600);
```

## <div style="color:yellow">Q. What are the Render Phase and Commit Phase in React js.

-Render phase is for planning changes using Virtual DOM, and commit phase is for applying those changes to the real DOM.

#### Render Phase
- Render phase is the creation phase of Virtual DOM and comparison with the old Virtual DOM.
- This is the planning phase where React decides what needs to be updated.
- In this phase, React calls all our components, creates a new Virtual DOM, compares it with the previous Virtual DOM (diffing), and plans what needs to change.

#### Commit Phase
- Commit phase is the execution phase where changes are applied to the real DOM.
- This is the implementation phase where React updates the UI based on the plan.
- In this phase, React updates the real DOM, reflects changes on the screen, and runs side effects like useEffect.


## <div style="color:yellow">Q. useMemo and useCallback, why we use these. And when we don't need to use.
- Every time state/props change → component re-renders - Functions get re-created - Calculations run again

#### useMemo
- “Don’t recalculate if nothing changed”
- useMemo is a hook that memoizes (caches/remember) the result of a calculation so it doesn’t run again unless dependencies change.
- When your component re-renders frequently, some calculations run repeatedly and can slow down performance. useMemo stores the result of that calculation so it doesn’t run again unless useMemo its dependencies change


#### useCallback
- useCallback is used to memoize functions to prevent unnecessary re-creation on every render.
- When your component re-renders frequently, functions can be recreated again and again, which may affect performance. useCallback stores (memoizes) the function so that the same function instance is reused unless its dependencies change.

#### When NOT to Use. 
- Calculation is simple/cheap(e.g., count * 2)
- Component is small
- No performance issue
#### When to use.
-Heavy calculations (large data, loops)
-Prevent re-render of child components (React.memo)
-Functions passed as props




## <div style="color:yellow">Q. How does react.memo work internaly.
## <div style="color:yellow">Q. Hydration in next js.
## <div style="color:yellow">Q. How Does react toolkit handales immutibility. 
## <div style="color:yellow">Q. What is RTK Quary. 
- RTK Query is a powerful data fetching and caching tool built into Redux Toolkit.
- It helps us to fetch, cache, and update remote data (like from REST APIs or GraphQL) with minimal boilerplate.
- No need for Axios or fetch manually- RTK Query uses fetchBaseQuery under the hood (a tiny wrapper around fetch) by default.
```js
const { data: users, error, isLoading } = useGetUsersQuery();
```

## <div style="color:yellow">Q. What's the limitations of context api. 
## <div style="color:yellow">Q. What is an Error Boundary?. And why we use error boundries in function component. 




## <div style="color:yellow">Q.






## <div style="color:yellow">Q.







## <div style="color:yellow">Q.

Can you introduce yourself, including your professional background and projects you have worked on
?
What is your primary skill and what basic technology skills do you possess
?
How much experience do you have specifically in React
?
Do you have any knowledge of NextJS
?
What was the architecture of your project, including the backend and database used
?
Have you faced any real production issues, and how did you debug them
?
Can you explain your daily routine, including scrum meetings and your use of Jira for ticket handling
?
JavaScript Theory
What is JavaScript, and is it synchronous or asynchronous
?
What is the difference between == (double equals) and === (triple equals)
?
What is hoisting
?
How many types of scope are available in JavaScript
?
What is the difference between null and undefined
?
What are promises, what are their stages, and how do they differ from callbacks and async/await
?
What is the difference between shallow copy and deep copy
?
JavaScript Output and Logic Questions
The interviewer presents several code snippets and asks the candidate to predict the output:
Accessing a variable before initialization (Temporal Dead Zone)
.
Function hoisting behavior
.
The event loop and execution order of synchronous operations vs. Promises (microtasks) vs. setTimeout (macrotasks)
.
Shallow copy logic and object mutation
.
The behavior of the bind method
.
Prototype chaining and inheriting properties from a parent
.
The length property of an array
.
map vs. forEach, specifically regarding return values and modifying original arrays
.
IIFE (Immediately Invoked Function Expression) and global vs. local scoping
.
Comparing NaN (Not a Number) using equality and Object.is()
.
Coding Challenges
How would you split an array into chunks for a given size
?
Can you remove duplicates from an array without using the Set method
?
Do you have knowledge of DSA (Data Structures and Algorithms)
?
How do you find the longest string in a given array
?
Can you reverse the words in a sentence (both with and without predefined methods)
?
React Concepts and Performance
How and when does a React component re-render
?
What is the difference between controlled and uncontrolled components
?
What is the difference between useMemo and useCallback
?
Can you provide a live coding example of useMemo
?
How does React.memo work to prevent unnecessary re-renders
?
How do you optimize React performance beyond using hooks (e.g., lazy loading, reusable components)
?
What is a pure component
?
State Management (Redux)
Have you used Redux or Redux Toolkit
?
Can you explain the architecture and flow of Redux Toolkit (store, reducers, actions)
?
Is a reducer a pure function
?




