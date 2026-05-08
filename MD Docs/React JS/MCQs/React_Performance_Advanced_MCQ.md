# ⚛️ React Performance & Advanced Concepts — Interactive MCQ Practice

> Click the **"Show Explanation"** button below each question to reveal the detailed breakdown.

---

## Question 1

**What is the main purpose of `React.memo()`?**

- **A.** Prevent state updates
- **B.** Cache API responses
- **C.** Prevent unnecessary component re-renders
- **D.** Optimize Redux store

<button onclick="toggleExplanation('q1')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q1" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your understanding of `React.memo` — one of React's primary performance optimization tools for function components.

### Option-by-Option Breakdown

**Option A: "Prevent state updates"**
❌ **Incorrect.** `React.memo` has nothing to do with preventing state updates. State updates still happen normally inside a memoized component. `React.memo` only controls whether the component **re-renders** when its parent re-renders.

**Option B: "Cache API responses"**
❌ **Incorrect.** API response caching is handled by libraries like React Query, SWR, or by storing fetched data in state/context. `React.memo` is a rendering optimization tool — it memoizes **component render output**, not network data.

**Option C: "Prevent unnecessary component re-renders"**
✅ **Correct.** `React.memo` wraps a component and performs a shallow comparison of its props. If props haven't changed (by reference), React skips re-rendering that component, even if the parent re-rendered.

**Option D: "Optimize Redux store"**
❌ **Incorrect.** `React.memo` is a React core API, not a Redux tool. Redux has its own optimization mechanisms (`connect`'s `mapStateToProps`, `reselect` for memoized selectors).

### Why C is Correct
By default, React re-renders all children when a parent re-renders. `React.memo` creates a memoized version that skips this when props are unchanged.

</div>

---

## Question 2

**`React.memo()` performs which type of comparison on props by default?**

- **A.** Deep comparison
- **B.** Recursive comparison
- **C.** Shallow comparison
- **D.** Reference + value comparison

<button onclick="toggleExplanation('q2')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q2" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the specific comparison strategy used by `React.memo` — critical for understanding when memoization works and when it fails.

### Option-by-Option Breakdown

**Option A: "Deep comparison"**
❌ **Incorrect.** `React.memo` does **not** perform deep comparison by default. Deep comparison (recursively checking every nested property) is expensive and would often cost more than just re-rendering.

**Option B: "Recursive comparison"**
❌ **Incorrect.** Recursive comparison is essentially deep comparison. `React.memo` does not recursively traverse objects.

**Option C: "Shallow comparison"**
✅ **Correct.** By default, `React.memo` performs a **shallow comparison** of props. It compares each prop using `===` (strict equality/reference comparison). For primitives, this checks value. For objects/arrays/functions, this checks reference identity.

**Option D: "Reference + value comparison"**
❌ **Incorrect.** `React.memo` uses `===` for all comparisons. For primitives, `===` checks value. For objects, `===` checks reference. There's no special logic — it's standard JavaScript strict equality.

### Why C is Correct
Shallow comparison means comparing top-level prop references:

```jsx
// For primitives: compares values
<Child count={5} />  // prevProps.count === nextProps.count

// For objects: compares references, NOT contents
<Child config={{ theme: 'dark' }} />
// { theme: 'dark' } === { theme: 'dark' } → false (different objects!)
```

</div>

---

## Question 3

**Which hook is primarily used to memoize expensive calculations?**

- **A.** `useRef`
- **B.** `useEffect`
- **C.** `useMemo`
- **D.** `useReducer`

<button onclick="toggleExplanation('q3')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q3" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests your ability to distinguish between React hooks and identify which one is designed for caching computed values.

### Option-by-Option Breakdown

**Option A: "`useRef`"**
❌ **Incorrect.** `useRef` stores mutable values that persist across renders without causing re-renders. It's used for DOM references, timers, previous values. It does not memoize calculations.

**Option B: "`useEffect`"**
❌ **Incorrect.** `useEffect` handles **side effects** (data fetching, subscriptions, DOM manipulation). It is not designed for memoizing calculations.

**Option C: "`useMemo`"**
✅ **Correct.** `useMemo` is specifically designed to **memoize the result of expensive computations**. It caches the computed value and only recalculates when dependencies change.

**Option D: "`useReducer`"**
❌ **Incorrect.** `useReducer` manages complex state transitions via a reducer function and actions. It's for state logic, not computation caching.

### Why C is Correct
`useMemo` signature: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

```jsx
// Expensive sorting - memoize it
const sortedUsers = useMemo(() => {
  return users.sort((a, b) => a.score - b.score);
}, [users]);
```

**Warning:** Don't overuse `useMemo`. The comparison overhead can exceed the benefit for simple calculations. Profile first!

</div>

---

## Question 4

**What problem does `useCallback()` mainly solve?**

- **A.** State mutation
- **B.** Re-render caused by new function references
- **C.** Infinite loops in reducers
- **D.** API throttling

<button onclick="toggleExplanation('q4')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q4" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of `useCallback` — a hook specifically designed to stabilize function references across renders.

### Option-by-Option Breakdown

**Option A: "State mutation"**
❌ **Incorrect.** State mutation is prevented by following immutability principles, not by `useCallback`.

**Option B: "Re-render caused by new function references"**
✅ **Correct.** Functions defined inside a component are recreated on every render. When passed as props to `React.memo` children or used in dependency arrays, these new references cause unnecessary re-renders or effect re-runs. `useCallback` memoizes the function reference.

**Option C: "Infinite loops in reducers"**
❌ **Incorrect.** Infinite loops in reducers are caused by dispatching actions inside the reducer. `useCallback` doesn't solve reducer loops.

**Option D: "API throttling"**
❌ **Incorrect.** API throttling is handled by utility libraries (Lodash's `throttle`/`debounce`). `useCallback` doesn't throttle — it memoizes.

### Why B is Correct
```jsx
function Parent() {
  // ❌ New function reference every render
  const handleClick = () => setCount(c => c + 1);

  // ✅ Same function reference between renders
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <MemoChild onClick={handleClick} />;
}
```

</div>

---

## Question 5

**Which scenario can still cause a memoized component to re-render?**

- **A.** Parent component re-renders with identical primitive props
- **B.** Context value changes
- **C.** Component uses `React.memo()`
- **D.** Component has no state

<button onclick="toggleExplanation('q5')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q5" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the **limitations** of `React.memo` — understanding when memoization is bypassed.

### Option-by-Option Breakdown

**Option A: "Parent component re-renders with identical primitive props"**
❌ **Incorrect.** This is exactly what `React.memo` prevents. If props are identical, `React.memo` skips the re-render.

**Option B: "Context value changes"**
✅ **Correct.** `React.memo` only compares **props**. It does **not** prevent re-renders caused by **context changes**. If a component consumes context via `useContext`, it will re-render whenever that context value changes.

**Option C: "Component uses `React.memo()`"**
❌ **Incorrect.** Using `React.memo` is the mechanism that *prevents* unnecessary re-renders.

**Option D: "Component has no state"**
❌ **Incorrect.** Having no internal state doesn't prevent or cause re-renders. A stateless component still re-renders when its parent re-renders.

### Why B is Correct
`React.memo` only checks props. Context is a separate subscription:

```jsx
const ThemeContext = createContext('light');

const MemoChild = React.memo(function Child() {
  const theme = useContext(ThemeContext);  // Subscribes to context
  return <div className={theme}>Child</div>;
});

// MemoChild re-renders when theme changes, even with React.memo
```

</div>

---

## Question 6

**What is the biggest performance issue with inline object props?**
```jsx
<MyComp style={{ color: "red" }} />
```

- **A.** Causes memory leaks
- **B.** Creates a new object every render
- **C.** Blocks reconciliation
- **D.** Breaks virtual DOM

<button onclick="toggleExplanation('q6')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q6" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **reference identity** in JavaScript and how inline object creation defeats React's optimization.

### Option-by-Option Breakdown

**Option A: "Causes memory leaks"**
❌ **Incorrect.** Inline object props don't cause memory leaks. Memory leaks come from uncleaned subscriptions or timers.

**Option B: "Creates a new object every render"**
✅ **Correct.** `{ color: "red" }` creates a **new object** on every render. Even though contents are identical, the reference is different. When passed to a `React.memo` child, shallow comparison sees a changed prop and forces re-render.

**Option C: "Blocks reconciliation"**
❌ **Incorrect.** Inline objects don't block reconciliation. Reconciliation still happens normally.

**Option D: "Breaks virtual DOM"**
❌ **Incorrect.** The Virtual DOM works fine. The problem is **performance** — unnecessary re-renders.

### Why B is Correct
JavaScript creates a new object for every object literal:

```jsx
function Parent() {
  return (
    <div>
      {/* ❌ New { color: "red" } object created EVERY render */}
      <MemoChild style={{ color: "red" }} />
    </div>
  );
}
```

**Solutions:**
```jsx
// ✅ Define outside component
const redStyle = { color: "red" };
function Parent() {
  return <MemoChild style={redStyle} />;
}

// ✅ Use useMemo
function Parent() {
  const style = useMemo(() => ({ color: "red" }), []);
  return <MemoChild style={style} />;
}
```

</div>

---

## Question 7

**Which hook should be preferred for storing mutable values without causing re-renders?**

- **A.** `useMemo`
- **B.** `useEffect`
- **C.** `useState`
- **D.** `useRef`

<button onclick="toggleExplanation('q7')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q7" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of `useRef` — the hook designed for mutable values that should not trigger re-renders.

### Option-by-Option Breakdown

**Option A: "`useMemo`"**
❌ **Incorrect.** `useMemo` caches computed values. It's for expensive computations, not mutable storage.

**Option B: "`useEffect`"**
❌ **Incorrect.** `useEffect` handles side effects, not value storage.

**Option C: "`useState`"**
❌ **Incorrect.** `useState` triggers re-renders when changed. The question specifically asks for values that should **not** cause re-renders.

**Option D: "`useRef`"**
✅ **Correct.** `useRef` returns a mutable object `{ current: value }` that persists across renders. Updating `.current` does **not** trigger a re-render.

### Why D is Correct
```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);  // Stores timer ID

  const start = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (...);
}
```

</div>

---

## Question 8

**What is React reconciliation?**

- **A.** DOM rendering process
- **B.** Process of comparing virtual DOM trees
- **C.** Redux state synchronization
- **D.** Browser repaint optimization

<button onclick="toggleExplanation('q8')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q8" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the fundamental definition of **reconciliation** — the core algorithm that makes React efficient.

### Option-by-Option Breakdown

**Option A: "DOM rendering process"**
❌ **Incorrect.** DOM rendering (commit phase) is where React applies changes to the real DOM. Reconciliation happens **before** that.

**Option B: "Process of comparing virtual DOM trees"**
✅ **Correct.** Reconciliation is React's algorithm for comparing the previous Virtual DOM tree with the new one to find the minimal set of changes.

**Option C: "Redux state synchronization"**
❌ **Incorrect.** Redux has its own state management. Reconciliation is a React core concept.

**Option D: "Browser repaint optimization"**
❌ **Incorrect.** Browser repaint is handled by the browser's rendering engine, not React.

### Why B is Correct
Reconciliation is the "diffing" step:

```
State/Props change
        ↓
Render Phase (create new Virtual DOM)
        ↓
Reconciliation (compare old vs new Virtual DOM) ← THIS
        ↓
Commit Phase (apply minimal changes to real DOM)
        ↓
Browser Paint
```

React uses a heuristic O(n) algorithm with two assumptions:
1. Different element types produce different trees
2. Keys hint at stable elements

</div>

---

## Question 9

**Why are keys important in lists?**

- **A.** Improve CSS rendering
- **B.** Help React identify changed elements efficiently
- **C.** Prevent state updates
- **D.** Enable memoization

<button onclick="toggleExplanation('q9')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q9" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of the `key` prop in React lists.

### Option-by-Option Breakdown

**Option A: "Improve CSS rendering"**
❌ **Incorrect.** Keys have no effect on CSS. They are an internal React mechanism.

**Option B: "Help React identify changed elements efficiently"**
✅ **Correct.** Keys provide stable identity for list items. When a list changes, React uses keys to match old items with new items efficiently.

**Option C: "Prevent state updates"**
❌ **Incorrect.** Keys don't prevent state updates. They help React decide which DOM nodes to reuse.

**Option D: "Enable memoization"**
❌ **Incorrect.** Keys and memoization are unrelated concepts.

### Why B is Correct
Without keys, React compares by position:

```jsx
// Before: [A, B, C]
// After:  [A, C, B] (reordered)

// Without keys: React sees position changes → updates content
// With keys: React sees identity → just reorders DOM nodes
```

```jsx
// ✅ Correct: stable unique IDs
items.map(item => <li key={item.id}>{item.name}</li>)

// ❌ Wrong: index causes bugs on reorder
items.map((item, index) => <li key={index}>{item.name}</li>)
```

</div>

---

## Question 10

**Which key choice is MOST harmful for performance?**

- **A.** UUID generated once
- **B.** Database ID
- **C.** Array index in dynamic lists
- **D.** Stable string key

<button onclick="toggleExplanation('q10')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q10" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **key selection** and which approach causes the most problems.

### Option-by-Option Breakdown

**Option A: "UUID generated once"**
❌ **Incorrect.** A UUID generated once per item is a good key choice — stable and unique.

**Option B: "Database ID"**
❌ **Incorrect.** Database IDs are the **ideal** key choice — stable, unique, and persistent.

**Option C: "Array index in dynamic lists"**
✅ **Correct.** Using array index as a key in **dynamic** lists is the most harmful choice. When items reorder, indices shift, causing React to mismatch components and potentially shift state between items.

**Option D: "Stable string key"**
❌ **Incorrect.** A stable string key is a good choice.

### Why C is Correct
Array indices as keys cause problems:

```jsx
// Initial: [{id: 10, name: 'Alice'}, {id: 20, name: 'Bob'}]
// Rendered with index as key:
// <li key={0}>Alice</li>
// <li key={1}>Bob</li>

// After deleting Alice:
// <li key={0}>Bob</li>  ← React thinks this is the same element!
// Bob inherits Alice's component instance and state
```

**When index IS acceptable:**
- List is static (never reordered or filtered)
- Items have no unique IDs
- List items are stateless

</div>

---

## Question 11

**What does code splitting primarily improve?**

- **A.** State management
- **B.** Initial bundle size
- **C.** CSS performance
- **D.** API latency

<button onclick="toggleExplanation('q11')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q11" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **code splitting** — a bundle optimization technique.

### Option-by-Option Breakdown

**Option A: "State management"**
❌ **Incorrect.** Code splitting has nothing to do with state management.

**Option B: "Initial bundle size"**
✅ **Correct.** Code splitting breaks your app into smaller chunks loaded on demand. Users only download the code they need initially, reducing the initial JavaScript bundle size.

**Option C: "CSS performance"**
❌ **Incorrect.** Code splitting is a JavaScript bundling strategy, not CSS optimization.

**Option D: "API latency"**
❌ **Incorrect.** API latency is a network/server issue. Code splitting affects how JavaScript is loaded in the browser.

### Why B is Correct
Without code splitting:
```
User visits /home → Downloads 2MB bundle (entire app)
```

With code splitting:
```
User visits /home → Downloads 500KB (home page only)
User navigates /dashboard → Downloads 300KB dashboard chunk on demand
```

React provides `React.lazy()` and `Suspense` for component-level code splitting.

</div>

---

## Question 12

**Which API is commonly used for lazy loading components?**

- **A.** `React.memo()`
- **B.** `React.lazy()`
- **C.** `useMemo()`
- **D.** `useRef()`

<button onclick="toggleExplanation('q12')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q12" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of React's built-in API for dynamic imports and lazy loading.

### Option-by-Option Breakdown

**Option A: "`React.memo()`"**
❌ **Incorrect.** `React.memo` is for memoizing component renders.

**Option B: "`React.lazy()`"**
✅ **Correct.** `React.lazy` is the standard React API for lazy loading components. It allows dynamic imports as regular components.

**Option C: "`useMemo()`"**
❌ **Incorrect.** `useMemo` memoizes computed values, not code loading.

**Option D: "`useRef()`"**
❌ **Incorrect.** `useRef` stores mutable values, unrelated to code loading.

### Why B is Correct
```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
```

The component code is fetched only when first needed.

</div>

---

## Question 13

**Which component is required with `React.lazy()`?**

- **A.** `Profiler`
- **B.** `StrictMode`
- **C.** `Suspense`
- **D.** `Fragment`

<button onclick="toggleExplanation('q13')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q13" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the required companion component for `React.lazy`.

### Option-by-Option Breakdown

**Option A: "`Profiler`"**
❌ **Incorrect.** `Profiler` measures rendering performance.

**Option B: "`StrictMode`"**
❌ **Incorrect.** `StrictMode` highlights potential problems in development.

**Option C: "`Suspense`"**
✅ **Correct.** `Suspense` is **required** when using `React.lazy`. It displays a fallback UI while the lazy component is loading.

**Option D: "`Fragment`"**
❌ **Incorrect.** `Fragment` groups elements without adding DOM nodes.

### Why C is Correct
`Suspense` handles the loading state:

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

Without `Suspense`, React would throw an error because it doesn't know what to render while loading.

</div>

---

## Question 14

**What is virtualization in React?**

- **A.** Rendering hidden DOM nodes
- **B.** Rendering only visible list items
- **C.** Compressing component trees
- **D.** Server-side rendering optimization

<button onclick="toggleExplanation('q14')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q14" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **list virtualization** — a performance technique for large datasets.

### Option-by-Option Breakdown

**Option A: "Rendering hidden DOM nodes"**
❌ **Incorrect.** Virtualization avoids rendering hidden/off-screen nodes.

**Option B: "Rendering only visible list items"**
✅ **Correct.** Virtualization renders only the list items currently visible in the viewport, plus a small buffer. As the user scrolls, items are dynamically added and removed.

**Option C: "Compressing component trees"**
❌ **Incorrect.** Virtualization doesn't compress anything.

**Option D: "Server-side rendering optimization"**
❌ **Incorrect.** Virtualization is a client-side technique.

### Why B is Correct
Without virtualization, 10,000 items create 10,000 DOM nodes. With virtualization, only ~20 visible items are in the DOM at any time.

Popular libraries: `react-window`, `react-virtualized`, `@tanstack/react-virtual`.

</div>

---

## Question 15

**Which library is popular for large-list virtualization?**

- **A.** Axios
- **B.** Lodash
- **C.** `react-window`
- **D.** Zustand

<button onclick="toggleExplanation('q15')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q15" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of popular React ecosystem libraries.

### Option-by-Option Breakdown

**Option A: "Axios"**
❌ **Incorrect.** Axios is an HTTP client.

**Option B: "Lodash"**
❌ **Incorrect.** Lodash is a utility library.

**Option C: "`react-window`"**
✅ **Correct.** `react-window` is the most popular library for list virtualization, created by Brian Vaughn (React core team).

**Option D: "Zustand"**
❌ **Incorrect.** Zustand is a state management library.

### Why C is Correct
```jsx
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={500}
  itemCount={10000}
  itemSize={35}
>
  {({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  )}
</FixedSizeList>
```

</div>

---

## Question 16

**Which operation is generally MOST expensive in React apps?**

- **A.** Creating JSX
- **B.** Updating the DOM
- **C.** Importing hooks
- **D.** Reading props

<button onclick="toggleExplanation('q16')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q16" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of performance bottlenecks in React.

### Option-by-Option Breakdown

**Option A: "Creating JSX"**
❌ **Incorrect.** Creating JSX elements is very fast — just creating lightweight JS objects.

**Option B: "Updating the DOM"**
✅ **Correct.** DOM operations are by far the most expensive. The browser must recalculate styles, reflow layout, repaint pixels, and composite layers.

**Option C: "Importing hooks"**
❌ **Incorrect.** Importing is a one-time build-time operation.

**Option D: "Reading props"**
❌ **Incorrect.** Reading props is just accessing object properties — extremely fast.

### Why B is Correct
Performance hierarchy (most to least expensive):
1. **DOM manipulation** (layout, paint, composite) — milliseconds
2. **JavaScript execution** — microseconds
3. **Object creation** (JSX) — nanoseconds

React's entire optimization strategy exists to **minimize real DOM updates**.

</div>

---

## Question 17

**What is a common downside of excessive memoization?**

- **A.** Increased memory usage and complexity
- **B.** DOM corruption
- **C.** Slower APIs
- **D.** Browser crashes

<button onclick="toggleExplanation('q17')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q17" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of when memoization becomes counterproductive.

### Option-by-Option Breakdown

**Option A: "Increased memory usage and complexity"**
✅ **Correct.** Memoization trades memory for speed. Every memoized value is stored in memory. Excessive memoization increases memory footprint and adds code complexity.

**Option B: "DOM corruption"**
❌ **Incorrect.** Memoization doesn't corrupt the DOM.

**Option C: "Slower APIs"**
❌ **Incorrect.** Memoization doesn't affect API speed.

**Option D: "Browser crashes"**
❌ **Incorrect.** Browser crashes from memoization are virtually unheard of.

### Why A is Correct
Memoization costs:
- Memory overhead for cached values
- Comparison overhead for dependency checks
- Code complexity from managing dependency arrays

**Rule of thumb:** Only memoize when:
- The computation is genuinely expensive
- The value is passed to `React.memo` children
- The value is used in dependency arrays
- You've profiled and confirmed a bottleneck

</div>

---

## Question 18

**Why should state be kept as local as possible?**

- **A.** Prevent hook execution
- **B.** Reduce unnecessary re-renders
- **C.** Eliminate props
- **D.** Improve CSS loading

<button onclick="toggleExplanation('q18')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q18" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of **state colocation** — a key architectural principle.

### Option-by-Option Breakdown

**Option A: "Prevent hook execution"**
❌ **Incorrect.** Local state doesn't prevent hooks from running.

**Option B: "Reduce unnecessary re-renders"**
✅ **Correct.** When state is local, only that component re-renders. If state is lifted too high, every component between the state and consumer re-renders unnecessarily.

**Option C: "Eliminate props"**
❌ **Incorrect.** Local state doesn't eliminate props — it just means fewer components need that state via props.

**Option D: "Improve CSS loading"**
❌ **Incorrect.** State location has no effect on CSS.

### Why B is Correct
```jsx
// ❌ State too high - causes unnecessary re-renders
function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <Header />
      <SearchBar value={inputValue} onChange={setInputValue} />
      <MainContent />  {/* Re-renders unnecessarily */}
      <Footer />       {/* Re-renders unnecessarily */}
    </div>
  );
}

// ✅ State colocated - minimal re-renders
function App() {
  return (
    <div>
      <Header />
      <SearchBar />  {/* State lives here */}
      <MainContent />
      <Footer />
    </div>
  );
}
```

**Principle:** Lift state up only when necessary (shared between siblings). Keep it as close to where it's used as possible.

</div>

---

## Question 19

**Which React feature allows rendering updates with lower priority?**

- **A.** Concurrent Rendering
- **B.** Hydration
- **C.** Error Boundaries
- **D.** Portals

<button onclick="toggleExplanation('q19')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q19" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of React 18's **Concurrent Rendering**.

### Option-by-Option Breakdown

**Option A: "Concurrent Rendering"**
✅ **Correct.** Concurrent Rendering (React 18) allows React to interrupt, pause, and resume rendering. It prioritizes urgent updates (typing, clicking) over less urgent ones.

**Option B: "Hydration"**
❌ **Incorrect.** Hydration makes server-rendered HTML interactive.

**Option C: "Error Boundaries"**
❌ **Incorrect.** Error Boundaries catch JavaScript errors.

**Option D: "Portals"**
❌ **Incorrect.** Portals render children into different DOM nodes.

### Why A is Correct
Concurrent Rendering enables priority-based updates:

```jsx
import { useTransition } from 'react';

function SearchResults() {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);  // Urgent: update input immediately

    startTransition(() => {
      setResults(filterHugeList(value));  // Low priority: can be interrupted
    });
  };
}
```

**Benefits:**
- Urgent updates are never blocked
- Large updates can be interrupted
- Better perceived performance

</div>

---

## Question 20

**What does `useTransition()` help with?**

- **A.** API caching
- **B.** Scheduling non-urgent UI updates
- **C.** DOM hydration
- **D.** CSS animations

<button onclick="toggleExplanation('q20')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q20" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of `useTransition` — a React 18 hook for managing update priority.

### Option-by-Option Breakdown

**Option A: "API caching"**
❌ **Incorrect.** API caching is handled by React Query, SWR, etc.

**Option B: "Scheduling non-urgent UI updates"**
✅ **Correct.** `useTransition` marks state updates as **transitions** (low priority). React can interrupt these if more urgent work comes in.

**Option C: "DOM hydration"**
❌ **Incorrect.** Hydration is handled by `ReactDOM.hydrateRoot()`.

**Option D: "CSS animations"**
❌ **Incorrect.** CSS animations are handled by the browser's CSS engine.

### Why B is Correct
```jsx
import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);  // Low priority - can be interrupted
    });
  };

  return (
    <div>
      <TabList onSelect={selectTab} />
      {isPending && <div>Loading tab...</div>}
      <TabContent tab={tab} />
    </div>
  );
}
```

**Key features:**
- `isPending` tells you if the transition is ongoing
- Updates inside `startTransition` can be interrupted
- Prevents input lag during heavy renders

</div>

---

## Question 21

**Which hook can defer rendering of expensive values?**

- **A.** `useReducer`
- **B.** `useRef`
- **C.** `useDeferredValue`
- **D.** `useLayoutEffect`

<button onclick="toggleExplanation('q21')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q21" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of `useDeferredValue` — a React 18 hook for deferring expensive re-renders.

### Option-by-Option Breakdown

**Option A: "`useReducer`"**
❌ **Incorrect.** `useReducer` manages complex state transitions. It has no deferring capability.

**Option B: "`useRef`"**
❌ **Incorrect.** `useRef` stores mutable values without causing re-renders. It doesn't defer anything.

**Option C: "`useDeferredValue`"**
✅ **Correct.** `useDeferredValue` tells React that a value is less urgent. React keeps the old value while working on the new value in the background.

**Option D: "`useLayoutEffect`"**
❌ **Incorrect.** `useLayoutEffect` runs synchronously before paint — the opposite of deferring.

### Why C is Correct
```jsx
import { useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // query updates immediately (input stays responsive)
  // deferredQuery updates later (expensive list can lag behind)
  const results = useMemo(() => {
    return filterHugeDataset(deferredQuery);
  }, [deferredQuery]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <SearchResults results={results} />
    </div>
  );
}
```

**Difference from `useTransition`:**
- `useTransition` wraps the **state update** (imperative)
- `useDeferredValue` wraps the **value** (declarative)

</div>

---

## Question 22

**What is the primary benefit of server-side rendering (SSR)?**

- **A.** Smaller CSS files
- **B.** Faster initial page load and SEO
- **C.** Faster Redux dispatch
- **D.** Reduced API calls

<button onclick="toggleExplanation('q22')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q22" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of SSR benefits.

### Option-by-Option Breakdown

**Option A: "Smaller CSS files"**
❌ **Incorrect.** SSR doesn't reduce CSS file sizes.

**Option B: "Faster initial page load and SEO"**
✅ **Correct.** SSR generates HTML on the server, so the browser receives fully rendered content immediately. This means faster First Contentful Paint and better SEO (search engines can crawl the HTML).

**Option C: "Faster Redux dispatch"**
❌ **Incorrect.** Redux dispatch is a client-side operation.

**Option D: "Reduced API calls"**
❌ **Incorrect.** SSR often requires the same or more API calls, just made on the server.

### Why B is Correct
CSR vs SSR:
```
CSR: User requests page → Download HTML shell → Download JS → Execute React → Fetch data → Render content (slow!)
SSR: User requests page → Server fetches data → Server renders HTML → Browser receives full HTML immediately (fast!)
```

**Trade-offs:**
- SSR adds server complexity
- Time to Interactive might be slightly delayed due to hydration
- Best for content-heavy sites (blogs, e-commerce)

</div>

---

## Question 23

**Hydration in React refers to:**

- **A.** Synchronizing server-rendered HTML with React
- **B.** Updating CSS dynamically
- **C.** Caching fetch requests
- **D.** Virtual DOM cleanup

<button onclick="toggleExplanation('q23')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q23" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the definition of **hydration**.

### Option-by-Option Breakdown

**Option A: "Synchronizing server-rendered HTML with React"**
✅ **Correct.** Hydration is where React "takes over" server-rendered HTML, attaching event listeners and setting up component state.

**Option B: "Updating CSS dynamically"**
❌ **Incorrect.** Dynamic CSS is handled by CSS-in-JS libraries.

**Option C: "Caching fetch requests"**
❌ **Incorrect.** Request caching is done by HTTP caches or service workers.

**Option D: "Virtual DOM cleanup"**
❌ **Incorrect.** The Virtual DOM is recreated on every render.

### Why A is Correct
```jsx
// Server: renders HTML string
const html = ReactDOMServer.renderToString(<App />);

// Client: hydrates the existing HTML
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
// React walks the DOM, attaches listeners, sets up state
// WITHOUT re-creating DOM nodes (if they match)
```

**Hydration mismatches:** If server HTML differs from client initial render, React warns and may discard server HTML.

</div>

---

## Question 24

**Which lifecycle/hook can block browser painting if overused?**

- **A.** `useEffect`
- **B.** `useMemo`
- **C.** `useLayoutEffect`
- **D.** `useCallback`

<button onclick="toggleExplanation('q24')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q24" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests timing differences between `useEffect` and `useLayoutEffect`.

### Option-by-Option Breakdown

**Option A: "`useEffect`"**
❌ **Incorrect.** `useEffect` runs asynchronously after paint. It doesn't block rendering.

**Option B: "`useMemo`"**
❌ **Incorrect.** `useMemo` runs during render but is just a computation.

**Option C: "`useLayoutEffect`"**
✅ **Correct.** `useLayoutEffect` runs **synchronously after DOM mutations but before paint**. Heavy work inside it delays the frame from being drawn.

**Option D: "`useCallback`"**
❌ **Incorrect.** `useCallback` memoizes functions and has no effect on painting.

### Why C is Correct
Timing comparison:
```
Render Phase → useMemo, useCallback, component logic
Commit Phase → DOM updates
useLayoutEffect → Runs here (synchronous, blocks paint)
Browser Paint → Screen updates
useEffect → Runs here (asynchronous, after paint)
```

```jsx
function Tooltip() {
  const ref = useRef();

  // ✅ Good: measure DOM and adjust before user sees it
  useLayoutEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setPosition(calculatePosition(rect));
  }, []);

  // ❌ Bad: heavy computation blocks paint
  useLayoutEffect(() => {
    heavyComputation();  // Blocks the browser!
  }, []);
}
```

**Use `useLayoutEffect` only when you need to measure/adjust DOM before paint.**

</div>

---

## Question 25

**What is the purpose of the React Profiler?**

- **A.** Security testing
- **B.** Detect unnecessary renders and performance bottlenecks
- **C.** API optimization
- **D.** Bundle compression

<button onclick="toggleExplanation('q25')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q25" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of React's built-in profiling tool.

### Option-by-Option Breakdown

**Option A: "Security testing"**
❌ **Incorrect.** Profiler has no security features.

**Option B: "Detect unnecessary renders and performance bottlenecks"**
✅ **Correct.** The React Profiler API measures how long components take to render and why they rendered.

**Option C: "API optimization"**
❌ **Incorrect.** API optimization involves server response times.

**Option D: "Bundle compression"**
❌ **Incorrect.** Bundle compression is done by build tools.

### Why B is Correct
```jsx
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log('Component:', id);
  console.log('Phase:', phase);  // 'mount' or 'update'
  console.log('Actual duration:', actualDuration);
  console.log('Base duration:', baseDuration);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Header />
      <Main />
      <Footer />
    </Profiler>
  );
}
```

**React DevTools Profiler tab provides:**
- Flame graph showing render times
- Why did this render? (props, state, context, parent)
- Commit timeline

</div>

---

## Question 26

**Why is immutable state important for React performance?**

- **A.** Reduces CSS recalculations
- **B.** Enables efficient change detection
- **C.** Prevents API duplication
- **D.** Eliminates reconciliation

<button onclick="toggleExplanation('q26')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q26" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the relationship between immutability and React's performance.

### Option-by-Option Breakdown

**Option A: "Reduces CSS recalculations"**
❌ **Incorrect.** Immutability affects JavaScript, not CSS.

**Option B: "Enables efficient change detection"**
✅ **Correct.** Immutable updates create new object references. React can detect changes instantly using `===` instead of expensive deep equality checks.

**Option C: "Prevents API duplication"**
❌ **Incorrect.** Unrelated to API calls.

**Option D: "Eliminates reconciliation"**
❌ **Incorrect.** Immutability makes reconciliation faster, not eliminated.

### Why B is Correct
```jsx
// ❌ Mutable update - React can't detect change
const items = [...state.items];
items.push(newItem);  // mutated the copy
setState({ items });  // Same reference! React misses it

// ✅ Immutable update - new reference, instant detection
setState({
  items: [...state.items, newItem]  // New array reference
});
// React: prev.items === next.items? → false → update!
```

**Performance impact:**
- Reference comparison (`===`): O(1) — instant
- Deep equality check: O(n) — potentially very slow

</div>

---

## Question 27

**Which statement about Context API performance is TRUE?**

- **A.** Context updates re-render all consumers by default
- **B.** Context is always faster than props
- **C.** Context prevents reconciliation
- **D.** Context automatically memoizes values

<button onclick="toggleExplanation('q27')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q27" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of Context API performance characteristics.

### Option-by-Option Breakdown

**Option A: "Context updates re-render all consumers by default"**
✅ **Correct.** When a context value changes, **every consumer re-renders**, regardless of whether the specific data they use changed.

**Option B: "Context is always faster than props"**
❌ **Incorrect.** Context is not inherently faster. Prop drilling can be more performant for infrequently changing data.

**Option C: "Context prevents reconciliation"**
❌ **Incorrect.** Context doesn't prevent reconciliation.

**Option D: "Context automatically memoizes values"**
❌ **Incorrect.** Context does NOT automatically memoize. You must manually memoize with `useMemo`.

### Why A is Correct
```jsx
const AppContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Alice', theme: 'dark' });

  // ❌ New object every render → all consumers re-render
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Header />   {/* Re-renders */}
      <Main />     {/* Re-renders */}
      <Footer />   {/* Re-renders */}
    </AppContext.Provider>
  );

  // ✅ Memoized value
  const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <AppContext.Provider value={value}>
      ...
    </AppContext.Provider>
  );
}
```

**Optimization strategies:**
- Split contexts by concern
- Memoize context values
- Use atomic state libraries (Zustand, Jotai)

</div>

---

## Question 28

**What is the best optimization for frequently changing input fields?**

- **A.** Use uncontrolled components when appropriate
- **B.** Wrap every input in memo
- **C.** Store all values in global state
- **D.** Use deep comparison everywhere

<button onclick="toggleExplanation('q28')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q28" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests practical optimization for high-frequency inputs.

### Option-by-Option Breakdown

**Option A: "Use uncontrolled components when appropriate"**
✅ **Correct.** Uncontrolled components don't trigger React re-renders on every keystroke. They bypass React's render cycle entirely.

**Option B: "Wrap every input in memo"**
❌ **Incorrect.** `React.memo` on inputs is pointless — input state changes are internal.

**Option C: "Store all values in global state"**
❌ **Incorrect.** Global state for every keystroke causes widespread re-renders.

**Option D: "Use deep comparison everywhere"**
❌ **Incorrect.** Deep comparison is expensive and an anti-pattern.

### Why A is Correct
```jsx
// ❌ Controlled - re-renders on every keystroke
function ControlledInput() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// ✅ Uncontrolled - no re-renders
function UncontrolledInput() {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return <input ref={inputRef} defaultValue="" />;
}
```

**When to use uncontrolled:**
- Simple forms without real-time validation
- File inputs (must be uncontrolled)
- When you only need the value on submit

</div>

---

## Question 29

**Which bundle optimization technique removes unused code?**

- **A.** Hydration
- **B.** Tree shaking
- **C.** Virtualization
- **D.** Reconciliation

<button onclick="toggleExplanation('q29')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q29" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of build-time optimization techniques.

### Option-by-Option Breakdown

**Option A: "Hydration"**
❌ **Incorrect.** Hydration is a runtime process.

**Option B: "Tree shaking"**
✅ **Correct.** Tree shaking is dead code elimination used by modern bundlers. It removes unused exports.

**Option C: "Virtualization"**
❌ **Incorrect.** Virtualization is a runtime rendering technique.

**Option D: "Reconciliation"**
❌ **Incorrect.** Reconciliation is React's diffing algorithm.

### Why B is Correct
```javascript
// ❌ Importing entire library (can't tree-shake)
import _ from 'lodash';
_.debounce(fn, 300);  // Entire lodash included

// ✅ Importing specific functions (tree-shakeable)
import { debounce } from 'lodash-es';
// Only debounce included
```

**Requirements:**
- ES modules (`import`/`export`)
- `sideEffects: false` in package.json
- Modern bundler support

</div>

---

## Question 30

**What is the most accurate statement about `useMemo`?**

- **A.** It guarantees faster performance
- **B.** It should be used everywhere
- **C.** It is useful only when recomputation cost is significant
- **D.** It prevents component rendering

<button onclick="toggleExplanation('q30')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q30" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests nuanced understanding of when `useMemo` is appropriate.

### Option-by-Option Breakdown

**Option A: "It guarantees faster performance"**
❌ **Incorrect.** `useMemo` adds overhead. For simple calculations, it can be slower.

**Option B: "It should be used everywhere"**
❌ **Incorrect.** Overusing `useMemo` is an anti-pattern.

**Option C: "It is useful only when recomputation cost is significant"**
✅ **Correct.** `useMemo` is for expensive computations. For simple operations, overhead exceeds benefit.

**Option D: "It prevents component rendering"**
❌ **Incorrect.** `useMemo` doesn't prevent rendering — `React.memo` does.

### Why C is Correct
```jsx
// ✅ Good: expensive computation
const sortedData = useMemo(() => {
  return data.sort((a, b) => complexComparison(a, b));
}, [data]);

// ❌ Bad: simple operation
const fullName = useMemo(() => firstName + ' ' + lastName, [firstName, lastName]);
// String concatenation is faster than useMemo overhead!
```

**Rule of thumb:**
- Use when profiled and confirmed a bottleneck
- Use when reference stability matters
- Don't use for trivial computations

</div>

---

## Question 31

**Why can anonymous functions inside JSX hurt performance?**

- **A.** They break hooks
- **B.** New function references are created every render
- **C.** They prevent DOM rendering
- **D.** They disable memoization globally

<button onclick="toggleExplanation('q31')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q31" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests how inline function creation affects React's optimization.

### Option-by-Option Breakdown

**Option A: "They break hooks"**
❌ **Incorrect.** Anonymous functions don't break hooks.

**Option B: "New function references are created every render"**
✅ **Correct.** Inline functions create a **new function object** on every render. When passed as props to `React.memo` children, these new references cause unnecessary re-renders.

**Option C: "They prevent DOM rendering"**
❌ **Incorrect.** Anonymous functions don't prevent DOM rendering.

**Option D: "They disable memoization globally"**
❌ **Incorrect.** They only affect the specific component receiving them.

### Why B is Correct
```jsx
function Parent() {
  // ❌ New function every render → MemoChild re-renders
  <MemoChild onAction={() => console.log('action')} />
}

// ✅ Solution: useCallback
function Parent() {
  const handleAction = useCallback(() => {
    console.log('action');
  }, []);
  return <MemoChild onAction={handleAction} />;
}
```

**Note:** For non-memoized children, inline functions are fine.

</div>

---

## Question 32

**Which optimization is MOST useful for huge tables with thousands of rows?**

- **A.** `useEffect`
- **B.** Pagination or virtualization
- **C.** Inline styles
- **D.** Context API

<button onclick="toggleExplanation('q32')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q32" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests the most effective strategy for very large data tables.

### Option-by-Option Breakdown

**Option A: "`useEffect`"**
❌ **Incorrect.** `useEffect` handles side effects, not rendering optimization.

**Option B: "Pagination or virtualization"**
✅ **Correct.** These are the two primary solutions:
- **Pagination:** Show subset of rows with navigation
- **Virtualization:** Render only visible rows, dynamically adding/removing as user scrolls

**Option C: "Inline styles"**
❌ **Incorrect.** Inline styles don't reduce rendered rows.

**Option D: "Context API"**
❌ **Incorrect.** Context is for sharing data, not reducing DOM nodes.

### Why B is Correct
For 10,000 rows:
```jsx
// ❌ Without optimization: 10,000 DOM nodes
<table>{rows.map(row => <tr>...</tr>)}</table>

// ✅ Pagination: show 50 at a time
<PaginatedTable data={rows} pageSize={50} />

// ✅ Virtualization: only ~20 visible rows in DOM
<FixedSizeList height={600} itemCount={rows.length} itemSize={40}>
  {({ index }) => <div>{rows[index].name}</div>}
</FixedSizeList>
```

**Recommendation:**
- Use **pagination** when users need to see totals or compare distant rows
- Use **virtualization** for continuous scrolling

</div>

---

## Question 33

**What happens when state updates are batched?**

- **A.** React skips reconciliation
- **B.** Multiple updates trigger fewer renders
- **C.** State becomes immutable
- **D.** Hooks stop executing

<button onclick="toggleExplanation('q33')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q33" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of React's automatic batching.

### Option-by-Option Breakdown

**Option A: "React skips reconciliation"**
❌ **Incorrect.** Reconciliation still happens — just once instead of multiple times.

**Option B: "Multiple updates trigger fewer renders"**
✅ **Correct.** Batching groups multiple state updates into a single re-render.

**Option C: "State becomes immutable"**
❌ **Incorrect.** State is always immutable. Batching doesn't change this.

**Option D: "Hooks stop executing"**
❌ **Incorrect.** Hooks continue to execute normally.

### Why B is Correct
```jsx
function handleClick() {
  setCount(c => c + 1);  // Queued
  setFlag(true);          // Queued
  setItems([...items, newItem]);  // Queued
  // All three applied in ONE render!
}
```

**React 18 Automatic Batching** extends to:
- setTimeout/setInterval
- Promise .then/catch
- Native event handlers

**Benefits:**
- Fewer re-renders
- Intermediate inconsistent states never visible
- Better performance

</div>

---

## Question 34

**Which rendering strategy sends minimal JavaScript to the client initially?**

- **A.** CSR
- **B.** SSR only
- **C.** Islands architecture / partial hydration
- **D.** Full hydration

<button onclick="toggleExplanation('q34')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q34" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests knowledge of modern rendering architectures.

### Option-by-Option Breakdown

**Option A: "CSR"**
❌ **Incorrect.** Client-Side Rendering sends the **most** JavaScript.

**Option B: "SSR only"**
❌ **Incorrect.** SSR still requires the full React bundle for hydration.

**Option C: "Islands architecture / partial hydration"**
✅ **Correct.** Islands architecture sends static HTML for most of the page and only hydrates specific interactive "islands" with JavaScript.

**Option D: "Full hydration"**
❌ **Incorrect.** Full hydration requires the full React bundle.

### Why C is Correct
Architecture comparison:
```
CSR:        HTML shell + Full JS bundle → Hydrate everything
SSR:        Full HTML + Full JS bundle → Hydrate everything
Islands:    Full HTML + Minimal JS → Hydrate only interactive parts
```

**Example:**
```html
<!-- Static content — zero JavaScript -->
<header>My Blog</header>
<article>Static content...</article>

<!-- Interactive island — only this gets JS -->
<search-widget data-island>
  <!-- Hydrated with React -->
</search-widget>

<!-- Static content — zero JavaScript -->
<footer>© 2024</footer>
```

**Frameworks:** Astro, Fresh (Deno), Eleventy with islands

</div>

---

## Question 35

**Which of the following can cause unnecessary child re-renders?**

- **A.** Stable primitive props
- **B.** Memoized callbacks
- **C.** Passing newly created arrays/objects as props
- **D.** Using `React.memo`

<button onclick="toggleExplanation('q35')" style="padding: 8px 16px; background: #61dafb; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; color: #20232a;">Show Explanation</button>

<div id="q35" style="display: none; margin-top: 15px; padding: 20px; background: #092038; border-left: 4px solid #61dafb; border-radius: 6px;">

### What the Question Asks
This question tests understanding of what defeats React's optimization.

### Option-by-Option Breakdown

**Option A: "Stable primitive props"**
❌ **Incorrect.** Stable primitives are the ideal scenario for optimization.

**Option B: "Memoized callbacks"**
❌ **Incorrect.** Memoized callbacks help prevent re-renders.

**Option C: "Passing newly created arrays/objects as props"**
✅ **Correct.** Inline arrays/objects create new references on every render, defeating `React.memo`.

**Option D: "Using `React.memo`"**
❌ **Incorrect.** `React.memo` prevents re-renders, not causes them.

### Why C is Correct
```jsx
function Parent() {
  return (
    <div>
      {/* ❌ New array every render → MemoChild re-renders */}
      <MemoChild items={['a', 'b', 'c']} />

      {/* ❌ New object every render → MemoChild re-renders */}
      <MemoChild config={{ theme: 'dark' }} />

      {/* ✅ Stable reference → MemoChild skips re-render */}
      <MemoChild items={stableItems} />
    </div>
  );
}
```

**Solutions:**
- Define objects/arrays outside the component
- Use `useMemo` for computed objects/arrays
- Use `useCallback` for inline functions

</div>

---

## 📊 Quick Answer Key

| Q | Answer | Q | Answer | Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|---|--------|---|--------|
| 1 | C | 8 | B | 15 | C | 22 | B | 29 | B |
| 2 | C | 9 | B | 16 | B | 23 | A | 30 | C |
| 3 | C | 10 | C | 17 | A | 24 | C | 31 | B |
| 4 | B | 11 | B | 18 | B | 25 | B | 32 | B |
| 5 | B | 12 | B | 19 | A | 26 | B | 33 | B |
| 6 | B | 13 | C | 20 | B | 27 | A | 34 | C |
| 7 | D | 14 | B | 21 | C | 28 | A | 35 | C |

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

> 💡 **Study Tip:** Click **"Show Explanation"** to reveal the detailed breakdown for each question. Focus on understanding *why* each answer is correct rather than memorizing answers. These patterns are essential for writing performant React applications and acing technical interviews!
