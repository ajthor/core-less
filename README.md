# less-core

__Core__ is a library built using [LESS](http://lesscss.org/#), leveraging the best of the currently available style frameworks to create a minimal style library for use in modern web development.

It doesn't presuppose that you're using one framework or another, but it does have a biased opinion of how to style standard components. If you prefer to keep your components styled using your framework of choice, Core has a powerful library of LESS [mixins](http://lesscss.org/features/#mixins-feature) to help with everything from icons to layouts!

Core makes use of the best styles from a number of frameworks, including [Material UI](https://material.google.com)'s ideas on z-height relationships, [Pure](http://purecss.io)'s minimalism, [Elemental UI](http://elemental-ui.com)'s relationship to [React](https://facebook.github.io/react/) components, and a smattering of influences from around the web.

## Philosophy

- Minimal, yet complete.
- Easy to use.
- LESS mixins for reuse.
- Classes describe element type, not style.
- Use HTML5 & CSS3 to its fullest.
- No unnecessary HTML elements.
- No JS.

## Components

Core leverages many styles from [Normalize.css](https://necolas.github.io/normalize.css/), but leaves out a few for simplicity's sake. It's a good idea to look over the `normalize.less` file to see if Core will be enough for you.

A few standard page components have styles in Core. The components are:
- Buttons
- Forms *(coming soon)*
- Modals
- Navigation *(coming soon)*

## Mixins

LESS mixins are the bread and butter of the Core library. Using Core's mixins in your own project is easy.

The mixins can be imported into your own project by importing the `mixins.less` file into your main CSS file. Make sure to use the `(reference)` tag to ensure your own CSS file doesn't become bloated. With the reference tag, the LESS compiler will automatically ignore any mixins you don't use.

Here are some things you can accelerate with Core mixins:
- Colors
- Fonts
- Icons
- Layouts
- Overlays

And more to come!

## Contributing
I created Core to use in my own projects, fed up with the problems I saw with implementing other style frameworks. I prefer to have more control over the elements on the page than most frameworks easily allow. Some frameworks did too little, while others were too overbearing (a la Bootstrap).

Feedback and contributions are much appreciated, and I welcome both. Please submit a pull request if you have a suggestion or submit an issue if you encounter one. I'm not a CSS or LESS ninja, so I can't claim that everything will work perfectly.
