# Button

A native `<button>` element for actions like submit, save, continue, or delete. It is a plain HTML part, so it works everywhere a button can work, with no extra setup.

## Import

```tsx
import { Button } from "@aizvi/ui";
```

## Basic example

```tsx
<Button variant="primary">Continue</Button>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-button--primary&viewMode=story&globals=theme:light" height="100" loading="lazy" title="Button basic example"></iframe>
</div>

## Variants

Button ships with five looks. Pick the one that matches how important the action is.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-button--all-variants&viewMode=story&globals=theme:light" height="100" loading="lazy" title="Button variants"></iframe>
</div>

Use `danger` for actions that remove or destroy something, like deleting an account.

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-button--sizes&viewMode=story&globals=theme:light" height="100" loading="lazy" title="Button sizes"></iframe>
</div>

## Loading state

Set `loading` to show a small spinner and mark the button busy, without changing its width or height.

```tsx
<Button loading>Saving</Button>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-button--loading&viewMode=story&globals=theme:light" height="100" loading="lazy" title="Button loading state"></iframe>
</div>

While `loading` is true, the button is also disabled, so a user cannot click it twice by accident.

## Full width

```tsx
<Button fullWidth>Continue</Button>
```

## Icons

`startIcon` and `endIcon` place any content, such as an icon, before or after the label. They are hidden automatically while the button is loading.

```tsx
<Button startIcon={<PlusIcon />}>Add item</Button>
```

## Props

Button accepts every normal `<button>` attribute, plus these.

* `variant`, one of `primary`, `secondary`, `outline`, `ghost`, or `danger`. The default is `primary`.
* `size`, one of `sm`, `md`, or `lg`. The default is `md`.
* `loading`, a boolean. Shows a spinner and marks the button busy. The default is `false`.
* `fullWidth`, a boolean. Stretches the button to fill its parent. The default is `false`.
* `startIcon`, any content shown before the label.
* `endIcon`, any content shown after the label.

## Accessibility

* Button always renders a real `<button>`, so it is reachable with the Tab key, and it can be activated with Enter or Space, just like any native button.
* `type` defaults to `"button"`, so a Button placed inside a form never submits that form by accident. Set `type="submit"` yourself when you want that behavior.
* While `loading` is true, the button gets `aria-busy="true"`, so a screen reader can tell the user that something is in progress.
* The focus ring is always visible when the button is reached with a keyboard.
