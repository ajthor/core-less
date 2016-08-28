# Mixins

Core comes with mixins to accelerate LESS development in other projects. Import `mixins.less` into your own projects to take advantage of them!

Usage:
```less
@import (reference) "../node_modules/less-core/dist/mixins/mixins.less";
```

## Colors

`.background-color(@color)` sets the background color and changes the `color` property to be either light or dark, depending on the lightness of the color you supply. The colors can be adjusted by overriding the `@default-color-dark` and `@default-color-light` variables.

Usage:

```less
div {
  .background-color(#ffffff);
}

// Outputs:
div {
  background-color: #ffffff;
  color: #000000;
}

div {
  .background-color(#000000);
}

// Outputs:
div {
  background-color: #000000;
  color: #ffffff;
}
```

## Fonts

`.reset-font` resets the font to the size and style of the document's root.

## Icons

`.fontawesome-icon(@name, @unicode)` and, similarly, `.octicons-icon(@name, @unicode)` create a class in your CSS file called `.icon-{name}`, which you can apply to elements in your page or use as a mixin.

Usage:

```less
.octicons-icon("octoface", "f008");

// Outputs:
.icon-octoface {
  display: inline-block;
  padding: 0.25em 0.25em;
  vertical-align: middle;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  display: inline;
  font-family: 'Octicons';
  content: "\\f008";
}
```

## Layout

### Flex

Perhaps the most powerful part of Core is it's Flexbox helper mixins. These allow you to quickly layout an entire page using flexbox.

`.flex-container(@direction)` allows you to specify an element as a flex parent element. You can specify if the container should align to either `column`, `column-reverse`, `row` or `row-reverse`.

It exposes a variable for children, `@horizontal`, which they use to determine certain properties on themselves.

It also exposes an extended mixin, only applicable to flex containers, `#scrollable()`.

Usage:

```less
div {
  .flex-container(column);
  #scrollable();
}
```

> NOTE: All mixins which are available only once they have been applied to a class are known in Core as 'extended mixins'. All of these mixins start with a '#' hashtag rather than a '.' dot.

`.flex(@grow: 1; @shrink: 1; @basis: auto)` specifies a child of a flex container, and the `grow`, `shrink`, and `basis` properties can be set using this mixin.

`.flex-list(@direction)` is usually applied to a `ul` or `ol` element, which contains several child elements. It acts as a flex-container.

`.flex-list-item` conditionally sets whether the element should display as `inline-block` or `inline`, depending on the value of the `@horizontal` variable exposed by the container.

### Hidden

Core depends on applied classes or attributes, such as 'open', 'visible', and 'expanded' to determine whether or not to display certain elements.

These classes are exposed via the `.toggle-{type}` mixins. Applying `.toggle-open()` to an element will create a conditional `.open` class, which will display the element. Omitting that class will cause it to display as `display: none;`. Additionally, it creates a `:target` selector, for use with JS-less toggle scenarios.

Usage:

```less
div {
  .toggle-open();
}

// Outputs:
div {
  display: none;
}
div.open,
div:target {
  display: block;
}
```

### Positioning

`.trbl(@t: 0; @r: @t; @b: @t; @l: @r)` (top, right, bottom, left) behaves similarly to `padding` or `margin` in that you don't need to specify every item in the list. `.trbl(0, 50px)` will set `top: 0; right: 50px; bottom: 0; left: 50px;`, for example.

`.position(@position)` is a work-in-progress mixin to display elements according to a more descriptive position selector.

Currently, it supports:
- fill
- top
- top-center
- absolute-center

Usage:

```less
div {
  .position("top-center");
}
```

## Overlay

`.overlay(@position)` is a utility mixin for specifying that an element should be above others. Pretty self-explanatory. Also specifies that it should be 'openable' using `.toggle-open`.

### Z-Index

`.z-shadow(@index)` is the mixin for defining the shadows on `.z-index`. It is exposed in case you want to use it for other purposes besides z-height.

`.z-index(@index)` is a very cool mixin for helping define z-heights and shadows. It uses Material UI's specifications to generate box-shadows under elements, giving them the appearance of being above the page.

It also exposes the mixin `#z-hover-transition(@index)`, which is basically a helper to define behavior on hover. It will change the material's 'height' to whatever index you specify as `@index`.

# Living Document

This is a living document, and will represent the changes made to the mixins over time. Until version 1.0.0, this document and the mixins will change regularly. Be sure to check back here for future updates. 
