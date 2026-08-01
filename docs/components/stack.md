# Stack

A small helper for row and column layout, built on top of flexbox. Stack is the easiest way to line up a group of parts with an even gap between them.

## Import

```tsx
import { Stack } from "@aizvi/ui";
```

## Basic example

```tsx
<Stack gap="2">
  <div>Item one</div>
  <div>Item two</div>
  <div>Item three</div>
</Stack>
```

By default, Stack lines up its children in a column.

## Row direction

```tsx
<Stack direction="row" gap="2">
  <div>Item one</div>
  <div>Item two</div>
  <div>Item three</div>
</Stack>
```

## Align and justify

```tsx
<Stack direction="row" justify="between">
  <div>Left</div>
  <div>Right</div>
</Stack>
```

* `align` controls the cross axis, meaning up and down in a row, or left and right in a column.
* `justify` controls the main axis, meaning left and right in a row, or up and down in a column.

## Wrapping

Set `wrap` to allow children to move onto a new line when there is not enough room.

```tsx
<Stack direction="row" wrap>
  <div>Item one</div>
  <div>Item two</div>
  <div>Item three</div>
</Stack>
```

## Props

Stack accepts every normal `<div>` attribute, plus these.

* `direction`, one of `row` or `column`. The default is `column`.
* `gap`, one of `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, or `16`. Maps to the matching `--ds-space-*` token. The default is `4`.
* `align`, one of `start`, `center`, `end`, or `stretch`. The default is `stretch`.
* `justify`, one of `start`, `center`, `end`, or `between`. The default is `start`.
* `wrap`, a boolean. Allows children to move onto a new line. The default is `false`.

## Accessibility

* Stack is a plain layout box. It does not add or remove any meaning, so it never affects how a screen reader reads your page.
