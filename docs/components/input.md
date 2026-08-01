# Input

A native `<input>` element for a single line of text, such as a name, an email address, or a search term.

## Import

```tsx
import { Input } from "@aizvi/ui";
```

## Basic example

```tsx
<Input placeholder="Enter your name" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-input--default&viewMode=story&globals=theme:light" height="90" loading="lazy" title="Input basic example"></iframe>
</div>

Input is almost always used inside a [FormField](./formField), so it gets a real label.

```tsx
<FormField label="Email address">
  <Input type="email" placeholder="you@example.com" />
</FormField>
```

## Sizes

```tsx
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-input--sizes&viewMode=story&globals=theme:light" height="90" loading="lazy" title="Input sizes"></iframe>
</div>

## Invalid state

Set `invalid` to style the input as an error and set `aria-invalid` for you.

```tsx
<Input invalid defaultValue="not-an-email" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-input--invalid&viewMode=story&globals=theme:light" height="90" loading="lazy" title="Input invalid state"></iframe>
</div>

When Input is used inside FormField, and FormField is given an `error` message, this happens automatically. You do not need to set `invalid` by hand in that case.

## Adornments

`startAdornment` and `endAdornment` place any content, such as an icon or a short label, inside the input, before or after the typed text.

```tsx
<Input startAdornment={<SearchIcon />} placeholder="Search" />
<Input endAdornment="kg" placeholder="Weight" />
```

## Disabled

```tsx
<Input disabled defaultValue="Cannot be changed" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-input--disabled&viewMode=story&globals=theme:light" height="90" loading="lazy" title="Input disabled state"></iframe>
</div>

## Props

Input accepts every normal `<input>` attribute except `size`, which is replaced by the sizes below, plus these.

* `size`, one of `sm`, `md`, or `lg`. The default is `md`.
* `invalid`, a boolean. Styles the input as an error and sets `aria-invalid`. The default is `false`.
* `startAdornment`, any content shown before the typed text.
* `endAdornment`, any content shown after the typed text.

## Accessibility

* Input renders a real `<input>`, so every normal keyboard behavior, like moving the cursor or selecting text, works with no extra code.
* Always give an Input a label, either with [FormField](./formField), or with your own `<label htmlFor>`, or with `aria-label` for a standalone input like a search box.
* When `invalid` is true, `aria-invalid="true"` is set automatically, so a screen reader can tell the user that the value has a problem.
