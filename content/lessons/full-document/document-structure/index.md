---
title: Document Structure
lesson: 2.1
---

# Document Structure

## Head and Body

An HTML page contains not only content, but metadata; or information about the page. This information can include the language of the content, links to translations, links to CSS and JavaScript files that the page depends on, information for web browsers, and information for search engines.

So far, we have just been writing our HTML content by itself. Information about a webpage has to go in a `head` tag. A head tag can't just be placed anywhere in our content though; first we need to wrap our content in a `body` tag. Then we can place a `head` tag before it.

```html
<!-- This is an HTML comment -->
<!-- Like in CSS, they don't change the page -->
<head>
    <!-- This is where you add metadata -->
</head>
<body>
    <!-- This is where you add content -->
</body>
```

## HTML tag

It's also a good idea to put your `head` and `body` tags in an `html` tag, and give the `html` tag a lang attribute.

```html
<html lang="en">
    <head>
        <!-- This is where you add metadata -->
    </head>
    <body>
        <!-- This is where you add content -->
    </body>
</html>
```

## DOCTYPEs

Finally, to specify which version of HTML you are using (this class covers HTML5, but there are older ones), you can add a DOCTYPE to your page. While HTML5 is the default version of HTML in major browsers, it is good practice to add a DOCTYPE anyway. A DOCTYPE goes on the first line, and the HTML5 DOCTYPE looks like `<!DOCTYPE html>`.

```html
<!DOCTYPE html>
<html>...</html>
```

## The `title` Tag

In your browser, each tab has a title. This can be set by adding a `title` tag to the document head. To set the page title to "Hello World!", you would add `<title>Hello World!</title>` inside the head element.

## The `style` Tag

CSS declarations can also be added within the `style` element, by using CSS selectors. The `style` tag goes in the document head, and CSS selectors will be covered in the next lesson.

## The `link` Tag

To link to external resources like CSS files or page translations, the `link` tag is used. The `link` tag has an `href` attribute that holds the URL to the linked file, and a `rel` attribute that describes the relation between the document and the linked file.

```html
<!-- This link points to a CSS file in the same folder as the page called `file.css` -->
<link rel="stylesheet" href="file.css">
<!-- This link points to a french translation of the current page -->
<link rel="alternate" href="in-french.html" hreflang="fr">
```
