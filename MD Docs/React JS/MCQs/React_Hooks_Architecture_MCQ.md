# ⚛️ React Hooks & Architecture — Interactive MCQ Practice

> Click the **"Show Explanation"** button below each question to reveal the detailed breakdown.

---

## Question 1

**Which statement about `useState` is correct?**

- **A.** It can be called inside loops if the loop is deterministic
- **B.** It must be called at the top level of a component or custom Hook
- **C.** It can only be used in class components
- **D.** It returns only the current state value

<button onclick="toggleExplanation('q1')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q1" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of the **Rules of Hooks** — the fundamental constraints on how React hooks can be used within components.

### Option-by-Option Breakdown

**Option A: "It can be called inside loops if the loop is deterministic"**
❌ **Incorrect.** React hooks **must never** be called inside loops, conditions, or nested functions. React relies on the **call order** of hooks being identical across every render. Even if a loop seems "deterministic," the number of iterations could change, breaking React's internal hook state mapping. Hooks must always be at the top level.

**Option B: "It must be called at the top level of a component or custom Hook"**
✅ **Correct.** This is the first and most important Rule of Hooks. `useState` (and all hooks) must be called at the top level of a function component or custom hook, never inside loops, conditions, or nested functions. This ensures React can correctly associate hook calls with component renders.

**Option C: "It can only be used in class components"**
❌ **Incorrect.** `useState` is a **Hook API designed specifically for function components**. Class components use `this.state` and `this.setState()`. Hooks were introduced in React 16.8 to bring state and lifecycle features to function components.

**Option D: "It returns only the current state value"**
❌ **Incorrect.** `useState` returns an **array with exactly two elements**: the current state value and a setter function. You destructure them as `[state, setState] = useState(initialValue)`. It does not return just the value.

### Why B is Correct
React's hook system works by maintaining an internal linked list of hook states. Each hook call must occur in the exact same order every render. Calling hooks conditionally or inside loops would disrupt this order, causing React to mismatch state between renders. This is why ESLint's `react-hooks/rules-of-hooks` rule enforces top-level-only hook calls.

</div>

---

## Question 2

**When updating state based on the previous value, which pattern is preferred?**

- **A.** `setCount(count + 1)` always, even inside multiple updates
- **B.** `setCount(prev => prev + 1)`
- **C.** `count++` followed by render
- **D.** Direct mutation of the state variable

<button onclick="toggleExplanation('q2')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q2" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests whether you understand **functional state updates** — a critical pattern when state updates depend on the previous state value, especially with batched updates.

### Option-by-Option Breakdown

**Option A: "`setCount(count + 1)` always, even inside multiple updates"**
❌ **Incorrect.** While `setCount(count + 1)` works for single updates, it fails when multiple updates are batched together. Because `count` is a closure capturing the value from the current render, calling it three times in a row would increment by 1, not 3. The `count` variable doesn't update between calls within the same render cycle.

**Option B: "`setCount(prev => prev + 1)`"**
✅ **Correct.** The functional updater form receives the **latest state value** as an argument and returns the new state. This guarantees correctness even when multiple updates are batched or queued. React passes the most up-to-date state value to the updater function.

**Option C: "`count++` followed by render"**
❌ **Incorrect.** State in React is **immutable**. You cannot mutate state variables directly. `count++` would mutate the local variable (if it were mutable), but React state is managed internally. Direct mutation bypasses React's change detection and can cause bugs.

**Option D: "Direct mutation of the state variable"**
❌ **Incorrect.** Direct mutation is strictly forbidden in React. State must be treated as immutable. Mutating state directly (e.g., `state.value = 5`) breaks React's reference comparison (`===`), causing React to miss updates or behave unpredictably.

### Why B is Correct
React batches state updates for performance. When you call `setCount(count + 1)` three times in an event handler, all three closures capture the same `count` value. With the functional form `setCount(prev => prev + 1)`, React queues three updater functions and executes them sequentially, each receiving the result of the previous one. This ensures `count` increments by 3, not 1.

</div>

---

## Question 3

**Why would you pass a function to `useState` as the initial state?**

- **A.** To make the state mutable
- **B.** To avoid recalculating the initial state on every render
- **C.** To force a component re-render
- **D.** To make the component controlled

<button onclick="toggleExplanation('q3')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q3" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of **lazy initialization** in `useState` — an optimization technique for expensive initial state calculations.

### Option-by-Option Breakdown

**Option A: "To make the state mutable"**
❌ **Incorrect.** State is always immutable in React, regardless of how you initialize it. Passing a function doesn't change this immutability constraint. The function is only called once during the initial render.

**Option B: "To avoid recalculating the initial state on every render"**
✅ **Correct.** When you pass a function to `useState`, React **calls it only once during the initial render**. If you passed the result of an expensive computation directly (e.g., `useState(expensiveCalculation())`), the calculation would run on every render even though only the initial value is needed.

**Option C: "To force a component re-render"**
❌ **Incorrect.** The initial state function has nothing to do with forcing re-renders. Re-renders are triggered by state updates via the setter function, not by how state is initialized.

**Option D: "To make the component controlled"**
❌ **Incorrect.** A controlled component is one whose value is managed by React state (e.g., `<input value={state} onChange={...} />`). This is unrelated to lazy initialization. Whether a component is controlled depends on how props and state are wired, not on the `useState` initialization pattern.

### Why B is Correct
React's rendering cycle runs frequently. If your initial state requires an expensive computation (e.g., parsing large JSON from `localStorage`, complex object creation), wrapping it in a function ensures it only runs once:
```jsx
// ❌ Expensive calculation runs on EVERY render
const [data, setData] = useState(expensiveParse(rawData));

// ✅ Expensive calculation runs ONLY on initial render
const [data, setData] = useState(() => expensiveParse(rawData));
```

</div>

---

## Question 4

**What happens by default when a parent component's state changes?**

- **A.** Only the changed child re-renders
- **B.** All child components re-render, even if unaffected
- **C.** No child re-renders unless `memo` is used
- **D.** Only components using `useContext` re-render

<button onclick="toggleExplanation('q4')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q4" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of React's **default rendering behavior** — specifically how state changes in a parent component affect child components.

### Option-by-Option Breakdown

**Option A: "Only the changed child re-renders"**
❌ **Incorrect.** React does not track which child is "changed." By default, when a parent re-renders, **all its descendants** in the render tree are re-rendered, regardless of whether their props changed. React.memo is required to opt out of this behavior.

**Option B: "All child components re-render, even if unaffected"**
✅ **Correct.** By default, React follows a **top-down rendering model**. When a parent re-renders, all its children re-render too, even if their props and state haven't changed. This is React's default behavior to ensure consistency.

**Option C: "No child re-renders unless `memo` is used"**
❌ **Incorrect.** This is backwards. Children **do** re-render by default. `React.memo` is used to **prevent** unnecessary re-renders when props haven't changed. Without memoization, children re-render whenever the parent does.

**Option D: "Only components using `useContext` re-render"**
❌ **Incorrect.** Context consumers re-render when context value changes, but this is unrelated to parent state changes. All children re-render by default when parent state changes, regardless of whether they use context.

### Why B is Correct
React's rendering is **recursive by default**. When a component's state changes, React calls that component's function, which returns new React elements. React then recursively processes all child elements. This is efficient because React's reconciliation (diffing) is fast, but for performance-critical apps, you can optimize with `React.memo`, `useMemo`, and `useCallback`.

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <ChildA />  {/* Re-renders even though props didn't change */}
      <ChildB />  {/* Re-renders even though props didn't change */}
    </div>
  );
}
```

</div>

---

## Question 5

**What is the main reason to lift state up in React?**

- **A.** To make the component tree flatter
- **B.** To let sibling components share and stay in sync with the same state
- **C.** To avoid using props entirely
- **D.** To make state global automatically

<button onclick="toggleExplanation('q5')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q5" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of **state lifting** — a fundamental React pattern for sharing state between sibling components.

### Option-by-Option Breakdown

**Option A: "To make the component tree flatter"**
❌ **Incorrect.** Lifting state up does not flatten the component tree. In fact, it often means moving state to a common ancestor, which might be higher in the tree. The goal is sharing state, not structural flattening.

**Option B: "To let sibling components share and stay in sync with the same state"**
✅ **Correct.** When two sibling components need to share the same state, you move ("lift") that state to their closest common parent. The parent passes state down via props and callbacks, ensuring both siblings stay synchronized with a single source of truth.

**Option C: "To avoid using props entirely"**
❌ **Incorrect.** Lifting state up actually **increases** prop usage. The parent passes state and setter functions down to children via props. Props remain the primary mechanism for data flow in React.

**Option D: "To make state global automatically"**
❌ **Incorrect.** Lifting state up moves it to a common ancestor, but that ancestor is still a **local** component, not global. True global state requires Context, Redux, Zustand, or similar solutions. Lifting state is about shared local state, not global state.

### Why B is Correct
React's data flow is **unidirectional** (top-down via props). When siblings need shared state, it must live in a common ancestor:

```jsx
function Parent() {
  const [sharedValue, setSharedValue] = useState('');
  return (
    <div>
      <Input value={sharedValue} onChange={setSharedValue} />
      <Display value={sharedValue} />
    </div>
  );
}
```
Both `Input` and `Display` stay in sync because they derive from the same state in `Parent`.

</div>

---

## Question 6

**When is `useReducer` especially useful?**

- **A.** When you need to store DOM nodes
- **B.** When state update logic becomes complex and should be centralized
- **C.** When you need to fetch data from APIs
- **D.** When you want to avoid all re-renders

<button onclick="toggleExplanation('q6')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q6" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests when to choose `useReducer` over `useState` — a key architectural decision in React.

### Option-by-Option Breakdown

**Option A: "When you need to store DOM nodes"**
❌ **Incorrect.** DOM node references are stored using `useRef`, not `useReducer`. `useRef` provides a mutable reference that persists across renders without causing re-renders.

**Option B: "When state update logic becomes complex and should be centralized"**
✅ **Correct.** `useReducer` shines when state transitions follow specific rules, involve multiple related values, or when the next state depends on complex logic. It centralizes all state transitions in a single reducer function, making the logic predictable, testable, and easier to debug.

**Option C: "When you need to fetch data from APIs"**
❌ **Incorrect.** Data fetching is typically handled by `useEffect` (or libraries like React Query, SWR, RTK Query). While you *could* use `useReducer` for fetch state management, it's not the primary use case. `useReducer` is for state transitions, not side effects.

**Option D: "When you want to avoid all re-renders"**
❌ **Incorrect.** `useReducer` does not prevent re-renders. Dispatching an action still triggers a re-render (just like `setState`). To avoid unnecessary re-renders, you need `React.memo`, `useMemo`, or `useCallback`.

### Why B is Correct
`useReducer` follows the **Flux/Redux pattern** of state management: state + actions → reducer → new state. This is powerful when:
- Multiple state values are interrelated
- State transitions have specific business rules
- You want to extract and test state logic separately
- The component has many event handlers that all modify state

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: throw new Error('Unknown action');
  }
}
```

</div>

---

## Question 7

**A reducer function in React receives which arguments?**

- **A.** `props` and `context`
- **B.** `state` and `action`
- **C.** `event` and `target`
- **D.** `prevState` and `nextState` only

<button onclick="toggleExplanation('q7')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q7" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your knowledge of the **reducer function signature** — the core contract of `useReducer`.

### Option-by-Option Breakdown

**Option A: "`props` and `context`"**
❌ **Incorrect.** Reducers are pure functions that receive state and action. They do not receive `props` or `context`. If you need props or context inside a reducer, you should access them outside and include them in the action payload.

**Option B: "`state` and `action`"**
✅ **Correct.** A reducer function always receives exactly two arguments: the **current state** and an **action object**. It must return the **new state** based on the action type. This is the standard reducer signature: `(state, action) => newState`.

**Option C: "`event` and `target`"**
❌ **Incorrect.** These are DOM event properties, not reducer arguments. Event handlers might dispatch actions, but the reducer itself never receives raw DOM events.

**Option D: "`prevState` and `nextState` only"**
❌ **Incorrect.** This describes what React might compare internally, not what the reducer receives. The reducer receives `state` (current) and `action` (what to do), and it computes and returns the `nextState`.

### Why B is Correct
The reducer signature is fundamental to the Flux architecture that React's `useReducer` implements:

```jsx
function reducer(state, action) {
  // state = current state
  // action = { type: '...', payload: ... }
  // return new state (must be immutable)
}
```

The reducer must be a **pure function** — no side effects, no mutations. Given the same `state` and `action`, it must always return the same result.

</div>

---

## Question 8

**What is the primary purpose of React Context?**

- **A.** To replace all component state
- **B.** To pass data deeply through the tree without prop drilling
- **C.** To prevent every re-render automatically
- **D.** To store server data permanently

<button onclick="toggleExplanation('q8')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q8" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of **React Context API** — when and why to use it.

### Option-by-Option Breakdown

**Option A: "To replace all component state"**
❌ **Incorrect.** Context is not a replacement for local state. Context is for **shared** data that many components need. Local component state (via `useState`) is still preferred for data that only one component or its immediate children need.

**Option B: "To pass data deeply through the tree without prop drilling"**
✅ **Correct.** Context provides a way to share values (themes, user authentication, language preferences) between components **without explicitly passing props through every level** of the component tree. This solves the "prop drilling" problem.

**Option C: "To prevent every re-render automatically"**
❌ **Incorrect.** Context does not prevent re-renders — in fact, when a context value changes, **all consumers re-render**. You need to carefully split contexts and memoize values to avoid unnecessary re-renders. Context is about data sharing, not render optimization.

**Option D: "To store server data permanently"**
❌ **Incorrect.** Context is an in-memory React feature. Data in context is lost on page refresh. For persistent server data, you need a backend database, `localStorage`, or a state management library with persistence features.

### Why B is Correct
Prop drilling occurs when you pass props through many intermediate components that don't use the data themselves, just to get it to a deeply nested child:

```jsx
// Without Context: props passed through 3 levels
<App theme="dark">
  <Layout theme={theme}>       {/* doesn't use theme */}
    <Sidebar theme={theme}>   {/* doesn't use theme */}
      <Button theme={theme} /> {/* actually uses theme */}
    </Sidebar>
  </Layout>
</App>

// With Context: direct access
const ThemeContext = createContext();
<ThemeContext.Provider value="dark">
  <App />
  {/* Button can access theme directly via useContext(ThemeContext) */}
</ThemeContext.Provider>
```

</div>

---

## Question 9

**Which statement about `useContext` is correct?**

- **A.** It can be called inside conditionals
- **B.** It can be called anywhere in JavaScript code
- **C.** It must be called at the top level of a React component or custom Hook
- **D.** It only works with class components

<button onclick="toggleExplanation('q9')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q9" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the **Rules of Hooks** specifically as they apply to `useContext`.

### Option-by-Option Breakdown

**Option A: "It can be called inside conditionals"**
❌ **Incorrect.** Like all hooks, `useContext` must be called at the top level, never inside `if` statements, loops, or nested functions. Calling it conditionally would break React's internal hook order tracking.

**Option B: "It can be called anywhere in JavaScript code"**
❌ **Incorrect.** `useContext` is a React Hook and can only be called inside React function components or custom hooks. Calling it in regular functions, event handlers, or outside components will throw an error.

**Option C: "It must be called at the top level of a React component or custom Hook"**
✅ **Correct.** This follows the same Rules of Hooks as `useState`, `useEffect`, etc. `useContext` must be called at the top level of a function component or custom hook to ensure React can track it correctly across renders.

**Option D: "It only works with class components"**
❌ **Incorrect.** `useContext` is a **Hook API for function components**. Class components access context via `static contextType` or `<Context.Consumer>`. Hooks were specifically introduced to bring context (and other features) to function components.

### Why C is Correct
All hooks follow the same rules:
1. **Only call hooks at the top level** — never inside loops, conditions, or nested functions
2. **Only call hooks from React functions** — function components or custom hooks

```jsx
// ✅ Correct
function MyComponent() {
  const theme = useContext(ThemeContext);  // top level
  const user = useContext(UserContext);     // top level
  return <div>...</div>;
}

// ❌ Wrong
function BadComponent() {
  if (condition) {
    const theme = useContext(ThemeContext); // inside conditional!
  }
}
```

</div>

---

## Question 10

**Which of the following can be stored in React state?**

- **A.** Only strings
- **B.** Only objects
- **C.** Any type of value, including objects, arrays, numbers, and booleans
- **D.** Only primitives

<button onclick="toggleExplanation('q10')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q10" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests whether you understand the **types of values** that React state can hold.

### Option-by-Option Breakdown

**Option A: "Only strings"**
❌ **Incorrect.** React state is not limited to strings. While strings are common (form inputs, names), state can hold any JavaScript value.

**Option B: "Only objects"**
❌ **Incorrect.** Objects are commonly stored in state, but state is not limited to objects. Primitives like numbers, strings, and booleans are frequently used as state values.

**Option C: "Any type of value, including objects, arrays, numbers, and booleans"**
✅ **Correct.** React state can hold **any valid JavaScript value**: primitives (string, number, boolean, null, undefined, symbol, bigint), objects, arrays, functions, dates, maps, sets, and even other React elements. The only requirement is that updates must be immutable.

**Option D: "Only primitives"**
❌ **Incorrect.** While primitives work well in state, objects and arrays are also extremely common. Form data, lists, API responses, and complex UI state are typically stored as objects or arrays.

### Why C is Correct
React state is essentially a JavaScript variable that React tracks. You can store anything:

```jsx
const [count, setCount] = useState(0);           // number
const [name, setName] = useState('');            // string
const [isOpen, setIsOpen] = useState(false);     // boolean
const [items, setItems] = useState([]);          // array
const [user, setUser] = useState({});            // object
const [date, setDate] = useState(new Date());    // Date object
const [map, setMap] = useState(new Map());       // Map
```

The key rule is **immutability** — never mutate state directly, always create new values.

</div>

---

## Question 11

**What does `useState` return?**

- **A.** A state value and a render function
- **B.** An object with state and dispatch
- **C.** The current state and a setter function
- **D.** Only the setter function

<button onclick="toggleExplanation('q11')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q11" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the exact **return value** of the `useState` hook.

### Option-by-Option Breakdown

**Option A: "A state value and a render function"**
❌ **Incorrect.** `useState` does not return a render function. React handles rendering automatically when state changes. The second value is a **setter function** (`setState`), not a render function.

**Option B: "An object with state and dispatch"**
❌ **Incorrect.** This describes `useReducer`'s return value: `[state, dispatch]`. `useState` returns an **array** (not an object) with `[state, setState]`. Also, `useState` uses a setter, not a dispatch function.

**Option C: "The current state and a setter function"**
✅ **Correct.** `useState` returns an **array with exactly two elements**: the current state value and a function to update it. You destructure them as `[state, setState] = useState(initialValue)`.

**Option D: "Only the setter function"**
❌ **Incorrect.** `useState` returns both values. You need the current state to read it in your JSX and the setter to update it. Returning only the setter would make it impossible to read the current value.

### Why C is Correct
The `useState` signature is:

```jsx
const [state, setState] = useState(initialValue);
//      ↑       ↑
//   current  setter
//   value    function
```

The array return pattern (using destructuring) was chosen because you can name the variables anything:
```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(true);
```

</div>

---

## Question 12

**What is `memo` mainly used for?**

- **A.** Memoizing API responses
- **B.** Preventing a component from re-rendering when its props have not changed
- **C.** Replacing `useEffect`
- **D.** Avoiding state updates entirely

<button onclick="toggleExplanation('q12')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q12" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the primary purpose of `React.memo` — a performance optimization tool.

### Option-by-Option Breakdown

**Option A: "Memoizing API responses"**
❌ **Incorrect.** API response caching is done by libraries like React Query, SWR, or by storing data in state/context. `React.memo` has nothing to do with network caching. It memoizes **component renders**, not data.

**Option B: "Preventing a component from re-rendering when its props have not changed"**
✅ **Correct.** `React.memo` wraps a component and performs a shallow comparison of props. If props haven't changed (by reference), React skips re-rendering that component. This is useful for expensive child components that receive stable props.

**Option C: "Replacing `useEffect`"**
❌ **Incorrect.** `React.memo` and `useEffect` serve completely different purposes. `useEffect` handles side effects; `React.memo` optimizes rendering. They are not interchangeable.

**Option D: "Avoiding state updates entirely"**
❌ **Incorrect.** `React.memo` does not prevent state updates. State updates still happen; `React.memo` only prevents the **render output** from being recalculated when props are unchanged. State management and rendering optimization are separate concerns.

### Why B is Correct
By default, when a parent re-renders, all children re-render too. `React.memo` creates a memoized version of a component:

```jsx
const ExpensiveChild = React.memo(function ExpensiveChild({ data }) {
  // This only re-renders if `data` reference changes
  return <div>{/* expensive computation */}</div>;
});
```

**Important caveat:** `React.memo` does a **shallow comparison**. If you pass objects or functions created inline, they'll have new references each render, defeating memoization. Use `useMemo` and `useCallback` to stabilize props.

</div>

---

## Question 13

**Which statement about `memo` is correct?**

- **A.** It guarantees a component will never re-render
- **B.** It is a performance optimization, not a guarantee
- **C.** It only works with class components
- **D.** It replaces context for deep prop passing

<button onclick="toggleExplanation('q13')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q13" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests nuanced understanding of `React.memo` — its limitations and proper usage.

### Option-by-Option Breakdown

**Option A: "It guarantees a component will never re-render"**
❌ **Incorrect.** `React.memo` does not guarantee zero re-renders. The component still re-renders when:
- Its own state changes
- Its context changes
- Its parent re-renders and passes new props (even if memoized at parent level)
- You force update with a key change

**Option B: "It is a performance optimization, not a guarantee"**
✅ **Correct.** `React.memo` is a **hint** to React that says "skip re-rendering if props look the same." React may still re-render in certain cases, and the comparison is shallow. It's an optimization tool, not a behavioral guarantee.

**Option C: "It only works with class components"**
❌ **Incorrect.** `React.memo` is specifically for **function components**. Class components have `shouldComponentUpdate` and `PureComponent` for similar optimization. `React.memo` was introduced to bring this capability to function components.

**Option D: "It replaces context for deep prop passing"**
❌ **Incorrect.** `React.memo` and Context solve different problems. Context avoids prop drilling by providing a subscription mechanism. `React.memo` avoids unnecessary re-renders. They are often used together, not as replacements.

### Why B is Correct
React's documentation explicitly states that `React.memo` is a performance optimization. It does not guarantee that the component will never re-render. React reserves the right to re-render components for various internal reasons. Additionally:

- Shallow comparison can miss deep equality (two different objects with same contents)
- React may skip the memoization in concurrent mode for priority reasons
- The comparison function itself has a small runtime cost

Use `React.memo` when you have profiled and confirmed that a component is expensive to render and receives stable props.

</div>

---

## Question 14

**When is `useMemo` most appropriate?**

- **A.** For storing mutable state
- **B.** For memoizing a calculation so the value stays the same until dependencies change
- **C.** For replacing reducers
- **D.** For passing values through props deeply

<button onclick="toggleExplanation('q14')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q14" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the correct use case for `useMemo` — distinguishing it from other hooks and patterns.

### Option-by-Option Breakdown

**Option A: "For storing mutable state"**
❌ **Incorrect.** Mutable values that persist across renders without triggering re-renders are stored with `useRef`. `useMemo` is for **computed values**, not mutable storage. Also, `useMemo` values should be treated as immutable.

**Option B: "For memoizing a calculation so the value stays the same until dependencies change"**
✅ **Correct.** `useMemo` caches the result of a computation and only recalculates when dependencies change. This is useful for expensive calculations, object/array creation, or any derived value where reference stability matters.

**Option C: "For replacing reducers"**
❌ **Incorrect.** `useMemo` and `useReducer` serve entirely different purposes. `useReducer` manages state transitions via actions. `useMemo` caches computed values. They are not interchangeable.

**Option D: "For passing values through props deeply"**
❌ **Incorrect.** Passing values deeply is solved by Context API or prop drilling. `useMemo` doesn't help with deep passing — it helps ensure the value doesn't change reference unnecessarily when passed as a prop.

### Why B is Correct
`useMemo` is for **expensive computations** and **reference stability**:

```jsx
// Expensive calculation - memoize it
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// Object creation - memoize to prevent child re-renders
const config = useMemo(() => ({
  theme: 'dark',
  language: 'en'
}), []);
```

**Don't overuse `useMemo`** — the comparison and caching overhead can exceed the benefit for simple calculations. Profile first, optimize second.

</div>

---

## Question 15

**What is React batching in the context of state updates?**

- **A.** React updates the UI after each line of code in an event handler
- **B.** React groups multiple state updates and applies them after the event handler finishes
- **C.** React updates state only once per application session
- **D.** React prevents multiple components from using state

<button onclick="toggleExplanation('q15')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q15" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **React's automatic batching** — a key performance optimization in state management.

### Option-by-Option Breakdown

**Option A: "React updates the UI after each line of code in an event handler"**
❌ **Incorrect.** This would be extremely inefficient. If React re-rendered after every `setState` call, a button click with three state updates would cause three re-renders. React intentionally avoids this.

**Option B: "React groups multiple state updates and applies them after the event handler finishes"**
✅ **Correct.** React **batches** (groups) multiple state updates inside event handlers, promises, and native event handlers. All updates are applied together in a single re-render at the end of the event. React 18 extended this to all updates (Automatic Batching).

**Option C: "React updates state only once per application session"**
❌ **Incorrect.** State updates happen continuously throughout the application's lifecycle. Batching happens per-event, not per-session. An app has thousands of state updates during its lifetime.

**Option D: "React prevents multiple components from using state"**
❌ **Incorrect.** React encourages every component to manage its own state. There's no restriction on how many components can use state simultaneously. Batching is about grouping updates, not limiting state usage.

### Why B is Correct
Batching is one of React's key performance optimizations:

```jsx
function handleClick() {
  setCount(c => c + 1);  // queued
  setFlag(true);          // queued
  setItems([...items]);   // queued
  // All three updates applied in a SINGLE re-render after this function finishes
}
```

**React 18 Automatic Batching** extends this to:
- setTimeout/setInterval callbacks
- Promise resolutions (.then)
- Native event handlers
- Any other asynchronous code

This prevents intermediate inconsistent UI states and reduces unnecessary renders.

</div>

---

## Question 16

**Why is immutability helpful in React state management?**

- **A.** It makes components always skip rendering
- **B.** It makes comparisons cheaper and helps React detect changes more easily
- **C.** It allows direct mutation without side effects
- **D.** It eliminates the need for props

<button onclick="toggleExplanation('q16')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q16" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests why React emphasizes **immutable state updates** — a foundational concept for performance and predictability.

### Option-by-Option Breakdown

**Option A: "It makes components always skip rendering"**
❌ **Incorrect.** Immutability doesn't guarantee skipped renders. React still re-renders components when state changes (even with immutable updates). Immutability enables **optimization tools** like `React.memo` and `useMemo` to work correctly, but it doesn't stop re-renders by itself.

**Option B: "It makes comparisons cheaper and helps React detect changes more easily"**
✅ **Correct.** With immutable updates, every state change creates a **new object reference**. React can detect changes instantly using `===` reference comparison instead of expensive deep equality checks. This enables fast reconciliation and memoization.

**Option C: "It allows direct mutation without side effects"**
❌ **Incorrect.** This is a contradiction. Immutability means **never mutating** state directly. Direct mutation is exactly what immutability prevents. The whole point is to create new values rather than modifying existing ones.

**Option D: "It eliminates the need for props"**
❌ **Incorrect.** Immutability has no relationship with props. Props are still the primary mechanism for parent-to-child communication. Immutability is about how state is updated, not how data flows between components.

### Why B is Correct
Immutability enables React's entire optimization model:

```jsx
// ❌ Mutable - React can't detect change
const items = [...state.items];
items.push(newItem);  // mutated the copy
setState({ items });  // same reference! React misses the update

// ✅ Immutable - new reference, React detects immediately
setState({
  items: [...state.items, newItem]  // new array reference
});
```

Reference comparison (`===`) is O(1) — instant. Deep equality is O(n) — potentially very slow for large objects. Immutability makes React fast.

</div>

---

## Question 17

**What is a good architecture choice for a complex screen with distant components needing shared state and updates?**

- **A.** Copy the same state into every child
- **B.** Use reducer + context together
- **C.** Put all state in local variables
- **D.** Avoid state and use only refs

<button onclick="toggleExplanation('q17')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q17" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests architectural decision-making for **complex shared state** across a component tree.

### Option-by-Option Breakdown

**Option A: "Copy the same state into every child"**
❌ **Incorrect.** Duplicating state across components creates multiple sources of truth. When state needs to update, you'd have to update every copy, leading to bugs and inconsistencies. React's philosophy is "single source of truth."

**Option B: "Use reducer + context together"**
✅ **Correct.** `useReducer` + Context is React's built-in solution for complex shared state. The reducer centralizes state logic, and Context distributes state and dispatch to distant components without prop drilling. This pattern scales well and is built into React.

**Option C: "Put all state in local variables"**
❌ **Incorrect.** Local variables (regular `let`/`const`) are reset on every render and don't trigger re-renders. They cannot serve as React state. Even if you meant local component state, it wouldn't be shared across distant components.

**Option D: "Avoid state and use only refs"**
❌ **Incorrect.** `useRef` values don't trigger re-renders. If distant components need to stay in sync with shared data, you need state (which causes re-renders) so components can react to changes. Refs are for mutable values that shouldn't cause UI updates.

### Why B is Correct
The `useReducer` + Context pattern is powerful for complex apps:

```jsx
// Create context
const StateContext = createContext();
const DispatchContext = createContext();

// Provider wraps the app
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// Any component can access state and dispatch
function DeepChild() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  // Can read state and dispatch actions from anywhere!
}
```

This is essentially a lightweight Redux built with React primitives.

</div>

---

## Question 18

**In a class component, which statement about state is correct?**

- **A.** State must be a string
- **B.** State must be an object, and it should not be mutated directly
- **C.** State can only be changed in `render()`
- **D.** Class state is identical to `useReducer` state

<button onclick="toggleExplanation('q18')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q18" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **class component state** — still relevant for maintaining legacy code and understanding React's evolution.

### Option-by-Option Breakdown

**Option A: "State must be a string"**
❌ **Incorrect.** Class component state is an object that can contain any values: strings, numbers, objects, arrays, etc. It's not limited to strings.

**Option B: "State must be an object, and it should not be mutated directly"**
✅ **Correct.** In class components, `this.state` is always an object. You must never mutate it directly (`this.state.count = 5` is wrong). Always use `this.setState()` to create a new state object. React merges the update with existing state.

**Option C: "State can only be changed in `render()`"**
❌ **Incorrect.** `render()` should be pure — no side effects, no state changes. State changes happen in event handlers, lifecycle methods (`componentDidMount`), or callbacks. Changing state in `render()` would cause an infinite loop.

**Option D: "Class state is identical to `useReducer` state"**
❌ **Incorrect.** Class state uses `this.setState()` which merges updates partially. `useReducer` replaces the entire state with the reducer's return value. They have different update semantics and APIs.

### Why B is Correct
Class component state rules:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: '' };  // must be an object
  }

  increment = () => {
    // ✅ Correct: immutable update via setState
    this.setState({ count: this.state.count + 1 });

    // ❌ Wrong: direct mutation
    // this.state.count = this.state.count + 1;
  };
}
```

`setState()` merges the provided object with existing state (shallow merge), unlike `useState` which replaces the entire value.

</div>

---

## Question 19

**What is the conventional shape of a React reducer action object?**

- **A.** It must always have `type`, and may contain other fields
- **B.** It must be a function
- **C.** It must contain `props` and `children`
- **D.** It can never contain extra data

<button onclick="toggleExplanation('q19')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q19" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of the **Flux action pattern** — the conventional structure of actions in React reducers.

### Option-by-Option Breakdown

**Option A: "It must always have `type`, and may contain other fields"**
✅ **Correct.** The standard Redux/Flux action convention is an object with a `type` property (string) that describes the action. It can optionally include additional fields like `payload`, `meta`, `error`, etc. The `type` is required for the reducer to know what to do.

**Option B: "It must be a function"**
❌ **Incorrect.** Actions are plain objects, not functions. (Redux Thunk uses action creators that return functions, but the action itself dispatched to the reducer is an object.)

**Option C: "It must contain `props` and `children`"**
❌ **Incorrect.** `props` and `children` are React component concepts, not action object properties. Actions describe state transitions, not component structure.

**Option D: "It can never contain extra data"**
❌ **Incorrect.** Actions commonly contain extra data in a `payload` field (or similar). For example: `{ type: 'add_user', payload: { id: 1, name: 'Alice' } }`. Extra data is essential for passing information needed for the state transition.

### Why A is Correct
The conventional action shape follows the Flux Standard Action (FSA) pattern:

```jsx
// Minimal action
{ type: 'increment' }

// Action with payload
{ type: 'add_todo', payload: { text: 'Learn React', id: 1 } }

// Action with error
{ type: 'fetch_failed', payload: new Error('Network error'), error: true }
```

The `type` property is mandatory because the reducer uses it in a switch statement:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'add_todo': return { todos: [...state.todos, action.payload] };
    default: return state;
  }
}
```

</div>

---

## Question 20

**Which situation often indicates that state should be moved into a reducer rather than kept in multiple `useState` calls?**

- **A.** When the component has no state at all
- **B.** When several state updates depend on the same set of transitions and logic is getting hard to manage
- **C.** When you need a one-time constant
- **D.** When you only render static text

<button onclick="toggleExplanation('q20')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q20" style="display: none; margin-top: 15px; padding: 20px; background: ; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests when to refactor from multiple `useState` calls to a single `useReducer` — an important architectural judgment.

### Option-by-Option Breakdown

**Option A: "When the component has no state at all"**
❌ **Incorrect.** If there's no state, you don't need `useState` or `useReducer`. This is a contradiction — you can't move non-existent state into a reducer.

**Option B: "When several state updates depend on the same set of transitions and logic is getting hard to manage"**
✅ **Correct.** This is the classic signal to use `useReducer`. When you have multiple interrelated state values, complex transition rules, or state updates scattered across many event handlers, centralizing in a reducer makes the code more maintainable, testable, and predictable.

**Option C: "When you need a one-time constant"**
❌ **Incorrect.** One-time constants don't need state management at all. Use a regular `const` variable or `useRef` if you need a stable reference. Neither `useState` nor `useReducer` is appropriate.

**Option D: "When you only render static text"**
❌ **Incorrect.** Static text requires no state. A pure presentational component with no interactivity doesn't need `useState` or `useReducer`.

### Why B is Correct
Signs that `useReducer` is better than multiple `useState` calls:

1. **Multiple state values that update together** — e.g., form with `name`, `email`, `password`, `errors`, `isValid`
2. **Complex state transitions** — next state depends on current state in non-trivial ways
3. **Many event handlers with similar logic** — all updating different pieces of state
4. **State logic needs testing** — reducer functions are pure and easy to unit test

```jsx
// ❌ Multiple useState - scattered logic
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);

// ✅ useReducer - centralized logic
const [state, dispatch] = useReducer(formReducer, initialState);
// All transitions handled in one place
```

</div>

---

## 📊 Quick Answer Key

| Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|
| 1 | B | 6 | B | 11 | C | 16 | B |
| 2 | B | 7 | B | 12 | B | 17 | B |
| 3 | B | 8 | B | 13 | B | 18 | B |
| 4 | B | 9 | C | 14 | B | 19 | A |
| 5 | B | 10 | C | 15 | B | 20 | B |

---

<script>
function toggleExplanation(id) {
  const el = document.getElementById(id);
  const btn = el.previousElementSibling;
  if (el.style.display === 'none') {
    el.style.display = 'block';
    btn.textContent = 'Hide Explanation';
  } else {
    el.style.display = 'none';
    btn.textContent = 'Show Explanation';
  }
}
</script>

> 💡 **Study Tip:** Click **"Show Explanation"** on each question to reveal the full breakdown. Try answering the question first before viewing the explanation to test your knowledge!
