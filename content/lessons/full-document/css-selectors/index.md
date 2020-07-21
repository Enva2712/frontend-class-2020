---
title: CSS Selectors
lesson: 2.2
---

<div id="scroll-target"></div>

# CSS Selectors

So far, we have just been writing CSS declarations. A CSS declaration changes the way something looks. The key word there is something; how do we choose what element to change? The way we've been using so far is to write the CSS declarations inside the element's style attribute. This can get quite repetitive though, especially if there are many elements that look similar on a page. And what about maintaining that? If we want to change the background-color on all of our buttons, using style tags is time consuming and error prone.

## Selectors to the Rescue

To solve this problem, we will use CSS selectors. A CSS selector selects some elements in a document and lets you write declarations for all of them at once.

## Syntax

A selector goes before a declaration block. A declaration block is just curly braces surrounding some CSS declarations.

```css
selector {
    /* Declarations: */
    color: blue;
    border: 2px solid blue;
    padding: .3em;
}
```

A selector can be a tag name like `p` to style all `p` elements on a page. A selector can also start with a `.` or `#` to select elements by class or ID. Classes and IDs can be added to an element using the `class` and `id` attributes.

```html
<!-- If we don't add head or body tags, the browser will infer them and add
them for us where it makes sense -->
<style>
    /* Style an element with an id of some-span */
    #some-span {
        color: rebeccapurple;
        text-decoration: line-through;
    }
    /* Style any element with a class of button */
    .button {
        display: inline-block;
        padding: .1em .3em;
        margin: .2em;
        border: 2px solid salmon;
        /* border-radius rounds an element's corners */
        border-radius: .2em;
        text-decoration: none;
    }

    a {
        color: salmon;
    }
</style>

<span id="some-span">This text is unique</span>
<a href="https://example.com/">This is a link</a>
<a href="https://example.com/" class="button">This is a link with the button class</a>
```

## What are classes and IDs?

Classes and IDs are hooks into HTML from CSS. They allow CSS to reference specific elements but not others. They function the same from inside CSS, but there is a difference: IDs are meant to uniquely identify a single HTML element, while classes identify zero or more elements. Since they are meant to uniquely identify elements, IDs also have other functionality, like scrolling elements into view and selecting them from JavaScript. For example, the top of this article has an empty div with a unique id. It's possible to link to the invisible div using the `a` tag. <a href="#scroll-target">Here's an example</a>
