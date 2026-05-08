# ⚛️ React MCQ Practice — Rendering, Virtual DOM & Reconciliation

> A comprehensive set of multiple-choice questions to test your understanding of React's core concepts.

---

## Set 1: Advanced React Concepts

### Question 1
**What best describes what actually triggers a React re-render?**

- **A.** Any change in the real DOM
- **B.** Only changes in state or props (or parent re-render) 
- **C.** Only setState in class components
- **D.** Changes in Virtual DOM only

**Explanation:** React re-renders a component when its internal state changes, its props change, or its parent component re-renders. Changes in the real DOM do not trigger re-renders — React controls the DOM, not the other way around.

---

### Question 2
**What happens if you mutate state directly instead of using setState / setter function?**

- **A.** React detects mutation and still re-renders
- **B.** React throws an error automatically
- **C.** React may not re-render because reference comparison fails 
- **D.** Virtual DOM updates instantly without re-render

**Explanation:** React uses reference equality (`===`) to detect state changes. If you mutate state directly (e.g., `state.value = 5`), the reference stays the same, so React may not detect the change and skip the re-render. Always use the setter function to create a new reference.

---

### Question 3
**Why is React's diffing algorithm considered "heuristic"?**

- **A.** It compares every node deeply for accuracy
- **B.** It assumes two different types of elements will produce different trees 
- **C.** It uses machine learning to optimize updates
- **D.** It always re-renders entire DOM for safety

**Explanation:** React's diffing algorithm is O(n) rather than O(n³) because it makes two heuristic assumptions: (1) different element types produce different trees, and (2) keys hint at stable elements. It does not use machine learning or deep comparison of every node.

---

### Question 4
**Which statement is TRUE about React reconciliation behavior?**

- **A.** React always compares entire trees node-by-node
- **B.** React assumes elements of different types are completely different subtrees 
- **C.** React preserves state even if component type changes
- **D.** React skips reconciliation if keys are missing

**Explanation:** When React encounters elements of different types (e.g., `<div>` → `<span>`), it destroys the entire old subtree and builds a new one from scratch. State is not preserved across different component types.

---

### Question 5
**What is most likely to happen if a component's key changes between renders?**

- **A.** React keeps the same component instance
- **B.** React treats it as a new component and remounts it 
- **C.** React ignores the change
- **D.** Only props are updated, not state

**Explanation:** Keys are used to identify elements. If a key changes, React treats the element as a completely new component, unmounts the old one (destroying its state), and mounts the new one.

---

### Question 6
**Why does React batch multiple state updates together?**

- **A.** To reduce network calls
- **B.** To avoid unnecessary re-renders and improve performance 
- **C.** To update the Virtual DOM instantly
- **D.** To prevent JSX compilation errors

**Explanation:** React batches state updates within event handlers and other synchronous operations. This means multiple `setState` calls result in a single re-render, reducing unnecessary work and improving performance.

---

### Question 7
**What is the correct interpretation of "Virtual DOM is faster than real DOM"?**

- **A.** Virtual DOM operations are always faster in CPU time
- **B.** Virtual DOM reduces expensive real DOM manipulations 
- **C.** Virtual DOM eliminates DOM entirely
- **D.** Virtual DOM skips rendering process

**Explanation:** The Virtual DOM itself is not inherently "faster" — it's the strategy of minimizing real DOM operations (which are expensive) that makes React efficient. The Virtual DOM works alongside the real DOM, not as a replacement.

---

### Question 8
**What will happen if two components return identical Virtual DOM trees but different keys?**

- **A.** React treats them as identical and reuses nodes
- **B.** React always remounts both components
- **C.** React may treat them as different elements and recreate DOM nodes 
- **D.** React ignores keys when trees match

**Explanation:** Keys are part of the element's identity. Even if the tree structure and props are identical, different keys tell React these are different elements, potentially causing remounting instead of reuse.

---

### Question 9
**Which scenario causes unnecessary re-renders most often?**

- **A.** Using immutable state updates
- **B.** Passing stable props
- **C.** Creating new object/array props every render 
- **D.** Using keys correctly in lists

**Explanation:** Creating new objects or arrays inline during render (e.g., `<Child style={{ color: 'red' }} />`) creates a new reference every time, causing child components to re-render even if the value hasn't meaningfully changed. Use `useMemo` or pass stable references.

---

### Question 10
**What is TRUE about React element identity?**

- **A.** Two identical JSX elements always refer to the same object
- **B.** React elements are compared using deep equality
- **C.** Each render creates new React element objects 
- **D.** React caches all elements automatically

**Explanation:** Every time a component renders, new React element objects are created. React uses reference comparison during reconciliation, not deep equality. Elements are lightweight and cheap to create.

---

### Question 11
**Why does React prefer immutability in state updates?**

- **A.** It reduces JavaScript execution time
- **B.** It allows reference comparison for detecting changes 
- **C.** It prevents JSX compilation
- **D.** It eliminates the need for Virtual DOM

**Explanation:** Immutability ensures that when state changes, a new object reference is created. React can quickly detect changes using `===` reference comparison instead of expensive deep equality checks.

---

### Question 12
**What is the main risk of using index as key in a dynamic list with reordering?**

- **A.** It breaks JSX syntax
- **B.** React cannot render lists with index keys
- **C.** Component state may move between items incorrectly 
- **D.** Virtual DOM stops working

**Explanation:** When items reorder, their indices change. React may reuse components based on index, causing state to "stick" to the wrong item. Always use stable unique IDs as keys for dynamic lists.

---

## Set 2: Core React Fundamentals

### Question 1
**What is the primary purpose of the Virtual DOM in React?**

- **A.** To replace the browser DOM entirely
- **B.** To minimize direct DOM mutations by comparing UI states 
- **C.** To store application state permanently
- **D.** To render HTML on the server only

**Explanation:** The Virtual DOM acts as a lightweight representation of the UI. React compares the previous and current Virtual DOM to determine the minimal set of changes needed, reducing expensive real DOM operations.

---

### Question 2
**Which statement best describes React's reconciliation process?**

- **A.** It converts JSX into plain JavaScript
- **B.** It compares previous and next virtual trees to determine minimal updates 
- **C.** It batches network requests from components
- **D.** It synchronizes component state with localStorage

**Explanation:** Reconciliation is the process of comparing the old Virtual DOM tree with the new one to find differences. React then applies only those minimal changes to the real DOM.

---

### Question 3
**Why are keys important in lists rendered by React?**

- **A.** They improve CSS specificity
- **B.** They help React identify which items changed, added, or removed 
- **C.** They are required for JSX compilation
- **D.** They make state immutable

**Explanation:** Keys provide stable identity for list items. Without keys, React has to guess which items changed, leading to inefficient updates and potential bugs with stateful components.

---

### Question 4
**Which of the following is true about React rendering?**

- **A.** A component re-renders only when the DOM changes
- **B.** A re-render means React recalculates what the UI should look like 
- **C.** Re-rendering always destroys and recreates the entire DOM
- **D.** Re-rendering happens only when setState is called in class components

**Explanation:** Rendering is the process of calling the component function to generate React elements. It does not directly update the DOM — that happens later in the commit phase after reconciliation.

---

### Question 5
**What is one consequence of using array indices as keys in a dynamic list?**

- **A.** It always improves performance
- **B.** It can cause incorrect component reuse when items are reordered 
- **C.** It prevents React from rendering the list
- **D.** It forces React to use server-side rendering

**Explanation:** Array indices change when items are reordered, added, or removed. React may reuse components in the wrong positions, causing state to shift between items and leading to UI bugs.

---

### Question 6
**Which option best describes JSX?**

- **A.** A browser-native HTML extension
- **B.** A syntax extension that compiles to React element creation calls 
- **C.** A React-specific DOM API
- **D.** A templating engine that runs only on the server

**Explanation:** JSX is syntactic sugar for `React.createElement()`. It is not HTML, not native to browsers, and compiles to JavaScript function calls before execution.

---

### Question 7
**In React, what does a component's state represent?**

- **A.** Data that is shared globally across all components by default
- **B.** Immutable props passed from parent to child
- **C.** Data that can change over time and affect rendering 
- **D.** A cached copy of the Virtual DOM

**Explanation:** State is local, mutable data within a component. When state changes, React re-renders the component to reflect the new data in the UI.

---

### Question 8
**Why is direct DOM manipulation generally discouraged in React?**

- **A.** It is slower than all JavaScript operations
- **B.** It bypasses React's rendering and reconciliation model 
- **C.** It cannot be used with HTML elements
- **D.** It breaks JSX syntax

**Explanation:** Direct DOM manipulation creates a mismatch between React's Virtual DOM and the real DOM. React's single source of truth is the Virtual DOM + state. Manual DOM changes break this consistency.

---

### Question 9
**What is the most accurate description of a React element?**

- **A.** A live DOM node in the browser
- **B.** A plain JavaScript object describing what should appear on the screen 
- **C.** A class instance with lifecycle methods
- **D.** A function that mutates the DOM directly

**Explanation:** A React element is a lightweight JavaScript object (`{ type, props, key }`). It is not a real DOM node, not a component instance, and does not directly manipulate the DOM.

---

### Question 10
**What does React usually do when a component's state changes?**

- **A.** It updates only the changed text node without any comparison
- **B.** It re-runs the component function or render method and reconciles the result 
- **C.** It reloads the entire page
- **D.** It skips rendering and mutates the DOM manually

**Explanation:** When state changes, React re-runs the component to generate a new element tree, performs reconciliation (diffing), and then applies minimal updates to the real DOM.

---

### Question 11
**Which of the following best explains why React can be efficient even though it re-renders components often?**

- **A.** It avoids using JavaScript
- **B.** It performs diffing and applies only necessary DOM updates 
- **C.** It always renders in a Web Worker
- **D.** It stores every DOM node in memory permanently

**Explanation:** React's efficiency comes from the Virtual DOM + diffing strategy. Re-renders are cheap (in-memory calculations), and only the minimal necessary changes are applied to the expensive real DOM.

---

### Question 12
**What is the main role of props in React?**

- **A.** To hold mutable local component state
- **B.** To pass data from parent to child components 
- **C.** To replace event handlers
- **D.** To store DOM references automatically

**Explanation:** Props are the mechanism for passing data and callbacks from parent components to child components. They are read-only in the child and enable component composition and communication.

---

## 📊 Answer Key

### Set 1 (Advanced)
| Q | Answer |
|---|--------|
| 1 | B |
| 2 | C |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | B |
| 7 | B |
| 8 | C |
| 9 | C |
| 10 | C |
| 11 | B |
| 12 | C |

### Set 2 (Fundamentals)
| Q | Answer |
|---|--------|
| 1 | B |
| 2 | B |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | B |
| 7 | C |
| 8 | B |
| 9 | B |
| 10 | B |
| 11 | B |
| 12 | C |

---

> 💡 **Study Tip:** Focus on understanding *why* each answer is correct rather than memorizing answers. The concepts of rendering, reconciliation, immutability, and keys are fundamental to writing efficient React applications.
