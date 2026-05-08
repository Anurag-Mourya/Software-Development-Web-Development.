# ⚛️ React Hooks & Advanced Concepts — Master MCQ Practice

> All questions in one place. Click any question number to jump to its detailed explanation at the end.

---

## 📋 Question Bank

---

### [Question 1](#q1-explanation)
Why might `useMemo` fail to prevent re-renders of a memoized child?

- **A)** `useMemo` only works with primitive values
- **B)** The child receives a new function prop every render
- **C)** `useMemo` does not memoize component props automatically
- **D)** `useMemo` only runs on the first render

---

### [Question 2](#q2-explanation)
What is a common reason to use `useRef` instead of `useState`?

- **A)** To trigger a re-render when a value changes
- **B)** To store a value without causing a re-render
- **C)** To memoize expensive calculations
- **D)** To run side effects after paint

---

### [Question 3](#q3-explanation)
What happens if you call a hook conditionally inside an `if` statement?

- **A)** It works only in production
- **B)** React skips the hook when the condition is false
- **C)** It breaks the rules of hooks and can cause bugs
- **D)** It only affects `useEffect`

---

### [Question 4](#q4-explanation)
When is `useEffect` typically preferred over `useLayoutEffect`?

- **A)** When you need to measure layout before paint
- **B)** When you want to avoid blocking the browser paint
- **C)** When you need to synchronously read DOM size
- **D)** When you need to mutate the DOM before paint

---

### [Question 5](#q5-explanation)
What does the dependency array in `useEffect` control?

- **A)** How many times the component renders
- **B)** When the effect runs again
- **C)** Whether the effect runs before paint
- **D)** Whether cleanup is executed on mount

---

### [Question 6](#q6-explanation)
Why can an inline object prop defeat `React.memo`?

- **A)** Objects cannot be passed as props
- **B)** A new object reference is created on every render
- **C)** `React.memo` only compares numbers and strings
- **D)** Inline objects are automatically frozen

---

### [Question 7](#q7-explanation)
Which hook is best for preserving a callback reference passed to a memoized child?

- **A)** `useMemo`
- **B)** `useCallback`
- **C)** `useRef`
- **D)** `useReducer`

---

### [Question 8](#q8-explanation)
What is the main purpose of the cleanup function returned by `useEffect`?

- **A)** To prevent the component from rendering
- **B)** To cancel subscriptions, timers, or event listeners
- **C)** To memoize the effect logic
- **D)** To run before every state update only

---

### [Question 9](#q9-explanation)
In what case is `useReducer` often a better fit than `useState`?

- **A)** When state is a single boolean
- **B)** When state transitions are complex or depend on previous state
- **C)** When you need DOM measurements
- **D)** When you want to avoid all re-renders

---

### [Question 10](#q10-explanation)
What is a key difference between `useMemo` and `useCallback`?

- **A)** `useMemo` memoizes functions, `useCallback` memoizes values
- **B)** `useMemo` memoizes values, `useCallback` memoizes functions
- **C)** They are completely identical
- **D)** `useCallback` only works with class components

---

### [Question 11](#q11-explanation)
Why might `useLayoutEffect` be problematic in server-side rendering?

- **A)** It cannot read props
- **B)** It runs before the component exists
- **C)** It can cause warnings because it is meant for the browser layout phase
- **D)** It only works with class components

---

### [Question 12](#q12-explanation)
What problem does `useImperativeHandle` solve?

- **A)** It lets a child expose custom methods to a parent through a ref
- **B)** It prevents all child re-renders
- **C)** It memoizes expensive DOM queries
- **D)** It replaces `useRef` entirely

---

### [Question 13](#q13-explanation)
Why can `useCallback` still be expensive if overused?

- **A)** It triggers infinite loops
- **B)** It always creates a new function anyway
- **C)** It adds memoization overhead and can complicate code without real benefit
- **D)** It prevents the app from compiling

---

### [Question 14](#q14-explanation)
Which statement about `useRef` is correct?

- **A)** Updating `.current` causes a re-render
- **B)** It is useful for storing mutable values like timers or previous values
- **C)** It only stores DOM nodes
- **D)** It cannot persist values across renders

---

### [Question 15](#q15-explanation)
What is the likely issue if a `useEffect` dependency array is missing a value used inside the effect?

- **A)** The effect will never run
- **B)** The effect may use stale values
- **C)** React will automatically infer dependencies perfectly
- **D)** The component will stop mounting

---

### [Question 16](#q16-explanation)
A component uses `useEffect(() => { setCount(count + 1); }, [count])`. What is the most likely problem?

- **A)** The effect will never run
- **B)** It can create an infinite re-render loop
- **C)** `count` is automatically ignored by React
- **D)** `useEffect` cannot update state

---

### [Question 17](#q17-explanation)
Why is `useMemo` not a guarantee that expensive code will run only once?

- **A)** React may recompute it when dependencies change
- **B)** `useMemo` only works in class components
- **C)** It runs only after unmount
- **D)** It permanently stores values across app restarts

---

### [Question 18](#q18-explanation)
A parent passes `const config = { theme: "dark" }` to a `React.memo` child on every render. The child still re-renders. Why?

- **A)** Objects are never allowed as props
- **B)** The object reference is new each render
- **C)** `React.memo` ignores all object props
- **D)** The child must use `useEffect` to avoid re-renders

---

### [Question 19](#q19-explanation)
Which hook is the best fit when you need to keep the previous value of a prop without causing a re-render?

- **A)** `useState`
- **B)** `useRef`
- **C)** `useMemo`
- **D)** `useCallback`

---

### [Question 20](#q20-explanation)
What is the main purpose of `useLayoutEffect`?

- **A)** To fetch data after paint
- **B)** To perform DOM reads/writes before the browser paints
- **C)** To replace `useEffect` everywhere
- **D)** To memoize values between renders

---

### [Question 21](#q21-explanation)
Which statement about `React.memo` is most accurate?

- **A)** It prevents every child render in all cases
- **B)** It shallowly compares props and skips rendering when they appear unchanged
- **C)** It only works with function components that have no props
- **D)** It compares deeply by default

---

### [Question 22](#q22-explanation)
What is a likely reason to prefer `useReducer` over multiple `useState` calls?

- **A)** It makes effects run faster automatically
- **B)** It is useful when state updates depend on complex transitions
- **C)** It prevents all unnecessary re-renders
- **D)** It removes the need for props

---

### [Question 23](#q23-explanation)
In a custom hook, why might storing a callback inside `useRef` be useful?

- **A)** To make the callback execute during rendering
- **B)** To keep a stable mutable reference without re-creating the callback value
- **C)** To force the component to unmount
- **D)** To replace dependency arrays in every hook

---

### [Question 24](#q24-explanation)
What does the cleanup function in `useEffect` help prevent?

- **A)** Memory leaks from subscriptions, timers, or event listeners
- **B)** Reconciliation by React
- **C)** The component from receiving props
- **D)** The browser from painting the UI

---

### [Question 25](#q25-explanation)
Why can putting a non-memoized function inside a dependency array cause repeated effect runs?

- **A)** Functions are never valid dependencies
- **B)** A new function reference is created on every render
- **C)** Dependency arrays cannot include callbacks
- **D)** React always ignores function dependencies

---

### [Question 26](#q26-explanation)
What is the main risk of using `useLayoutEffect` too often?

- **A)** It can block painting and hurt perceived performance
- **B)** It prevents state updates
- **C)** It only works once per app
- **D)** It causes React to skip rendering children

---

### [Question 27](#q27-explanation)
Which hook is best when you want to avoid recreating a computed array unless its inputs change?

- **A)** `useRef`
- **B)** `useMemo`
- **C)** `useEffect`
- **D)** `useLayoutEffect`

---

<br><br>

---

# 📖 Detailed Explanations

> Click any question number above to jump back to the question.

---

## <a id="q1-explanation"></a>Question 1 — Explanation

**Question:** Why might `useMemo` fail to prevent re-renders of a memoized child?

**Options:**
- **A)** `useMemo` only works with primitive values
- **B)** The child receives a new function prop every render
- **C)** `useMemo` does not memoize component props automatically ✅
- **D)** `useMemo` only runs on the first render

**Correct Answer: C**

`useMemo` memoizes a computed **value**, not the props passed to a child component. Even if you wrap a child in `useMemo`, if the parent passes unstable props (new objects/functions on every render), the child will still re-render. To prevent child re-renders, you need to stabilize **all** props using `useMemo`/`useCallback`, or wrap the child with `React.memo` and ensure stable props.

**[⬆ Back to Question 1](#question-1)**

---

## <a id="q2-explanation"></a>Question 2 — Explanation

**Question:** What is a common reason to use `useRef` instead of `useState`?

**Options:**
- **A)** To trigger a re-render when a value changes
- **B)** To store a value without causing a re-render ✅
- **C)** To memoize expensive calculations
- **D)** To run side effects after paint

**Correct Answer: B**

`useRef` returns a mutable object `{ current: value }` that persists across renders. Unlike `useState`, updating `.current` does **not** trigger a re-render. This makes it ideal for storing values like timers, previous state values, or DOM references where you don't need UI updates.

**[⬆ Back to Question 2](#question-2)**

---

## <a id="q3-explanation"></a>Question 3 — Explanation

**Question:** What happens if you call a hook conditionally inside an `if` statement?

**Options:**
- **A)** It works only in production
- **B)** React skips the hook when the condition is false
- **C)** It breaks the rules of hooks and can cause bugs ✅
- **D)** It only affects `useEffect`

**Correct Answer: C**

React relies on the **order of hooks** being identical on every render. Conditional hooks break this order, causing React to mismatch state between renders. This leads to unpredictable bugs. Hooks must always be called at the top level of the component, never inside loops, conditions, or nested functions.

**[⬆ Back to Question 3](#question-3)**

---

## <a id="q4-explanation"></a>Question 4 — Explanation

**Question:** When is `useEffect` typically preferred over `useLayoutEffect`?

**Options:**
- **A)** When you need to measure layout before paint
- **B)** When you want to avoid blocking the browser paint ✅
- **C)** When you need to synchronously read DOM size
- **D)** When you need to mutate the DOM before paint

**Correct Answer: B**

`useEffect` runs **asynchronously after paint**, while `useLayoutEffect` runs **synchronously before paint**. For most side effects (data fetching, subscriptions, logging), `useEffect` is preferred because it doesn't block the browser from painting the screen, keeping the UI responsive.

**[⬆ Back to Question 4](#question-4)**

---

## <a id="q5-explanation"></a>Question 5 — Explanation

**Question:** What does the dependency array in `useEffect` control?

**Options:**
- **A)** How many times the component renders
- **B)** When the effect runs again ✅
- **C)** Whether the effect runs before paint
- **D)** Whether cleanup is executed on mount

**Correct Answer: B**

The dependency array tells React which values the effect depends on. React compares each dependency with its previous value using `===`. If any dependency changed, the effect re-runs. An empty array `[]` means the effect runs only once (on mount). No array means it runs after every render.

**[⬆ Back to Question 5](#question-5)**

---

## <a id="q6-explanation"></a>Question 6 — Explanation

**Question:** Why can an inline object prop defeat `React.memo`?

**Options:**
- **A)** Objects cannot be passed as props
- **B)** A new object reference is created on every render ✅
- **C)** `React.memo` only compares numbers and strings
- **D)** Inline objects are automatically frozen

**Correct Answer: B**

When you write `<Child config={{ theme: "dark" }} />`, a new object is created on every render. `React.memo` does a shallow comparison (`===`), so even though the object contents are identical, the new reference makes it look "changed." This defeats memoization and causes unnecessary re-renders.

**[⬆ Back to Question 6](#question-6)**

---

## <a id="q7-explanation"></a>Question 7 — Explanation

**Question:** Which hook is best for preserving a callback reference passed to a memoized child?

**Options:**
- **A)** `useMemo`
- **B)** `useCallback` ✅
- **C)** `useRef`
- **D)** `useReducer`

**Correct Answer: B**

`useCallback` memoizes a **function reference** so that the same function object is returned between renders (as long as dependencies don't change). This is essential when passing callbacks to `React.memo` children, because a new function reference on every render would defeat memoization.

**[⬆ Back to Question 7](#question-7)**

---

## <a id="q8-explanation"></a>Question 8 — Explanation

**Question:** What is the main purpose of the cleanup function returned by `useEffect`?

**Options:**
- **A)** To prevent the component from rendering
- **B)** To cancel subscriptions, timers, or event listeners ✅
- **C)** To memoize the effect logic
- **D)** To run before every state update only

**Correct Answer: B**

The cleanup function runs before the effect re-runs or when the component unmounts. It's used to dispose of side effects like `setInterval` timers, `addEventListener` subscriptions, or `fetch` abort controllers. This prevents memory leaks and stale updates.

**[⬆ Back to Question 8](#question-8)**

---

## <a id="q9-explanation"></a>Question 9 — Explanation

**Question:** In what case is `useReducer` often a better fit than `useState`?

**Options:**
- **A)** When state is a single boolean
- **B)** When state transitions are complex or depend on previous state ✅
- **C)** When you need DOM measurements
- **D)** When you want to avoid all re-renders

**Correct Answer: B**

`useReducer` is ideal when state logic is complex, involves multiple sub-values, or when the next state depends on the previous state in structured ways. It centralizes state transitions in a reducer function, making the logic more predictable and testable than multiple `useState` calls.

**[⬆ Back to Question 9](#question-9)**

---

## <a id="q10-explanation"></a>Question 10 — Explanation

**Question:** What is a key difference between `useMemo` and `useCallback`?

**Options:**
- **A)** `useMemo` memoizes functions, `useCallback` memoizes values
- **B)** `useMemo` memoizes values, `useCallback` memoizes functions ✅
- **C)** They are completely identical
- **D)** `useCallback` only works with class components

**Correct Answer: B**

- **`useMemo(() => computeValue(), deps)`** → Memoizes the **return value** of the function
- **`useCallback(() => { ... }, deps)`** → Memoizes the **function reference** itself

Under the hood, `useCallback(fn, deps)` is essentially `useMemo(() => fn, deps)`.

**[⬆ Back to Question 10](#question-10)**

---

## <a id="q11-explanation"></a>Question 11 — Explanation

**Question:** Why might `useLayoutEffect` be problematic in server-side rendering?

**Options:**
- **A)** It cannot read props
- **B)** It runs before the component exists
- **C)** It can cause warnings because it is meant for the browser layout phase ✅
- **D)** It only works with class components

**Correct Answer: C**

`useLayoutEffect` is designed to run during the browser's layout phase (before paint). On the server, there is no DOM or layout phase, so using `useLayoutEffect` can cause hydration mismatches or warnings. For SSR-safe code, prefer `useEffect` or conditionally use `useLayoutEffect` only in the browser.

**[⬆ Back to Question 11](#question-11)**

---

## <a id="q12-explanation"></a>Question 12 — Explanation

**Question:** What problem does `useImperativeHandle` solve?

**Options:**
- **A)** It lets a child expose custom methods to a parent through a ref ✅
- **B)** It prevents all child re-renders
- **C)** It memoizes expensive DOM queries
- **D)** It replaces `useRef` entirely

**Correct Answer: A**

`useImperativeHandle` customizes the instance value exposed when a parent uses `ref` on a child component (used with `forwardRef`). It allows a child to expose specific methods (like `focus()`, `scrollTo()`) to the parent, rather than exposing the entire DOM node.

**[⬆ Back to Question 12](#question-12)**

---

## <a id="q13-explanation"></a>Question 13 — Explanation

**Question:** Why can `useCallback` still be expensive if overused?

**Options:**
- **A)** It triggers infinite loops
- **B)** It always creates a new function anyway
- **C)** It adds memoization overhead and can complicate code without real benefit ✅
- **D)** It prevents the app from compiling

**Correct Answer: C**

Memoization is not free — it requires storing values, comparing dependencies, and managing cache. Overusing `useCallback` on every function adds unnecessary overhead and makes code harder to read. Only use it when function identity stability actually matters (e.g., passing to `React.memo` children or dependency arrays).

**[⬆ Back to Question 13](#question-13)**

---

## <a id="q14-explanation"></a>Question 14 — Explanation

**Question:** Which statement about `useRef` is correct?

**Options:**
- **A)** Updating `.current` causes a re-render
- **B)** It is useful for storing mutable values like timers or previous values ✅
- **C)** It only stores DOM nodes
- **D)** It cannot persist values across renders

**Correct Answer: B**

`useRef` is a versatile hook. While commonly used for DOM references (`ref={myRef}`), it can store any mutable value (timers, previous props, flags) that should survive re-renders without causing them. Updating `.current` is synchronous and silent.

**[⬆ Back to Question 14](#question-14)**

---

## <a id="q15-explanation"></a>Question 15 — Explanation

**Question:** What is the likely issue if a `useEffect` dependency array is missing a value used inside the effect?

**Options:**
- **A)** The effect will never run
- **B)** The effect may use stale values ✅
- **C)** React will automatically infer dependencies perfectly
- **D)** The component will stop mounting

**Correct Answer: B**

If a value used inside the effect is not in the dependency array, React won't know to re-run the effect when that value changes. The effect will "close over" the old (stale) value from the previous render. This is a common source of bugs. Use the ESLint `react-hooks/exhaustive-deps` rule to catch this.

**[⬆ Back to Question 15](#question-15)**

---

## <a id="q16-explanation"></a>Question 16 — Explanation

**Question:** A component uses `useEffect(() => { setCount(count + 1); }, [count])`. What is the most likely problem?

**Options:**
- **A)** The effect will never run
- **B)** It can create an infinite re-render loop ✅
- **C)** `count` is automatically ignored by React
- **D)** `useEffect` cannot update state

**Correct Answer: B**

This is a classic infinite loop: the effect updates `count`, which triggers a re-render, which changes `count`, which triggers the effect again. The effect depends on the very state it modifies. To fix this, use a functional state update: `setCount(c => c + 1)` and remove `count` from dependencies, or use a different approach entirely.

**[⬆ Back to Question 16](#question-16)**

---

## <a id="q17-explanation"></a>Question 17 — Explanation

**Question:** Why is `useMemo` not a guarantee that expensive code will run only once?

**Options:**
- **A)** React may recompute it when dependencies change ✅
- **B)** `useMemo` only works in class components
- **C)** It runs only after unmount
- **D)** It permanently stores values across app restarts

**Correct Answer: A**

`useMemo` caches a value **only as long as dependencies remain stable**. If any dependency changes, React recomputes the value. It is not permanent storage — it's an optimization for avoiding redundant calculations between renders with the same inputs.

**[⬆ Back to Question 17](#question-17)**

---

## <a id="q18-explanation"></a>Question 18 — Explanation

**Question:** A parent passes `const config = { theme: "dark" }` to a `React.memo` child on every render. The child still re-renders. Why?

**Options:**
- **A)** Objects are never allowed as props
- **B)** The object reference is new each render ✅
- **C)** `React.memo` ignores all object props
- **D)** The child must use `useEffect` to avoid re-renders

**Correct Answer: B**

Even though the object literal `{ theme: "dark" }` looks the same, JavaScript creates a **new object reference** on every render. `React.memo` does a shallow comparison (`===`), sees a different reference, and concludes the prop changed. To fix this, memoize the object with `useMemo` in the parent.

**[⬆ Back to Question 18](#question-18)**

---

## <a id="q19-explanation"></a>Question 19 — Explanation

**Question:** Which hook is the best fit when you need to keep the previous value of a prop without causing a re-render?

**Options:**
- **A)** `useState`
- **B)** `useRef` ✅
- **C)** `useMemo`
- **D)** `useCallback`

**Correct Answer: B**

`useRef` is perfect for tracking previous values. You can store the previous prop in `.current` during render or in an effect, and it won't trigger re-renders. A common pattern: `const prevValue = useRef(value); useEffect(() => { prevValue.current = value; });`

**[⬆ Back to Question 19](#question-19)**

---

## <a id="q20-explanation"></a>Question 20 — Explanation

**Question:** What is the main purpose of `useLayoutEffect`?

**Options:**
- **A)** To fetch data after paint
- **B)** To perform DOM reads/writes before the browser paints ✅
- **C)** To replace `useEffect` everywhere
- **D)** To memoize values between renders

**Correct Answer: B**

`useLayoutEffect` fires synchronously after all DOM mutations but **before the browser paints the screen**. This is useful when you need to measure DOM elements (e.g., tooltip positioning) or make DOM adjustments that must be visible in the first paint to avoid visual flicker.

**[⬆ Back to Question 20](#question-20)**

---

## <a id="q21-explanation"></a>Question 21 — Explanation

**Question:** Which statement about `React.memo` is most accurate?

**Options:**
- **A)** It prevents every child render in all cases
- **B)** It shallowly compares props and skips rendering when they appear unchanged ✅
- **C)** It only works with function components that have no props
- **D)** It compares deeply by default

**Correct Answer: B**

`React.memo` wraps a component and performs a shallow comparison of all props. If no prop reference changed, React skips rendering the component. It does not do deep comparison by default (you can provide a custom comparison function as the second argument).

**[⬆ Back to Question 21](#question-21)**

---

## <a id="q22-explanation"></a>Question 22 — Explanation

**Question:** What is a likely reason to prefer `useReducer` over multiple `useState` calls?

**Options:**
- **A)** It makes effects run faster automatically
- **B)** It is useful when state updates depend on complex transitions ✅
- **C)** It prevents all unnecessary re-renders
- **D)** It removes the need for props

**Correct Answer: B**

When state has multiple interrelated fields or transitions follow specific action types, `useReducer` centralizes logic in a single reducer function. This is cleaner than multiple `useState` setters scattered through event handlers, and it makes state transitions predictable and testable.

**[⬆ Back to Question 22](#question-22)**

---

## <a id="q23-explanation"></a>Question 23 — Explanation

**Question:** In a custom hook, why might storing a callback inside `useRef` be useful?

**Options:**
- **A)** To make the callback execute during rendering
- **B)** To keep a stable mutable reference without re-creating the callback value ✅
- **C)** To force the component to unmount
- **D)** To replace dependency arrays in every hook

**Correct Answer: B**

Storing a callback in `useRef` ensures you always have access to the latest version without it changing reference identity. This is useful in custom hooks where you want to avoid adding the callback to dependency arrays (which would cause effects to re-run) while still calling the latest logic.

**[⬆ Back to Question 23](#question-23)**

---

## <a id="q24-explanation"></a>Question 24 — Explanation

**Question:** What does the cleanup function in `useEffect` help prevent?

**Options:**
- **A)** Memory leaks from subscriptions, timers, or event listeners ✅
- **B)** Reconciliation by React
- **C)** The component from receiving props
- **D)** The browser from painting the UI

**Correct Answer: A**

Without cleanup, side effects like `setInterval`, `addEventListener`, or `WebSocket` subscriptions continue running even after the component unmounts or updates. This causes memory leaks and stale callbacks operating on unmounted components. Cleanup functions are essential for proper resource management.

**[⬆ Back to Question 24](#question-24)**

---

## <a id="q25-explanation"></a>Question 25 — Explanation

**Question:** Why can putting a non-memoized function inside a dependency array cause repeated effect runs?

**Options:**
- **A)** Functions are never valid dependencies
- **B)** A new function reference is created on every render ✅
- **C)** Dependency arrays cannot include callbacks
- **D)** React always ignores function dependencies

**Correct Answer: B**

Functions defined inside a component body are recreated on every render. When placed in a dependency array, React sees a new reference each time and re-runs the effect. To prevent this, wrap the function with `useCallback` or define it outside the component.

**[⬆ Back to Question 25](#question-25)**

---

## <a id="q26-explanation"></a>Question 26 — Explanation

**Question:** What is the main risk of using `useLayoutEffect` too often?

**Options:**
- **A)** It can block painting and hurt perceived performance ✅
- **B)** It prevents state updates
- **C)** It only works once per app
- **D)** It causes React to skip rendering children

**Correct Answer: A**

Because `useLayoutEffect` runs synchronously before paint, heavy computations inside it delay the browser from drawing the frame. This can cause jank, dropped frames, and a sluggish user experience. Use it only when DOM measurements or synchronous mutations are absolutely necessary.

**[⬆ Back to Question 26](#question-26)**

---

## <a id="q27-explanation"></a>Question 27 — Explanation

**Question:** Which hook is best when you want to avoid recreating a computed array unless its inputs change?

**Options:**
- **A)** `useRef`
- **B)** `useMemo` ✅
- **C)** `useEffect`
- **D)** `useLayoutEffect`

**Correct Answer: B**

`useMemo(() => computedArray, [deps])` caches the computed array and only recreates it when dependencies change. This is useful when the array is passed as a prop to a `React.memo` child or used in a dependency array, where reference stability matters.

**[⬆ Back to Question 27](#question-27)**

---

## 📊 Quick Answer Key

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | C | 10 | B | 19 | B |
| 2 | B | 11 | C | 20 | B |
| 3 | C | 12 | A | 21 | B |
| 4 | B | 13 | C | 22 | B |
| 5 | B | 14 | B | 23 | B |
| 6 | B | 15 | B | 24 | A |
| 7 | B | 16 | B | 25 | B |
| 8 | B | 17 | A | 26 | A |
| 9 | B | 18 | B | 27 | B |

---

> 💡 **Study Tip:** Click any question number at the top to jump to its explanation, and click "Back to Question" to return. Focus on understanding *why* each answer is correct — these patterns appear frequently in real React interviews and debugging scenarios.
