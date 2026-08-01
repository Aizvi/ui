# Heading

A page or section title, rendered as a real `h1` through `h6` element. Heading keeps the semantic level, the one screen readers and search engines read, fully separate from the visual size, so your page structure and your visual design never have to match one to one.

## Import

```tsx
import { Heading } from "@aizvi/ui";
```

## Basic example

```tsx
<Heading level={1}>Welcome to Aizvi UI</Heading>
```

## Level and size are separate

`level` picks the real HTML tag, `h1` through `h6`. `size` picks how big the text looks. If you do not set `size`, Heading picks a sensible size for you, based on the level.

```tsx
<Heading level={1} size="sm">
  A big, important heading that should look small
</Heading>
```

This is useful when your page structure needs an `h2`, for example, but your design wants it to look small and quiet.

## All levels

```tsx
<Heading level={1}>Level 1</Heading>
<Heading level={2}>Level 2</Heading>
<Heading level={3}>Level 3</Heading>
<Heading level={4}>Level 4</Heading>
<Heading level={5}>Level 5</Heading>
<Heading level={6}>Level 6</Heading>
```

## Props

Heading accepts every normal heading attribute, plus these.

* `level`, a number from `1` to `6`. Picks the real HTML tag. The default is `2`.
* `size`, one of `sm`, `md`, `lg`, `xl`, `2xl`, or `3xl`. Picks the visual size. If left unset, a size that matches the level is chosen for you.

## Accessibility

* Use only one `level={1}` heading per page. It should describe what the whole page is about.
* Do not skip levels just to get a smaller look, for example going from `level={2}` straight to `level={4}`. Use `size` instead, and keep the levels in order.
* Screen reader users often jump between headings to scan a page, so a clear, correct level order helps them a great deal.
