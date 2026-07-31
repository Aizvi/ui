# Introduction

Aizvi UI is a free, open source React design system. It gives you a set of ready made parts, like Button, Input, and Dialog, that you can drop into your app right away.

The goal is simple. You should not have to build a Button from zero, or fight with focus rings, or guess if your app works with a keyboard. Aizvi UI already did that work for you.

## What you get

* A small set of design tokens for color, spacing, type, and rounding.
* A light theme and a dark theme, built on the same tokens.
* Around twenty components, covering buttons, forms, menus, dialogs, and layout.
* Full keyboard support and screen reader support on every part.
* Plain CSS Modules for styling. No Tailwind. No runtime CSS in JS.

## How it is built

Aizvi UI uses two kinds of parts under the hood.

Simple parts, like Button, Heading, or Card, are just plain HTML. There is nothing hidden inside them.

Complex parts, like Dialog, Select, or Tooltip, use [Radix Primitives](https://www.radix-ui.com) inside. Radix handles the hard parts, like focus trapping and keyboard order, so you never have to.

You will never import Radix yourself. You only ever import from `@aizvi/ui`. Radix stays a private detail inside the package.

```tsx
import { Button } from "@aizvi/ui";
import "@aizvi/ui/styles.css";

export function Example() {
  return <Button variant="primary">Continue</Button>;
}
```

## Who this is for

Aizvi UI is a good fit if you want a design system that is:

* Easy to read and easy to change.
* Small enough to fully understand.
* Accessible by default, not as an afterthought.

If that sounds right for your project, head to [Installation](./installation) next.
