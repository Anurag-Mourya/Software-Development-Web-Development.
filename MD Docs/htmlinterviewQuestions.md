# HTML Interview Questions and Answers

**Last updated:** 19 Jan 2026

HTML (HyperText Markup Language) is the standard language used to structure content on the web. It tells the browser how to display text, images, links, forms, and other elements on a webpage.

## HTML at a glance

- HTML is a **markup language**, not a programming language.
- It defines the structure of a webpage using **tags** and **elements**.
- HTML is **static**; CSS styles it and JavaScript adds interactivity.
- It forms the foundation of almost every website today.

---

## Beginner HTML Questions

### 1) What are HTML tags?

HTML tags are special keywords enclosed in angle brackets (`< >`) that tell a browser how to structure and display content.

```html
<h1>Hello!</h1>
<p>A paragraph goes here.</p>
```

### 2) What is the difference between HTML and HTML5?

HTML is the general name for HyperText Markup Language, and HTML5 is the modern version with better support for multimedia, semantic elements, and browser APIs.

**The main difference is 1. Doctype, 2. Multimedia, 3. Graphics, 4. Forms, 5. Semantic tags and 6. Api's**

| Aspect | HTML | HTML5 |
|---|---|---|
| Doctype | Long and complex | Simple: `<!DOCTYPE html>` |
| Multimedia | Needs plugins | `<audio>`, `<video>` |
| Graphics | No native support | `<canvas>`, `<svg>` |
| Forms | Basic inputs | New input types like `email`, `date` |
| Semantic tags | Mostly `<div>` | `<header>`, `<footer>`, `<article>` |
| APIs | Limited | Geolocation, Web Storage, and more |

### 3) What is the basic structure of an HTML document?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <h1>Hey there!</h1>
  <p>Welcome to my page.</p>
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser this is HTML5.
- `<html>` is the root element.
- `<head>` contains metadata and links.
- `<body>` contains visible content.

### 4) What is the difference between a tag and an element?

- A **tag** is the code inside angle brackets, such as `<p>` or `</p>`.
- An **element** includes the opening tag, content, and closing tag.

```html
<p>This is an element.</p>
```

### 5) What are attributes in HTML?

Attributes provide extra information about an element. They are usually written as `name="value"`.

```html
<a href="https://example.com/">Click this link</a>
<img src="pic.jpg" alt="A cool photo">
```

### 6) What is the difference between `<section>`, `<article>`, and `<div>`?

| Tag | Purpose | Example |
|---|---|---|
| `<div>` | Generic container with no semantic meaning | Layout wrapper |
| `<section>` | Groups thematically related content | Services section |
| `<article>` | Self-contained content | Blog post, news item |

### 7) How do you create hyperlinks? What are absolute vs relative URLs?

Use the `<a>` tag with `href`.

```html
<a href="https://example.com/">Go to Example</a>
```

- **Absolute URL**: full path including protocol and domain.
- **Relative URL**: path relative to the current page or project.

```html
<a href="https://www.example.com/about.html">About Us</a>
<a href="/about.html">About Us</a>
```

### 8) What is the `<img>` tag for?

The `<img>` tag displays images. It commonly uses:

- `src` for the image path
- `alt` for alternative text

```html
<img src="mountain.jpg" alt="A beautiful mountain scene">
```

### 9) What is the difference between block-level and inline elements?

- **Block-level elements** start on a new line and take full width.
- **Inline elements** stay within the current line and use only required space.

```html
<div>This block starts a new line.</div>
<span>This inline stays here</span>
<img>
<strong>
<label>
<input>
```

### 10) What kinds of lists can you make in HTML?

- Ordered list: 1. `<ol>`
- Unordered list: . `<ul>`
- Description list: → `<dl>`

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<ul>
  <li>Bullet point</li>
  <li>Another point</li>
</ul>

<dl>
  <dt>HTML</dt>
  <dd>→ HyperText Markup Language</dd>
</dl>
```

### 11) What is the `<form>` tag and what do `action` and `method` do?

The `<form>` tag collects user input and sends it to a server.

- `action` = where the data is sent
- `method` = how the data is sent (`GET` or `POST`)

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Send">
</form>
```


### 12) What does the `<br>` tag do and when should you avoid it?

The `<br>` tag inserts a line break. Avoid using it for layout spacing.

```html
123 Main St<br>New York, NY
```
- Out put = 123 Main St<br>New York, NY

### 13) How do you make a link open in a new tab safely?

Use `target="_blank"` and `rel="noopener"`.

```html
<a href="https://example.com/" target="_blank" rel="noopener">
  Open in a New Tab
</a>
```

### 14) What does the `<title>` tag do and why is it important for SEO?

The `<title>` tag sets the browser tab title and helps search engines understand the page topic.

```html
<head>
  <title>My Awesome Website</title>
</head>
```

### 15) What is the `<meta>` tag?

The `<meta>` tag provides metadata about the page.

```html
<meta charset="UTF-8">
<meta name="description" content="A cool webpage">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 16) How do you make a table?

Use `<table>`, `<tr>`, `<th>`, and `<td>`.

```html
<table>
  <caption>Sales Chart</caption>
  <tr>
    <th>Item</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Book</td>
    <td>$10</td>
  </tr>
</table>
```

### 17) How do you make an email link?

```html
<a href="mailto:hello@example.com">Send an Email</a>
```

### 18) What is the `<em>` tag?

The `<em>` tag adds semantic emphasis.

```html
<p>I <em>love</em> to code!</p>
```
- Out put = <p>I <em>love</em> to code!</p>
### 19) How do you make a checkbox?

```html
<input type="checkbox" id="news" name="news" checked>
<label for="news">Get the Newsletter</label>
```

### 20) What is the `<label>` tag and how does `for/id` improve accessibility?

A `<label>` describes a form control. Using `for` and `id` links the label to the input.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

### 21) How do you make a dropdown list?

```html
<label for="fruits">Pick a fruit:</label>
<select id="fruits" name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>
```

- oupt put = 
<label for="fruits">Pick a fruit:</label>
<select id="fruits" name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>

### 22) What is the `<blockquote>` tag and when should you use `cite`?

Use `<blockquote>` for long quotations from another source. The `cite` attribute can store the source URL.

```html
<blockquote cite="https://example.com/">
  A really inspiring quote.
</blockquote>
```

- out put = <blockquote cite="https://example.com/">
  A really inspiring quote.
</blockquote>

### 23) How is HTML different from CSS?

| HTML | CSS |
|---|---|
| Defines structure and content | Controls design and appearance |
| Uses tags and elements | Uses selectors and properties |
| Forms the backbone of a webpage | Enhances visual styling |

---

## Intermediate HTML Questions

### 24) What are semantic HTML elements?

Semantic elements clearly describe their purpose, such as `<header>`, `<nav>`, `<article>`, and `<footer>`.

### 25) How do you add a video in HTML5?

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser doesn’t support videos.
</video>
```

### 26) Why is the `alt` attribute important in `<img>`?

`alt` improves accessibility, SEO, and provides fallback text when the image cannot load.

### 27) What is the `<fieldset>` tag?

`<fieldset>` groups related form elements, and `<legend>` gives the group a title.

```html
<fieldset>
  <legend>Personal Details</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</fieldset>
```

### 28) What does `<noscript>` do and why is it still relevant?

`<noscript>` shows fallback content when JavaScript is disabled or unavailable.

```html
<script>
  document.write("JavaScript is on!");
</script>
<noscript>JavaScript is off. Turn it on for the full experience.</noscript>
```

### 29) How do you add a JavaScript file?

```html
<script src="mycode.js"></script>
```

### 30) How do you add CSS styling in an HTML file?

- Inline CSS
- Internal CSS
- External CSS

```html
<p style="color: blue; font-size: 16px;">Hello!</p>

<style>
  p { color: blue; font-size: 16px; }
</style>

<link rel="stylesheet" href="styles.css">
```

### 31) When should you use `<strong>/<em>` vs `<b>/<i>`?

- `<strong>` and `<em>` add semantic meaning.
- `<b>` and `<i>` are mostly presentational.

### 32) How do you make a multi-line text input?

```html
<label for="comment">Comment:</label>
<textarea id="comment" name="comment" rows="4" cols="50">Type something here</textarea>
```

### 33) What is the `action` attribute in a form?

`action` specifies where to send form data after submission.

### 34) What is the `<base>` tag?

The `<base>` tag sets the base URL for all relative links on the page.

```html
<head>
  <base href="https://example.com/stuff/">
</head>
```

### 35) What is `enctype` in forms? When to use `multipart/form-data`?

Use `multipart/form-data` when uploading files.

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
  <input type="submit">
</form>
```

### 36) How do you make a hidden input field?

```html
<input type="hidden" name="userID" value="12345">
```

### 37) What is the `<address>` tag?

Use `<address>` for contact information related to the page or article.

### 38) What is the `lang` attribute in `<html>`?

```html
<html lang="en">
```

It helps browsers, screen readers, and search engines understand the page language.

### 39) What is the `contenteditable` attribute?

It makes an element editable in the browser.

```html
<div contenteditable="true">Click to edit this text.</div>
```

### 40) Are `<div>` and `<span>` tags similar?

Yes, both are generic container elements.

- `<div>` = block-level
- `<span>` = inline

### 41) What is the difference between `<div>` and `<span>`?

| `<div>` | `<span>` |
|---|---|
| Block-level element | Inline element |
| Used for sections/layout | Used for small inline pieces |
| Starts on a new line | Stays on the same line |

### 42) Are `<div>` and `<span>` tags similar?

They are both generic containers, but they serve different layout roles.

### 43) What is the difference between `class` and `id`?

| `id` | `class` |
|---|---|
| Unique on a page | Can be reused on many elements |
| Used for one specific element | Used for groups of elements |
| CSS selector: `#idName` | CSS selector: `.className` |

### 44) How can we create a nested webpage in HTML?

Use `<iframe>` or `<embed>`.

### 45) What are the tags that can be used inside the `<head>` tag?

Common tags inside `<head>` include:

- `<title>`
- `<link>`
- `<meta>`
- `<base>`
- `<style>`
- `<script>`

### 46) What are meta tags? How are they important?

Meta tags provide metadata about the document and help with SEO, browser behavior, and mobile responsiveness.

### 47) What is HTML layout?

HTML layout is the arrangement of page sections such as header, navigation, content, sidebar, and footer.

### 48) What are semantic elements?

Semantic elements have meaningful names that describe their content, such as `article`, `aside`, `details`, `figure`, `footer`, `header`, `main`, `nav`, `section`, and `mark`.

### 49) What are HTML entities?

HTML entities are codes used to display reserved characters and special symbols.

Examples:

- `&lt;` for `<`
- `&gt;` for `>`
- `&copy;` for `©`
- `&reg;` for `®`

### 50) How can we add symbols in HTML?

Use HTML entities.

```html
&copy; &reg; &trade; &commat;
```

### 51) What is HTML encoding?

URL encoding converts unsafe characters in a URL into a valid format using `%` followed by hexadecimal values.

### 52) What is the difference between the POST method and the GET method?

| GET | POST |
|---|---|
| Requests data from a resource | Submits data to a resource |
| Data appears in URL | Data is sent in request body |
| Good for search queries | Better for sensitive or large data |

### 53) What is HTML Canvas?

The `<canvas>` element is used to draw graphics with JavaScript.

```html
<canvas id="myCanvas" width="400" height="200" style="border:2px solid #000000;"></canvas>
```

### 54) What is SVG?

SVG stands for Scalable Vector Graphics. It uses XML-based vector graphics that remain sharp at any size.

### 55) What are the different multimedia formats supported by HTML?

Common formats include `.wav`, `.mp3`, `.mp4`, `.mpg`, `.wmv`, and `.avi`.

### 56) How can we allow the browser to tell our location using the HTML Geolocation API?

The Geolocation API uses JavaScript and the `navigator.geolocation` object.

### 57) What is the HTML Web Storage API?

The Web Storage API includes:

- `sessionStorage`
- `localStorage`

### 58) What are forms in HTML?

Forms collect user input and send it to a server using controls like inputs, checkboxes, radio buttons, and submit buttons.

---

## Advanced HTML Questions

### 59) What is the `<canvas>` element?

`<canvas>` is a blank drawing area for graphics, animations, and games using JavaScript.

```html
<canvas id="myCanvas" width="200" height="100">
  Your browser doesn’t support canvas.
</canvas>
```

### 60) What is the `<dialog>` element and how do `showModal()` / `close()` work?

`<dialog>` provides a native way to create modal or non-modal dialogs.

```html
<dialog id="myDialog">
  <p>This is a modal dialog.</p>
  <button id="closeBtn">Close</button>
</dialog>

<button id="openBtn">Open Dialog</button>
```

- output = 
<dialog id="myDialog">
  <p>This is a modal dialog.</p>
  <button id="closeBtn">Close</button>
</dialog>


<button id="openBtn">Open Dialog</button> 

### 61) How do you add SVG to HTML?

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red"></circle>
</svg>
```

### 62) What are data attributes?

Data attributes (`data-*`) store custom information in HTML elements.

```html
<div data-user-id="12345" data-role="admin">User</div>
```

### 63) What is the `<template>` tag?

`<template>` stores HTML that is not rendered immediately and can be cloned with JavaScript.

### 64) What is the `rel` attribute in `<link>`?

`rel` describes the relationship between the current page and the linked resource.

### 65) How do you show different language versions of a webpage?

Use `rel="alternate"` and `hreflang`.

### 66) What is the `<output>` tag?

`<output>` displays the result of a user action or calculation.

### 67) What is the `<datalist>` tag?

`<datalist>` provides autocomplete suggestions for an `<input>` field.

### 68) What is the difference between `defer` and `async` in `<script>`?

| `defer` | `async` |
|---|---|
| Downloads script while HTML parses | Downloads script while HTML parses |
| Executes after HTML is ready | Executes as soon as it downloads |
| Preserves order | Does not preserve order |

### 69) What are Web Components?

Web Components are reusable custom elements built with:

- Custom Elements
- Shadow DOM
- HTML Templates

### 70) What is ARIA, and how do you use it?

ARIA adds accessibility attributes such as roles and labels for screen readers.

```html
<button aria-label="Close dialog">X</button>
<div role="alert">Error: Bad input</div>
```

### 71) How do you lazy-load images and control loading priority?

```html
<img src="photo.jpg" alt="Nice view" loading="lazy">
```

Use:
“Lazy loading is a performance optimization technique where images or resources are loaded only when they come into the viewport instead of loading everything at once. It improves page speed and reduces unnecessary data usage.
- `loading="lazy"` for delayed loading
- `loading="eager"` for immediate loading
- `fetchpriority` for relative importance

### 72) What is microdata, and how does it help SEO?

Microdata adds structured data using attributes like `itemscope`, `itemtype`, and `itemprop`.

### 73) How do you make HTML better for SEO?

- Use semantic elements
- Add meaningful meta tags
- Provide `alt` text for images
- Use `hreflang` for multilingual sites
- Load scripts with `defer` or `async`

### 74) What is the `<picture>` element?

The `<picture>` element lets browsers choose the best image based on screen size or format support.

### 75) How do you create an iframe?

```html
<iframe src="https://example.com/" width="600" height="400" title="Embedded Page"></iframe>
```

### 76) What is the `tabindex` attribute?

`tabindex` controls keyboard focus order.

- `0` = normal tab order
- positive number = custom order
- `-1` = focusable by script only

### 77) How do you validate an HTML form?

Use built-in validation attributes such as:

- `required`
- `type`
- `pattern`
- `min`
- `max`

### 78) What are the `<figure>` and `<figcaption>` tags?

- `<figure>` groups media content
- `<figcaption>` adds a caption

### 79) What are HTML Global Attributes? Give examples.

Global attributes can be used on almost any HTML element.

Common examples:

- `id`
- `class`
- `title`
- `hidden`
- `tabindex`
- `contenteditable`
- `data-*`

---

## Quick revision points

> HTML gives structure.
>
> CSS gives style.
>
> JavaScript gives behavior.

## Suggested interview focus

- Semantic HTML
- Forms and validation
- Accessibility
- SEO-friendly HTML
- HTML5 media
- Web storage
- Canvas, SVG, and advanced elements

---

## Clean code examples for revision

### Minimal HTML page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

### Accessible form example

```html
<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Submit</button>
</form>
```

### Semantic layout example

```html
<header>
  <nav>Navigation</nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content goes here.</p>
  </article>
</main>
<footer>Footer content</footer>
```
