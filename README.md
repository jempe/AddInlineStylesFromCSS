# Add Inline Styles from CSS to an Element

This script allows you to get all the computed CSS properties of a specified element and add them as inline styles to the element's `style` attribute. It only adds the properties that belong to the CSS files and ignores the browser defaults.

## Usage

1. Include the JavaScript file in your HTML document.

```html
<script src=\"addInlineStylesFromCSS.js\"></script>
```

2. Call the `addInlineStylesFromCSS` function with the element you want to add inline styles to.

```javascript
const targetElement = document.querySelector('#some-element');
addInlineStylesFromCSS(targetElement);
```

## Example

Suppose you have the following HTML and CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Add Inline Styles from CSS</title>
    <link rel=\"stylesheet\" href=\"styles.css\">
  </head>
  <body>
    <div id=\"some-element\" class=\"foo\">Hello, world!</div>
  </body>
</html>
```

```css
.foo {
  background-color: yellow;
  color: red;
}
```

You can use the `addInlineStylesFromCSS` function to add the computed CSS properties of the `.foo` class to the `style` attribute of the `#some-element` element.

```javascript
const targetElement = document.querySelector('#some-element');
addInlineStylesFromCSS(targetElement);
```

After running this script, the resulting HTML will be:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Add Inline Styles from CSS</title>
    <link rel=\"stylesheet\" href=\"styles.css\">
  </head>
  <body>
    <div id=\"some-element\" class=\"foo\" style=\"background-color: yellow; color: red;\">Hello, world!</div>
  </body>
</html>
```

## Notes

- This script may not work correctly with media queries, pseudo-elements, or pseudo-classes.
- This script may cause some duplication of CSS properties if they are already defined as inline styles.
- Some CSS rules may not be accessible due to cross-origin restrictions or other security-related issues. In this case, the script will log a warning message to the console and continue to the next stylesheet.
