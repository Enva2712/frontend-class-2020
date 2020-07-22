---
title: Simple Document Manipulation
lesson: 3.1
---

# Simple Document Manipulation

## Using JavaScript

To add some JavaScript code to a webpage, the `script` tag is used. Like the `style` tag for CSS, the `script` tag can be a container for JavaScript code. Unlike the `style` tag, a `script` tag can also be used to load JavaScript from another file. JavaScript can't be loaded using a `link` tag. Here are some examples:

```html
<!-- This is an inline script. That means that the JavaScript code is put inside the <script> tag -->
<script>
    /* JavaScript comments can look like CSS comments */
    // But JavaScript also has one line comments
    // A one line comment starts with '//' and doesn't need to be closed
    /*
        Multiline comments can span multiple lines though
    */
    let greeting = 'Hello World';
    console.log(greeting);
</script>

<!-- This is a referenced script. It will load the JavaScript from the 'script.js' file -->
<script src="script.js"></script>
```

## JavaScript Basics

Create a new HTML file, and add a script tag to it so you can follow along with the code below. If something doesn't make sense, try putting in in the script tag and using the `console.log()` function to print values to the console tab of your developer tools. To print the value of a variable called horse, you would use `console.log(horse)`.

Most guides on programming languages start by showing language constructs before giving a reason to need them. Here's some simple JavaScript that changes the page without using anything like variables or functions:

```js
document.body.textContent = 'I just modified the page'
```

`document` is a global variable that gives you access to the HTML of a page. A variable is just a box you create to store a value, and a global variable is one that you can access from any script tag.

`document` has a property `body` that references the HTML `<body>` element. To change it's content, you can set the `textContent` property of `document.body`. A property is a key that lets you select a certain value on an object. More on variables and objects below.

### Variables

In JavaScript, you can store information for later using variables. There are few ways to declare variables in JavaScript, but usually it makes sense to use `let`. There's also a `const` keyword for declaring a constant value that you can't change. Additionally, there's an older keyword called `var`, but it has more complicated scoping than `let` and `const`. This is getting long, so here's some code:

```js
// There are a few different data types in JavaScript
// Strings represent some text, and must be wrapped in quotation marks 
// single or double quotes work, as long as the opening quote matches the closing one.
let text = 'This is a string';
text = 'To change a variable, no keyword is needed. Just set it equal to the new value';

// Numbers are used to store numeric values
// Because const is used here, number cannot be changed later in the code
const number = 44000;
number = 7; // This isn't allowed. It will throw an error

// Booleans represent true/false values
let thisIsJavaScript = true
let thisIsACat = false

// Arrays store multiple different values
// An array is created using square brackets
let array = ['This is a string in an array', 7, 'hello'];
// To get an element from an array, use brackets after the variable name.
array[0]; // Arrays are zero indexed. To get the first element, use an index of 0.
array[1] = 8; // You can change the value of elements in an array

// Objects store key-value pairs
// They are created using curly braces
let object = {
    name: 'Mary',
    age: 153
};
// There are two ways to get values from an object
object.name; // Dot notation
object['name']; // Bracket notation

// Objects and arrays can store other objects or arrays:
let people = [
    {
        firstName: 'Mary',
        lastName: 'Curie',
        age: 153
    },
    {
        firstName: 'Herman',
        lastName: 'Melville',
        age: 201
    }
];
```

### Functions

Sometimes, there's code you want to run over and over again with few differences. Usually, a function is a good way to do this. Functions are bits of code that you can write once and call from other parts of your program. Here's a function that formats some text:

```js
function format(name, age) {
    return name + ' is ' + age + ' years old.';
}
```

To call a function, you use parentheses after the function's name, and put arguments in the parenthesis.

```js
format('Ibn Sina', 1040);

// A function can also take variables as parameters:
let person = {
    name: 'Musa I',
    age: 740
}

format(person.name, person.age)
```

### Conditionals

A conditional statement runs some code if a certain condition is met.

```js
let isACat = false;
let isJavaScript = true;

if(isJavaScript) {
    console.log('Cool.')
} else if (isACat) {
    console.log('Fluffy?')
} else {
    console.log('Neither JavaScript or a cat. Something has gone horribly wrong...')
}
```

Conditional statements always have an `if` statement, might have some `else if` statements, and might have an `else` statement. The statements must come in that order. As such, all of the following are valid conditionals (assuming that the functions and variables used in them have already been defined):

```js
if(iAmAnAlpaca) {
    spit();
}

if(myDeskHasSpace) {
    clutterDesk();
} else {
    moveEverythingOver();
    clutterDesk();
}

// Date is a class built into JavaScript
// It lets our program access the time and date.
// Classes are covered further down
let now = new Date();
let currentHour = now.getHours();

if(currentHour < 9 /* 9AM */) {
    steep('Sencha');
} else if (currentHour < 20 /* 8PM */) {
    steep('Pepperment');
} else {
    steep('Chamomile');
}
```

## Document Manipulation

Earlier, we used `element.textContent` to change the text in an element. If we try to set an element's text content to `<b>Bold</b>`, we don't get '<b>Bold</b>'; we get '&lt;b&gt;Bold&lt;/b&gt;'. That's because `textContent` escapes text for us as a security feature. In general, it's bad practice to use HTML strings in JavaScript, because it forces the browser to parse the HTML before putting it into the page, which can slow down a webpage. It also opens up the chance of [Cross Site Scripting](https://owasp.org/www-community/attacks/xss/) attacks, where an attacker is able to run code in a page they don't own.

Instead of using the `element.innerHTML` property to create elements, we are going to use the Document Object Model. To create an element, use the `document.createElement` function.

Additionally, the `element.appendChild` method lets you insert an element into another. Below, a paragraph is created, given some text, and appended to the body element.

```js
let paragraphElement = document.createElement('p');
paragraphElement.textContent = 'This paragraph was created with JavaScript';

document.body.appendChild(paragraphElement);
```

### Finding elements

Using `document.body` gives us a way into the page, but not a flexible one. We can get a reference to the first element matching a CSS selector by using the `document.querySelector` function.

```js
// Find the first div with the class 'container'
let containerElement = document.querySelector('div.container');

// Build content
let content = document.createElement('p');
content.textContent = 'This is a paragraph';

let br = document.createElement('br');
content.appendChild(br);

// Create a link to google
let link = document.createElement('a');
link.setAttribute('href', 'https://google.com/')
link.textContent = 'This is a link inside the paragraph';
content.appendChild(link);

// Put content inside the div we found on the second line
containerElement.appendChild(content);
```

### Modifying CSS

To change the classes on an element, use the `element.classList` property. It has a few methods like `add`, `remove`, and `toggle` (and others) that let you detect and modify what classes an element has.

```js
let header = document.querySelector('header');
header.classList.add('show-nav');
```

JavaScript also has a convenient way to change the inline styles an element has. Using the `element.style` attribute, you can update CSS.

```js
let profilePhoto = document.querySelector('img.profilePhoto');
profilePhoto.border = '2px solid gray';
// CSS uses snake-case to name things, but JavaScript uses camelCase.
profilePhoto.borderRadius = '100%';
```

### Ignore All That Stuff Anyway Though

Creating large parts of a page using JavaScript is time consuming and hard to maintain. Understanding the DOM is important for knowing how to hook into and modify parts of a page, but it is unwieldy to use for larger projects. JavaScript frameworks exist to make doing those larger modifications simpler and more maintainable. If you need to build something large with lots of user interaction, consider learning a framework like [Svelte](https://svelte.dev/), [React](https://reactjs.org/), or [Vue](https://vuejs.org/). Those are outside of the scope of this class though.

## More Complicated Bits

### Classes

Classes are objects that have a function to set them up (called a constructor).

A class can access it's own properties using the `this` keyword.

```js
class Person {
    constructor(options) {
        let currentYear = (new Date()).getFullYear();
        this.name = options.name;
        this.age = currentYear - options.birthYear;
    }
}

let strunk = new Person({
    name: 'William Strunk',
    birthYear: 1869
})

// Now, we can access the person's age because we set it in the constructor
console.log(strunk.name + ' is ' + strunk.age + ' years old.')
```

Classes can also provide functions called methods that have access to the class instance.

```js
class Person {
    constructor(options) {
        this.name = options.name;
        this.birthYear = options.birthYear;
    }

    introduce() {
        let currentYear = (new Date()).getFullYear();
        // Using backticks instead of quotes let you use variables inside a string
        return `Hello, my name is ${this.name}, and I am ${currentYear - this.birthYear} years old.`;
    }
}

// Now, we can use the class name like a function to create a new instance of the class
// We need to use the new keyword first though
let deleuze = new Person({
    name: 'Gilles Deleuze',
    birthYear: 1925
});

console.log(deleuze.introduce());
```
