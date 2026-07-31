# Accessibility

Accessibility is not an extra option in Aizvi UI. It is part of what makes a component finished. A part is not done until it meets these rules.

## What every part must have

* Full keyboard support. You can reach and use every part with only a keyboard.
* A clear focus ring. You can always see which part is focused.
* Correct labels and ARIA attributes, so a screen reader can describe each part well.
* Enough color contrast between text and its background.
* Support for reduced motion. If a user has asked their system for less motion, Aizvi UI turns animation down or off.
* Clear disabled and loading states, so users are never left guessing.

## The target we test against

Aizvi UI aims for WCAG 2.2, level AA. This is a well known, public standard for accessible websites and apps.

## How we check this

Every component has a Storybook page, and Storybook runs an automatic accessibility check on each one. On top of that, every part is tested by hand with a keyboard, to make sure tabbing, arrow keys, Enter, Space, and Escape all behave the way a user would expect.

## What this means for you

Because these checks live inside the component, you get an accessible app almost for free. You still need to write good labels for your own content, and keep enough color contrast if you add your own colors, but the hard, repeated work of keyboard support and screen reader support is already done for you.
