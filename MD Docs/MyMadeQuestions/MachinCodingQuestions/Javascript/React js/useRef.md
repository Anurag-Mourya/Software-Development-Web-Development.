# React Refs — Complete Interview Guide

# What is a Ref in React?

A **ref** in React is a special object that provides direct access to:

- DOM elements
- React component instances
- Mutable values

without triggering a component re-render.

Refs are mainly used when we need to perform direct DOM manipulation or store mutable data that should persist across renders.

---

# Why Do We Need Refs?

React normally works declaratively using:

- state
- props

Example:

```jsx
<input value={name} onChange={handleChange} />
```

React controls everything automatically.

But some operations require direct access to the actual DOM element, such as:

- focusing an input
- scrolling
- playing a video
- measuring element size
- integrating third-party libraries

For these situations, React provides refs.

---

# Definition (Interview Ready)

> A ref in React is an escape hatch that gives direct access to a DOM element or mutable value without causing component re-renders.

---

# How Refs Work Internally

When we create a ref:

```jsx
const inputRef = useRef(null);
```

React creates an object like:

```js
{
  current: null
}
```

When the component renders:

```jsx
<input ref={inputRef} />
```

React stores the actual DOM node inside:

```js
inputRef.current
```

After rendering:

```js
inputRef.current
```

becomes:

```html
<input>
```

which is the real browser DOM element.

---

# Most Important Interview Point

## Refs DO NOT trigger re-renders

Updating:

```js
ref.current = value
```

does NOT re-render the component.

But updating state does:

```js
setState(value)
```

This is one of the most important differences between refs and state.

---

# Syntax of useRef

```jsx
const refName = useRef(initialValue);
```

Example:

```jsx
const inputRef = useRef(null);
```

---

# Example 1 — Focus Input (Most Asked)

```jsx
import { useRef } from "react";

function Login() {
  const emailRef = useRef(null);

  const focusInput = () => {
    emailRef.current.focus();
  };

  return (
    <>
      <input ref={emailRef} type="text" />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}
```

---

# Explanation

```jsx
const emailRef = useRef(null);
```

Creates a ref object.

```jsx
<input ref={emailRef} />
```

Attaches the ref to the DOM element.

After rendering:

```js
emailRef.current
```

contains the actual input DOM node.

Now we can directly call browser methods:

```js
emailRef.current.focus()
```

---

# Interview Explanation

> Here, the ref stores the actual DOM node of the input element. Using `focus()`, we directly manipulate the DOM element. Refs are useful for DOM operations that cannot be achieved declaratively through state or props.

---

# Example 2 — Store Mutable Value Without Re-render

```jsx
import { useRef, useState } from "react";

function Counter() {
  const refCount = useRef(0);

  const [stateCount, setStateCount] = useState(0);

  const increaseRef = () => {
    refCount.current++;
    console.log(refCount.current);
  };

  const increaseState = () => {
    setStateCount(stateCount + 1);
  };

  return (
    <>
      <h2>State Count: {stateCount}</h2>

      <button onClick={increaseRef}>
        Increase Ref
      </button>

      <button onClick={increaseState}>
        Increase State
      </button>
    </>
  );
}
```

---

# Key Observation

Updating:

```js
refCount.current++
```

does NOT re-render the component.

But:

```js
setStateCount()
```

does re-render the component.

---

# Interview Explanation

> Refs are mutable containers whose updates are ignored by React’s rendering system. They are useful for storing values that must persist across renders without affecting the UI.

---

# Example 3 — Previous State Tracking

Very common interview question.

```jsx
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current Count: {count}</h2>

      <h2>Previous Count: {previousCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

---

# Explanation

The ref persists between renders.

After each render:

```js
previousCount.current = count;
```

stores the latest value.

On the next render, the ref still contains the old value.

---

# Example 4 — Scroll to Section

```jsx
import { useRef } from "react";

function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={scrollToSection}>
        Scroll
      </button>

      <div style={{ height: "100vh" }}>
        Top Content
      </div>

      <div ref={sectionRef}>
        Target Section
      </div>
    </>
  );
}
```

---

# Example 5 — Video Control

```jsx
import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  return (
    <>
      <video
        ref={videoRef}
        width="400"
        src="movie.mp4"
      />

      <button onClick={() => videoRef.current.play()}>
        Play
      </button>

      <button onClick={() => videoRef.current.pause()}>
        Pause
      </button>
    </>
  );
}
```

---

# useRef vs useState

| Feature | useRef | useState |
|---|---|---|
| Causes re-render? | No | Yes |
| Mutable? | Yes | No direct mutation |
| Stores value between renders? | Yes | Yes |
| Used for UI updates? | No | Yes |
| Access syntax | ref.current | variable directly |

---

# Important Real-World Uses of Refs

## 1. Autofocus Input

```jsx
useEffect(() => {
  inputRef.current.focus();
}, []);
```

---

## 2. Scroll to Element

```jsx
sectionRef.current.scrollIntoView();
```

---

## 3. Video Controls

```jsx
videoRef.current.play();
```

---

## 4. Store Timers

```jsx
const timerRef = useRef();
```

---

## 5. Integrate Third-Party Libraries

Examples:

- Chart.js
- D3.js
- GSAP
- Leaflet

These libraries often require direct DOM access.

---

# Forward Ref (Advanced Interview Topic)

Normally refs cannot be passed directly to functional components.

For that React provides:

```jsx
forwardRef()
```

---

# Example

```jsx
import React, { forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function App() {
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} />

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus
      </button>
    </>
  );
}
```

---

# Interview Explanation

> Functional components do not expose instances by default. `forwardRef` allows parent components to pass refs down to child DOM elements.

---

# createRef vs useRef

| createRef | useRef |
|---|---|
| Mostly used in class components | Used in functional components |
| Creates new ref every render | Same ref persists |
| Less common now | Preferred |

---

# Common Interview Questions

# Q1: Why use refs when state exists?

## Answer

> State is used for UI-related updates because it triggers re-renders. Refs are used for DOM manipulation or mutable values that should not trigger re-renders.

---

# Q2: Does updating ref.current cause re-render?

## Answer

> No. React does not track changes to refs for rendering.

---

# Q3: Can refs be used in functional components?

## Answer

> Yes. Functional components use the `useRef()` hook.

---

# Q4: What is the difference between useRef and createRef?

## Answer

> `useRef` persists the same ref object between renders, while `createRef` creates a new ref every render.

---

# Q5: What is forwardRef?

## Answer

> `forwardRef` allows refs to be passed from parent components to child DOM elements.

---

# Best Practices

## Use refs only when necessary

Prefer:

- state
- props
- declarative UI

Use refs for:

- DOM operations
- mutable values
- third-party libraries

---

# Common Mistakes

## Wrong

```jsx
ref.current = value;
```

for UI rendering.

---

## Correct

Use state for UI updates:

```jsx
setValue(newValue);
```

---

# One-Line Interview Summary

> Refs in React provide direct access to DOM elements or mutable values without triggering re-renders, making them useful for DOM manipulation and storing persistent mutable data.

---

# Easy Analogy

React is like an automatic car.

Normally React drives everything for you using state and props.

A ref is like taking manual control of the steering wheel temporarily when direct control is needed.

---

# Final Interview Conclusion

> React refs are an escape hatch mechanism used to directly interact with DOM elements or store mutable values without affecting React’s rendering lifecycle. They are commonly implemented using `useRef()` and are especially useful for focus management, scrolling, media control, and integrating external libraries.