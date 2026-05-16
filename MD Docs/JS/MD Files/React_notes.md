# React Notes: State Updates and `useEffect`

## 1) Why `setCount(count + 1)` twice does **not** make the count `+2`

### Code

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => {
      setCount(count + 1);
      setCount(count + 1);
      console.log(count);
    }}>
      {count}
    </button>
  );
}
```

### Important points
- `count` is a **snapshot** from the current render.
- `setCount(...)` **queues** an update; it does not change `count` immediately.
- Both lines use the same old value of `count` inside that click handler.
- React batches updates and re-renders after the handler finishes.
- So the button usually goes from `0` to `1`, not `2`.
- `console.log(count)` prints the old value (`0`) because the render has not changed yet.

### Example
If `count = 0`:
```js
setCount(count + 1); // queues setCount(1)
setCount(count + 1); // queues setCount(1) again
console.log(count);  // 0
```
Final state after React processes the queue: `1`

### To increment twice correctly
```jsx
setCount(c => c + 1);
setCount(c => c + 1);
```
Here each update receives the latest pending value, so `0 -> 1 -> 2`.

---

## 2) How `useEffect` runs with `count`

### Code
```jsx
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect", count);
    return () => console.log("Cleanup", count);
  }, [count]);

  console.log("Render", count);

  return <button onClick={() => setCount(1)}>Click</button>;
}
```

### Important points
- `console.log("Render", count)` runs during the **render phase**.
- `useEffect(...)` runs **after** the DOM is updated.
- The cleanup function runs:
  - before the effect runs again, or
  - when the component unmounts.
- Each render has its own state snapshot and its own effect closure.
- The cleanup sees the `count` value from the render that created it.

### Initial mount
Order:
```txt
Render 0
Effect 0
```

### After clicking once
The state changes from `0` to `1`.

Order:
```txt
Render 1
Cleanup 0
Effect 1
```

### Why cleanup logs `0`
The cleanup function belongs to the earlier render, so it remembers the old `count` value.

---

## 3) Core idea to remember

### React render = snapshot
Each render gets:
- its own `count`
- its own event handlers
- its own effect function
- its own cleanup function

### Simple rule
- `setState` schedules a new render.
- It does not change the current render’s variables.
- Closures keep the values from the render where they were created.

---

## 4) Tiny timeline

### Counter example
```txt
Render with count = 0
Click handler uses count = 0
queue setCount(1)
queue setCount(1)
console.log(count) -> 0
Re-render with count = 1
```

### useEffect example
```txt
Render 0
Effect 0
Click
Render 1
Cleanup 0
Effect 1
```

---

## 5) One-line summary

- **State updates are queued.**
- **Renders use snapshots.**
- **Effects run after render.**
- **Cleanup belongs to the previous render.**




# Top Interview questions. 



React js interview Questions and answers are here (https://www.kimi.com/chat/19e30151-d022-83a7-8000-092d5e3e870c?chat_enter_method=new_chat)
## And this is about Answers key points. 

---

# 1. What is JSX, and why do developers prefer using it over plain JavaScript when building UI components?

* Developers prefer it because it is declarative(The result of ui.) and visual. 
* Without JSX, you must write nested React.createElement()
* Babel/transpilers convert that JSX into plain JavaScript using React.createElement():

---

# 6. What causes unnecessary re-renders in React, and how can you prevent them?
* unnecessary re-renders happens when parent component updates even its props and state are same. 
* We can prevent them by using React.memo
* Use useMemo cache expensive calculations.
* Use useCallback to keep function references stable.
* Keep state close to where it is used - Don’t put state in a big parent component if only a small child component needs it.

### Example 
```jsx
Bad Example
function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <Navbar />
      <Sidebar />
      <SearchBox input={input} setInput={setInput} />
    </>
  );
}

Good Example 

function SearchBox() {
  const [input, setInput] = useState("");

  return <input value={input} onChange={e => setInput(e.target.value)} />;
}

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SearchBox />
    </>
  );
}

Now only SearchBox re-renders.
```

> Avoid passing objects/arrays directly in JSX, don't pass styles as an object and arrys as props. 
* Prevent - To use separate style sheet or use useMemo();
---

# 7. When does a component re-render in React?

* First, when its own state changes using setState or useState.
* Second, when its parent component re-renders
* Third, when the context value changes 

---

# 8. Why is immutability important in React state management? How does it help React find changes efficiently?

* Immutability in react means -  Do not change the original data. Create a new copy instead.

# 10. What is SyntheticEvent in React? How is it different from native browser events?

* Synthetic Event. - SyntheticEvent is a cross-browser wrapper around the browser's native event. React receives the browser’s original event, wraps it in its own standardized object, and gives that object to developers. That standardized object is called SyntheticEvent.

---

# Why doesn't state update immediately after calling setState or useState.

* Because React schedules state updates instead of applying them instantly. j
* Reason - 1. Performance optimization (batching), 2. Rendering is asynchronous, 3. React follows a render lifecycle.

> React render lifecycle- 

```js
setState/useState called
↓
React schedules update
↓
React batches updates
↓
Component re-renders
↓
New state becomes available
```

--- 

# 14. Can you update state based on the current state? What is the correct way to do it?

* const increment = () => setCount(prev => prev + 1);

---

# What is Strict Mode in React, and what issues does it help identify?

* It renders components twice to detect side effects.
* It warns about using deprecated lifecycle methods
* unsafe refs, and legacy context APIs.
* It also checks for unexpected side effects in useEffect.
















