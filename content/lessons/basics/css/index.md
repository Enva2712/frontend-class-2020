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

At it's simplest, an HTML element is a rectangular box. For design reasons, you might want to add some spacing between that box and nearby boxes, add a border to the box, and/or add space between the border and the content. The CSS box model specifies how an element is laid out and displayed. The box model is a series of nested boxes that represent an element, and can be resized using CSS. On the inside, there is the content box that just contains the element content. Outside of that is the padding box, followed by the border box, and finally, the margin box. By default, the padding, border, and margin boxes have no width; but that can be changed using the `padding`, `border`, and `margin` CSS properties. Try applying the following CSS to an element:

```css
padding: 10px;
border: 2px black;
margin: 50px;
```

An important aspect of sizing HTML elements is that when you add `width` and `height` properties in CSS, they will be applied to one of the boxes mentioned above. By default, this is the content box, but it is possible to apply them to the border box instead using the `box-sizing: border-box` declaration. This is often used to add white space around the content of an element without making it overflow out of a certain area.

## Block and Inline Elements

