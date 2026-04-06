# React.js Interview Guide (0 to 4 Years)

This is a complete React interview preparation guide for `0-4 years` experience.

What this guide gives you:

- All important React interview topics from basic to advanced
- `3 simple definitions` for each core topic
- Multiple examples (basic + practical)
- Complex topics explained in easy English
- Level-wise interview focus (`0-1`, `1-2`, `2-3`, `3-4` years)

---

## How to Use This Guide

1. Start with `0-1 year` topics and ensure every definition is clear.
2. Move to hooks and state topics (`1-2 years`) and practice examples.
3. Focus on performance, architecture, and edge cases (`2-4 years`).
4. Practice interview questions section at the end.

---

## 0-1 Years: React Fundamentals

### 1) What is React?

**Simple Definition 1**

React is a JavaScript library to build UI.

**Simple Definition 2**

React helps us build web pages using reusable components.

**Simple Definition 3**

React updates only the changed parts of the screen when data changes.

**Examples**

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

```jsx
function UserCard({ name }) {
  return <p>User: {name}</p>;
}
```

---

### 2) Why React?

**Simple Definition 1**

React makes big UI easier by splitting it into small pieces.

**Simple Definition 2**

React code is reusable, so we do not rewrite the same UI again and again.

**Simple Definition 3**

React is good for dynamic apps where UI changes often.

**Examples**

- Reuse one `Button` component in 20 pages.
- Reuse one `Table` component for customers, invoices, and reports.

---

### 3) Component

**Simple Definition 1**

A component is a reusable UI block.

**Simple Definition 2**

A component is a function that returns JSX.

**Simple Definition 3**

A component is like a LEGO piece that builds the full screen.

**Examples**

```jsx
function Header() {
  return <h2>Dashboard</h2>;
}
```

```jsx
function Page() {
  return (
    <div>
      <Header />
      <p>Content</p>
    </div>
  );
}
```

---

### 4) JSX

**Simple Definition 1**

JSX is HTML-like code inside JavaScript.

**Simple Definition 2**

JSX is how React describes UI.

**Simple Definition 3**

JSX is converted to JavaScript behind the scenes.

**Examples**

```jsx
const title = <h1>Invoice</h1>;
```

```jsx
const user = { name: "Aman" };
const card = <p>{user.name}</p>;
```

---

### 5) Props

**Simple Definition 1**

Props are data sent from parent to child component.

**Simple Definition 2**

Props are input values for a component.

**Simple Definition 3**

Props are read-only values passed into components.

**Examples**

```jsx
function Greeting({ name }) {
  return <p>Hello {name}</p>;
}

<Greeting name="Rahul" />;
```

```jsx
function Price({ amount, currency }) {
  return <p>{currency} {amount}</p>;
}
```

---

### 6) State

**Simple Definition 1**

State is component data that can change.

**Simple Definition 2**

When state changes, React re-renders the component.

**Simple Definition 3**

State stores dynamic values like input text, count, open/close status.

**Examples**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

```jsx
const [loading, setLoading] = useState(false);
```

---

### 7) Props vs State

**Simple Definition 1**

Props come from parent, state lives inside component.

**Simple Definition 2**

Props are external input, state is internal memory.

**Simple Definition 3**

Props are mostly read-only, state is updated with setters.

**Examples**

- Parent sends `theme="dark"` as prop.
- Child keeps `isOpen` as local state.

---

### 8) Event Handling

**Simple Definition 1**

React handles clicks, input changes, submits using event handlers.

**Simple Definition 2**

We pass a function to events like `onClick`, `onChange`.

**Simple Definition 3**

Events connect user action to logic.

**Examples**

```jsx
<button onClick={handleSave}>Save</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}></form>
```

---

### 9) Conditional Rendering

**Simple Definition 1**

Show UI based on condition.

**Simple Definition 2**

If data is loading, show loader, else show content.

**Simple Definition 3**

Different UI appears based on state/props.

**Examples**

```jsx
return loading ? <p>Loading...</p> : <List />;
```

```jsx
{isAdmin && <AdminPanel />}
```

---

### 10) List Rendering and Keys

**Simple Definition 1**

Use `map()` to render arrays.

**Simple Definition 2**

Each item needs a unique `key`.

**Simple Definition 3**

Keys help React track item changes.

**Examples**

```jsx
{users.map((u) => (
  <li key={u.id}>{u.name}</li>
))}
```

```jsx
// Avoid this for editable lists
{users.map((u, i) => <li key={i}>{u.name}</li>)}
```

---

### 11) Controlled vs Uncontrolled Inputs

**Simple Definition 1**

Controlled input value comes from React state.

**Simple Definition 2**

Uncontrolled input stores value in DOM (usually with ref).

**Simple Definition 3**

Controlled forms are better for validation and business forms.

**Examples**

```jsx
// Controlled
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />;
```

```jsx
// Uncontrolled
const inputRef = useRef(null);
<input ref={inputRef} />;
```

---

### 12) Lifting State Up

**Simple Definition 1**

Move state to common parent when multiple children need it.

**Simple Definition 2**

Shared data should have one source of truth.

**Simple Definition 3**

Do not duplicate the same state in many siblings.

**Examples**

- Cart item count shown in header and cart page.
- Filter value shared between filter panel and table.

---

## 1-2 Years: Hooks and Real App Patterns

### 13) `useState`

**Simple Definition 1**

`useState` stores local component data.

**Simple Definition 2**

`useState` gives current value + update function.

**Simple Definition 3**

Use `useState` for dynamic UI values.

**Examples**

```jsx
const [open, setOpen] = useState(false);
```

```jsx
setForm((prev) => ({ ...prev, name: "Amit" }));
```

---

### 14) `useEffect`

**Simple Definition 1**

`useEffect` runs side effects after render.

**Simple Definition 2**

Use it for API calls, subscriptions, timers, document title, and listeners.

**Simple Definition 3**

Dependencies control when effect runs.

**Examples**

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

### 15) `useEffect` Dependency Array (Complex Topic)

**Simple Definition 1**

Dependency array tells React when to re-run effect.

**Simple Definition 2**

If dependency changes, effect runs again.

**Simple Definition 3**

Wrong dependencies can cause bugs or infinite loops.

**Examples**

```jsx
useEffect(() => {
  loadInvoice(invoiceId);
}, [invoiceId]);
```

```jsx
// Bug pattern: effect updates dependency every time
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

**Interview Tip**

Always explain: missing dependency = stale data, extra unstable dependency = unnecessary reruns.

---

### 16) Cleanup Function in `useEffect`

**Simple Definition 1**

Cleanup removes side effects when component unmounts or before next rerun.

**Simple Definition 2**

Use cleanup for timers, listeners, subscriptions, pending requests.

**Simple Definition 3**

Cleanup prevents memory leaks and duplicate handlers.

**Examples**

```jsx
useEffect(() => {
  const id = setInterval(fetchData, 5000);
  return () => clearInterval(id);
}, []);
```

```jsx
useEffect(() => {
  const onResize = () => {};
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
```

---

### 17) `useRef`

**Simple Definition 1**

`useRef` stores mutable value without re-rendering.

**Simple Definition 2**

`useRef` is used for DOM access.

**Simple Definition 3**

`useRef` is useful for previous value or imperative focus.

**Examples**

```jsx
const inputRef = useRef(null);
inputRef.current?.focus();
```

```jsx
const previous = useRef(value);
useEffect(() => {
  previous.current = value;
}, [value]);
```

---

### 18) `useMemo` and `useCallback` (Complex Topic)

**Simple Definition 1**

`useMemo` memoizes values. `useCallback` memoizes functions.

**Simple Definition 2**

Use them to avoid expensive recalculation or unstable function references.

**Simple Definition 3**

Do not use them everywhere, use only when useful.

**Examples**

```jsx
const total = useMemo(() => items.reduce((s, i) => s + i.amount, 0), [items]);
```

```jsx
const handleRowClick = useCallback((id) => setSelected(id), []);
```

---

### 19) `useContext`

**Simple Definition 1**

`useContext` shares data without passing props at every level.

**Simple Definition 2**

Good for theme, auth user, locale.

**Simple Definition 3**

Context can reduce prop drilling.

**Examples**

```jsx
const ThemeContext = createContext("light");
const theme = useContext(ThemeContext);
```

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

---

### 20) `useReducer` (Complex Local State)

**Simple Definition 1**

`useReducer` manages complex state transitions.

**Simple Definition 2**

It uses `state + action => new state`.

**Simple Definition 3**

It is useful when many fields update with many rules.

**Examples**

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
```

```jsx
const [state, dispatch] = useReducer(reducer, { name: "", email: "" });
dispatch({ type: "SET_NAME", payload: "Neha" });
```

---

### 21) Custom Hooks

**Simple Definition 1**

A custom hook is your reusable hook.

**Simple Definition 2**

Custom hooks share stateful logic between components.

**Simple Definition 3**

If logic repeats in many components, extract it to custom hook.

**Examples**

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}
```

```jsx
const width = useWindowWidth();
```

---

## 2-3 Years: State Management, Data Fetching, and Routing

### 22) Local State vs Global State

**Simple Definition 1**

Local state belongs to one component.

**Simple Definition 2**

Global state is shared across many pages/components.

**Simple Definition 3**

Choose local first, use global only when sharing is needed.

**Examples**

- `isModalOpen` in one component -> local state.
- `currentUser`, `theme`, `cart`, `permissions` -> global state.

---

### 23) Redux (Classic) and Redux Toolkit

**Simple Definition 1**

Redux is a global state library. Redux Toolkit is the modern simpler way to write Redux.

**Simple Definition 2**

Classic Redux has more boilerplate; Redux Toolkit reduces boilerplate.

**Simple Definition 3**

Redux Toolkit is generally recommended for new apps.

**Examples**

```js
// Classic Redux action
{ type: "FETCH_USERS_SUCCESS", payload: users }
```

```js
// Redux Toolkit slice reducer
setUsers: (state, action) => {
  state.list = action.payload;
}
```

---

### 24) Context vs Redux (Complex Interview Favorite)

**Simple Definition 1**

Context is for simple shared data. Redux is for larger state workflows.

**Simple Definition 2**

Redux gives strong patterns for async, middleware, and debugging.

**Simple Definition 3**

Use the smallest tool that solves your problem.

**Examples**

- Theme/auth: Context can be enough.
- Large app with many async modules: Redux/RTK is better.

---

### 25) Data Fetching Patterns

**Simple Definition 1**

Data fetching means calling API and showing result.

**Simple Definition 2**

A good API flow has loading, success, error, and empty states.

**Simple Definition 3**

Async UI must handle retries and stale responses.

**Examples**

```jsx
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [data, setData] = useState([]);
```

```jsx
if (loading) return <Loader />;
if (error) return <ErrorBox message={error} />;
if (!data.length) return <EmptyState />;
```

---

### 26) Race Condition and Request Cancellation (Complex Topic)

**Simple Definition 1**

Race condition happens when old API response overwrites new data.

**Simple Definition 2**

If user changes filters quickly, previous request may return later and break UI.

**Simple Definition 3**

Use abort/cancel or ignore stale responses.

**Examples**

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  return () => controller.abort();
}, [url]);
```

```jsx
let active = true;
fetchData().then((res) => {
  if (active) setData(res);
});
return () => {
  active = false;
};
```

---

### 27) React Router

**Simple Definition 1**

React Router maps URL to component.

**Simple Definition 2**

It enables SPA navigation without full page reload.

**Simple Definition 3**

Use params/query for dynamic pages.

**Examples**

```jsx
<Route path="/users/:id" element={<UserDetail />} />
```

```jsx
const { id } = useParams();
const [searchParams] = useSearchParams();
```

---

### 28) Protected Routes

**Simple Definition 1**

Protected route means only authorized users can access the page.

**Simple Definition 2**

Check auth state/role before rendering component.

**Simple Definition 3**

If unauthorized, redirect to login or no-access page.

**Examples**

```jsx
return isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />;
```

```jsx
return user.role === "admin" ? <AdminPage /> : <NoAccess />;
```

---

## 3-4 Years: Rendering Internals, Performance, and Architecture

### 29) Virtual DOM and Reconciliation (Complex Topic)

**Simple Definition 1**

Virtual DOM is React's in-memory representation of UI.

**Simple Definition 2**

Reconciliation means React compares old and new virtual tree.

**Simple Definition 3**

React updates only changed DOM parts for better performance.

**Examples**

- Typing in one input does not rebuild full page manually.
- Updating one row in table updates mostly related row nodes.

---

### 30) Render Phase vs Commit Phase (Complex Topic)

**Simple Definition 1**

Render phase calculates what UI should look like.

**Simple Definition 2**

Commit phase applies those changes to real DOM.

**Simple Definition 3**

Heavy work in render makes UI slow.

**Examples**

- Keep expensive calculations out of repeated render loops.
- Use memoization or pre-processing for large lists.

---

### 31) Stale Closures (Complex Topic)

**Simple Definition 1**

A stale closure uses old state value captured earlier.

**Simple Definition 2**

Callbacks/effects may read outdated values if dependencies are wrong.

**Simple Definition 3**

Functional updates and correct dependencies reduce stale closure bugs.

**Examples**

```jsx
// safer
setCount((prev) => prev + 1);
```

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

---

### 32) Performance Optimization Strategy

**Simple Definition 1**

Optimize only real bottlenecks.

**Simple Definition 2**

First fix state placement and render structure, then memoize.

**Simple Definition 3**

Use measurement/profiling before adding optimization complexity.

**Examples**

- Split giant component into smaller components.
- Move state closer to where it is used.
- Use `React.memo` for expensive child with stable props.

---

### 33) `React.memo`

**Simple Definition 1**

`React.memo` skips re-render when props are same.

**Simple Definition 2**

Useful for heavy child components.

**Simple Definition 3**

Works best with stable props.

**Examples**

```jsx
const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});
```

```jsx
// If parent passes new object every time, memo benefit is low.
<Row item={{ name: "A" }} />
```

---

### 34) Code Splitting, Lazy Loading, Suspense

**Simple Definition 1**

Code splitting loads JS in smaller chunks.

**Simple Definition 2**

`React.lazy` loads component when needed.

**Simple Definition 3**

`Suspense` shows fallback while lazy component loads.

**Examples**

```jsx
const Reports = React.lazy(() => import("./Reports"));
```

```jsx
<Suspense fallback={<p>Loading...</p>}>
  <Reports />
</Suspense>
```

---

### 35) `useTransition` and `useDeferredValue` (Advanced)

**Simple Definition 1**

These APIs help keep UI responsive during heavy updates.

**Simple Definition 2**

Urgent updates (typing) stay fast, non-urgent updates can wait.

**Simple Definition 3**

Useful in large filters/search/list rendering.

**Examples**

```jsx
const [isPending, startTransition] = useTransition();
startTransition(() => setBigFilteredList(result));
```

```jsx
const deferredSearch = useDeferredValue(searchText);
```

---

### 36) List Virtualization (Advanced Practical Topic)

**Simple Definition 1**

Virtualization renders only visible rows.

**Simple Definition 2**

Useful for huge lists/tables.

**Simple Definition 3**

It improves performance and memory usage.

**Examples**

- 20,000 rows customer table -> render only visible 30 rows.
- Use `react-window` / `react-virtualized`.

---

### 37) Error Boundaries

**Simple Definition 1**

Error boundary catches render errors in child UI tree.

**Simple Definition 2**

It prevents whole app crash UI.

**Simple Definition 3**

It shows fallback UI when child throws.

**Examples**

```jsx
<ErrorBoundary>
  <ReportsPage />
</ErrorBoundary>
```

---

### 38) Portals

**Simple Definition 1**

Portals render component outside normal parent DOM tree.

**Simple Definition 2**

Great for modals, tooltips, overlays.

**Simple Definition 3**

Portal solves z-index/layout clipping issues.

**Examples**

```jsx
createPortal(<Modal />, document.getElementById("modal-root"));
```

---

### 39) SSR, CSR, and Hydration (Common 3-4 Year Topic)

**Simple Definition 1**

CSR renders UI in browser. SSR renders initial HTML on server.

**Simple Definition 2**

Hydration attaches React behavior to server-rendered HTML.

**Simple Definition 3**

SSR helps first-load and SEO, CSR simplifies client-heavy apps.

**Examples**

- Internal admin app: mostly CSR is common.
- Public marketing pages: SSR can help SEO.

---

### 40) Accessibility (A11y)

**Simple Definition 1**

Accessibility means app usable by everyone, including keyboard/screen-reader users.

**Simple Definition 2**

Use semantic HTML first.

**Simple Definition 3**

Add labels, focus order, and ARIA only where needed.

**Examples**

```jsx
<label htmlFor="email">Email</label>
<input id="email" />
```

```jsx
<button aria-label="Close modal">X</button>
```

---

### 41) React Security Basics

**Simple Definition 1**

React escapes JSX by default, which helps prevent XSS.

**Simple Definition 2**

Unsafe raw HTML rendering can cause security problems.

**Simple Definition 3**

Never trust user-generated HTML without sanitization.

**Examples**

```jsx
// risky if content is untrusted
<div dangerouslySetInnerHTML={{ __html: html }} />
```

```jsx
// safer default
<div>{userText}</div>
```

---

## Important Rules and Pitfalls

### 42) Rules of Hooks (Must Know)

**Simple Definition 1**

Call hooks only at top level of component/custom hook.

**Simple Definition 2**

Do not call hooks inside loops, conditions, or nested functions.

**Simple Definition 3**

Call hooks only in React components or custom hooks.

**Examples**

```jsx
// correct
function App() {
  const [x, setX] = useState(0);
}
```

```jsx
// wrong
if (flag) {
  useEffect(() => {}, []);
}
```

---

### 43) Immutability (Must Know)

**Simple Definition 1**

Do not mutate state directly.

**Simple Definition 2**

Create new objects/arrays while updating state.

**Simple Definition 3**

Immutable updates help React detect changes correctly.

**Examples**

```jsx
// wrong
state.user.name = "A";
setState(state);
```

```jsx
// correct
setState((prev) => ({
  ...prev,
  user: { ...prev.user, name: "A" },
}));
```

---

### 44) Common React Bugs Interviewers Ask

1. Missing dependency in `useEffect`
2. Infinite effect loop
3. Stale closure in async callbacks
4. Mutating state directly
5. Using index key in editable list
6. Too much state at high parent level
7. No loading/error UI for APIs
8. Overusing `useMemo`/`useCallback` without need

---

## Testing for React Interviews

### 45) Unit Testing

**Simple Definition 1**

Unit test checks one small function/component.

**Simple Definition 2**

It verifies one behavior in isolation.

**Simple Definition 3**

Best for utility functions and small components.

**Examples**

- Test amount formatter function.
- Test button label renders correctly.

---

### 46) Integration Testing

**Simple Definition 1**

Integration test checks multiple parts together.

**Simple Definition 2**

It validates real user flow in UI.

**Simple Definition 3**

Good for form submit, filtering, routing interactions.

**Examples**

- Fill login form + click submit + see success redirect.
- Apply filter + table rows update.

---

### 47) E2E Testing

**Simple Definition 1**

E2E tests full app flow in browser-like environment.

**Simple Definition 2**

It simulates real user actions end to end.

**Simple Definition 3**

Use for critical flows, not every tiny case.

**Examples**

- Register -> Login -> Purchase -> Confirmation
- Create invoice -> Add item -> Save -> View invoice list

---

### 48) Testing Library Approach

**Simple Definition 1**

Test behavior, not implementation details.

**Simple Definition 2**

Prefer selecting elements the way users see them.

**Simple Definition 3**

Use role/text/label selectors over class names.

**Examples**

```jsx
screen.getByRole("button", { name: /save/i });
screen.getByLabelText(/email/i);
```

---

## Architecture and Code Quality (3-4 Years Focus)

### 49) Folder Structure and Scalability

**Simple Definition 1**

Organize by feature/module for large apps.

**Simple Definition 2**

Keep components, hooks, services, and tests clear.

**Simple Definition 3**

Good structure improves team speed and maintainability.

**Examples**

```txt
src/
  features/
    users/
      components/
      hooks/
      api/
      usersSlice.js
```

---

### 50) Reusable Components vs Over-Abstraction

**Simple Definition 1**

Reuse patterns, not forced complexity.

**Simple Definition 2**

Do not make one mega-component for every case.

**Simple Definition 3**

Make components generic only where it actually helps.

**Examples**

- Good: shared `Table`, `Modal`, `Input`.
- Bad: single generic component with 50 props and unclear behavior.

---

### 51) API Layer Separation

**Simple Definition 1**

Keep API calls separate from UI when app grows.

**Simple Definition 2**

Service layer makes components cleaner and testable.

**Simple Definition 3**

UI should focus on rendering and interaction.

**Examples**

```js
// api/users.js
export const fetchUsers = () => axios.get("/users");
```

```jsx
// component
useEffect(() => {
  fetchUsers().then(...);
}, []);
```

---

### 52) Type Safety (If using TS)

**Simple Definition 1**

TypeScript catches type mistakes before runtime.

**Simple Definition 2**

Types make API contracts clearer.

**Simple Definition 3**

Types improve auto-complete and maintainability.

**Examples**

```ts
type User = { id: number; name: string };
const [users, setUsers] = useState<User[]>([]);
```

---

## Interview Questions by Experience Level

### 0-1 Year Questions

1. What is React and why use it?
2. What is JSX?
3. Props vs state?
4. Controlled input vs uncontrolled input?
5. Why key is needed in list rendering?
6. What is conditional rendering?
7. What is lifting state up?
8. How to handle click and form submit events?

### 1-2 Year Questions

1. Explain `useEffect` dependency array.
2. Why do we need cleanup in effects?
3. Explain `useRef` with practical use cases.
4. `useMemo` vs `useCallback`?
5. What are custom hooks and why use them?
6. Context API vs props drilling?
7. How do you handle loading/error states?
8. How do you avoid race conditions in API calls?

### 2-3 Year Questions

1. Context vs Redux vs Redux Toolkit?
2. How do you design state for large forms?
3. Explain stale closures and how to avoid them.
4. How do you optimize rendering performance?
5. Explain code splitting and lazy loading.
6. How do you structure large React apps?
7. How do you design reusable components?
8. How do you debug rerender issues?

### 3-4 Year Questions

1. Explain render phase vs commit phase.
2. Explain reconciliation with examples.
3. When to use virtualization?
4. Explain Suspense use cases.
5. Explain `startTransition` and `useDeferredValue`.
6. How do you decide SSR vs CSR?
7. How do you build error boundaries strategy?
8. How do you improve frontend architecture in legacy React apps?

---

## High-Quality Answer Templates (Use in Interview)

### Template A: Concept Answer

`Concept + why needed + practical example + one caution point`

Example:

`useEffect is used for side effects like API calls. We need it because render should stay pure. For example, fetching users when page loads. One caution is dependency array: wrong dependencies can cause stale data or rerender loops.`

### Template B: Difference Question

`Definition of A, definition of B, key differences, when to use each`

Example:

`Context is simple shared state for cases like auth/theme. Redux Toolkit is better for large apps with many async modules and predictable state patterns.`

### Template C: Architecture Question

`Problem -> decision -> tradeoff -> outcome`

Example:

`We had a large feature with repeated API and form logic, so we extracted reusable hooks and service modules. That reduced duplication and improved maintainability, but we avoided over-abstraction by keeping feature-specific logic local.`

---

## 30 Must-Revise Complex Topics

1. `useEffect` dependencies
2. Effect cleanup
3. Stale closures
4. Immutability
5. Context rerender caveat
6. Redux vs Redux Toolkit
7. Async flow state machine
8. Race conditions
9. Error handling strategy
10. Retry/backoff basics
11. Virtual DOM and reconciliation
12. Render vs commit phase
13. Memoization strategy
14. `React.memo` tradeoffs
15. `useMemo` misuse
16. `useCallback` misuse
17. Code splitting boundaries
18. Suspense fallback strategy
19. `startTransition` use cases
20. `useDeferredValue` use cases
21. List virtualization
22. Controlled forms at scale
23. `useReducer` for complex local state
24. Custom hooks design
25. Portal use cases
26. Error boundaries
27. A11y essentials
28. XSS awareness
29. Testing behavior vs implementation
30. Architecture modularization

---

## Final Checklist: Ready for 0-4 Years React Interview?

You are ready when you can do all of these confidently:

1. Explain every basic topic in 30 seconds.
2. Explain every hook with one real example.
3. Explain at least 10 complex topics in simple English.
4. Answer Redux vs Context vs RTK clearly.
5. Explain performance strategy without over-optimizing.
6. Explain testing strategy (unit + integration + e2e).
7. Explain architecture decisions with tradeoffs.
8. Solve one mini React problem live (form/list/effect bug).

If you can do this, your React interview coverage for `0-4 years` is strong.

