---
title: CSS Declarations
lesson: 1.2
---

# CSS Declarations

HTML elements provide you with a way to describe content, but they don't give you free rein over how an element looks. CSS provides this functionality. For now, we will use CSS within our HTML document, but eventually, we will put the CSS into it's own file and reference the file in the HTML.

## Applying CSS to an Element

In the last lesson, I mentioned the `style` attribute. The `style` attribute is one of the ways to apply CSS to an HTML element. Others include the style tag and external links. In this lesson, we will just cover the style attribute. In your HTML file, try adding the attribute `style="color: red;"` to an element.

## Syntax

CSS is made up of comments, selectors, and declarations. In the style tag, only declarations and comments can be used. CSS declarations look like `property: value;`, and comments look like `/* This is a comment */`. CSS declarations tell the browser how to display an element, and comments are messages for developers that the browser ignores. Additionally, any declaration that a browser doesn't understand will be ignored.

```css
/* These declarations will be ignored because the property name has no meaning */
example: red;
tree: 10px;
/* These declarations will be ignored because the value makes no sense */
color: llama;
width: red;
/* These will be applied */
display: block;
height: 50px;
background-color: yellow;
```

## Text Formatting Properties

Some properties for formatting text are `color`, `font-size`, `font-weight`, and `text-decoration`. Each of these has it's own set of allowed values. For example, `color` can take a color name like blue or yellow, `font-size` can take a distance like 18px or 0.3in, `font-weight` can take a weight like bold or lighter, and `text-decoration` can take a value like underline or strikethrough.

```css
/* Make the element with this CSS have large, green, bold, underlined text */
font-size: 25px;
color: green;
font-weight: bold;
text-decoration: underline;
```

To apply these declarations to some text, you would use the following HTML.

```html
<p>
    This is some normal text
    <span style="
        font-size: 25px;
        color: green;
        font-weight: bold;
        text-decoration: underline;
    ">
        This text is a bit funky
    </span>
</p>
```

## Box Model

## Block and Inline Elements
