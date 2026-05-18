# Complete React.js Interview Questions & Answers (1–5 Years Experience)

> **Coverage:** Core Concepts, Components/Props/State, Hooks, Performance, State Management, Routing, Data Fetching, Advanced Patterns, Scenarios, Coding, Testing, TypeScript, Ecosystem  
> **Style:** Definitions + Detailed Explanations + Multiple Simple Examples with Comments  
> **Level:** 1 to 5 Years Experience  

---

## 1. Core React Concepts & JSX

---

### 1. What is JSX, and why do developers prefer using it over plain JavaScript when building UI components?

**Definition:**  
JSX (JavaScript XML) is a syntax extension for JavaScript. It lets you write HTML-like code inside JavaScript files. It is not HTML, but it looks like HTML.

**Explanation:**  
Developers prefer JSX because it is declarative and visual. You can see the UI structure directly in the code. Without JSX, you must write nested `React.createElement()` calls, which is ugly and hard to maintain. JSX is compiled into JavaScript function calls by tools like Babel or Vite. It also prevents some injection attacks because React escapes values before rendering them.

**Example 1 — With JSX (Clean):**
```jsx
const Hello = () => {
  return <h1 className="title">Hello World</h1>;
};
```

**Example 2 — Without JSX (Messy):**
```jsx
const Hello = () => {
  return React.createElement('h1', { className: 'title' }, 'Hello World');
};
```

**Example 3 — JSX with JavaScript expression:**
```jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name.toUpperCase()}</h1>; // JS expression inside curly braces
};
```

---

### 2. Can a React component return multiple elements without a wrapper? If yes, how?

**Definition:**  
Yes. A React component can return multiple elements without adding an extra DOM node by using a React Fragment.

**Explanation:**  
A Fragment lets you group a list of children without adding extra nodes to the DOM. This keeps your HTML structure flat and clean. It also helps with CSS styling because no unexpected `div` is injected. Fragments can also accept a `key` prop when you use the long syntax.

**Example 1 — Short syntax:**
```jsx
const Navbar = () => {
  return (
    <>
      <div className="logo">Logo</div>
      <div className="links">Home About</div>
      <button>Login</button>
    </>
  );
};
```

**Example 2 — Long syntax with key:**
```jsx
const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
          <li>{item.price}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};
```

---

### 3. What is the Virtual DOM, and how does React use it to update the UI efficiently?

**Definition:**  
The Virtual DOM is a lightweight JavaScript representation of the real DOM. It lives in memory as a JavaScript object tree.

**Explanation:**  
When state or props change, React creates a new Virtual DOM tree. It compares this new tree with the previous one using a diffing algorithm. Then it calculates the minimum number of changes needed. Finally, it updates only those specific parts in the real DOM. This process is called reconciliation. It avoids expensive full page repaints and makes UI updates very fast.

**Example 1 — Concept in code:**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
  // Only the number text updates in the real DOM, not the whole button or page
};
```

**Example 2 — Showing React only updates changed nodes:**
```jsx
const App = () => {
  const [name, setName] = useState("Tom");
  return (
    <div>
      <h1>Welcome</h1>          {/* This stays untouched */}
      <p>{name}</p>             {/* Only this updates */}
      <button onClick={() => setName("Jerry")}>Change</button>
    </div>
  );
};
```

---

### 4. Explain reconciliation in React. How does the Fiber architecture support it?

**Definition:**  
Reconciliation is the process React uses to compare the new Virtual DOM with the previous one and calculate the minimal set of changes to update the real DOM. Fiber is the new reconciliation engine introduced in React 16.

**Explanation:**  
Fiber breaks the rendering work into small units called fibers. It can pause, abort, or reuse work based on priority. For example, user input gets higher priority than a data list update. Fiber makes React apps smoother and enables modern features like Suspense, Concurrent Mode, and useTransition.

**Example 1 — Conceptual:**
```jsx
// Fiber allows React to pause low-priority updates
// If a user clicks while a big list is rendering,
// React handles the click first, then finishes the list
```

**Example 2 — useTransition (enabled by Fiber):**
```jsx
const App = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    // Urgent update: show what user typed
    // Transition update: filter the big list
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <p>Loading results...</p>}
      <BigList query={query} />
    </div>
  );
};
```

---

### 5. What is the difference between Rendering and Painting in React?

**Definition:**  
Rendering is the process of calling component functions and creating the Virtual DOM tree. Painting is the browser's job of drawing pixels on the screen after the real DOM is updated.

**Explanation:**  
Rendering is a JavaScript computation phase. Painting happens when the browser recalculates styles and draws pixels. Rendering can happen many times without painting. For example, if state updates but the output is the same, React skips the paint. Separating these phases helps React optimize updates.

**Example 1:**
```jsx
const App = () => {
  const [name, setName] = useState("A");
  // Rendering happens here when state changes
  return <div>{name}</div>;
  // Painting happens in browser only if name actually changed
};
```

**Example 2 — Same state, no paint:**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(0); // same value
    // React renders but skips paint because Virtual DOM matches
  };
  return <button onClick={handleClick}>{count}</button>;
};
```

---

### 6. What causes unnecessary re-renders in React, and how can you prevent them?

**Definition:**  
Unnecessary re-renders happen when a parent component updates and all child components re-render even if their props and state are the same.

**Explanation:**  
This wastes CPU and makes the app slow. You can prevent them by using `React.memo` to memoize functional components. Use `useMemo` to cache expensive calculations. Use `useCallback` to keep function references stable between renders. Also, lift state down and keep state close to where it is used. Avoid passing objects and arrays directly in JSX because they create new references every render.

**Example 1 — React.memo:**
```jsx
const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <div>{name}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Child name="Tom" /> {/* Won't re-render when count changes */}
    </div>
  );
};
```

**Example 2 — useCallback:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is new every render, causing Child to re-render
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // stable reference

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
};

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Child Button</button>;
});
```

---

### 7. When does a component re-render in React?

**Definition:**  
A React component re-renders when its own state changes, when its parent re-renders, or when the context value changes.

**Explanation:**  
First, when its own state changes using setState or useState. Second, when its parent component re-renders, because React passes new props by default. Third, when the context value changes if the component is a context consumer. In class components, forceUpdate() also triggers a re-render. Remember, re-renders do not always mean DOM updates.

**Example 1 — Parent causing child re-render:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child /> {/* Re-renders too even without props */}
    </div>
  );
};
```

**Example 2 — Context change:**
```jsx
const ThemeContext = createContext("light");

const Child = () => {
  const theme = useContext(ThemeContext); // re-renders when context changes
  return <div>{theme}</div>;
};
```

---

### 8. Why is immutability important in React state management? How does it help React find changes efficiently?

**Definition:**  
Immutability means never changing state directly. Instead of pushing to an array, you create a new array. Instead of mutating an object, you create a new object.

**Explanation:**  
This helps React find changes efficiently because React uses shallow comparison. If the reference is the same, React assumes nothing changed. If you mutate, the reference stays same but data changed, causing silent bugs. Immutability also enables time-travel debugging and predictable state updates.

**Example 1 — Wrong (mutating):**
```jsx
const addTodo = () => {
  todos.push(newTodo); // Bad! Mutating existing array
  setTodos(todos);     // React sees same reference, may skip update
};
```

**Example 2 — Correct (immutable):**
```jsx
const addTodo = () => {
  setTodos([...todos, newTodo]); // Good! New array reference
};
```

**Example 3 — Object immutability:**
```jsx
// Wrong
user.name = "Tom";
setUser(user);

// Correct
setUser({ ...user, name: "Tom" }); // New object with spread
```

---

### 9. What are controlled vs uncontrolled components? When would you use each?

**Definition:**  
A controlled component is where React controls the form element's value. The state is stored in useState and updated via onChange. An uncontrolled component stores its own state in the DOM.

**Explanation:**  
Controlled components are preferred when you need validation, dynamic behavior, or instant feedback. Uncontrolled components are simpler for basic forms and necessary for file inputs because React cannot control file values for security reasons.

**Example 1 — Controlled:**
```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />
// React owns the value. Every keystroke updates state.
```

**Example 2 — Uncontrolled:**
```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
// DOM owns the value. React reads it only when needed.
const handleSubmit = () => {
  console.log(inputRef.current.value);
};
```

**Example 3 — File input (must be uncontrolled):**
```jsx
const fileRef = useRef(null);
<input type="file" ref={fileRef} />
// Files cannot be controlled for security reasons
```

---

### 10. What is SyntheticEvent in React? How is it different from native browser events?

**Definition:**  
SyntheticEvent is a cross-browser wrapper around the browser's native event. React creates this wrapper to normalize events so they behave consistently across all browsers.

**Explanation:**  
It has the same interface as native events but works everywhere. In older React versions, SyntheticEvents were pooled for performance. You access it in event handlers like onClick. It has properties like target, currentTarget, preventDefault, and stopPropagation.

**Example 1 — Basic usage:**
```jsx
const handleClick = (e) => {
  e.preventDefault(); // Works same in Chrome, Safari, Firefox
  console.log(e.target); // The clicked element
};
<button onClick={handleClick}>Click</button>
```

**Example 2 — Event pooling (legacy React):**
```jsx
const handleClick = (e) => {
  // In older React, you cannot access e asynchronously without e.persist()
  setTimeout(() => {
    console.log(e.target); // Would be null in old React without persist
  }, 0);
};
```

---

### 11. What is the significance of the key prop in lists? What happens if you use the index as a key?

**Definition:**  
The key prop is a special attribute React uses to track elements in a list. It helps React identify which items changed, were added, or were removed.

**Explanation:**  
Keys should be stable, unique, and predictable. Using the array index as a key is dangerous when the list order changes. React may reuse DOM elements incorrectly, causing bugs with state, focus, and animations. Always use unique IDs from your data.

**Example 1 — Bad (index as key):**
```jsx
{todos.map((todo, index) => (
  <li key={index}>{todo}</li>
))}
// If you delete item 1, item 2 becomes item 1. React gets confused.
```

**Example 2 — Good (unique id):**
```jsx
{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}
// React knows exactly which item is which.
```

**Example 3 — Key with input focus bug:**
```jsx
// With index as key, if list reorders, the wrong input keeps focus
const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <input defaultValue={item} />
      </li>
    ))}
  </ul>
);
```

---

### 12. What is the difference between setState and replaceState?

**Definition:**  
In class components, setState merges the new state with the existing state object. replaceState was a method that completely replaced the entire state object.

**Explanation:**  
replaceState was never officially documented as stable and has been removed from React. In functional components, useState replaces the value entirely for that specific state variable. There is no automatic merge behavior in useState.

**Example 1 — Class setState (merges):**
```jsx
this.setState({ name: "Tom" }); // Keeps other state keys like age
```

**Example 2 — Functional useState (replaces entirely):**
```jsx
const [user, setUser] = useState({ name: "Tom", age: 20 });
setUser({ name: "Jerry" }); // Replaces entire object, age is lost!
// Fix:
setUser(prev => ({ ...prev, name: "Jerry" }));
```

---

### 13. Why doesn't state update immediately after calling setState or useState?

**Definition:**  
State updates in React are asynchronous and batched. React schedules an update instead of applying it immediately.

**Explanation:**  
React batches multiple state updates into one re-render for better performance. This means you cannot read the new state on the very next line after calling setState. In React 18, automatic batching happens even inside setTimeout and promises.

**Example 1:**
```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // Still prints 0, not 1!
};
```

**Example 2 — Batch updates:**
```jsx
const handleClick = () => {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
  // All three are batched into one re-render, count increases by 3
};
```

---

### 14. Can you update state based on the current state? What is the correct way to do it?

**Definition:**  
Yes. You should pass a function to setState or useState. This function receives the previous state as its argument.

**Explanation:**  
This is safer because React may batch updates. If you use the current variable directly, you might work with a stale value. The functional form always uses the most recent state and avoids race conditions.

**Example 1 — Counter:**
```jsx
const [count, setCount] = useState(0);

// Wrong
const increment = () => setCount(count + 1);

// Correct
const increment = () => setCount(prev => prev + 1);
```

**Example 2 — Object update:**
```jsx
setUser(prev => ({ ...prev, name: "Tom" }));
```

**Example 3 — Multiple updates:**
```jsx
const handleClick = () => {
  setCount(prev => prev + 1); // uses latest state
  setCount(prev => prev + 1); // uses latest state again
};
```

---

### 15. What is Strict Mode in React, and what issues does it help identify?

**Definition:**  
StrictMode is a development-only tool in React that helps identify potential problems. It renders components twice to detect side effects.

**Explanation:**  
It warns about using deprecated lifecycle methods, unsafe refs, and legacy context APIs. It also checks for unexpected side effects in useEffect. StrictMode does not affect production builds.

**Example 1 — Wrapping app:**
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Example 2 — Detecting impure render:**
```jsx
let count = 0;
const BadComponent = () => {
  count++; // Side effect! This increments twice in StrictMode
  return <div>{count}</div>;
};
```

---

### 16. What is double rendering in React Strict Mode, and why does it happen?

**Definition:**  
In development mode with StrictMode enabled, React intentionally renders components twice.

**Explanation:**  
This double rendering helps detect side effects in functional components. Pure components with no side effects will produce identical results both times. Components with side effects like mutating external variables will show different results. This only happens in development.

**Example 1 — Impure component caught:**
```jsx
let count = 0;
const BadComponent = () => {
  count++; // increments twice in StrictMode
  return <div>{count}</div>; // Shows 2 instead of 1
};
```

**Example 2 — Safe component:**
```jsx
const GoodComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(c => c + 1);
  }, []);
  return <div>{count}</div>;
};
```

---

## 2. Components, Props & State

---

### 17. What are the different types of components in React? Explain Functional, Class, Pure, and Server Components.

**Definition:**  
A component is a reusable, independent piece of the UI. React has four important types.

**Explanation:**  
Functional components are JavaScript functions that return JSX. They are the standard today. Class components are ES6 classes with render() and lifecycle methods. PureComponent is a class that auto-implements shouldComponentUpdate with shallow comparison. Server Components run only on the server and never ship JS to the browser.

**Example 1 — Functional:**
```jsx
const Welcome = ({ name }) => {
  return <h1>Hello {name}</h1>;
};
```

**Example 2 — Class:**
```jsx
class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>;
  }
}
```

**Example 3 — PureComponent:**
```jsx
class UserCard extends React.PureComponent {
  render() {
    console.log("rendered");
    return <div>{this.props.name}</div>;
  }
}
// Functional equivalent:
const UserCardMemo = React.memo(({ name }) => <div>{name}</div>);
```

**Example 4 — Server Component:**
```jsx
async function ProductList() {
  const products = await db.products.findAll(); // direct DB access
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

---

### 18. What is the difference between props and state?

**Definition:**  
Both props and state are plain JavaScript objects that hold data, but they behave differently.

**Explanation:**  
Props are passed from parent to child and are read-only inside the child. State is created inside the component and can be updated by the component itself. Props make components reusable. State makes components interactive.

**Example 1 — Props:**
```jsx
const Button = ({ label }) => <button>{label}</button>;
<Button label="Click Me" /> {/* Parent passes data */}
```

**Example 2 — State:**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0); // state created here
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

**Example 3 — Both together:**
```jsx
const Parent = () => {
  const [color, setColor] = useState("blue"); // state in parent
  return <Child color={color} onChange={setColor} />; // passed as props
};
```

---

### 19. What's wrong with modifying props inside a component?

**Definition:**  
Props are immutable. A component must never change its own props.

**Explanation:**  
React follows unidirectional data flow. If a child modifies props, the parent still believes the old value is true. The UI becomes inconsistent. Instead, the parent should pass a callback function as a prop.

**Example 1 — Wrong:**
```jsx
const ProductCard = ({ price }) => {
  price = 100; // ❌ Modifying prop directly
  return <div>{price}</div>;
};
```

**Example 2 — Correct:**
```jsx
const ProductCard = ({ price, onPriceChange }) => {
  return (
    <div>
      <p>Price: {price}</p>
      <button onClick={() => onPriceChange(100)}>Set to 100</button>
    </div>
  );
};

const App = () => {
  const [price, setPrice] = useState(50);
  return <ProductCard price={price} onPriceChange={setPrice} />;
};
```

---

### 20. How do you pass data from a parent to a child component?

**Definition:**  
Data flows downward in React. The parent includes the child in its JSX and passes data as attributes.

**Explanation:**  
These attributes become props inside the child. This is the primary mechanism for component communication in React.

**Example 1 — Single prop:**
```jsx
const App = () => {
  return <Header name="Priya" />;
};
const Header = ({ name }) => <h1>Welcome {name}</h1>;
```

**Example 2 — Multiple props:**
```jsx
const App = () => {
  return <UserCard name="Tom" age={25} isAdmin={true} />;
};
const UserCard = ({ name, age, isAdmin }) => (
  <div>
    <h1>{name}</h1>
    <p>{age}</p>
    {isAdmin && <span>Admin</span>}
  </div>
);
```

**Example 3 — Object spread:**
```jsx
const user = { name: "Tom", age: 25 };
<UserCard {...user} /> // Equivalent to name="Tom" age={25}
```

---

### 21. How do you send data from a child to a parent component?

**Definition:**  
React does not allow direct upward data flow. The parent passes a function as a prop to the child. The child calls that function.

**Explanation:**  
The child calls the function and passes data as arguments. The parent receives the data inside its own state.

**Example 1 — Search bar:**
```jsx
const App = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <SearchBar onSearch={setSearchText} />
      <p>You searched for: {searchText}</p>
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  return <input onChange={(e) => onSearch(e.target.value)} />;
};
```

**Example 2 — Form submission:**
```jsx
const Parent = () => {
  const handleData = (data) => {
    console.log("Received from child:", data);
  };
  return <ChildForm onSubmit={handleData} />;
};

const ChildForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <form onSubmit={() => onSubmit(value)}>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </form>
  );
};
```

---

### 22. How would you handle deeply nested prop drilling? What approach would you take?

**Definition:**  
Prop drilling means passing props through many intermediate components that do not need the data themselves.

**Explanation:**  
Solutions include React Context API, state management libraries like Zustand or Redux, and component composition.

**Example 1 — Context API:**
```jsx
const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value="dark">
    <Layout /> {/* No need to pass theme here */}
  </ThemeContext.Provider>
);

const Button = () => {
  const theme = useContext(ThemeContext); // direct access
  return <button className={theme}>Click</button>;
};
```

**Example 2 — Component composition:**
```jsx
const App = () => {
  const header = <Header user={user} />;
  return <Layout header={header} />; // Pass element, not data
};

const Layout = ({ header }) => (
  <div>{header}</div> // No prop drilling needed
);
```

---

### 23. What are Higher-Order Components (HOC)? Give a real-world use case.

**Definition:**  
A Higher-Order Component is a function that takes a component and returns a new enhanced component.

**Explanation:**  
It wraps the original component to add extra props, logic, or behavior without modifying the original.

**Example 1 — Auth HOC:**
```jsx
const withAuth = (WrappedComponent) => {
  return function AuthWrapper(props) {
    const isLoggedIn = checkLoginStatus();
    if (!isLoggedIn) return <p>Please log in</p>;
    return <WrappedComponent {...props} userRole="admin" />;
  };
};

const Dashboard = ({ userRole }) => <div>Welcome {userRole}</div>;
const ProtectedDashboard = withAuth(Dashboard);
```

**Example 2 — With loading state:**
```jsx
const withLoading = (WrappedComponent) => {
  return function Loader({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
};
```

---

### 24. What are render props? How do they differ from HOCs?

**Definition:**  
A render prop is a prop that is a function. A component uses this function to decide what to render.

**Explanation:**  
The component shares its internal state or logic with the child through the function's arguments. Unlike HOCs, render props are more explicit and avoid prop name collisions.

**Example 1 — Mouse tracker:**
```jsx
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
      {render(position)}
    </div>
  );
};

const App = () => (
  <MouseTracker render={({ x, y }) => <p>Mouse: {x}, {y}</p>} />
);
```

**Example 2 — Data fetcher:**
```jsx
const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(r => r.json()).then(setData);
  }, [url]);
  return render(data);
};

<DataFetcher 
  url="/api/users" 
  render={(users) => users ? <ul>{users.map(u => <li>{u.name}</li>)}</ul> : <p>Loading</p>} 
/>
```

---

### 25. How do you conditionally render an element or text in React?

**Definition:**  
Conditional rendering means showing different UI based on some condition.

**Explanation:**  
Use ternary operator for if-else, logical AND for showing something only if true, separate variable for complex logic, or early return for guarding the whole component.

**Example 1 — Ternary:**
```jsx
const Navbar = ({ isLoggedIn }) => (
  <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
);
```

**Example 2 — Logical AND:**
```jsx
const Navbar = ({ isLoggedIn, userName }) => (
  <div>
    {isLoggedIn && <p>Welcome {userName}</p>}
    {!isLoggedIn && <p>Please sign in</p>}
  </div>
);
```

**Example 3 — Early return:**
```jsx
const Dashboard = ({ isLoggedIn }) => {
  if (!isLoggedIn) return <p>Access Denied</p>;
  return <div>Secret Data</div>;
};
```

**Example 4 — Separate variable:**
```jsx
const Message = ({ isAdmin, isLoggedIn }) => {
  let message;
  if (isAdmin && isLoggedIn) message = <p>Admin Panel</p>;
  else if (isLoggedIn) message = <p>Hello User</p>;
  else message = <p>Guest</p>;
  return <div>{message}</div>;
};
```

---

### 26. How do you conditionally apply className or styles based on state?

**Definition:**  
You can change CSS classes or inline styles dynamically based on state or props.

**Explanation:**  
Use template literals for className and objects for inline style.

**Example 1 — Template literal:**
```jsx
const Button = ({ isActive, isDisabled }) => {
  const className = `btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'btn-disabled' : ''}`;
  return <button className={className}>Click</button>;
};
```

**Example 2 — Array join:**
```jsx
const classes = [
  'btn',
  isActive && 'btn-active',
  isDisabled && 'btn-disabled'
].filter(Boolean).join(' ');
```

**Example 3 — Inline styles:**
```jsx
const Card = ({ hasError }) => {
  const style = {
    border: hasError ? '2px solid red' : '1px solid gray',
    backgroundColor: hasError ? '#ffe6e6' : 'white'
  };
  return <div style={style}>Card</div>;
};
```

---

### 27. How do you force a component to re-render without calling setState?

**Definition:**  
You can force a re-render by updating a dummy state or changing the key prop.

**Explanation:**  
Changing the key prop destroys and recreates the component completely. A dummy state update triggers React's scheduling.

**Example 1 — Dummy state:**
```jsx
const Chart = () => {
  const [, forceUpdate] = useState(0);
  const handleRefresh = () => forceUpdate(n => n + 1);
  return <button onClick={handleRefresh}>Refresh</button>;
};
```

**Example 2 — Key prop change:**
```jsx
const Parent = () => {
  const [key, setKey] = useState(0);
  return (
    <div>
      <ExpensiveComponent key={key} />
      <button onClick={() => setKey(k => k + 1)}>Remount</button>
    </div>
  );
};
```

---

### 28. How do you access a DOM element directly in React?

**Definition:**  
Use useRef to get a direct reference to a DOM node.

**Explanation:**  
The ref object has a current property that points to the DOM element. You can then call native DOM methods on it.

**Example 1 — Focus input:**
```jsx
const Form = () => {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
```

**Example 2 — Scroll to element:**
```jsx
const Page = () => {
  const sectionRef = useRef(null);
  const scrollTo = () => sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <div>
      <button onClick={scrollTo}>Go to Section</button>
      <div ref={sectionRef}>Target</div>
    </div>
  );
};
```

---

### 29. How do you set dynamic key names in a state object?

**Definition:**  
Use computed property names with square brackets to update state using a variable as the key.

**Explanation:**  
This is useful for forms with many inputs where you want one handler for all fields.

**Example 1 — Form handler:**
```jsx
const Form = () => {
  const [values, setValues] = useState({ firstName: '', lastName: '', email: '' });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <form>
      <input name="firstName" value={values.firstName} onChange={handleChange} />
      <input name="lastName" value={values.lastName} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
    </form>
  );
};
```

**Example 2 — Dynamic toggle:**
```jsx
const [flags, setFlags] = useState({ showA: false, showB: false });

const toggle = (key) => {
  setFlags(prev => ({ ...prev, [key]: !prev[key] }));
};

<button onClick={() => toggle('showA')}>Toggle A</button>
```

---

### 30. How would you create a "switching component" that renders different pages based on a prop?

**Definition:**  
A switching component receives a prop and decides which component to render.

**Explanation:**  
Use an object map or switch statement. Object maps are cleaner and more scalable.

**Example 1 — Object map:**
```jsx
const Home = () => <div>Home</div>;
const Profile = () => <div>Profile</div>;
const Settings = () => <div>Settings</div>;

const PageSwitcher = ({ page }) => {
  const pages = { home: Home, profile: Profile, settings: Settings };
  const Selected = pages[page] || Home;
  return <Selected />;
};
```

**Example 2 — Switch statement:**
```jsx
const PageSwitcher = ({ page }) => {
  switch (page) {
    case 'home': return <Home />;
    case 'profile': return <Profile />;
    default: return <div>404</div>;
  }
};
```

**Example 3 — With React Router:**
```jsx
import { Routes, Route } from 'react-router-dom';
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
</Routes>
```

---

### 31. How do you re-render the view when the browser is resized?

**Definition:**  
Listen to the native window resize event and store the window size in state.

**Explanation:**  
Use useEffect to attach the listener and clean it up on unmount. Update state inside the handler so React re-renders.

**Example 1 — Basic:**
```jsx
const Responsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{width < 768 ? 'Mobile' : 'Desktop'}</div>;
};
```

**Example 2 — Custom hook:**
```jsx
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return size;
};
```

---

### 32. How would you perform an automatic redirect after login in React?

**Definition:**  
After successful login, use programmatic navigation to send the user to a protected page.

**Explanation:**  
In React Router v6, use the useNavigate hook. You can also use the Navigate component for declarative redirects.

**Example 1 — useNavigate:**
```jsx
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fakeApi();
    if (res.success) {
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};
```

**Example 2 — Navigate component:**
```jsx
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
};
```

**Example 3 — With replace:**
```jsx
navigate('/dashboard', { replace: true });
// Removes login page from browser history so back button won't return to login
```

---

## 3. React Hooks

---

### 33. What is useState, and how does it work? What are its limitations?

**Definition:**  
useState is a Hook that lets you add state to functional components. It returns an array with the current state and a setter function.

**Explanation:**  
React preserves the state between re-renders. The setter function schedules an update. Limitations: state updates are not merged automatically (unlike class setState), and state is isolated per component instance.

**Example 1 — Basic:**
```jsx
const [count, setCount] = useState(0);
```

**Example 2 — Object state (must merge manually):**
```jsx
const [user, setUser] = useState({ name: "Tom", age: 20 });
setUser(prev => ({ ...prev, name: "Jerry" })); // must spread old state
```

**Example 3 — Functional update:**
```jsx
setCount(prev => prev + 1); // safer when new state depends on old
```

---

### 34. What is useEffect, and how does it work? What does the cleanup function do?

**Definition:**  
useEffect lets you perform side effects in functional components. It runs after the render is committed to the screen.

**Explanation:**  
The cleanup function runs before the component unmounts or before the effect re-runs. It is essential for removing event listeners, timers, or subscriptions to prevent memory leaks.

**Example 1 — Basic data fetch:**
```jsx
useEffect(() => {
  fetch('/api/data').then(r => r.json()).then(setData);
}, []); // empty deps = run once on mount
```

**Example 2 — Cleanup subscription:**
```jsx
useEffect(() => {
  const subscription = api.subscribe(id);
  return () => {
    subscription.unsubscribe(); // cleanup prevents memory leak
  };
}, [id]);
```

**Example 3 — Timer cleanup:**
```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer);
}, []);
```

---

### 35. Can a component have multiple useEffect calls? Why would you do that?

**Definition:**  
Yes. You can have as many useEffect hooks as you need.

**Explanation:**  
Separating effects by concern makes code easier to read and maintain. Instead of one giant useEffect, split them into logical groups.

**Example:**
```jsx
const UserProfile = ({ userId }) => {
  // Effect 1: Fetch user data
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  // Effect 2: Update document title
  useEffect(() => {
    document.title = user?.name || "Profile";
  }, [user]);

  // Effect 3: Track page view
  useEffect(() => {
    analytics.track("Profile View", { userId });
  }, [userId]);

  return <div>{user?.name}</div>;
};
```

---

### 36. What is the purpose of the dependency array in useEffect? What happens if you omit it?

**Definition:**  
The dependency array tells React when to re-run the effect.

**Explanation:**  
Empty array `[]` means run once on mount. With values `[a, b]`, the effect runs when those values change. If you omit the array entirely, the effect runs after every render.

**Example 1 — No array (runs every render):**
```jsx
useEffect(() => {
  console.log("Every render");
});
```

**Example 2 — Empty array (mount only):**
```jsx
useEffect(() => {
  console.log("Only on mount");
}, []);
```

**Example 3 — With dependencies:**
```jsx
useEffect(() => {
  console.log("Only when id changes");
}, [id]);
```

---

### 37. What is a potential issue with calling hooks conditionally?

**Definition:**  
Hooks must be called in the same order on every render. You cannot call hooks inside if statements, loops, or nested functions.

**Explanation:**  
React tracks hooks by their call order in an internal array. If the order changes, React gets confused and maps state to the wrong hook.

**Example 1 — Wrong:**
```jsx
if (isLoggedIn) {
  const [data, setData] = useState(null); // ❌ Hook inside condition
}
```

**Example 2 — Correct:**
```jsx
const [data, setData] = useState(null);
if (isLoggedIn) {
  // safe to use data here
}
```

---

### 38. What is useRef, and what are its common use cases?

**Definition:**  
useRef returns a mutable object with a current property. It persists across renders without causing re-renders.

**Explanation:**  
Common uses: accessing DOM elements directly, storing previous values, keeping timers or interval IDs, and storing any mutable value that should not trigger re-renders.

**Example 1 — DOM access:**
```jsx
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();
```

**Example 2 — Previous value:**
```jsx
const [count, setCount] = useState(0);
const prevCount = useRef(count);
useEffect(() => {
  prevCount.current = count;
}, [count]);
// prevCount.current holds the previous count value
```

**Example 3 — Timer ID:**
```jsx
const timerId = useRef(null);
const start = () => { timerId.current = setInterval(...); };
const stop = () => { clearInterval(timerId.current); };
```

---

### 39. What is the difference between useRef and useState?

**Definition:**  
useState triggers re-renders when updated. useRef does not trigger re-renders when its current property changes.

**Explanation:**  
useState is for UI data that the user sees. useRef is for behind-the-scenes data like DOM nodes, previous values, or interval IDs.

**Example 1 — useState (visible, triggers render):**
```jsx
const [count, setCount] = useState(0);
// Changing count re-renders the component
```

**Example 2 — useRef (hidden, no render):**
```jsx
const renderCount = useRef(0);
renderCount.current++;
// Component does not re-render when renderCount changes
```

---

### 40. What is useMemo, and when should you use it?

**Definition:**  
useMemo caches the result of an expensive calculation between renders.

**Explanation:**  
Use it when you have a computationally heavy operation that depends on specific values. It only recalculates when those dependencies change.

**Example 1 — Expensive sort:**
```jsx
const sortedList = useMemo(() => {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}, [list]);
```

**Example 2 — Derived state:**
```jsx
const totalPrice = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
```

---

### 41. What is useCallback, and when should you use it?

**Definition:**  
useCallback caches a function definition between renders.

**Explanation:**  
Use it when you pass callbacks to child components that are optimized with React.memo. Without useCallback, a new function is created every render, causing the child to re-render unnecessarily.

**Example 1 — With React.memo child:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // stable reference

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Add {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
};

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Child</button>;
});
```

---

### 42. What is the difference between useMemo and useCallback?

**Definition:**  
useMemo caches a value. useCallback caches a function.

**Explanation:**  
useMemo(() => compute(), [deps]) returns the computed value. useCallback(() => {}, [deps]) returns the function itself. useCallback is essentially useMemo for functions.

**Example:**
```jsx
const value = useMemo(() => expensiveCalc(a, b), [a, b]); // returns number/object
const handler = useCallback(() => doSomething(a), [a]);    // returns function
```

---

### 43. What is useReducer, and when is it preferred over useState?

**Definition:**  
useReducer is a Hook for state logic that involves multiple sub-values or complex state transitions.

**Explanation:**  
It is preferred when the next state depends on the previous one, or when you have complex state logic like forms with many fields. It uses a reducer function (state, action) => newState.

**Example 1 — Counter:**
```jsx
const [count, dispatch] = useReducer((state, action) => {
  if (action === 'increment') return state + 1;
  if (action === 'decrement') return state - 1;
  return state;
}, 0);

<button onClick={() => dispatch('increment')}>+</button>
```

**Example 2 — Complex form:**
```jsx
const [state, dispatch] = useReducer(formReducer, { name: '', email: '', errors: {} });

dispatch({ type: 'SET_FIELD', field: 'name', value: 'Tom' });
dispatch({ type: 'VALIDATE' });
```

---

### 44. How would you handle async actions with useReducer?

**Definition:**  
Async actions cannot be handled directly inside the reducer because reducers must be pure functions.

**Explanation:**  
Use a separate async function (often called in the component or in a custom hook) that dispatches actions. The async logic lives outside the reducer.

**Example:**
```jsx
const [state, dispatch] = useReducer(dataReducer, { loading: false, data: null, error: null });

const fetchData = async (url) => {
  dispatch({ type: 'FETCH_START' });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message });
  }
};
```

---

### 45. What is useContext, and what are its limitations?

**Definition:**  
useContext lets you read the current value of a React Context.

**Explanation:**  
Limitations: All consumers re-render when the context value changes, even if they only use part of the value. This can cause performance issues with frequent updates.

**Example 1 — Basic usage:**
```jsx
const ThemeContext = createContext('light');
const Button = () => {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
};
```

**Example 2 — Performance issue:**
```jsx
const App = () => {
  const [user, setUser] = useState({ name: 'Tom', theme: 'dark' });
  return (
    <UserContext.Provider value={user}>
      {/* Every consumer re-renders when ANY part of user changes */}
    </UserContext.Provider>
  );
};
```

---

### 46. What is useLayoutEffect, and how is it different from useEffect?

**Definition:**  
useLayoutEffect fires synchronously after all DOM mutations but before the browser paints.

**Explanation:**  
useEffect runs asynchronously after paint. useLayoutEffect runs before paint. Use useLayoutEffect when you need to measure DOM or make visual changes that must happen before the user sees the frame.

**Example 1 — Measure DOM:**
```jsx
useLayoutEffect(() => {
  const height = divRef.current.getBoundingClientRect().height;
  setMeasuredHeight(height);
}, []);
```

**Example 2 — Prevent visual flicker:**
```jsx
useLayoutEffect(() => {
  // Adjust tooltip position before browser paints
  tooltipRef.current.style.top = calculatePosition();
}, [target]);
```

---

### 47. What is useSyncExternalStore? What problems does it solve?

**Definition:**  
useSyncExternalStore is a Hook for reading and subscribing to an external data store in a way that supports concurrent rendering.

**Explanation:**  
It solves tearing issues where the UI shows inconsistent data during concurrent renders. It is used for state management libraries and browser APIs.

**Example:**
```jsx
const useOnlineStatus = () => {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine, // client value
    () => true // server snapshot
  );
};
```

---

### 48. What is useImperativeHandle?

**Definition:**  
useImperativeHandle customizes the instance value that is exposed when a parent uses useRef on a child component.

**Explanation:**  
Use it with forwardRef to expose only specific methods to the parent, instead of the whole DOM node.

**Example:**
```jsx
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));

  return <input ref={inputRef} />;
});

// Parent usage:
const parentRef = useRef(null);
<FancyInput ref={parentRef} />
parentRef.current.focus();
parentRef.current.clear();
```

---

### 49. What is useId, and why is it important for accessibility?

**Definition:**  
useId generates a unique ID string that is stable across server and client.

**Explanation:**  
It is important for accessibility because HTML elements like label and input need matching id and htmlFor attributes. useId prevents ID collisions in SSR and hydration.

**Example:**
```jsx
const FormField = ({ label }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
};
```

---

### 50. Can hooks replace all class component use cases?

**Definition:**  
Hooks can replace almost all class component use cases, but not Error Boundaries.

**Explanation:**  
Error Boundaries still require class components because the componentDidCatch lifecycle method has no hook equivalent.

**Example 1 — Class Error Boundary:**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) return <p>Error occurred</p>;
    return this.props.children;
  }
}
```

---

### 51. What are the common React Hooks pitfalls in large teams?

**Definition:**  
Common pitfalls include stale closures, missing dependencies, infinite loops, and calling hooks conditionally.

**Explanation:**  
Stale closures happen when a callback captures an old state value. Missing dependencies cause effects to run with outdated data. Infinite loops occur when state updates inside useEffect trigger the effect again.

**Example 1 — Stale closure fix:**
```jsx
// Wrong: setInterval uses initial count forever
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, [count]); // Must include count or use functional update

// Correct:
useEffect(() => {
  const id = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(id);
}, []); // functional update doesn't need dependency
```

---

### 52. How do you build a custom hook? Give an example.

**Definition:**  
A custom hook is a JavaScript function that starts with "use" and can call other hooks.

**Explanation:**  
It lets you extract component logic into reusable functions.

**Example 1 — useFetch:**
```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

// Usage:
const { data, loading } = useFetch('/api/users');
```

**Example 2 — useLocalStorage:**
```jsx
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
```

---

## 4. Performance Optimization

---

### 53. What is React.memo, and when should you use it?

**Definition:**  
React.memo is a higher-order component that memoizes a functional component.

**Explanation:**  
It prevents re-renders if props haven't changed. Use it on pure functional components that receive the same props often.

**Example 1 — Basic:**
```jsx
const UserCard = React.memo(({ name }) => {
  console.log("rendered");
  return <div>{name}</div>;
});
```

**Example 2 — With custom comparison:**
```jsx
const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});
```

---

### 54. Why might React.memo not prevent a re-render even if props haven't changed?

**Definition:**  
React.memo does a shallow comparison of props. If props contain objects, arrays, or functions, new references cause re-renders.

**Explanation:**  
Even if the data is the same, a new object literal `{ name: "Tom" }` has a different reference. You must use useMemo for objects and useCallback for functions.

**Example 1 — Object prop breaking memo:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Add</button>
      {/* New object every render, breaks React.memo */}
      <Child user={{ name: "Tom" }} />
    </div>
  );
};

const Child = React.memo(({ user }) => <div>{user.name}</div>);
```

**Example 2 — Fixed with useMemo:**
```jsx
const user = useMemo(() => ({ name: "Tom" }), []);
return <Child user={user} />;
```

---

### 55. How would you memoize an expensive calculation in React?

**Definition:**  
Use useMemo to cache the result of an expensive calculation.

**Explanation:**  
It only recalculates when dependencies change.

**Example 1 — Sort:**
```jsx
const sorted = useMemo(() => {
  return [...items].sort((a, b) => a.price - b.price);
}, [items]);
```

**Example 2 — Filter + Map:**
```jsx
const processed = useMemo(() => {
  return items
    .filter(item => item.active)
    .map(item => ({ ...item, displayPrice: `$${item.price}` }));
}, [items]);
```

---

### 56. How would you memoize a component that accepts children?

**Definition:**  
React.memo breaks when children are passed because children create new references every render.

**Explanation:**  
You must also memoize the children or use useMemo for the child element.

**Example:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoize the child element
  const memoizedChild = useMemo(() => <ExpensiveChild />, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <MemoizedWrapper>{memoizedChild}</MemoizedWrapper>
    </div>
  );
};

const MemoizedWrapper = React.memo(({ children }) => {
  return <div>{children}</div>;
});
```

---

### 57. A component is re-rendering unnecessarily due to function and object references. How would you fix it?

**Definition:**  
New function and object references are created on every render, breaking React.memo.

**Explanation:**  
Use useCallback for functions and useMemo for objects/arrays.

**Example:**
```jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  const config = useMemo(() => ({
    color: "red",
    size: 20
  }), []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <Child onClick={handleClick} config={config} />
    </div>
  );
};

const Child = React.memo(({ onClick, config }) => {
  return <button style={{ color: config.color }} onClick={onClick}>Child</button>;
});
```

---

### 58. What is code-splitting in React, and how do you implement it?

**Definition:**  
Code-splitting breaks your bundle into smaller chunks that are loaded on demand.

**Explanation:**  
This reduces the initial load time. Use dynamic imports with React.lazy and Suspense.

**Example 1 — Route-based splitting:**
```jsx
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Dashboard />
  </Suspense>
);
```

**Example 2 — Component-based:**
```jsx
const HeavyChart = lazy(() => import('./HeavyChart'));

const Report = () => {
  const [showChart, setShowChart] = useState(false);
  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && (
        <Suspense fallback={<p>Loading chart...</p>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
};
```

---

### 59. What are React.lazy and Suspense? How do they work together?

**Definition:**  
React.lazy lets you render a dynamic import as a regular component. Suspense shows a fallback while the lazy component loads.

**Explanation:**  
They work together to enable code-splitting. Suspense handles the loading state, and React.lazy handles the dynamic import.

**Example:**
```jsx
const AdminPanel = lazy(() => import('./AdminPanel'));

const App = () => (
  <Suspense fallback={<div>Loading admin...</div>}>
    <AdminPanel />
  </Suspense>
);
```

---

### 60. How does windowing/virtualization improve performance in large lists?

**Definition:**  
Windowing only renders the items visible in the viewport plus a small buffer.

**Explanation:**  
Instead of rendering 10,000 DOM nodes, you render only 20. This dramatically reduces memory and CPU usage.

**Example:**
```jsx
// Using react-window
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Item {index}</div>
);

<FixedSizeList height={500} itemCount={10000} itemSize={35} width="100%">
  {Row}
</FixedSizeList>
```

---

### 61. What is the difference between throttling and debouncing in React? Give use cases.

**Definition:**  
Throttling limits execution to once per time period. Debouncing delays execution until after a pause in events.

**Explanation:**  
Use throttling for scroll/resize events. Use debouncing for search input.

**Example 1 — Debounced search:**
```jsx
const [query, setQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);
  return () => clearTimeout(timer);
}, [query]);
```

**Example 2 — Throttled scroll:**
```jsx
useEffect(() => {
  let last = 0;
  const handleScroll = () => {
    const now = Date.now();
    if (now - last > 200) {
      console.log("Scroll position:", window.scrollY);
      last = now;
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### 62. How do you detect unnecessary re-renders in a React app?

**Definition:**  
Use React DevTools Profiler, console logs, or why-did-you-render library.

**Explanation:**  
The Profiler shows which components rendered and why. why-did-you-render patches React to notify you about avoidable re-renders.

**Example — why-did-you-render:**
```jsx
import whyDidYouRender from '@welldone-software/why-did-you-render';
whyDidYouRender(React);

const Child = () => <div>Child</div>;
Child.whyDidYouRender = true;
```

---

### 63. How would you avoid re-renders in deeply nested components?

**Definition:**  
Use state colocation, Context splitting, or state management libraries.

**Explanation:**  
Move state down to the lowest common ancestor. Split context into multiple providers so consumers only re-render for relevant changes.

**Example — Context splitting:**
```jsx
const ThemeContext = createContext();
const UserContext = createContext();

// Instead of one big context, split them
// Components using ThemeContext won't re-render when UserContext changes
```

---

### 64. What is tree shaking, and how does it affect React apps?

**Definition:**  
Tree shaking is a build optimization that removes dead code.

**Explanation:**  
If you import a whole library but only use one function, tree shaking removes the unused parts. This reduces bundle size.

**Example:**
```jsx
// Good — only import what you need (tree-shakeable)
import { Button } from '@mui/material';

// Bad — imports entire library
import * as Mui from '@mui/material';
```

---

### 65. How do you optimize a large React application with frequent state updates?

**Definition:**  
Use multiple techniques: memoization, state colocation, virtualization, and state management libraries.

**Explanation:**  
Keep state close to where it is used. Use Zustand or Jotai for atomic state updates. Virtualize long lists.

**Example — Atomic state with Zustand:**
```jsx
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));

// Only components using 'count' re-render
const Counter = () => {
  const count = useStore(state => state.count);
  return <div>{count}</div>;
};
```

---

### 66. What is state colocation, and how does it improve performance?

**Definition:**  
State colocation means placing state as close as possible to the components that use it.

**Explanation:**  
If only a leaf component needs the state, keep it there. Do not lift it to the top unnecessarily. This prevents parent and sibling re-renders.

**Example:**
```jsx
// Bad — lifting state too high causes unnecessary re-renders
const App = () => {
  const [isOpen, setIsOpen] = useState(false); // only Modal needs this
  return (
    <div>
      <Header />
      <Sidebar />
      <Modal isOpen={isOpen} /> {/* Only Modal uses this */}
    </div>
  );
};

// Good — state inside Modal
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? <div>Modal</div> : null;
};
```

---

### 67. How would you reduce the bundle size of a React application?

**Definition:**  
Reduce the amount of JavaScript shipped to the browser.

**Explanation:**  
Use code-splitting, tree shaking, smaller libraries, and compress assets. Analyze with webpack-bundle-analyzer.

**Example:**
```jsx
// Dynamic import (code-splitting)
const Heavy = lazy(() => import('./Heavy'));

// Replace moment.js with date-fns (smaller)
import { format } from 'date-fns';
```

---

### 68. What is the role of React's internal Fiber architecture in performance?

**Definition:**  
Fiber is React's reconciliation engine that breaks rendering work into small units.

**Explanation:**  
It can pause, abort, or reuse work based on priority. This keeps the app responsive during heavy updates.

**Example:**
```jsx
// Fiber enables concurrent features
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearchQuery(input); // low priority, can be interrupted
});
```

---

## 5. State Management & Data Flow

---

### 69. What is the Context API? When should you use it vs. Redux/Zustand?

**Definition:**  
Context API provides a way to share data through the component tree without prop drilling.

**Explanation:**  
Use Context for low-frequency updates like theme, locale, or auth. Use Redux/Zustand for high-frequency updates or complex logic.

**Example 1 — Theme Context:**
```jsx
const ThemeContext = createContext('light');
const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);
```

**Example 2 — Zustand for frequent updates:**
```jsx
const useStore = create((set) => ({
  items: [],
  addItem: (item) => set(state => ({ items: [...state.items, item] }))
}));
```

---

### 70. What are the limitations of the Context API?

**Definition:**  
All consumers re-render when the context value changes, even if they only use part of the value.

**Explanation:**  
This causes performance issues with frequent updates. Split contexts or use atomic state libraries.

**Example — Splitting contexts:**
```jsx
const ThemeContext = createContext();
const UserContext = createContext();
// Separate providers prevent cross-cutting re-renders
```

---

### 71. Can React Hooks replace Redux?

**Definition:**  
Hooks can replace Redux for simple to medium apps. For complex global state with middleware, Redux is still useful.

**Explanation:**  
useState + useContext can manage global state, but Context has performance issues. Zustand or Jotai are lightweight alternatives.

**Example — Hooks + Context (simple global state):**
```jsx
const CountContext = createContext();
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
```

---

### 72. What is the difference between Context and Redux for state sharing?

**Definition:**  
Context is built-in and simple. Redux is a library with predictable state updates via actions and reducers.

**Explanation:**  
Context is good for dependency injection. Redux is good for complex state logic, time-travel debugging, and middleware.

**Example — Redux reducer:**
```jsx
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    default: return state;
  }
};
```

---

### 73. How do you manage global state in 2026?

**Definition:**  
Modern options include Zustand, Jotai, TanStack Query, and Redux Toolkit.

**Explanation:**  
Zustand is simple and unopinionated. Jotai uses atomic state. TanStack Query handles server state. Redux Toolkit is for complex apps.

**Example — Zustand:**
```jsx
const useStore = create((set) => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 }))
}));
```

---

### 74. How would you handle shared state across micro-frontends?

**Definition:**  
Use Module Federation with shared dependencies or a shared event bus.

**Explanation:**  
Each micro-frontend can share a state library instance or communicate via custom events.

**Example — Custom event bus:**
```jsx
window.dispatchEvent(new CustomEvent('auth-change', { detail: { user } }));
window.addEventListener('auth-change', (e) => console.log(e.detail));
```

---

### 75. How do you ensure state isolation and component predictability?

**Definition:**  
Keep state local when possible. Use pure functions for updates. Avoid mutating state directly.

**Explanation:**  
Predictable state means the same input always produces the same output. Use immutable updates and single source of truth.

**Example:**
```jsx
// Pure reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
```

---

### 76. How would you implement undo/redo functionality in React?

**Definition:**  
Maintain a history stack of past states.

**Explanation:**  
Use useReducer or a state machine. Keep an array of past states and an index pointer.

**Example:**
```jsx
const [history, setHistory] = useState([initialState]);
const [index, setIndex] = useState(0);

const setState = (newState) => {
  const newHistory = history.slice(0, index + 1);
  newHistory.push(newState);
  setHistory(newHistory);
  setIndex(newHistory.length - 1);
};

const undo = () => setIndex(Math.max(0, index - 1));
const redo = () => setIndex(Math.min(history.length - 1, index + 1));

const currentState = history[index];
```

---

### 77. How do you manage form state with complex validation and dynamic fields?

**Definition:**  
Use libraries like React Hook Form, Formik, or useReducer for complex forms.

**Explanation:**  
React Hook Form uses uncontrolled components and refs for performance. Formik handles validation schemas.

**Example — React Hook Form:**
```jsx
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.email && <p>Email required</p>}
    </form>
  );
};
```

---

### 78. What is the difference between useState and useReducer for form handling?

**Definition:**  
useState is simpler for basic forms. useReducer is better for forms with many fields and complex validation logic.

**Explanation:**  
useReducer centralizes logic in one place, making it easier to test and debug.

**Example — useReducer form:**
```jsx
const [state, dispatch] = useReducer(formReducer, { fields: {}, errors: {} });

dispatch({ type: 'SET_FIELD', field: 'name', value: 'Tom' });
dispatch({ type: 'VALIDATE' });
```

---

## 6. Routing & Navigation

---

### 79. What is React Router, and what are its major components?

**Definition:**  
React Router is a library for handling navigation in React apps.

**Explanation:**  
Major components: BrowserRouter, Routes, Route, Link, useNavigate, and Outlet.

**Example:**
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

### 80. What is the difference between `<Link>` and `<a>` tag in React?

**Definition:**  
Link performs client-side navigation without reloading the page. `<a>` triggers a full page reload.

**Explanation:**  
Use Link for internal navigation. Use `<a>` for external links.

**Example:**
```jsx
import { Link } from 'react-router-dom';

<Link to="/dashboard">Dashboard</Link> {/* Client-side */}
<a href="https://google.com">Google</a> {/* Full reload */}
```

---

### 81. How do you handle nested routes in React Router v6?

**Definition:**  
Use nested Route components and the Outlet component.

**Explanation:**  
Outlet renders the child route's element inside the parent layout.

**Example:**
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>

// Layout.js
import { Outlet } from 'react-router-dom';
const Layout = () => (
  <div>
    <Header />
    <Outlet /> {/* Child routes render here */}
    <Footer />
  </div>
);
```

---

### 82. How do you perform programmatic navigation?

**Definition:**  
Use the useNavigate hook.

**Explanation:**  
It returns a function that lets you navigate programmatically.

**Example:**
```jsx
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard');
  };
  return <button onClick={handleLogin}>Login</button>;
};
```

---

### 83. How do you protect routes (Private/Public routes) in React?

**Definition:**  
Create a wrapper component that checks authentication before rendering the route.

**Explanation:**  
Redirect unauthenticated users to the login page.

**Example:**
```jsx
const PrivateRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
};

<Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />
```

---

### 84. How do you pass state through navigation in React Router?

**Definition:**  
Use the state prop of the Link component or navigate function.

**Explanation:**  
The state is available in the destination component via useLocation.

**Example:**
```jsx
// Sending
navigate('/dashboard', { state: { from: 'login' } });

// Receiving
const location = useLocation();
console.log(location.state?.from); // 'login'
```

---

### 85. How would you create a 404 / Not Found page in React?

**Definition:**  
Use a catch-all route with path="*".

**Explanation:**  
It matches any URL that doesn't match other routes.

**Example:**
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 7. Data Fetching & Side Effects

---

### 86. How do you fetch data in React? Compare useEffect + fetch vs. React Query / SWR.

**Definition:**  
useEffect + fetch is manual. React Query and SWR are libraries that handle caching, deduping, and background updates.

**Explanation:**  
React Query provides automatic refetching, stale-while-revalidate, and optimistic updates. Manual fetch requires you to handle loading, error, and caching yourself.

**Example 1 — Manual fetch:**
```jsx
useEffect(() => {
  setLoading(true);
  fetch('/api/data')
    .then(r => r.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);
```

**Example 2 — React Query:**
```jsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then(r => r.json())
});
```

---

### 87. How would you cancel a fetch request in a component to avoid memory leaks?

**Definition:**  
Use AbortController to cancel fetch requests when the component unmounts.

**Explanation:**  
Pass the AbortController signal to fetch. Call abort() in the cleanup function.

**Example:**
```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(setData)
    .catch(err => {
      if (err.name === 'AbortError') return;
      setError(err);
    });

  return () => controller.abort();
}, []);
```

---

### 88. How do you handle loading, error, and success states while fetching data?

**Definition:**  
Use a state machine pattern with useReducer or separate boolean flags.

**Explanation:**  
Track isLoading, error, and data separately. Show UI based on these states.

**Example:**
```jsx
const [state, setState] = useState({
  data: null,
  loading: true,
  error: null
});

useEffect(() => {
  fetch('/api/data')
    .then(r => r.json())
    .then(data => setState({ data, loading: false, error: null }))
    .catch(error => setState({ data: null, loading: false, error }));
}, []);

if (state.loading) return <p>Loading...</p>;
if (state.error) return <p>Error: {state.error.message}</p>;
return <div>{state.data}</div>;
```

---

### 89. How do you call a method when a component is rendered for the first time?

**Definition:**  
Use useEffect with an empty dependency array.

**Explanation:**  
This runs once after the initial render.

**Example:**
```jsx
useEffect(() => {
  fetchData();
}, []); // empty deps = run once on mount
```

---

### 90. How do you call a method on every re-render of a component?

**Definition:**  
Use useEffect with no dependency array, or call the function directly in the component body.

**Explanation:**  
Calling directly in the body runs on every render but before paint. useEffect runs after paint.

**Example:**
```jsx
// Runs every render (before paint)
console.log('Rendering');

// Runs every render (after paint)
useEffect(() => {
  console.log('Rendered');
});
```

---

### 91. What is the best way to handle form submissions in React 19?

**Definition:**  
React 19 introduces Actions and useActionState for form handling.

**Explanation:**  
Actions let you handle form submissions with automatic pending states and optimistic updates.

**Example:**
```jsx
const [error, submitAction, isPending] = useActionState(async (prev, formData) => {
  const name = formData.get('name');
  await saveName(name);
  return null;
}, null);

<form action={submitAction}>
  <input name="name" />
  <button disabled={isPending}>Save</button>
  {error && <p>{error}</p>}
</form>
```

---

### 92. What is useOptimistic, and how does it improve UX?

**Definition:**  
useOptimistic lets you show the final state optimistically while the async action is pending.

**Explanation:**  
It makes the UI feel instant. If the action fails, it rolls back automatically.

**Example:**
```jsx
const [optimisticState, addOptimistic] = useOptimistic(
  state,
  (currentState, newItem) => [...currentState, newItem]
);

const sendMessage = async (formData) => {
  const message = formData.get('message');
  addOptimistic(message);
  await api.sendMessage(message);
};
```

---

### 93. How do you make components resilient to frequent data updates?

**Definition:**  
Use debouncing, throttling, or state management libraries that batch updates.

**Explanation:**  
Prevent the UI from thrashing by limiting update frequency.

**Example:**
```jsx
const [query, setQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => fetchData(query), 300);
  return () => clearTimeout(timer);
}, [query]);
```

---

### 94. How would you handle real-time updates (e.g., stock prices, chat) in React?

**Definition:**  
Use WebSockets, Server-Sent Events (SSE), or polling with useEffect.

**Explanation:**  
WebSockets provide bidirectional communication. SSE is simpler for server-to-client pushes.

**Example — WebSocket:**
```jsx
useEffect(() => {
  const ws = new WebSocket('wss://api.example.com');
  ws.onmessage = (event) => {
    setPrice(JSON.parse(event.data));
  };
  return () => ws.close();
}, []);
```

---

## 8. Advanced Patterns & Architecture

---

### 95. Explain the difference between the render phase and the commit phase in React.

**Definition:**  
Render phase is where React calls components and diffs the Virtual DOM. Commit phase is where React updates the real DOM.

**Explanation:**  
Render can be paused or aborted. Commit must run completely and synchronously.

**Example:**
```jsx
// Render phase: React calls your component
const App = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};

// Commit phase: React updates the DOM
// useEffect and useLayoutEffect run after commit
```

---

### 96. What are React Server Components (RSC)? How do they differ from traditional components?

**Definition:**  
RSCs run only on the server and never ship JavaScript to the browser.

**Explanation:**  
They can access databases directly. They cannot use hooks like useState or useEffect. They reduce bundle size.

**Example:**
```jsx
async function ProductList() {
  const products = await db.products.findAll();
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

---

### 97. What is hydration? What causes a hydration mismatch, and how do you fix it?

**Definition:**  
Hydration is the process where React attaches event listeners to server-rendered HTML.

**Explanation:**  
A mismatch occurs when the server HTML differs from the client render. Causes: using window/date during render, random values, or browser-only APIs. Fix: use useEffect for browser-only logic or suppressHydrationWarning.

**Example — Fix with useEffect:**
```jsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

// Only render browser-specific content after mount
return <div>{mounted ? window.innerWidth : null}</div>;
```

---

### 98. What is concurrent rendering in React 18/19? Why does it matter?

**Definition:**  
Concurrent rendering allows React to interrupt rendering work to handle more urgent updates.

**Explanation:**  
It keeps the UI responsive during heavy renders. It enables features like useTransition and Suspense.

**Example:**
```jsx
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearchQuery(input); // low priority, can be interrupted
});
```

---

### 99. What is useTransition, and how does it keep the UI responsive?

**Definition:**  
useTransition lets you mark state updates as non-urgent.

**Explanation:**  
Urgent updates like typing take priority. The transition update happens in the background.

**Example:**
```jsx
const [isPending, startTransition] = useTransition();
const [query, setQuery] = useState("");

const handleChange = (e) => {
  setQuery(e.target.value); // urgent
  startTransition(() => {
    setSearchResults(filterHugeList(e.target.value)); // non-urgent
  });
};
```

---

### 100. What is useDeferredValue? When would you use it?

**Definition:**  
useDeferredValue lets you defer re-rendering of a non-urgent part of the UI.

**Explanation:**  
Use it when a value is slow to render but you want to keep the input responsive.

**Example:**
```jsx
const [text, setText] = useState("");
const deferredText = useDeferredValue(text);

// Input updates immediately
<input value={text} onChange={e => setText(e.target.value)} />

// Slow list uses deferred value
<SlowList text={deferredText} />
```

---

### 101. What are Error Boundaries, and how do you implement them?

**Definition:**  
Error Boundaries catch JavaScript errors in child components and display a fallback UI.

**Explanation:**  
They must be class components because there is no hook equivalent for componentDidCatch.

**Example:**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>
```

---

### 102. How do you handle cross-tab synchronization in a React app?

**Definition:**  
Use the StorageEvent or BroadcastChannel API.

**Explanation:**  
Listen for storage changes to sync state across browser tabs.

**Example:**
```jsx
useEffect(() => {
  const handleStorage = (e) => {
    if (e.key === 'app-state') {
      setState(JSON.parse(e.newValue));
    }
  };
  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}, []);
```

---

### 103. How would you create a plugin architecture in React?

**Definition:**  
Use a registry pattern where plugins register themselves via a context or prop interface.

**Explanation:**  
Define a standard interface. Plugins implement this interface and register at runtime.

**Example:**
```jsx
const PluginContext = createContext([]);

const PluginProvider = ({ children }) => {
  const [plugins, setPlugins] = useState([]);
  const register = (plugin) => setPlugins(p => [...p, plugin]);
  return (
    <PluginContext.Provider value={{ plugins, register }}>
      {children}
    </PluginContext.Provider>
  );
};
```

---

### 104. How do you integrate Web Workers in a React app for heavy computations?

**Definition:**  
Web Workers run JavaScript in a background thread.

**Explanation:**  
Use them for heavy calculations to avoid blocking the main thread.

**Example:**
```jsx
useEffect(() => {
  const worker = new Worker(new URL('./worker.js', import.meta.url));
  worker.postMessage({ data: hugeArray });
  worker.onmessage = (e) => setResult(e.data);
  return () => worker.terminate();
}, []);
```

---

### 105. How would you migrate a legacy class-based app to hooks?

**Definition:**  
Replace class components with functional components incrementally.

**Explanation:**  
Convert lifecycle methods to useEffect. Convert state to useState. Use custom hooks for shared logic.

**Example — Class to Function:**
```jsx
// Before
class User extends Component {
  state = { user: null };
  componentDidMount() { fetchUser().then(user => this.setState({ user })); }
  render() { return <div>{this.state.user?.name}</div>; }
}

// After
const User = () => {
  const [user, setUser] = useState(null);
  useEffect(() => { fetchUser().then(setUser); }, []);
  return <div>{user?.name}</div>;
};
```

---

### 106. How does Module Federation work in React micro-frontends?

**Definition:**  
Module Federation is a webpack feature that lets multiple builds share modules at runtime.

**Explanation:**  
Each micro-frontend can expose and consume components from other builds.

**Example:**
```jsx
// Host app
const RemoteButton = lazy(() => import('remoteApp/Button'));

<Suspense fallback="Loading...">
  <RemoteButton />
</Suspense>
```

---

### 107. What is the difference between component composition vs. inheritance in React?

**Definition:**  
Composition combines components by nesting them. Inheritance extends a base class.

**Explanation:**  
React recommends composition over inheritance. Use props and children to share behavior.

**Example — Composition:**
```jsx
const Dialog = ({ children, title }) => (
  <div className="dialog">
    <h1>{title}</h1>
    {children}
  </div>
);

<Dialog title="Warning">
  <p>Are you sure?</p>
  <button>Yes</button>
</Dialog>
```

---

## 9. Scenario-Based / Real-World Questions

---

### 108. You are building a large-scale dashboard where frequent state updates are causing UI lag. How would you optimize rendering?

**Answer:**  
Use React.memo on pure components. Use useMemo for expensive calculations. Use useCallback for stable function references. Split context into multiple providers. Use useTransition for non-urgent updates. Virtualize long lists with react-window.

**Example:**
```jsx
const Widget = React.memo(({ data }) => {
  const processed = useMemo(() => heavyCalc(data), [data]);
  return <div>{processed}</div>;
});
```

---

### 109. Your application has deeply nested components and prop drilling is becoming unmanageable. What approach would you take?

**Answer:**  
Use React Context for theme/auth. Use Zustand or Jotai for global state. Use component composition to pass elements instead of data. Keep state colocated when possible.

**Example:**
```jsx
// Composition instead of drilling
const App = () => {
  const header = <Header user={user} />;
  return <Layout header={header} />;
};
```

---

### 110. You need to fetch and display data efficiently while keeping the UI responsive. How would you design this?

**Answer:**  
Use TanStack Query for caching and background updates. Use Suspense for loading states. Use useTransition for low-priority data. Implement pagination or infinite scroll.

**Example:**
```jsx
const { data, fetchNextPage } = useInfiniteQuery({
  queryKey: ['items'],
  queryFn: ({ pageParam }) => fetchItems(pageParam),
  getNextPageParam: (last) => last.nextCursor
});
```

---

### 111. Your React application has a large bundle size, affecting load time. How would you reduce it?

**Answer:**  
Implement code-splitting with React.lazy. Use tree shaking by importing only needed modules. Replace heavy libraries with lighter alternatives. Compress images and enable gzip on the server.

**Example:**
```jsx
const HeavyChart = lazy(() => import('./HeavyChart'));
// Replace moment with date-fns
import { format } from 'date-fns';
```

---

### 112. You need to render thousands of items without affecting performance. What approach would you take?

**Answer:**  
Use virtualization with react-window or react-virtualized. Only render visible items.

**Example:**
```jsx
import { FixedSizeList } from 'react-window';
<FixedSizeList height={500} itemCount={10000} itemSize={50} width="100%">
  {({ index, style }) => <div style={style}>Item {index}</div>}
</FixedSizeList>
```

---

### 113. Your application crashes due to unexpected runtime errors in production. How would you handle it?

**Answer:**  
Implement Error Boundaries to catch errors and show fallback UI. Use a logging service like Sentry. Add retry logic for network requests.

**Example:**
```jsx
<ErrorBoundary fallback={<p>Error occurred</p>}>
  <RiskyComponent />
</ErrorBoundary>
```

---

### 114. You are handling a form with complex validation, dynamic fields, and performance issues. What solution would you use?

**Answer:**  
Use React Hook Form for performance (uses refs, not controlled inputs). Use useFieldArray for dynamic fields. Use Zod or Yup for schema validation.

**Example:**
```jsx
import { useForm, useFieldArray } from 'react-hook-form';

const { control, register } = useForm();
const { fields, append } = useFieldArray({ control, name: 'items' });

fields.map((field, index) => (
  <input key={field.id} {...register(`items.${index}.name`)} />
));
```

---

### 115. You are designing a scalable React application for a large team. What architectural decisions would you make?

**Answer:**  
Use a component library for consistency. Implement strict TypeScript. Use feature-based folder structure. Implement module federation for micro-frontends. Use a state management library with clear patterns.

**Example folder structure:**
```
src/
  features/
    auth/
      api/
      components/
      hooks/
      store/
    dashboard/
      ...
  shared/
    components/
    utils/
```

---

### 116. A new team member consistently pushes code that breaks existing UI. What would you do?

**Answer:**  
Implement visual regression testing with Chromatic or Storybook. Add strict ESLint and Prettier rules. Require code reviews. Add integration tests with React Testing Library.

---

### 117. Tell us about a time you had to debug a complex React issue in production.

**Answer Structure:**  
Describe using React DevTools to inspect component hierarchy. Check the Profiler for slow renders. Use source maps to trace minified errors. Add Error Boundaries to isolate the issue. Reproduce locally with production data.

---

### 118. Describe a project where you implemented reusable UI components in React.

**Answer Structure:**  
Mention using a design system. Creating atomic components (Button, Input, Card). Using composition patterns. Documenting with Storybook. Ensuring accessibility with aria props.

---

### 119. What would you do when a deadline is tight and you're not confident the feature is bug-free?

**Answer:**  
Implement feature flags to hide incomplete work. Write unit tests for critical paths. Add Error Boundaries. Communicate risks to stakeholders. Ship an MVP version first.

---

## 10. Coding / Implementation Questions

---

### 120. Build a counter component that supports increment and decrement.

**Example:**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
};
```

---

### 121. Create a toggle button that changes color when clicked.

**Example:**
```jsx
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button 
      style={{ backgroundColor: isOn ? 'green' : 'red' }}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};
```

---

### 122. Build a search textbox filter that filters a list of items.

**Example:**
```jsx
const SearchFilter = ({ items }) => {
  const [query, setQuery] = useState("");
  const filtered = items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      <ul>{filtered.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
};
```

---

### 123. How do you display dynamic HTML data fetched from an API?

**Example:**
```jsx
// Dangerous — only use if you trust the source
const HtmlContent = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// Safe — sanitize first with DOMPurify
import DOMPurify from 'dompurify';
const SafeHtml = ({ html }) => {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};
```

---

### 124. How do you loop over an array and an array of objects in React?

**Example 1 — Array of strings:**
```jsx
const names = ["Tom", "Jerry", "Spike"];
<ul>{names.map((name, index) => <li key={index}>{name}</li>)}</ul>
```

**Example 2 — Array of objects:**
```jsx
const users = [{ id: 1, name: "Tom" }, { id: 2, name: "Jerry" }];
<ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
```

---

### 125. How do you add data into a useState array in a functional component?

**Example:**
```jsx
const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  setTodos(prev => [...prev, { id: Date.now(), text }]);
};

const removeTodo = (id) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};
```

---

### 126. How do you display keys and values of an object in a loop?

**Example:**
```jsx
const user = { name: "Tom", age: 25, city: "NY" };

<ul>
  {Object.entries(user).map(([key, value]) => (
    <li key={key}>{key}: {value}</li>
  ))}
</ul>
```

---

### 127. How do you change styles based on a condition in React?

**Example:**
```jsx
const Alert = ({ type }) => {
  const styles = {
    padding: '10px',
    color: type === 'error' ? 'red' : type === 'success' ? 'green' : 'blue'
  };
  return <div style={styles}>Message</div>;
};
```

---

### 128. How do you lazy load a component in React? Write the code.

**Example:**
```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
);
```

---

### 129. Build a custom hook for fetching data with loading and error states.

**Example:**
```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
```

---

### 130. Build a custom hook that listens to window resize.

**Example:**
```jsx
const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
```

---

### 131. Implement an Autocomplete / Typeahead component.

**Example:**
```jsx
const Autocomplete = ({ suggestions }) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const filtered = suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 200)}
      />
      {show && filtered.length > 0 && (
        <ul>
          {filtered.map((item, i) => (
            <li key={i} onClick={() => { setQuery(item); setShow(false); }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

---

### 132. Build a Pagination component.

**Example:**
```jsx
const Pagination = ({ total, pageSize, currentPage, onPageChange }) => {
  const pages = Math.ceil(total / pageSize);

  return (
    <div>
      {Array.from({ length: pages }, (_, i) => i + 1).map(page => (
        <button 
          key={page}
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
```

---

### 133. Build a Modal/Dialog component with focus trapping and accessibility.

**Example:**
```jsx
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
      const handleKey = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" ref={modalRef} tabIndex={-1}>
      <button onClick={onClose} aria-label="Close">X</button>
      {children}
    </div>
  );
};
```

---

### 134. Implement a Drag and Drop file upload component.

**Example:**
```jsx
const FileUpload = ({ onUpload }) => {
  const [drag, setDrag] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const files = Array.from(e.dataTransfer.files);
    onUpload(files);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={handleDrop}
      style={{ border: drag ? '2px dashed blue' : '2px dashed gray', padding: '20px' }}
    >
      Drop files here
    </div>
  );
};
```

---

### 135. Build an Infinite Scroll list.

**Example:**
```jsx
const InfiniteList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetchItems(page).then(newItems => {
      setItems(prev => [...prev, ...newItems]);
    });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(p => p + 1);
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map(item => <div key={item.id}>{item.name}</div>)}
      <div ref={loaderRef}>Loading more...</div>
    </div>
  );
};
```

---

## 11. Testing, Debugging & Accessibility

---

### 136. How do you test components that use useEffect for data fetching?

**Example:**
```jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Tom' }])
  })
);

test('loads and displays users', async () => {
  render(<UserList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Tom')).toBeInTheDocument();
  });
});
```

---

### 137. What is the difference between unit, integration, and E2E testing in React?

**Definition:**  
Unit tests test individual functions/components. Integration tests test how components work together. E2E tests test the full user flow in a real browser.

**Example:**
```jsx
// Unit: testing a single function
expect(add(2, 2)).toBe(4);

// Integration: testing form submission
render(<LoginForm />);
fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
fireEvent.click(screen.getByText(/submit/i));
await waitFor(() => expect(screen.getByText(/welcome/i)).toBeInTheDocument());

// E2E: using Cypress or Playwright
cy.visit('/login');
cy.get('input[name="email"]').type('test@test.com');
cy.get('button[type="submit"]').click();
cy.contains('Welcome').should('be.visible');
```

---

### 138. How do you mock API calls in React tests?

**Example:**
```jsx
// Using jest.mock
jest.mock('../api', () => ({
  fetchUser: jest.fn(() => Promise.resolve({ name: 'Tom' }))
}));

// Using MSW (Mock Service Worker)
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json({ name: 'Tom' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

---

### 139. What tools do you use to debug a React app in production?

**Answer:**  
React DevTools for component inspection. Sentry for error tracking. LogRocket or Datadog for session replay. Chrome DevTools Performance tab for profiling.

---

### 140. How do you detect and fix a memory leak in a React component?

**Answer:**  
Common causes: uncleared timers, unsubscribed event listeners, uncleared subscriptions. Fix: return cleanup functions from useEffect.

**Example:**
```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  const subscription = api.subscribe();

  return () => {
    clearInterval(timer); // cleanup timer
    subscription.unsubscribe(); // cleanup subscription
  };
}, []);
```

---

### 141. How do you ensure accessibility (a11y) in React apps?

**Answer:**  
Use semantic HTML. Add aria labels. Ensure keyboard navigation. Use focus management. Test with screen readers.

**Example:**
```jsx
<button aria-label="Close dialog" onClick={onClose}>X</button>
<img src="photo.jpg" alt="User profile photo" />
<div role="alert" aria-live="assertive">{errorMessage}</div>
```

---

### 142. What is the purpose of aria-* attributes and semantic HTML in React?

**Definition:**  
ARIA attributes provide extra information to assistive technologies. Semantic HTML gives meaning to the structure.

**Example:**
```jsx
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<form aria-describedby="form-error">
  <input aria-invalid={hasError} aria-describedby="form-error" />
  <span id="form-error" role="alert">{error}</span>
</form>
```

---

### 143. How do you test for keyboard navigation and screen reader compatibility?

**Answer:**  
Use React Testing Library (focuses on a11y). Test tab order. Use axe-core for automated a11y checks. Manual testing with VoiceOver or NVDA.

**Example:**
```jsx
test('modal traps focus', () => {
  render(<Modal isOpen={true} />);
  const firstButton = screen.getByText('OK');
  firstButton.focus();
  userEvent.tab();
  expect(screen.getByText('Cancel')).toHaveFocus();
});
```

---

## 12. TypeScript with React

---

### 144. Does React Hook work with static typing? How?

**Answer:**  
Yes. TypeScript infers types from initial values. You can also pass generic types explicitly.

**Example:**
```tsx
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

---

### 145. How do you ensure type safety with dynamic props in React?

**Example:**
```tsx
type ButtonProps = {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ variant, size = 'md', onClick }: ButtonProps) => {
  return <button className={`${variant} ${size}`} onClick={onClick}>Click</button>;
};
```

---

### 146. How do you type useState, useEffect, and useRef in TypeScript?

**Example:**
```tsx
// useState
const [name, setName] = useState<string>("");

// useRef for DOM element
const inputRef = useRef<HTMLInputElement>(null);

// useRef for mutable value
const timerRef = useRef<number | null>(null);

// useEffect (no special typing needed, just dependency types)
useEffect(() => {
  // effect logic
}, [id]); // id should be typed in component props or state
```

---

### 147. What are discriminated unions, and how do you use them with React props?

**Definition:**  
Discriminated unions use a common literal property to distinguish between types.

**Example:**
```tsx
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: string };
type ErrorState = { status: 'error'; error: string };

type State = LoadingState | SuccessState | ErrorState;

const Status = ({ state }: { state: State }) => {
  if (state.status === 'loading') return <p>Loading...</p>;
  if (state.status === 'success') return <p>{state.data}</p>;
  return <p>Error: {state.error}</p>;
};
```

---

### 148. How do you type children in React components?

**Example:**
```tsx
import { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode; // accepts any valid JSX
};

const Card = ({ title, children }: CardProps) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);
```

---

### 149. Should you use TypeScript in React interviews?

**Answer:**  
Yes. Most modern positions expect it. It shows you can write maintainable, bug-free code.

---

## 13. React Ecosystem & Modern Trends

---

### 150. What is Next.js, and when would you use it over plain React?

**Definition:**  
Next.js is a React framework with built-in SSR, SSG, and file-system routing.

**Explanation:**  
Use it when you need SEO, fast initial load, or API routes. Plain React is fine for SPAs behind a login wall.

**Example:**
```jsx
// Next.js page with SSR
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}
```

---

### 151. What is the difference between SSR, SSG, and CSR?

**Definition:**  
SSR (Server-Side Rendering) renders on each request. SSG (Static Site Generation) renders at build time. CSR (Client-Side Rendering) renders in the browser.

**Example:**
```jsx
// SSR — fresh data every request
export async function getServerSideProps() { ... }

// SSG — built once, fast CDN delivery
export async function getStaticProps() { ... }

// CSR — plain React, data fetched in browser
useEffect(() => { fetchData(); }, []);
```

---

### 152. What is Suspense used for? How does it work with data fetching?

**Definition:**  
Suspense lets you display a fallback while a component is loading.

**Explanation:**  
In React 18+, Suspense works with data fetching libraries like TanStack Query and Relay.

**Example:**
```jsx
const Profile = () => {
  const user = useSuspenseQuery(userQuery); // throws promise if loading
  return <div>{user.name}</div>;
};

<Suspense fallback={<p>Loading profile...</p>}>
  <Profile />
</Suspense>
```

---

### 153. What is React 19 Compiler, and how does it change optimization?

**Definition:**  
The React Compiler (formerly React Forget) automatically memoizes components without manual useMemo or useCallback.

**Explanation:**  
It analyzes your code at build time and adds memoization automatically. Developers write less boilerplate.

---

### 154. How do you secure a React application?

**Answer:**  
Sanitize HTML to prevent XSS. Use HttpOnly cookies instead of localStorage for tokens. Validate all inputs. Use CSP headers.

**Example:**
```jsx
// Prevent XSS
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirtyHtml);

// Store token in HttpOnly cookie (server-side)
// Not accessible via JavaScript: document.cookie cannot read it
```

---

### 155. How would you handle SEO in a React application?

**Answer:**  
Use Next.js for SSR/SSG. Add react-helmet for meta tags in SPAs. Use semantic HTML. Add structured data JSON-LD.

**Example:**
```jsx
import { Helmet } from 'react-helmet';

const Page = () => (
  <div>
    <Helmet>
      <title>My Page Title</title>
      <meta name="description" content="Page description for SEO" />
    </Helmet>
    <h1>Content</h1>
  </div>
);
```

---

> **End of Document**  
> Total Questions Covered: 155  
> Best of luck with your React interviews!
