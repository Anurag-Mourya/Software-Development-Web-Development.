# CSS Interview Questions and Answers

**Last Updated:** 19 Sep, 2025

CSS (Cascading Style Sheets) is the language that styles and organizes web pages. It makes websites visually appealing and user-friendly. Mastering CSS is crucial whether you're a beginner or a seasoned developer.

## Benefits of CSS

- **CSS Saves Time:** You can write CSS once and reuse the same sheet on multiple HTML pages.
- **Easy Maintenance:** To make a global change, simply change the style, and all elements in all the webpages will be updated automatically.
- **Search Engines:** CSS is considered a clean coding technique, which means search engines won't have to struggle to "read" its content.

---

## 1. What is the current version of CSS?

CSS3 is the latest version of CSS.

---

## 2. How is CSS different from CSS 3?

| Feature | CSS | CSS3 |
|---------|-----|------|
| **Capability** | CSS is capable of positioning texts and objects. CSS is somehow backward compatible with CSS3. | CSS3 is capable of making the web page more attractive and takes less time to create. If you write CSS3 code in CSS, it will be invalid. |
| **Responsive Design** | Not supported in CSS | CSS3 supports responsive design. |
| **Modularity** | CSS cannot be split into modules. | CSS3 can be broken down into modules. |
| **3D Animation & Transformation** | Cannot build 3D animation and transformation. | Supports all kinds of animation and transformations. |
| **Performance** | Slower than CSS3 | Faster than CSS |

---

## 3. Suggest Some Best CSS Frameworks?

- Bootstrap
- Foundation
- Bulma
- UIKit
- Semantic UI
- Materialize
- Pure
- Tailwind CSS

---

## 4. What is the syntax for CSS?

A CSS style rule consists of a selector, property, and its value. The selector points to the HTML element where CSS style is to be applied. The CSS property is separated by semicolons.

**Syntax:**
```css
selector { 
    Property: value; 
}
```

---

## 5. What are the different ways to apply CSS to a webpage?

There are three ways we can add CSS to a webpage:

### Inline CSS
Inline CSS contains the CSS property in the body section attached with the element known as inline CSS. This kind of style is specified within an HTML tag using the style attribute.

### Internal CSS
Internal CSS can be used when a single HTML document must be styled uniquely. The CSS ruleset should be within the HTML file in the head section i.e the CSS is embedded within the HTML file.

### External CSS
External CSS contains a separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc). CSS property is written in a separate file with .css extension and should be linked to the HTML document using the link tag.

---

## 6. Which type of CSS holds the highest priority?

Inline CSS has the highest priority, then comes Internal/Embedded followed by External CSS which has the least priority.

**Priority Order:**
1. **Inline CSS** (Highest Priority)
2. **Internal/Embedded CSS**
3. **External CSS** (Lowest Priority)

As Inline has the highest priority, any styles that are defined in the internal and external style sheets are overridden by Inline styles.

---

## 7. What are CSS Selectors?

CSS Selectors are used to selecting HTML elements based on their element name, id, attributes, etc. It can select one or more elements simultaneously.

### Element Selectors
The element selector in CSS is used to select HTML elements which are required to be styled.

**Syntax:**
```css
element_name {
    // CSS Property
}
```

### ID Selector
The #id selector is used to set the style of the given id. The id attribute is the unique identifier in an HTML document.

**Syntax:**
```css
#id_name { 
    // CSS Property
}
```

### Class Selector
The .class selector is used to select all elements which belong to a particular class attribute.

**Syntax:**
```css
.class_name {
    // CSS Property
}
```

---

## 8. When is it better to use logical properties (inline-/block-start/end) vs physical properties (top/right/…)

**Logical Properties:** Use logical properties (like `margin-inline-start`, `padding-block-end`) when you want your layout to adapt to different writing modes, text directions (LTR/RTL), or vertical scripts—making your design more flexible and internationalized.

**Physical Properties:** Physical properties (like `margin-top`, `padding-right`) are more suitable when the layout is fixed to a left-to-right, horizontal writing environment and doesn't need to adjust for localization.

---

## 9. How to make an accessible "Skip to content" link that's hidden until focus—and which hiding methods are a11y-safe?

Keep the link in the DOM and tab order using a visually hidden utility (not `display:none`, `visibility:hidden`, or `aria-hidden`). Reveal it on `:focus/:active`.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skip to Content Example</title>
  <style>
    /* Hide visually but keep accessible for screen readers */
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      overflow: hidden;
      white-space: nowrap;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
    }

    /* Reveal skip link on focus or activation */
    .skip-link:focus,
    .skip-link:active {
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1000;
      width: auto;
      height: auto;
      margin: 0;
      padding: .5rem .75rem;
      clip: auto;
      clip-path: none;
      overflow: visible;
      white-space: normal;
      background: #fff;
      outline: 2px solid;
      border-radius: .25rem;
      font-weight: bold;
      text-decoration: none;
      color: #000;
    }
  </style>
</head>
<body>
  <!-- Skip Link -->
  <a class="skip-link visually-hidden" href="#main">Skip to content</a>

  <!-- Simulated header/navigation -->
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main id="main">
    <h1>Welcome to the Page</h1>
    <p>This is the main content area.</p>
  </main>
</body>
</html>
```

---

## 10. What are CSS custom properties (variables), and how do they cascade?

CSS custom properties are runtime variables you define with names starting `--` and use with `var()`. They inherit by default and follow normal CSS precedence: origin → !important → specificity → source order.

**Example:**
```css
:root { --brand: #0a84ff; }          /* global */
.card { color: var(--brand); }
.theme-dark { --brand: #64d2ff; }    /* scoped override */

@media (prefers-contrast: more) {
  :root { --brand: black; }          /* conditional override */
}
```

---

## 11. What's the difference between a CSS reset and a normalizer?

**CSS Reset:** Wipes most browser defaults (margins, paddings, headings, lists, etc.) to a neutral baseline so you rebuild styles from scratch.

**Normalizer (e.g., Normalize.css):** Preserves useful defaults and only fixes cross-browser inconsistencies.

Use a reset when you want total control in a tightly designed system; use a normalizer when you want sensible defaults with consistent behavior and less re-styling.

---

## 12. How can we add comments in CSS?

Comments are the statements in your code that are ignored by the compiler and are not executed. Comments are used to explain the code.

**Syntax:**
```css
/* content */
```

Comments can be single-line or multi-line.

---

## 13. How should I organize CSS custom properties to maintain a shared color scheme across components?

### 1. Design tokens (brand/base)

```css
:root {
  /* brand in HSL so you can vary alpha easily */
  --brand-h: 220; --brand-s: 90%; --brand-l: 56%;
  --neutral-0: #ffffff; --neutral-900: #0a0a0a;

  /* semantic roles (don't tie to a specific component) */
  --color-bg: var(--neutral-0);
  --color-fg: var(--neutral-900);
  --color-accent: hsl(var(--brand-h) var(--brand-s) var(--brand-l));
  --color-border: color-mix(in oklab, var(--color-fg) 15%, transparent);
  --on-accent: white;
}
```

### 2. Themes override only semantic roles

```css
[data-theme="dark"] {
  --color-bg: #0b0b0b;
  --color-fg: #f5f5f5;
  --color-border: color-mix(in oklab, var(--color-fg) 25%, transparent);
  --on-accent: black;
}
```

### 3. Component-level aliases

```css
.button {
  /* component tokens (can be customized per instance) */
  --btn-bg: var(--color-accent);
  --btn-fg: var(--on-accent);
  --btn-border: var(--color-border);

  background: var(--btn-bg);
  color: var(--btn-fg);
  border: 1px solid var(--btn-border);
}

.card {
  --card-bg: var(--color-bg);
  --card-fg: var(--color-fg);
  --card-border: var(--color-border);

  background: var(--card-bg);
  color: var(--card-fg);
  border: 1px solid var(--card-border);
}
```

---

## 14. What are CSS HSL Colors?

HSL stands for Hue, Saturation, and Lightness respectively. This format uses the cylindrical coordinate system.

- **Hue:** Degree of the color wheel (0-360). 0 = red, 120 = green, 240 = blue
- **Saturation:** Percentage value (0-100%). 100% = saturated, 0% = gray
- **Lightness:** Percentage value (0-100%). 100% = white, 0% = black

**Syntax:**
```css
h1 {
    color: hsl(H, S, L);
}
```

**Example:**
```css
h1 { 
    color: hsl(120, 100%, 30%); 
    text-align: center; 
}
```

---

## 15. What are CSS backgrounds, list the properties?

The CSS background properties are used to define the background effects for elements.

- **background-color:** Specifies the background color of an element
- **background-image:** Specifies an image to use as the background of an element
- **background-repeat:** Controls how the background image repeats (by default, repeats both horizontally and vertically)
- **background-attachment:** Fixes the background image; the image will not scroll with the page
- **background-position:** Sets the image to a particular position

---

## 16. What are the different CSS border properties?

CSS border properties allow us to set the style, color, and width of the border.

- **Border Style:** Specifies the type of border solid, dahsed. None of the other border properties will work without setting the border style.
- **Border Width:** Sets the width of the border (px, pt, cm or thin, medium, thick)
- **Border Color:** Sets the color of the border (color name, hex value, or RGB value)

---

## 17. What does margin: 40px 100px 120px 80px signify?

CSS margins are used to create space around the element. The four values represent:

- **Top:** 40px
- **Right:** 100px
- **Bottom:** 120px
- **Left:** 80px

---

## 18. What is the difference between margin and padding?

| Feature | Margin | Padding |
|---------|--------|---------|
| **Purpose** | Creates space around elements | Creates space around elements inside the border |
| **Auto Value** | Can be set to auto | Cannot be set to auto |
| **Negative Values** | Allows negative or float numbers | Cannot allow negative values |
| **Requires Border** | Works without the border property | Works without the border property |

**Example:**
```html
<!DOCTYPE html> 
<html> 
<head> 
    <style> 
        h2 { 
            margin: 50px; 
            border: 70px solid green; 
            padding: 80px; 
        } 
    </style> 
</head> 
<body> 
    <h1>GEEKSFORGEEKS</h1> 
    <h2>Padding properties</h2> 
</body> 
</html>
```

---

## 19. What is CSS Box Model?

The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. It is used to create the design and layout of web pages.

### Components:

- **Content Area:** Contains content like text, images, or other media
- **Padding Area:** Space around the content and within the border box
- **Border Area:** Between the box's padding and margin
- **Margin Area:** Space between border and margin; useful to separate the element from neighbors

---

## 20. What is the difference between CSS border and outline?
Outline = It is a line outside of border it is used for focus but not exactly focus
| Feature | Border | Outline |
|---------|--------|---------|
| **Placement** | Inside the element | Outside the element, outside the border |
| **Individual Edges** | Can set different width, color, style for each edge | Same on all sides |
| **Shape** | Can be circular | Cannot be circular |
| **Space** | Takes up space in layout | Does not take up space |

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>      
        p {
            outline: 5px solid #ddd;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <p>This is a paragraph.</p>
</body>
</html>
```

---

## 21. How can we format text in CSS?

CSS text formatting properties are used to format text and style text. CSS text formatting includes the following properties:

- Text-color
- Text-alignment
- Text-decoration
- Text-transformation
- Text-indentation
- Letter spacing
- Line height
- Text-direction
- Text-shadow
- Word spacing

---

## 22. What are the different CSS link states?

Links can exist in different states and they can be styled using pseudo-classes. There are four states of links:

- **a:link** - Normal, unvisited link
- **a:visited** - Link visited by a user at least once
- **a:hover** - Link when the mouse hovers over it
- **a:active** - Link that is just clicked

---

## 23. Can we add an image as a list item marker?

To add an image as the list-item marker in a list, we use the `list-style-image` property in CSS.

**Syntax:**
```css
list-style-image: none | url | initial | inherit;
```

---

## 24. How can we hide an element in CSS?

### Using display property:

To hide an element, set the style display property to "none":
```css
display: "none";
```

To show an element, set the style display property to "block":
```css
display: "block";
```

### Using visibility property:

The `visibility` property hides or shows content but the element still takes up space:
```css
visibility: 'hidden';
visibility: 'visible';
```

---

## 25. What is the difference between display: none and visibility: hidden?

| Feature | display: none | visibility: hidden |
|---------|---------------|-------------------|
| **Element Removal** | Completely removes element from document | Hides element but keeps it in document |
| **Space** | Removes all space taken by element | Element still takes up space |
| **Syntax** | `display: none` | `visibility: hidden` |
| **Behavior** | Element never existed in HTML | Element is invisible but present |

---

## 26. Can we overlap elements in CSS?

Creating an overlay effect simply means putting two div together at the same place but both the div appear when needed (i.e., while hovering or clicking).

Overlays can be created using two simple CSS properties:

### z-index property:
Used to displace elements on the z-axis (in or out of the screen).

**Syntax:**
```css
z-index: auto | number | initial | inherit;
```

### position property:
Tells about the method of positioning for an element or an HTML entity.

---

## 27. What are the various positioning properties in CSS?

The position property in CSS tells about the method of positioning for an element. There are five different types:

### Fixed
Element is positioned relative to the viewport. Remains at the same position even as we scroll the page.

### Static
Default positioning. Element follows the normal flow of the page. Top, right, bottom, and left properties have no effect.

### Relative
Element is positioned relatively with other elements. Other elements do not fill the gap left by this element.

### Absolute
Element is positioned with respect to its parent. Positioning does not depend on siblings or same-level elements.

### Sticky
Between fixed & relative. Element scrolls until it touches the top, then becomes fixed at that place.

---

## 28. What is CSS overflow?

The CSS overflow controls big content. It tells whether to clip content or add scroll bars. The overflow contains the following properties:

- **Visible:** Content is not clipped and is visible outside the element box
- **Hidden:** Overflow is clipped and the rest of the content is invisible
- **Scroll:** Overflow is clipped but a scrollbar is added to see the rest of the content
- **Auto:** Automatically adds a scrollbar whenever required
- **Overflow-x:** Deals with horizontal edges
- **Overflow-y:** Deals with vertical edges

---

## 29. What does the CSS float property do?

Float is a CSS property that defines the flow of content. Below are the types of floating properties:

| Float Type | Usage |
|-----------|-------|
| float: left | Element floats on the left side of the container |
| float: right | Element floats on the right side of the container |
| float: inherit | Element inherits the floating property of its parent |
| float: none | Element is displayed as it is (Default) |

---

## 30. What does display:inline-block do?

Inline-block: This feature uses both properties: block and inline. This property aligns the div inline but the difference is it can edit the height and the width of the block. Basically, this will align the div both in the block and inline fashion.

**Example:**
```html
<!DOCTYPE html>
<html>
    <head>
        <title>CSS | Display property</title>
        <style>
        #main {
                height: 100px;
                width: 200px;
                background: teal;
                display: inline-block;
        }
        #main1 {
                height: 100px;
                width: 200px;
                background: cyan;
                display: inline-block;
        }
        #main2 {
                height: 100px;
                width: 200px;
                background: green;
                display: inline-block;
        }
        </style>
    </head>
    <body>
        <div id="main"> BLOCK 1 </div>
        <div id="main1"> BLOCK 2</div>
        <div id="main2">BLOCK 3 </div>
    </body>
</html>
```
<!-- ```html -->
<!DOCTYPE html>
<html>
    <head>
        <title>CSS | Display property</title>
        <style>
        #main {
                height: 100px;
                width: 200px;
                background: teal;
                display: inline-block;
        }
        #main1 {
                height: 100px;
                width: 200px;
                background: cyan;
                display: inline-block;
        }
        #main2 {
                height: 100px;
                width: 200px;
                background: green;
                display: inline-block;
        }
        </style>
    </head>
    <body>
        <div id="main"> BLOCK 1 </div>
        <div id="main1"> BLOCK 2</div>
        <div id="main2">BLOCK 3 </div>
    </body>
</html>
<!-- ``` -->

---

## 31. How can we vertically center a text in CSS?

This solution will work for a single line and multiple lines of text:

```css
div {
    height: 200px;
    line-height: 200px;
    text-align: center;
    border: 2px dashed #f69c55;
}

span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
}
```

---

## 32. How can we center an image in CSS?

Given an image and the task is to set the image to align to center (vertically and horizontally) inside a bigger div:

**Example:**
```html
<!DOCTYPE html> 
<html> 
<head>     
    <title>Horizontal and Vertical alignment</title> 
    <style> 
        #Outer { 
            border: 2px solid black; 
            height: 300px; 
            position: relative; 
        } 
        img { 
            position: absolute; 
            margin: auto; 
            top: 0; 
            left: 0; 
            right: 0; 
            bottom: 0; 
        } 
    </style> 
</head> 
<body> 
    <div id = "Outer"> 
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/gfgbg.png"/> 
    </div> 
</body> 
</html>
```

---

## 33. What are CSS Combinators?

CSS combinators explain the relationship between two selectors. There are four types of combinators:

### General Sibling Selector (space ~)
Selects the element that follows the first selector element and shares the same parent.

### Adjacent Sibling Selector (+)
Selects the element that is adjacent or next to the specified selector tag.

### Child Selector (>)
Selects the element that is the immediate child of the specified tag.

### Descendant Selector (space)
Selects all child elements of the specified tag, whether direct or nested deeply.

---

## 34. What are pseudo-classes in CSS?

A Pseudo class in CSS is used to define the special state of an element. It can be combined with a CSS selector to add an effect to existing elements based on their states.

**Syntax:**
```css
selector: pseudo-class {
     property: value;
}
```

### Common Pseudo-classes:

- **:hover** - Add effect when mouse pointer is over element
- **:active** - Select element that is activated when user clicks on it
- **:focus** - Select element that is currently focused by the user
- **:visited** - Select links which have been already visited by the user

---

## 35. What are pseudo-elements in CSS?

Pseudo-element in CSS is used to add style to specified parts of an element.

**Syntax:**
```css
selector::pseudo-element { 
    property: value; 
} 
```

### Common Pseudo-elements:

- **::before** - Add CSS property before an element
- **::after** - Add CSS property after an element
- **::first-letter** - Make changes to the first letter of an element
- **::first-line** - Make changes to the first line of an element

---

## 36. How can we add gradients in CSS?

### Linear Gradients
Smooth color transitions going up, down, left, right, and diagonally. Minimum of two colors required.

**Syntax:**
```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

### Radial Gradients
Starts at a single point and emanates outward. By default, first color starts at center and fades to edge.

**Syntax:**
```css
background-image: radial-gradient(shape size at position, start-color, ..., end-color);
```

---

## 37. Can we add 2D transformations to our project using CSS?

Yes, a transformation modifies an element by its shape, size, and position along the X-axis and Y-axis.

### Types of 2D Transformations:

**translate()** - Moves an element from its current position
```css
.box {
  transform: translate(50px, 30px);
}
```

**rotate()** - Rotates an element by the given degree
```css
.box {
  transform: rotate(45deg);
}
```

**scale()** - Increases or decreases the size of an element
```css
.box {
  transform: scale(1.5, 2);
}
```

**skewX()** - Skews an element along the X-axis
```css
.box {
  transform: skewX(30deg); 
}
```

**skewY()** - Skews an element along the Y-axis
```css
.box {
  transform: skewY(20deg); 
}
```

**matrix()** - Combines multiple transforms
```css
.box {
  transform: matrix(1, 0.5, -0.5, 1, 30, 20);
}
```

---

## 38. Can we add 3D transformations to our project using CSS?

Yes, 3D transformation allows changing elements using 3D transformations. Elements are rotated along the X-axis, Y-axis, and Z-axis.

### Main 3D Transformation Types:

- **rotateX()**
- **rotateY()**
- **rotateZ()**

---

## 39. What are CSS transitions?

Transitions in CSS allow us to control the way in which transition takes place between the two states of the element. They animate the changes and make them visually appealing to the user.

### CSS Transition Properties:

**transition-property** - Select CSS properties to animate
```css
transition-property: none | all | property | property1, property2, ...;
```

**transition-duration** - Determine how long the transition will take
```css
transition-duration: time; /* in seconds(s) or milliseconds(ms) */
```

**transition-timing-function** - Determine the speed and manner of change
```css
transition-timing-function: ease | ease-in | ease-out | ease-in-out | linear | step-start | step-end;
```

**transition-delay** - Determine the amount of time to wait before transition starts
```css
transition-delay: time; /* in seconds(s) or milliseconds(ms) */
```

### Shorthand Property:
```css
transition: (property name) | (duration) | (timing function) | (delay);
```

---

## 40. How can we animate using CSS?

CSS Animations are used to change the appearance and behavior of elements on a web page.

### Two Main Parts:

1. **CSS properties:** Define how the element should animate
2. **Keyframes:** Specify the animation steps and time intervals

### @keyframes Rule:
Keyframes define the display of the animation at respective stages of its whole duration.

**Example:**
```html
<!DOCTYPE html> 
<html> 
    <head> 
        <style> 
            #gfg { 
                animation-name: color; 
                animation-duration: 25s; 
                padding-top: 30px; 
                padding-bottom: 30px; 
            } 
            @keyframes color { 
                0% { 
                    background-color: red; 
                } 
                50% { 
                    background-color: orange; 
                } 
                100% { 
                    background-color: brown; 
                } 
            } 
        </style> 
    </head> 
    <body> 
        <div id="gfg">GeeksforGeeks</div> 
    </body> 
</html>
```

---

## 41. What does the CSS box-sizing property do?

The box-sizing CSS property defines how the user should calculate the total width and height of an element.

**Syntax:**
```css
box-sizing: content-box | border-box;
```

### Property Values:

**content-box** - Default value. Width and height include only the content. Border and padding are added to final rendered width.

**border-box** - Width and height include content, padding, and borders. Content box shrinks to absorb extra width.

---

## 42. How can we make our website responsive using CSS?

Media query is used to create a responsive web design. It means that the view of a web page differs from system to system based on screen or media types.

### Media Queries Can Check:

- Width and height of the viewport
- Width and height of the device
- Orientation
- Resolution

**Syntax:**
```css
@media not | only mediatype and (expression) {
    // Code content
}
```

---

## 43. What is CSS flexbox?

Flexbox, also called the flexible box model, is a layout model for arranging items in a container. Unlike block and inline layouts, Flexbox is more flexible.

To use Flexbox, create a flex container by setting `display: flex`.

**Syntax:**
```css
.main-container {
    display: flex;
}
```

### Flex Properties:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

---

## 44. What is CSS Grid?

It is a CSS property that offers a grid-based layout system, with rows and columns, making it easier to design web pages without floats and positioning.

**Syntax:**
```css
grid: none | grid-template-rows / grid-template-columns | grid-template-areas | grid-template-rows / [grid-auto-flow] grid-auto-columns | [grid-auto-flow] grid-auto-rows / grid-template-columns | initial | inherit;
```

---

## 45. What is the difference between flexbox and grid?

| Aspect | Flexbox | Grid |
|--------|---------|------|
| **Dimensionality** | One-dimensional (columns or rows) | Two-dimensional (rows and columns) |
| **Alignment** | Flex Direction for alignment | Fractional measure units for grid fluidity |
| **Item Management** | Flex Container/Item model | Implicit and explicit content placement |
| **Support Type** | Content First | Layout First |

### Key Differences:

- **Dimensionality:** Flexbox is one-dimensional; Grid is two-dimensional
- **Alignment:** Flexbox aligns vertically/horizontally; Grid uses fractional units
- **Use Case:** Flexbox for component layout; Grid for page layout

---

## 46. What is the best way to include a CSS file? Why use @import?

The External Style Sheet (using HTML `<link>` Tag) is the best method used to link the element. The `<link>` tag is placed in the HTML `<head>` element.

### @import rule:
The @import rule is used to import one style sheet into another style sheet. This rule also supports media queries so that the user can import the media-dependent style sheet.

**Characteristics of @import:**

- Used to import a style sheet into an HTML page or another style sheet
- Supports media queries for media-dependent imports
- Always declared at the top of the document

**Syntax:**
```css
@import url|string list-of-mediaqueries;
```

---

## 47. How case-sensitive is CSS?

All CSS style sheets are case-insensitive, except for portions that are not under the control of CSS. For example, the case sensitivity due to values of the HTML attributes "id" and "class", font names, and URIs lies outside the scope of CSS.

---

## 48. What does CSS Animations allow?

CSS allows the animation of HTML elements without using JavaScript. An animation lets an element systematically and with proper timing, change from one style to another.

You can change whatever CSS properties you want, and repeat a number of times as you want it. To use CSS animation, you must first specify some `@keyframes` for the animation.

The `@keyframes` property divided the animation time into parts/percentage and perform an activity that is specified for that part of the whole duration of the animation.

---

## 49. What is @keyframes used for?

Keyframes are the foundations with the help of which CSS Animations work. They define the display of the animation at the respective stages of its whole duration.

**Example:**
```html
<!DOCTYPE html> 
<html> 
<head> 
    <style> 
        div { 
            width: 200px; 
            height: 200px; 
            margin: 200px; 
            border-radius: 100px; 
            background-color: red; 
            animation: circle 8s infinite; 
        } 

        @keyframes circle { 
            0% { 
                background-color: red; 
            } 
            25% { 
                background-color: yellow; 
            } 
            50% { 
                background-color: blue; 
            } 
            100% { 
                background-color: green; 
            } 
        } 
    </style> 
</head> 
<body> 
    <div></div> 
</body> 
</html>
```

---

## 50. What are CSS counters?

Counters in CSS are basically variables that can be used for numbering and values of CSS counters may be incremented by CSS rules. CSS counters can be used to increment the numbering of the headings automatically.

### CSS Counter Properties:

- **counter-reset:** Reset a counter
- **counter-increment:** Increment a counter value
- **content:** Generate content
- **counter() or counters() function:** Display counter value

### Initialization:

To use the CSS counter property firstly it must be created with the `counter-reset` property. The counter is initialized to a value 0 by default.

**Syntax:**
```css
counter-reset: myCounter;
```

### Incrementation and Use:

**Syntax:**
```css
counter-increment: myCounter;
content: counter(myCounter);
```

---

## 51. What is meant by universal selector?

The `*` selector in CSS is used to select all the elements in an HTML document. It also selects all elements which are inside under another element. It is also called the universal selector.

**Syntax:**
```css
* {
    // CSS property
} 
```

---

## 52. What is RWD?

Responsive Web Design comprises two words: responsive and web design. Responsive Web Design is the website that responds to or resizes or adjusts itself depending upon the screen size it is being seen through.

It automatically adjusts to fit the user's screen whether it's desktop, laptop, mobile, tablet, etc. It only uses one layout for a web page and it can be done either using CSS and HTML or CSS3 and HTML5.

---

## 53. What is the difference between class and id selector?

### ID Selector (#)
The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page.

**Syntax:**
```css
#element_id_name {
    // CSS properties
}
```

### Class Selector (.)
The class selector selects HTML elements with a specific class attribute.

**Syntax:**
```css
.element_class_name {
    // CSS properties
}
```

### Differences:

| Feature | Class Selector (.) | ID Selector (#) |
|---------|------------------|-----------------|
| **Used For** | Represents `class="class_name"` | Represents `id="id_name"` |
| **Multiple Per Element** | YES - Elements can have multiple classes | NO - Only one id per element |
| **Uniqueness** | Not unique - multiple elements can share same class | Unique - id is unique within the page |
| **Reusability** | Highly reusable | Used for single unique element |

---

## 54. How can we use pagination in CSS?

Pagination is the process of dividing the document into pages and providing them with numbers.

### Types of Pagination:

- Simple Pagination
- Active and Hoverable Pagination
- Rounded Active and Hoverable Buttons
- Hoverable Transition Effect
- Bordered Pagination
- Rounded Border Pagination
- Centered Pagination
- Space between Pagination
- Pagination Size

### Simple Pagination:

**Syntax:**
```css
.pagination {
    display: type;
}

.pagination body {
    color: colorname;
    decoration: type;
}
```

---

## 55. What is CSS Image reflection?

The `box-reflect` property is used to create an image reflection.

### Attributes:

- **below:** Create a reflection below the original image
- **above:** Create a reflection above the original image
- **left:** Create a reflection on the left side of the original image
- **right:** Create a reflection on the right side of the original image

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        img {
            -webkit-box-reflect: right;
        }
    </style>
</head>
<body>
    <h1>CSS Image Reflection</h1>
    <p>Shows the reflection of the image on right side:</p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210322123023/gfg2.png">
</body>
</html>
```

---

## 56. How can we create multiple columns of text-like newspapers using CSS?

The multiple columns are used to create column layouts on the web pages.

### Column Properties:

- column-count
- column-gap
- column-rule-style
- column-rule-width
- column-rule-color
- column-rule
- column-span
- column-width

**Example:**
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Column-count property</title>
        <style>
        .geeks_content {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            padding-top: 35px;
            text-align: justify;
        }
        .gfg {
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color: green;
        }
        .geeks {
            text-align: center;
        }
        </style>
    </head>
    <body>
        <div class="gfg">GeeksforGeeks</div>
        <div class="geeks">A computer science portal for geeks</div>
        <div class="geeks_content">
            Sudo Placement: Prepare for the Recruitment drive...
        </div>
    </body>
</html>
```

---

## 57. How can we give a shadow effect to our text in CSS?

The `text-shadow` property is used to add shadow to text. This property accepts a comma-separated list of shadows to be applied to the text.

**Syntax:**
```css
text-shadow: h-shadow v-shadow blur-radius color | none | initial;
```

---

## 58. What is !important?

The `!important` property in CSS is used to provide more weight (importance) than normal property. It means "this is important", ignore all subsequent rules, and apply this !important rule.

The `!important` keyword must be placed at the end of the line, immediately before the semicolon.

It adds importance to all the sub-properties that the shorthand property represents and is used for overriding styles previously declared in other style sources.

**Syntax:**
```css
element {
    color: blue !important;
    font-size: 14px !important; 
}
```

---

## 59. What is specificity in CSS?

When more than one set of CSS rules applies to the same element, the browser will have to decide which specific set will be applied to the element. The rules the browser follows are collectively called Specificity.

### Specificity Hierarchy:

1. **Inline style** - Highest priority
2. **Identifiers (ID)** - Second-highest priority
3. **Classes, pseudo-classes, and attributes** - Third priority
4. **Elements and pseudo-elements** - Lowest priority

### Specificity Rules:

- CSS style applied by referencing external stylesheet has the lowest precedence
- External CSS is overridden by Internal CSS
- Internal CSS is overridden by Inline CSS
- Inline CSS has the highest priority and overrides all other selectors

---

## 60. What are the attribute selectors?

The CSS Attribute Selector is used to target and style elements based on their attributes or attribute values.

### Types of Attribute Selectors:

**[attribute]** - Select all elements with the specified attribute
```css
[class] { /* CSS */ }
```

**[attribute="value"]** - Select elements whose attribute has the exact value
```css
[class="value"] { /* CSS */ }
```

**[attribute~="value"]** - Select elements whose attribute value contains the specified value as a whole word
```css
[attribute~="value"] { /* CSS */ }
```

**[attribute|="value"]** - Select elements whose attribute value is hyphen-separated and starts with specified value
```css
[attribute|="value"] { /* CSS */ }
```

**[attribute^="value"]** - Select elements whose attribute value begins with the specified value
```css
[attribute^="value"] { /* CSS */ }
```

**[attribute$="value"]** - Select elements whose attribute value ends with the specified value
```css
[attribute$="value"] { /* CSS */ }
```

**[attribute*="value"]** - Select elements whose attribute value contains the specified value anywhere
```css
[attribute*="value"] { /* CSS */ }
```

---

# SCSS Interview Questions and Answers

SCSS (Sassy CSS) is a CSS preprocessor that extends CSS with powerful features like variables, nesting, mixins, and functions. It allows you to write more maintainable and scalable stylesheets.

---

## 1. What is SCSS and how is it different from CSS?

SCSS is a CSS preprocessor that adds programming capabilities like variables, nesting, and mixins to CSS. SCSS gets compiled to standard CSS that browsers understand.

### Key Differences:

| Feature | CSS | SCSS |
|---------|-----|------|
| **Variables** | Not supported | Supported with $ prefix |
| **Nesting** | Not supported | Supported for nested rules |
| **Mixins** | Not supported | Supported for reusable code blocks |
| **Functions** | Not supported | Built-in and custom functions |
| **Inheritance** | Manual CSS | @extend for style inheritance |
| **Mathematical Operations** | Not supported | Supported (+, -, *, /, %) |
| **Compiler** | Not needed | Requires compilation to CSS |

---

## 2. What is the difference between SCSS and SASS?

Both SCSS and SASS are CSS preprocessors, but they have different syntaxes.

| Feature | SASS | SCSS |
|---------|------|------|
| **Syntax** | Uses indentation (no braces or semicolons) | Uses braces {} and semicolons like CSS |
| **File Extension** | .sass | .scss |
| **Readability** | More compact | More similar to CSS |
| **Learning Curve** | Steeper | Easier for CSS developers |
| **Compatibility** | Requires conversion to CSS | Directly usable in CSS files |

**SASS Example:**
```sass
$primary-color: #333
body
  color: $primary-color
  font-size: 14px
```

**SCSS Example:**
```scss
$primary-color: #333;
body {
  color: $primary-color;
  font-size: 14px;
}
```

---

## 3. What are SCSS variables?

SCSS variables are declared with the `$` prefix and store reusable values throughout your stylesheet.

**Syntax:**
```scss
$variable-name: value;
```

**Example:**
```scss
$primary-color: #3498db;
$base-font-size: 16px;
$border-radius: 4px;

body {
  color: $primary-color;
  font-size: $base-font-size;
}

button {
  border-radius: $border-radius;
  background-color: $primary-color;
}
```

**Compiled CSS:**
```css
body {
  color: #3498db;
  font-size: 16px;
}

button {
  border-radius: 4px;
  background-color: #3498db;
}
```

---

## 4. What is nesting in SCSS?

Nesting allows you to nest CSS selectors in a way that follows the same visual hierarchy of your HTML.

**Syntax:**
```scss
selector {
  property: value;
  
  nested-selector {
    property: value;
  }
}
```

**Example:**
```scss
.navbar {
  background-color: #333;
  padding: 10px;
  
  .nav-item {
    display: inline-block;
    margin-right: 15px;
    
    &:hover {
      color: #fff;
    }
  }
  
  .nav-link {
    text-decoration: none;
    color: #fff;
  }
}
```

**Compiled CSS:**
```css
.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar .nav-item {
  display: inline-block;
  margin-right: 15px;
}

.navbar .nav-item:hover {
  color: #fff;
}

.navbar .nav-link {
  text-decoration: none;
  color: #fff;
}
```

---

## 5. What is the `&` (ampersand) in SCSS?

The `&` symbol in SCSS refers to the parent selector. It allows you to reference and manipulate the parent selector within nested rules.

**Example:**
```scss
.button {
  padding: 10px 20px;
  border: none;
  
  &:hover {
    background-color: darkblue;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &-primary {
    background-color: blue;
  }
  
  &-secondary {
    background-color: gray;
  }
}
```

**Compiled CSS:**
```css
.button {
  padding: 10px 20px;
  border: none;
}

.button:hover {
  background-color: darkblue;
}

.button:active {
  transform: scale(0.95);
}

.button-primary {
  background-color: blue;
}

.button-secondary {
  background-color: gray;
}
```

---

## 6. What are mixins in SCSS?

Mixins are reusable blocks of code that can be included in multiple selectors. They help reduce code duplication and make your stylesheets more maintainable.

**Syntax:**
```scss
@mixin mixin-name {
  property: value;
}

selector {
  @include mixin-name;
}
```

**Example:**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal {
  @include flex-center;
  height: 100vh;
}

.btn-primary {
  @include button-style(#3498db, white);
}

.btn-secondary {
  @include button-style(#95a5a6, white);
}
```

**Compiled CSS:**
```css
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

---

## 7. What is the `@extend` directive in SCSS?

The `@extend` directive allows one selector to inherit the styles of another selector, promoting code reuse and maintaining cleaner compiled CSS.

**Syntax:**
```scss
.base-class {
  property: value;
}

.child-class {
  @extend .base-class;
  property: value;
}
```

**Example:**
```scss
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  @extend .button;
  background-color: #3498db;
  color: white;
}

.button-secondary {
  @extend .button;
  background-color: #95a5a6;
  color: black;
}
```

**Compiled CSS:**
```css
.button, .button-primary, .button-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  background-color: #3498db;
  color: white;
}

.button-secondary {
  background-color: #95a5a6;
  color: black;
}
```

---

## 8. What is the difference between `@extend` and `@include` (mixins)?

| Feature | @extend | @include (Mixin) |
|---------|---------|-----------------|
| **Purpose** | Inherit styles from existing selector | Include reusable code block |
| **Compiled Output** | Groups selectors together | Duplicates code in each selector |
| **Parameters** | Not supported | Supported via mixin parameters |
| **File Size** | Generally smaller | Can be larger with many includes |
| **Use Case** | Extend semantic classes | Reuse code blocks with variations |

---

## 9. What are SCSS functions?

SCSS functions perform calculations and return values. SCSS comes with built-in functions and you can create custom functions.

### Built-in Functions:

**Color Functions:**
```scss
lighten($color, $amount)   // Lighten a color
darken($color, $amount)    // Darken a color
mix($color1, $color2)      // Mix two colors
rgba($color, $alpha)       // Add alpha/transparency
```

**Math Functions:**
```scss
round($number)             // Round a number
ceil($number)              // Round up
floor($number)             // Round down
abs($number)               // Absolute value
```

**String Functions:**
```scss
str-length($string)        // Get string length
str-slice($string, $start) // Extract substring
to-upper-case($string)     // Convert to uppercase
to-lower-case($string)     // Convert to lowercase
```

**Example:**
```scss
$primary-color: #3498db;
$base-spacing: 8px;

body {
  background-color: lighten($primary-color, 20%);
  margin: $base-spacing * 2;
  padding: round($base-spacing * 1.5);
}

button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

---

## 10. How do you create custom functions in SCSS?

Custom functions are created using the `@function` directive and return values using the `@return` statement.

**Syntax:**
```scss
@function function-name($parameter1, $parameter2) {
  @return value;
}
```

**Example:**
```scss
@function calculate-rem($pixels) {
  @return ($pixels / 16) * 1rem;
}

@function get-color($type) {
  @if $type == 'primary' {
    @return #3498db;
  }
  @else if $type == 'secondary' {
    @return #95a5a6;
  }
  @else {
    @return #000;
  }
}

body {
  font-size: calculate-rem(14);
}

.primary-btn {
  background-color: get-color('primary');
}
```

---

## 11. What are SCSS partials?

SCSS partials are separate `.scss` files that contain fragments of CSS. They are included in other SCSS files using the `@import` directive.

**Naming Convention:** Partial files are prefixed with an underscore: `_partial-name.scss`

**Example File Structure:**
```
styles/
├── _variables.scss
├── _mixins.scss
├── _buttons.scss
├── _forms.scss
└── main.scss
```

**_variables.scss:**
```scss
$primary-color: #3498db;
$secondary-color: #95a5a6;
$base-spacing: 8px;
```

**_mixins.scss:**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**main.scss:**
```scss
@import 'variables';
@import 'mixins';
@import 'buttons';
@import 'forms';

body {
  color: $primary-color;
  font-size: 14px;
}
```

---

## 12. What is the `@import` directive in SCSS?

The `@import` directive is used to import other SCSS files into the current SCSS file. This helps organize your code into smaller, manageable files.

**Syntax:**
```scss
@import 'path/to/file';
```

**Example:**
```scss
@import 'variables';
@import 'mixins';
@import 'components/header';
@import 'components/footer';
@import 'components/buttons';
```

**Note:** The file extension and underscore prefix are optional in imports.

---

## 13. What are SCSS control directives?

Control directives allow you to use conditional logic and loops in your SCSS, making your stylesheets more dynamic.

### `@if`, `@else if`, `@else`:

```scss
@mixin text-style($style) {
  @if $style == 'heading' {
    font-size: 32px;
    font-weight: bold;
  }
  @else if $style == 'subheading' {
    font-size: 24px;
    font-weight: 600;
  }
  @else {
    font-size: 16px;
  }
}

h1 {
  @include text-style('heading');
}

h2 {
  @include text-style('subheading');
}
```

### `@for` loop:

```scss
@for $i from 1 through 5 {
  .col-#{$i} {
    width: (100% / 5) * $i;
  }
}
```

**Compiled CSS:**
```css
.col-1 { width: 20%; }
.col-2 { width: 40%; }
.col-3 { width: 60%; }
.col-4 { width: 80%; }
.col-5 { width: 100%; }
```

### `@each` loop:

```scss
$sizes: small, medium, large;

@each $size in $sizes {
  .text-#{$size} {
    font-size: (if ($size == small, 12px, if ($size == medium, 16px, 20px)));
  }
}
```

### `@while` loop:

```scss
$i: 1;

@while $i <= 3 {
  .item-#{$i} {
    width: 100% / $i;
  }
  $i: $i + 1;
}
```

---

## 14. How do you use interpolation in SCSS?

Interpolation allows you to embed expressions within selectors, properties, and strings using the `#{}` syntax.

**Syntax:**
```scss
#{$variable}
#{expression}
```

**Example:**
```scss
$component: button;
$size-small: 12px;
$size-large: 18px;

.#{$component} {
  font-size: $size-small;
  
  &--large {
    font-size: $size-large;
  }
}

$breakpoint: 768px;
@media (max-width: #{$breakpoint}) {
  body {
    font-size: 14px;
  }
}

// Using in selectors
$name: "primary";
.btn-#{$name} {
  background-color: blue;
}
```

**Compiled CSS:**
```css
.button {
  font-size: 12px;
}

.button--large {
  font-size: 18px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

.btn-primary {
  background-color: blue;
}
```

---

## 15. What are SCSS maps?

Maps are data structures that store key-value pairs, similar to objects or dictionaries in other programming languages.

**Syntax:**
```scss
$map-name: (
  key1: value1,
  key2: value2,
  key3: value3
);
```

**Example:**
```scss
$colors: (
  'primary': #3498db,
  'secondary': #95a5a6,
  'success': #2ecc71,
  'danger': #e74c3c,
  'warning': #f39c12
);

$breakpoints: (
  'small': 576px,
  'medium': 768px,
  'large': 992px,
  'extra-large': 1200px
);

// Accessing map values
body {
  color: map-get($colors, 'primary');
}

.btn-success {
  background-color: map-get($colors, 'success');
}

@media (max-width: map-get($breakpoints, 'medium')) {
  .container {
    width: 100%;
  }
}
```

**Map Functions:**
```scss
map-get($map, key)         // Get value by key
map-keys($map)             // Get all keys
map-values($map)           // Get all values
map-has-key($map, key)     // Check if key exists
map-merge($map1, $map2)    // Merge two maps
```

---

## 16. What are SCSS lists?

Lists are collections of values separated by spaces or commas. They are similar to arrays in other programming languages.

**Syntax:**
```scss
$list-name: value1, value2, value3;
// or
$list-name: value1 value2 value3;
```

**Example:**
```scss
$colors: #ff0000, #00ff00, #0000ff;
$sizes: 12px 14px 16px 18px 20px;

// Accessing list items
@each $color in $colors {
  .color-#{$color} {
    background-color: $color;
  }
}

// List functions
length($list)              // Get list length
nth($list, $index)         // Get item at index
index($list, $value)       // Get index of value
append($list, $value)      // Add item to list
join($list1, $list2)       // Combine two lists
```

---

## 17. What is the `&` with multiple levels of nesting?

The `&` can be used at multiple nesting levels to reference parent selectors at different levels.

**Example:**
```scss
.card {
  border: 1px solid #ccc;
  
  .card-header {
    background-color: #f5f5f5;
    
    &:hover {
      background-color: #e0e0e0;
    }
  }
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    .card-header {
      background-color: #ddd;
    }
  }
}
```

**Compiled CSS:**
```css
.card {
  border: 1px solid #ccc;
}

.card .card-header {
  background-color: #f5f5f5;
}

.card .card-header:hover {
  background-color: #e0e0e0;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover .card-header {
  background-color: #ddd;
}
```

---

## 18. How can you use SCSS for responsive design?

SCSS makes responsive design easier with variables, mixins, and nested media queries.

**Example:**
```scss
$breakpoints: (
  'mobile': 480px,
  'tablet': 768px,
  'desktop': 1024px
);

@mixin respond-to($breakpoint) {
  @media (max-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

.container {
  width: 1200px;
  
  @include respond-to('desktop') {
    width: 960px;
  }
  
  @include respond-to('tablet') {
    width: 768px;
  }
  
  @include respond-to('mobile') {
    width: 100%;
    padding: 0 15px;
  }
}
```

---

## 19. What is the `!default` flag in SCSS?

The `!default` flag assigns a variable only if it hasn't been assigned yet. This is useful for creating configurable libraries.

**Syntax:**
```scss
$variable: default-value !default;
```

**Example:**
```scss
// In a library
$primary-color: #3498db !default;
$secondary-color: #95a5a6 !default;

// In user's code
$primary-color: #e74c3c; // Override default

@import 'library';

body {
  color: $primary-color; // Uses #e74c3c
}
```

---

## 20. What are SCSS operators?

SCSS supports various operators for calculations and comparisons.

### Math Operators:
```scss
$a: 10px;
$b: 5px;

.box {
  width: $a + $b;            // Addition: 15px
  height: $a - $b;           // Subtraction: 5px
  padding: $a * 2;           // Multiplication: 20px
  margin: $a / $b;           // Division: 2
  border-width: $a % $b;     // Modulo: 0
}
```

### Comparison Operators:
```scss
$a: 10;
$b: 5;

@if $a > $b {
  // $a is greater than $b
}

@if $a < $b {
  // $a is less than $b
}

@if $a == $b {
  // $a equals $b
}

@if $a != $b {
  // $a does not equal $b
}
```

### Logical Operators:
```scss
@if $condition1 and $condition2 {
  // Both conditions are true
}

@if $condition1 or $condition2 {
  // At least one condition is true
}

@if not $condition {
  // Condition is false
}
```

---

## 21. What is SCSS and why use it?

SCSS is a CSS preprocessor that extends CSS with programming capabilities. It compiles to standard CSS that browsers understand.

### Benefits:

- **Variables:** Reuse values throughout your stylesheet
- **Nesting:** More readable and organized code
- **Mixins:** Reusable code blocks
- **Functions:** Perform calculations and logic
- **Partials:** Organize code into smaller files
- **Extends:** Reduce code duplication
- **Operations:** Mathematical operations
- **Better Maintainability:** Easier to maintain large stylesheets

---

## 22. How do you compile SCSS to CSS?

There are several ways to compile SCSS to CSS:

### 1. Using Node-sass:
```bash
npm install -g node-sass
node-sass input.scss output.css
```

### 2. Using Sass CLI:
```bash
npm install -g sass
sass input.scss output.css
```

### 3. Using Build Tools (Webpack, Gulp, Grunt):
```bash
npm install --save-dev webpack webpack-cli sass-loader style-loader
```

### 4. Using VS Code Extensions:
Install "Live Sass Compiler" extension for automatic compilation.

### 5. Using Online Compilers:
- https://jsoncrack.com/editor
- https://sassmeister.com/

---

## 23. What are SCSS placeholder selectors?

Placeholder selectors are special selectors that don't appear in the final CSS but can be extended. They start with `%`.

**Syntax:**
```scss
%placeholder {
  property: value;
}

.selector {
  @extend %placeholder;
}
```

**Example:**
```scss
%clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}

.wrapper {
  @extend %clearfix;
}
```

**Compiled CSS:**
```css
.container:after,
.wrapper:after {
  content: "";
  display: table;
  clear: both;
}
```

---

## 24. How do you organize a large SCSS project?

Organize SCSS files using the 7-1 pattern or similar structure:

```
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _global.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _sidebar.scss
│   └── _container.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   └── _modals.scss
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   └── _contact.scss
├── themes/
│   └── _dark-theme.scss
├── vendors/
│   └── _bootstrap.scss
└── main.scss
```

**main.scss:**
```scss
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'vendors/bootstrap';
@import 'base/reset';
@import 'base/typography';
@import 'base/global';
@import 'layout/header';
@import 'layout/footer';
@import 'components/buttons';
@import 'components/cards';
@import 'pages/home';
@import 'themes/dark-theme';
```

---

## 25. What is the difference between `@import` in SCSS and CSS?

| Feature | SCSS @import | CSS @import |
|---------|-------------|-----------|
| **Compilation** | Combines files before compilation | Separate HTTP requests |
| **Performance** | Better (single CSS file) | Slower (multiple requests) |
| **Partial Support** | Supports partials with underscore | Not supported |
| **Variables** | Variables accessible across imports | Not supported |
| **Execution** | Synchronous | Asynchronous |

---

## Summary

These SCSS interview questions cover:

- **Fundamentals:** SCSS basics vs CSS and SASS
- **Variables:** Storing and reusing values
- **Nesting:** Organized and hierarchical code
- **Mixins:** Reusable code blocks
- **Extends:** Style inheritance
- **Functions:** Built-in and custom functions
- **Advanced Features:** Maps, lists, loops, functions
- **Organization:** Project structure and best practices
- **Compilation:** Converting SCSS to CSS
- **Performance:** Optimization techniques

Master these concepts to write more maintainable, scalable, and efficient stylesheets using SCSS!




# Css And SCSS quick notes. 
# CSS & SCSS Interview Questions and Answers

---

# 🎯 CSS Interview Questions

## 1. What is CSS?
CSS (Cascading Style Sheets) is used to style HTML elements like colors, layout, spacing, and animations.

---

## 2. What is the Box Model?
Includes:
- Content
- Padding
- Border
- Margin

Total size = content + padding + border + margin

---

## 3. What is Flexbox?
Used for flexible layouts.

```css
.container {
  display: flex;
}
```

---

## 4. Difference between Flexbox and Grid

| Flexbox | Grid |
|--------|------|
| 1D layout | 2D layout |
| Row OR column | Row AND column |

---

## 5. What is Specificity?
Priority:
Inline > ID > Class > Element

---

## 6. Display Property
- block
- inline
- inline-block
- none

---

## 7. Position Property
- static
- relative
- absolute
- fixed
- sticky

---

## 8. What is z-index?
Controls which element appears on top.

```css
z-index: 10;
```

---

## 9. Responsive Design
Using media queries:

```css
@media (max-width: 600px) {
  body {
    background: red;
  }
}
```

---

## 10. Pseudo-classes & Pseudo-elements

```css
a:hover {
  color: red;
}

p::before {
  content: "Hello ";
}
```

---

## 11. Class vs ID

| Class | ID |
|------|----|
| Reusable | Unique |
| .class | #id |

---

## 12. Overflow

```css
overflow: hidden;
overflow: scroll;
overflow: auto;
```

---

## 13. Float & Clear

```css
float: left;
clear: both;
```

---

## 14. Opacity

```css
opacity: 0.5;
```

---

## 15. Margin vs Padding

| Margin | Padding |
|-------|--------|
| Outside | Inside |

---

## 16. CSS Variables

```css
:root {
  --main-color: blue;
}

p {
  color: var(--main-color);
}
```

---

## 17. Transform

```css
transform: rotate(45deg);
transform: scale(1.5);
```

---

## 18. Transition

```css
transition: all 0.3s ease;
```

---

## 19. !important

```css
color: red !important;
```

Avoid overuse.

---

# 🚀 SCSS Interview Questions

---

## 1. What is SCSS?
SCSS is a CSS preprocessor that adds features like variables, nesting, mixins, and functions.

---

## 2. SCSS vs Sass

| SCSS | Sass |
|------|------|
| Uses {} and ; | Indentation-based |

---

## 3. Variables

```scss
$primary-color: blue;

p {
  color: $primary-color;
}
```

---

## 4. Nesting

```scss
nav {
  ul {
    li {
      color: red;
    }
  }
}
```

---

## 5. Mixins

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
}
```

---

## 6. Functions

```scss
@function double($num) {
  @return $num * 2;
}

div {
  width: double(10px);
}
```

---

## 7. @extend (Inheritance)

```scss
.button {
  padding: 10px;
}

.primary-btn {
  @extend .button;
}
```

---

## 8. Partials

File name starts with `_`

```
_variables.scss
```

Import:

```scss
@import 'variables';
```

---

## 9. @use vs @import

| @import | @use |
|--------|------|
| Old | Modern |
| Global | Scoped |

---

## 10. Operators

```scss
width: 100% / 2;
```

---

## 11. Loops

```scss
@for $i from 1 through 3 {
  .box-#{$i} {
    width: 100px * $i;
  }
}
```

---

## 12. Interpolation

```scss
$name: "box";

.#{$name} {
  color: red;
}
```

---

## 13. Conditionals

```scss
$theme: dark;

body {
  @if $theme == dark {
    background: black;
  } @else {
    background: white;
  }
}
```

---

## 14. Parent Selector (&)

```scss
button {
  &:hover {
    color: red;
  }
}
```

---

## 15. Maps

```scss
$colors: (
  primary: blue,
  secondary: green
);

p {
  color: map-get($colors, primary);
}
```

---

## 16. Advantages of SCSS
- Reusable code
- Cleaner structure
- Supports logic
- Easy maintenance

---

## 17. Disadvantages of SCSS
- Requires compilation
- Slight learning curve

---

# 💡 Interview Tips

- Explain with examples
- Avoid over-nesting
- Prefer @use over @import
- Know real-world use cases
- Practice writing code

---