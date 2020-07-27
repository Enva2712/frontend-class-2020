---
title: Event Based Interactions
lesson: 3.2
---

# Event Based Interactions

So far, the JavaScript you've written has only changed the page when it first loaded, but often, websites need to react to user interactions like filling out a form or trying to open a menu. This is solved with event listeners. Events are created throughout a page's life, and JavaScript can hook into them to run code when certain events happen. The window, document, and DOM elements have a function called `addEventListener` that lets you listen for events. `addEventListener` takes a few arguments: an event name, and a callback function. There are a few more optional arguments, but they aren't used often.

```js
let form = document.querySelector('form');

// This function will be run when the form is submitted. It will be called with an event parameter.
function handleSubmit(event) {
    // The event parameter has a method 'preventDefault' that will stop the default action from happening.
    // In this case, it prevents the form from submitting.
    event.preventDefault();
    console.log('form submitted');
}

// Here, we tell the browser to call the handleSubmit function when the form is submitted.
// Note that we don't call the function by putting parenthesis after the function name.
// This is because we only want to give addEventListener access to handleSubmit, so it can call it later.
form.addEventListener('submit', handleSubmit)
```

Above, we define a function but only use it in a single place. This is a good use case for an anonymous function. An anonymous function is one that has no name. We can define it inside of the call to `addEventListener` to make the code simpler and easier to read.

```js
let form = document.querySelector('form');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log('form submitted');
})
```

To make the code more concise, we can use an arrow function. An arrow function is like an anonymous function, except for how the `this` value is handled. Arrow functions have no function keyword, but have `=>` written between the parameter list and code block.

```js
let form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('form submitted');
})
```

Event targets can each specify their own events, and there are quite a few; but here are some that get used quite often: `click`, `submit`, `keyup`, `touchstart`. Each of these has it's own data associated with it that will get passed to relevant callback functions when the event fires. Using this data in the callback is optional though.

```js
let inputElement = document.querySelector('input');
let submitButton = document.querySelector("input[type='submit']");

submitButton.addEventListener('click', () => {
    console.log('The form is submitting.');
});
inputElement.addEventListener('keyup', (event) => {
    // The keyup event will tell us what keyboard key was just released.
    // It's value is stored in the 'key' property of the event
    console.log(`The letter ${event.key} was typed into the input.`)
});
```

I put together an example of using event listeners to open a navigation menu when a button is pressed. It's not perfect, but it combines everything we've learned up to this point. The code is below, and you can see the result at <a href="example">./example</a>.

```html
{% include example.html %}
```
