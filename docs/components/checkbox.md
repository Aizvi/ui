# Checkbox

A single choice box, for things like agreeing to terms, turning a setting on, or picking many items from a list. Checkbox is built on the Radix Checkbox primitive, and it also supports a mixed, or indeterminate, state.

## Import

```tsx
import { Checkbox } from "@aizvi/ui";
```

## Basic example

```tsx
<Checkbox label="Send me product updates" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-checkbox--default&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Checkbox basic example"></iframe>
</div>

## Without a label

If you already show your own text next to the box, or the box stands alone, leave `label` out.

```tsx
<Checkbox aria-label="Select this row" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-checkbox--without-label&viewMode=story&globals=theme:light" height="60" loading="lazy" title="Checkbox without a label"></iframe>
</div>

## Controlled

```tsx
function ExampleCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Remember me"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}
```

## Indeterminate

Pass `"indeterminate"` as the `checked` value to show a mixed state, which is useful for a select all box that only partly applies.

```tsx
<Checkbox label="Select all" checked="indeterminate" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-checkbox--indeterminate&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Checkbox indeterminate state"></iframe>
</div>

## Disabled

```tsx
<Checkbox label="Not available right now" disabled />
<Checkbox label="Already agreed" checked disabled />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-checkbox--disabled-checked&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Checkbox disabled and checked"></iframe>
</div>

## Props

* `label`, an optional piece of text or content rendered next to the box. When set, Checkbox generates a matching `id` and wraps the label in a real `<label>` element, so clicking the text toggles the box.
* `checked`, a boolean, or `"indeterminate"` for a mixed state. Leave unset to let Checkbox manage its own state.
* `defaultChecked`, a boolean, for an uncontrolled starting state.
* `onCheckedChange`, called with the new checked value whenever the user toggles the box.
* `disabled`, a boolean. The default is `false`.
* `required`, a boolean, for use inside a form.
* `name` and `value`, for plain HTML form submission.

Checkbox also accepts every other normal Radix Checkbox root prop.

## Accessibility

* Checkbox renders as a real `button` with `role="checkbox"`, so screen readers announce it correctly, including the mixed state.
* It can be toggled with the Space key once focused, just like a native checkbox.
* When you pass `label`, clicking the label text also toggles the box, which gives people a bigger, easier target to click.
* When you skip `label`, always add your own `aria-label` or `aria-labelledby`, so screen reader users know what the box is for.
