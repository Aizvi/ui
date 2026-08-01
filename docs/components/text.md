# Text

A small part for paragraphs and short pieces of copy, such as helper text, a caption, or a label. Text can render as a `p`, a `span`, or a `div`, so it fits inside almost any layout.

## Import

```tsx
import { Text } from "@aizvi/ui";
```

## Basic example

```tsx
<Text>This is a normal paragraph of text.</Text>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-text--default&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Text basic example"></iframe>
</div>

## Choosing the element

```tsx
<Text as="span">A small piece of inline text.</Text>
<Text as="div">A block of text inside a div.</Text>
```

## Sizes

```tsx
<Text size="xs">Extra small</Text>
<Text size="sm">Small</Text>
<Text size="md">Medium</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra large</Text>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-text--sizes&viewMode=story&globals=theme:light" height="200" loading="lazy" title="Text sizes"></iframe>
</div>

## Weight and color

```tsx
<Text weight="bold">Bold text</Text>
<Text color="secondary">Softer, secondary text</Text>
<Text color="danger">An error message</Text>
<Text color="success">A success message</Text>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-text--colors&viewMode=story&globals=theme:light" height="150" loading="lazy" title="Text weight and color"></iframe>
</div>

## Truncating long text

Set `truncate` to cut off text with an ellipsis instead of wrapping it onto a new line. This only works well when the parent element has a fixed or limited width.

```tsx
<div style={{ width: "10rem" }}>
  <Text truncate>A very long piece of text that will not fit on one line.</Text>
</div>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-text--truncated&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Text truncated"></iframe>
</div>

## Props

Text accepts every normal HTML attribute for its element, plus these.

* `as`, one of `p`, `span`, or `div`. The default is `p`.
* `size`, one of `xs`, `sm`, `md`, `lg`, or `xl`. The default is `md`.
* `weight`, one of `regular`, `medium`, or `bold`. The default is `regular`.
* `color`, one of `default`, `secondary`, `muted`, `danger`, or `success`. The default is `default`.
* `truncate`, a boolean. Cuts long text off with an ellipsis. The default is `false`.

## Accessibility

* Text is for copy, not for page structure. Use [Heading](./heading) for titles, so screen reader users can still scan the page by heading.
* Enough color contrast is already built into every `color` option, in both the light and the dark theme.
