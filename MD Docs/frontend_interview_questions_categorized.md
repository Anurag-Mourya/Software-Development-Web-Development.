# Frontend Developer Interview Questions — Categorized by Topic & Difficulty

> **Total Questions:** 448  
> **Categories:** HTML, CSS, JavaScript (Concepts), JavaScript (Coding Problems), React.js, Behavioral/Experience

---

## HTML (38 Questions)

### Easy (29)
1. What are semantic HTML elements, and why do they improve SEO and accessibility?
2. What is the difference between HTML and HTML5?
3. What is the basic structure of an HTML document?
4. What is the difference between a tag and an element?
5. What are attributes in HTML, and how are they used?
7. What are block-level vs inline elements?
8. How do absolute and relative URLs differ?
9. How do forms work in HTML (action, method, enctype)?
10. GET vs POST: when should each be used?
11. What are common input types and form validation attributes?
12. Why is <label for="id"> important for accessibility?
13. What does the <meta viewport> tag do?
14. What is the role of the <title> tag in SEO?</title>
15. What are HTML entities, and when do we need them?
17. What is the purpose of <noscript>?
18. What is the <base> tag and when can it break links?
19. What are data attributes (data-*) in HTML?
20. What are <figure> and <figcaption> used for?
21. What is lazy loading in HTML images?
22. What is the difference between id and class selectors?
23. What is the difference between GET and POST methods in forms?
24. How do built-in HTML validations (required, pattern, min, max, type) help in frontend forms?
25. What is the difference between block-level and inline elements?
26. What is the purpose of the <meta viewport> tag in responsive web apps?
27. What is the difference between id and class attributes?
28. What is lazy loading for images (loading="lazy"), and why is it useful?
29. What are semantic HTML elements, and why do they improve accessibility and SEO?

### Medium (9)
1. What is ARIA, and when should you use it?
2. What are Web Components at a high level?
3. What is the <picture> element, and when would you use it?
4. What is the difference between Canvas and SVG?
5. What is the difference between Canvas and SVG, and when should each be used?
6. What are meta tags, and which ones are most important for SEO and sharing?
7. What is tabindex, and how does it affect keyboard navigation?
8. What is the lang attribute in <html>, and why does it matter for accessibility and SEO?
9. What does target="_blank" require for security?

### Hard (0)
*No hard-level HTML questions in this set.*

---

## CSS (61 Questions)

### Easy (32)
1. What is CSS, and why is it called “cascading”?
2. What are the three ways to apply CSS?
3. What is the CSS Box Model?
4. What is the difference between margin and padding?
5. What is the difference between border and outline?
6. What is display: none vs visibility: hidden?
7. What are all position values and practical use cases?
8. What is overflow, and how do auto, hidden, and scroll differ?
9. How do you make responsive layouts using media queries?
10. What are rem, em, %, vw, and vh, and when should you use them?
11. What is a CSS reset vs normalize?
12. What are logical properties (margin-inline, etc.), and why are they useful?
13. How do you create an accessible skip link in CSS?
14. What is the difference between display: none and visibility: hidden?
15. What is the difference between block, inline, and inline-block elements?
16. What are the different position values (static, relative, absolute, fixed, sticky) and their use cases?
17. What is Flexbox, and when should you use it?
18. What is overflow, and how do hidden, auto, and scroll differ?
19. What is the difference between border and outline, especially for accessibility focus states?
20. How do you center elements vertically and horizontally in modern CSS?
21. What are pseudo-classes and pseudo-elements, and how are they used?
22. How do you create an accessible “skip to content” link with CSS?
23. What is the role of !important, and why should it be avoided in most cases?
24. What is the difference between class and id selectors, and what is best practice in component-based UIs?
25. How do transitions and transforms work, and how do they impact UI performance?
26. What is opacity, and how does it affect child elements?
27. What is SCSS, and why is it used in frontend projects?
28. What is the difference between position: absolute and position: fixed?
29. What is the difference between CSS units px, em, rem, and %?
30. CSS Grid vs Flexbox: what are the differences and use cases?
31. How do you make images responsive in CSS?
32. How do you make background images responsive?

### Medium (26)
1. What is CSS specificity, and how is precedence resolved?
2. What is box-sizing: border-box, and why is it commonly used?
3. What is z-index, and why does stacking context matter?
4. What are CSS custom properties (variables), and how do they cascade?
5. What is !default in SCSS variables?
6. What is the CSS box model, and how does box-sizing: border-box change layout behavior?
7. What is the cascade in CSS, and how do source order and specificity interact?
8. What is z-index, and what is a stacking context?
9. Flexbox vs Grid: when should you choose each?
10. How do you organize design tokens (colors, spacing, typography) with CSS variables for scalable component systems?
11. What are common CSS performance issues that cause reflow/repaint, and how do you reduce them?
12. What is the difference between Flexbox and Grid?
13. How do you build responsive layouts using media queries?
14. What are logical CSS properties, and why are they useful for RTL/multilingual UIs?
15. How do pseudo-classes and pseudo-elements differ?
16. What is the purpose of !important, and why should overuse be avoided?
17. What is SCSS, and how is it different from CSS and Sass?
18. What are SCSS variables, mixins, functions, and partials?
19. What is @extend vs @include in SCSS?
20. What are SCSS maps and lists, and where are they useful?
21. What is interpolation in SCSS (#{})?
22. How do @if, @for, @each, and @while work in SCSS?
23. How do you organize a large SCSS codebase?
24. What is the difference between a CSS reset and normalize, and when should you use each?
25. What is the difference between @extend and @include (mixin) in SCSS?
26. What is the difference between @use and @import in modern Sass?

### Hard (3)
1. What are reflow and repaint, and how do they affect browser performance?
2. Explain the browser rendering pipeline from DOM/CSSOM to paint and compositing.
3. What is the browser rendering pipeline from parse to paint?

---

## JavaScript — Concepts (162 Questions)

### Easy (30)
1. Can you explain the difference between var, let, and const in terms of scope, hoisting, and reassignment?
2. What is event bubbling, capturing, and propagation?
3. What is event delegation, and why is it better for dynamic lists?
4. Why is [] === [] false and {} comparison tricky in JavaScript?
5. What is debouncing and throttling, and when do you use each?
6. Why can’t arrow functions be used as constructors?
7. What are common JavaScript output-based questions interviewers ask?
8. What are defer and async in script loading?
9. Why do we need cleanup functions in effects?
10. What is a race condition in API calls, and how do you prevent it?
11. What is list virtualization, and when do you need it?
12. What is the difference between unit, integration, and E2E testing in frontend?
13. How do you separate API layer from UI components?
14. How would you design reusable components without over-abstraction?
15. How do you explain architecture decisions with tradeoffs in interviews?
16. How do you flatten nested arrays (flat vs recursion)?
17. How do you rotate an array by k positions?
18. How do you find the longest word in a sentence?
19. What is the difference between props and state?
20. Local state vs global state: how do you decide?
21. How do you design a robust data-fetching flow (loading, error, empty, success)?
22. How do you debug unnecessary re-renders?
23. What are Error Boundaries, and what problems do they solve?
24. How do you balance reusable components vs over-abstraction?
25. Why should API/service layer be separated from UI components?
26. What is the role of <label> with for/id, and how does it improve accessibility?
27. What is the difference between async and defer in script loading?
28. Why does [] === [] return false?
29. How do you remove duplicates from an array using loop and filter approaches?
30. Is a reducer a pure function? Why?

### Medium (132)
1. What is a closure, and where is it used in real projects?
2. What is the difference between deep copy, shallow copy, and reference copy?
3. How does JavaScript memory management and garbage collection work?
4. What are WeakMap and WeakSet, and when should you use them?
5. What is the event loop, and how do microtasks and macrotasks differ?
6. What is a Promise, and what are its states?
7. Promise vs callback vs async/await: what are the tradeoffs?
8. What is promise chaining, and how do you handle errors correctly?
9. How does this behave in arrow functions vs regular functions?
10. What is a closure, and why is it important in frontend development?
11. How do closures enable data hiding/private variables?
12. How are closures used in counters, callbacks, and currying?
13. What is type coercion with examples like "5" + 2 vs "5" - 2?
14. Why don’t arrow functions have their own this?
15. What is execution context in JavaScript?
16. What are the memory creation and code execution phases?
17. What is the call stack, and how does LIFO apply in JS execution?
18. What is garbage collection in JavaScript?
19. How does this behave in object methods, normal functions, and arrow functions?
20. What is shallow copy in objects and arrays?
21. Why can call/apply/bind not rebind this for arrow functions?
22. What is a prototype in JavaScript?
23. How do functions use prototype?
24. What is the event loop?
25. Why do Promises run before setTimeout(..., 0)?
26. What causes RangeError: Maximum call stack size exceeded?
27. What are common JS interview traps in this, hoisting, and async output order?
28. What is the difference between reference copy, shallow copy, and deep copy?
29. What are the limitations of JSON.parse(JSON.stringify(obj)) for deep copy?
30. What is garbage collection, and how does reachability work?
31. What are WeakMap and WeakSet, and why are they useful?
32. What are promises, and what are their states?
33. How are async/await related to promises?
34. Promise chaining vs async/await: what are the tradeoffs?
35. How do .then(), .catch(), and try/catch differ in async error handling?
36. What is the Temporal Dead Zone (TDZ)?
37. What is event propagation in JavaScript?
38. What is the difference between event bubbling and event capturing?
39. What is event delegation, and why is it useful for dynamic lists?
40. What is the difference between == and ===?
41. What are debouncing and throttling, and when do you use each?
42. Why does 0.1 + 0.2 === 0.3 return false in JavaScript?
43. How does JavaScript manage memory internally?
44. What is a pure function in JavaScript?
45. What is a generator function, and how does yield work?
46. What is optional chaining (?.)?
47. What is nullish coalescing (??), and how is it different from ||?
48. What is the difference between var, let, and const?
49. What is the Temporal Dead Zone (TDZ), and why does it matter in interviews?
50. What is the output of for (var i=0; i<3; i++) setTimeout(...) and why?
51. Why does let behave differently from var inside loops with async callbacks?
52. What is shadowing in JavaScript, and when does illegal shadowing occur?
53. Why can we mutate a const object but not reassign it?
54. What are all JavaScript scope types (global, function, block, lexical)?
55. What are pure functions and side effects in JavaScript?
56. What are generator functions, and when are they useful?
57. What is optional chaining (?.) and nullish coalescing (??)?
58. What is the difference between normal functions and arrow functions?
59. What is the difference between declaration, assignment, and initialization in JavaScript?
60. What is scope in JavaScript?
61. Why is var function-scoped while let and const are block-scoped?
62. How does hoisting work for var, let, const, function declaration, and function expression?
63. What is the difference between redeclaration and reassignment?
64. Why does var inside if leak outside the block?
65. Can let and const be accessed outside their block?
66. What is lexical scope?
67. What are primitive and non-primitive data types?
68. Why is typeof null equal to "object"?
69. Why is NaN considered a number type?
70. What is the difference between null and undefined?
71. What is explicit type conversion?
72. What is the difference between Number() and parseInt()?
73. Function declaration vs function expression: what are the differences?
74. What is an arrow function, and how is it different from a normal function?
75. What is the difference between parameters and arguments?
76. What are rest parameters, and when do we use them?
77. What is a callback function?
78. What is a higher-order function (HOF)?
79. Callback vs HOF: what is the exact difference?
80. What is an IIFE and why is it used?
81. What is an object in JavaScript?
82. What is the difference between object properties and methods?
83. What does the spread operator do with objects?
84. Spread vs reference copy: what is the difference?
85. What are call, apply, and bind?
86. call vs apply vs bind: when to use each?
87. What happens when bind is used with new?
88. What are Object.keys(), Object.values(), and Object.entries()?
89. What are map, filter, and reduce?
90. How does reduce work with and without initial value?
91. How do you chain filter, map, and reduce in real use cases?
92. What is single-threaded execution in JavaScript?
93. What are Web APIs in the browser runtime?
94. What is the difference between microtask queue and callback/macrotask queue?
95. What causes blocking code in JavaScript?
96. What are for, for...in, and for...of loops?
97. for...in vs for...of: what is the difference?
98. Why is for...in not recommended for arrays?
99. How do you iterate over object keys and values safely?
100. What is a ReferenceError?
101. What is a SyntaxError?
102. What is a TypeError?
103. What is an array in JavaScript?
104. What is the difference between slice() and splice()?
105. How does negative indexing work in slice() and splice()?
106. What does substring() do, and how is it different from slice()?
107. What are immutable vs mutable operations for strings and arrays?
108. Which methods are common to both arrays and strings (includes, indexOf, slice, concat)?
109. What is the difference between replace() and replaceAll()?
110. What do startsWith() and endsWith() do?
111. What is the difference between charAt() and at()?
112. How does split() work?
113. How does concat() work for strings vs arrays?
114. What does unshift() do?
115. What is a Set, and when should we use it?
116. What are common Set methods (add, has, delete, clear, size)?
117. How do you remove duplicates from an array (Set vs loop vs filter/indexOf)?
118. How do you reverse a string in multiple ways?
119. How do you check if a string is a palindrome?
120. How do you count vowels in a string?
121. How do you reverse each word in a sentence?
122. How do you capitalize the first letter of every word?
123. How do you count words in a sentence with extra spaces?
124. How do you count occurrences of values in an array?
125. How do you invert object keys and values?
126. How do you delete object properties safely without mutating original object?
127. How do you sum all values in an object?
128. How do you convert object to array and array to object?
129. How do you solve sum/factorial using recursion?
130. How do you explain all the above with clean code and time/space complexity in an interview?
131. What is the difference between localStorage, sessionStorage, and cookies?
132. When would you choose cookies over local/session storage?

### Hard (0)
*No hard-level JS concept questions in this set.*

---

## JavaScript — Coding Problems (85 Questions)

### Easy (35)
1. Check if an array contains a specific element.
2. Find the index of a given element in an array.
3. Remove the last element without .pop().
4. Remove the first element without .shift().
5. Reverse an array without built-in methods.
6. Find the second largest element in an array.
7. Find the second smallest element in an array.
8. Find duplicates in an array.
9. Find union and intersection of two arrays.
10. Check if an array is sorted ascending or descending.
11. Count even and odd numbers in an array.
12. Find length of a string and its first and last character.
13. Check if one string contains another substring.
14. Check if a string is palindrome (ignoring case/spaces).
15. Check if two strings are anagrams.
16. Find first non-repeating character in a string.
17. Count occurrences of a character in a string.
18. Reverse words in a sentence.
19. Remove vowels from a string.
20. Check if all characters in a string are unique.
21. Remove duplicate characters while preserving order.
22. Reverse only letters while keeping special characters in place.
23. Count all palindromic substrings.
24. Check repeated substring pattern in a string.
25. Find all anagrams of a pattern in a string.
26. Can you solve a live coding problem with clear brute-force to optimized explanation?
27. How do you remove vowels from a string?
28. How do you check if all characters in a string are unique?
29. How would you check if an array contains a specific element? Example: Input arr=[1,2,3,4], target=3 -> Output true
30. How would you find difference between two arrays? Example: Input [1,2,3,4] and [3,4,5] -> Output [1,2]
31. How would you check if an array is sorted (ascending or descending)? Example: Input [1,2,3,4] -> Output ascending=true
32. What is the output of [1,2,3] + [2,3,4] and why?
33. What is the output of [] + [] and { } + { }, and why?
34. What happens in Promise.resolve().then(() => Promise.reject(...)).catch(...) and why?
35. What happens when you set arr.length = 0?

### Medium (36)
1. Find the length of an array without using .length.
2. Add an element at the end without using .push().
3. Add an element at the beginning without using .unshift().
4. Find elements that appear only once.
5. Move all zeros to the end while preserving order.
6. Separate positive and negative numbers in an array.
7. Find subarray with a given sum.
8. Count subarrays with sum equal to k.
9. Find next greater element for each array item.
10. Find product of array except self.
11. Reverse a string without using built-in reverse.
12. How would you find the length of an array without using .length? Example: Input [1,2,3,4,5] -> Output 5
13. How would you reverse an array without using built-in .reverse()? Example: Input [1,2,3,4] -> Output [4,3,2,1]
14. How would you find the second largest number in an array? Example: Input [10,5,8,20,15] -> Output 15
15. How would you find the second smallest number in an array? Example: Input [10,5,8,20,15] -> Output 8
16. How would you remove duplicates from an array? Example: Input [1,2,2,3,4,4] -> Output [1,2,3,4]
17. How would you find all duplicates in an array? Example: Input [1,2,3,2,4,1] -> Output [1,2]
18. How would you find elements that appear only once? Example: Input [1,2,2,3,4,4] -> Output [1,3]
19. How would you move all zeros to the end while keeping order of non-zero elements? Example: Input [0,1,0,3,12] -> Output [1,3,12,0,0]
20. How would you separate positive and negative numbers? Example: Input [-1,2,-3,4,0] -> Output [-1,-3,2,4,0]
21. How would you find union of two arrays? Example: Input [1,2,3] and [3,4,5] -> Output [1,2,3,4,5]
22. How would you find intersection of two arrays? Example: Input [1,2,3,4] and [3,4,5] -> Output [3,4]
23. How would you merge two sorted arrays without extra space? Example: Input [1,3,5] and [2,4,6] -> Output [1,2,3,4,5,6]
24. How would you rotate an array by k positions to the right? Example: Input arr=[1,2,3,4,5], k=2 -> Output [4,5,1,2,3]
25. How would you rotate an array by k positions to the left? Example: Input arr=[1,2,3,4,5], k=2 -> Output [3,4,5,1,2]
26. How would you find the missing number in an array of 1..n? Example: Input [1,2,4,5] -> Output 3
27. How would you find all missing numbers in an array of 1..n? Example: Input [4,3,2,7,8,2,3,1] -> Output [5,6]
28. How would you count subarrays with sum equal to k? Example: Input arr=[1,1,1], k=2 -> Output 2
29. How would you find a subarray with a given sum? Example: Input arr=[1,4,20,3,10,5], sum=33 -> Output [20,3,10]
30. How would you solve Product of Array Except Self? Example: Input [1,2,3,4] -> Output [24,12,8,6]
31. How would you find next smaller element for each array element? Example: Input [4,8,5,2,25] -> Output [2,5,2,-1,-1]
32. How would you find maximum sum of k consecutive elements? Example: Input arr=[1,4,2,10,23,3,1,0,20], k=4 -> Output 39
33. Write logic to reverse a string without using .reverse().
34. How do you find the first repeated character in a string?
35. How do you find the second repeated character in a string?
36. How do you merge two unsorted arrays and return a sorted array?

### Hard (14)
1. Find maximum sum subarray (Kadane’s algorithm).
2. Find maximum product subarray.
3. Find sliding window maximum.
4. Find median of two sorted arrays.
5. Find longest substring without repeating characters.
6. Find longest palindromic substring.
7. Find minimum window substring containing all chars of another string.
8. Implement wildcard/regex-like matching basics.
9. How would you find the maximum sum subarray (Kadane’s algorithm)? Example: Input [-2,1,-3,4,-1,2,1,-5,4] -> Output 6
10. How would you find the maximum product subarray? Example: Input [2,3,-2,4] -> Output 6
11. How would you find next greater element for each array element? Example: Input [4,5,2,25] -> Output [5,25,25,-1]
12. How would you find sliding window maximum for window size k? Example: Input arr=[1,3,-1,-3,5,3,6,7], k=3 -> Output [3,3,5,5,6,7]
13. How would you sort an array of 0s, 1s, and 2s (Dutch National Flag)? Example: Input [2,0,2,1,1,0] -> Output [0,0,1,1,2,2]
14. How would you find median of two sorted arrays? Example: Input [1,3] and [2] -> Output 2.0

---

## React.js (97 Questions)

### Easy (27)
1. What is React, and why do teams use it?
2. What is JSX, and how is it transformed?
3. What is a React component?
4. Props vs state: what is the difference?
5. What is conditional rendering in React?
6. Why are keys important in list rendering?
7. What does useState do?
8. What is React, and why is it used?
9. What is JSX, and how does it work under the hood?
10. What are components in React?
11. What is the difference between controlled and uncontrolled components?
12. How does event handling work in React?
13. What does useState do, and what are common patterns for updating state?
14. What does useEffect do?
15. How does the useEffect dependency array work?
16. Why is cleanup important in useEffect?
17. What is useRef, and when should it be used?
18. What are semantic HTML elements, and why are they important in React applications?
19. Why is the alt attribute important for images in React components?
20. What is the difference between controlled and native HTML form behavior (action, method) in modern React apps?
21. Why is the <title> tag important for SEO in React/SPA projects?
22. What is ARIA, and when should you use ARIA attributes in React?
23. What are data attributes (data-*), and how are they useful in React components?
24. What is CSS specificity, and how do you resolve specificity conflicts in large React apps?
25. What are the differences between inline, internal, and external CSS, and which is preferred in React projects?
26. How do you structure and organize a large SCSS codebase for maintainability in React applications?
27. What are side effects in JavaScript, and why should we control them in React?

### Medium (51)
1. Controlled vs uncontrolled components in forms?
2. What is lifting state up?
3. useMemo vs useCallback: what is the difference?
4. Context vs Redux vs Redux Toolkit: when to choose what?
5. How do you optimize rendering performance in React?
6. When does React.memo help, and when does it not?
7. What is code splitting with React.lazy and Suspense?
8. What are the Rules of Hooks?
9. What is lifting state up, and when should you use it?
10. What is the difference between useMemo and useCallback?
11. When should you avoid using useMemo and useCallback?
12. Context API vs Redux vs Redux Toolkit: when to use each?
13. What is Redux Toolkit, and why is it preferred over classic Redux?
14. How do you optimize React performance in large applications?
15. What is code splitting, and how do React.lazy and Suspense help?
16. What is useMemo, and when should you use it?
17. What is useCallback, and when should you use it?
18. useMemo vs useCallback: what is the practical difference?
19. What is an Error Boundary, and why do we need it?
20. Controlled vs uncontrolled components: what is the difference?
21. Have you used Redux/Redux Toolkit, and can you explain store → actions → reducers flow?
22. What is a pure component in React?
23. Function components vs class components in React: what are the differences?
24. What is the Virtual DOM?
25. What is useContext, and when is it useful?
26. What is useReducer, and when is it better than useState?
27. What are custom hooks, and why do we create them?
28. What is a race condition in React API calls, and how do you prevent it?
29. What is React Router, and how does client-side routing work?
30. How do protected routes work in React apps?
31. What is Virtual DOM in React?
32. How do React components re-render, and what triggers re-renders?
33. What are useTransition and useDeferredValue, and when should they be used?
34. What are portals in React, and when should you use them?
35. Why is immutability important in React state updates?
36. What are common React bugs interviewers ask about?
37. How do you approach accessibility (A11y) in React apps?
38. What are React security basics (for example, XSS and dangerouslySetInnerHTML)?
39. What is a good folder structure for scalable React applications?
40. What is your testing strategy in React (unit, integration, and E2E)?
41. What is Context API, and when is it enough?
42. What are custom hooks, and why are they useful?
43. How do you handle loading, error, and empty states in React?
44. What are protected routes in React apps?
45. What are useTransition and useDeferredValue?
46. What are error boundaries in React?
47. What are portals, and why are they used?
48. What are common React interview bugs and how do you debug them?
49. What does useEffect do, and when does it run?
50. Why is the dependency array in useEffect important?
51. What is useRef, and when should you use it?

### Hard (19)
1. What is Virtual DOM and reconciliation?
2. What is render phase vs commit phase?
3. What are stale closures in React, and how do you avoid them?
4. SSR vs CSR vs hydration: how do you decide?
5. What is reconciliation in React?
6. What is diffing in React?
7. What is the difference between render phase and commit phase?
8. What is React.memo, and how does it work internally?
9. SSR vs CSR vs hydration: what are the differences and tradeoffs?
10. What is React batching, and what changed in React 18?
11. What is the render phase vs commit phase in React?
12. How does React.memo work internally?
13. What is hydration in Next.js?
14. What is RTK Query, and why use it?
15. How and when does a React component re-render?
16. How do you optimize React performance beyond hooks?
17. How does Redux Toolkit handle immutability?
18. What are the limitations of Context API for state management?
19. How do you structure large React apps for scalability?

---

## Behavioral / Experience (5 Questions)
1. Can you explain your project architecture (frontend, backend, database)?
2. Can you describe a production issue you fixed and your debugging approach?
3. What is your testing process (unit, integration, functional, regression, post-release)?
4. Can you explain your day-to-day workflow with scrum and Jira?
5. Can you introduce yourself with your React experience, projects, and core strengths?

---

## Summary Table

| Category | Easy | Medium | Hard | Total |
|----------|------|--------|------|-------|
| HTML | 29 | 9 | 0 | 38 |
| CSS | 32 | 26 | 3 | 61 |
| JS (Concepts) | 30 | 132 | 0 | 162 |
| JS (Coding) | 35 | 36 | 14 | 85 |
| React.js | 27 | 51 | 19 | 97 |
| Behavioral | — | — | — | 5 |
| **TOTAL** | **153** | **254** | **36** | **448** |

---

## Study Recommendations

### For Junior Developers (0–2 years)
Focus on:
- **HTML Easy** — All 29 questions
- **CSS Easy** — All 32 questions
- **JS Easy** — All 30 questions
- **JS Coding Easy** — All 35 questions
- **React Easy** — All 27 questions
- **JS Medium** — Core topics: closures, promises, async/await, this, event loop

### For Mid-Level Developers (2–5 years)
Focus on:
- **HTML Medium** — All 9 questions
- **CSS Medium** — All 26 questions
- **JS Medium** — All 132 questions (this is your bread and butter)
- **JS Coding Medium** — All 36 questions
- **React Medium** — All 51 questions
- **JS Hard** — Browser rendering pipeline, memory management

### For Senior Developers (5+ years)
Focus on:
- **CSS Hard** — All 3 questions (reflow/repaint, rendering pipeline)
- **JS Coding Hard** — All 14 algorithm questions
- **React Hard** — All 19 questions (internals, performance, architecture)
- **Behavioral** — All 5 experience questions
- **JS Medium** — Deep dives into closures, event loop, prototypes
