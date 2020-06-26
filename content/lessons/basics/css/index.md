---
title: CSS declarations
lesson: 1.2
---

# CSS declarations

HTML elements provide you with a way to describe content, but they don't give you free reign over how an element looks. CSS provides this functionality. For now, we will use CSS within our HTML document, but eventually, we will put the CSS into it's own file and reference the file in the HTML.

In the last lesson, I mentioned the `style` attribute. The `style` attribute is used to apply CSS to an HTML element. In your HTML file, try adding the attribute `style="color: red;"` to an element.

The style attribute is a holder for CSS declarations. CSS declarations look like `property: value;`. Like HTML tags, you can use any name for the property, but unknown names will be ignored. Additionally, if a property's value doesn't make sense the declaration will be ignored.

Comments are a way to add text to a CSS file that doesn't do anything. This can help you describe what some CSS is meant to do. CSS comments look like `/* You can write anything here */`

```css
/* These declarations will be ignored because the name means nothing */
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
