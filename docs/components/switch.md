# Switch

An on and off toggle, for settings that take effect right away, such as dark mode or a notification preference. Switch is built on the Radix Switch primitive.

## Import

```tsx
import { Switch } from "@aizvi/ui";
```

## Basic example

```tsx
<Switch label="Enable notifications" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-switch--default&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Switch basic example"></iframe>
</div>

## Without a label

```tsx
<Switch aria-label="Enable notifications" />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-switch--without-label&viewMode=story&globals=theme:light" height="60" loading="lazy" title="Switch without a label"></iframe>
</div>

## Controlled

```tsx
function ExampleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      label="Dark mode"
      checked={enabled}
      onCheckedChange={setEnabled}
    />
  );
}
```

## Disabled

```tsx
<Switch label="Not available on your plan" disabled />
<Switch label="Always on for this account" checked disabled />
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-switch--disabled-checked&viewMode=story&globals=theme:light" height="70" loading="lazy" title="Switch disabled and checked"></iframe>
</div>

## Props

* `label`, an optional piece of text or content rendered next to the control. When set, Switch generates a matching `id` and wraps the label in a real `<label>` element.
* `checked`, a boolean. Leave unset to let Switch manage its own state.
* `defaultChecked`, a boolean, for an uncontrolled starting state.
* `onCheckedChange`, called with the new checked value whenever the user flips the switch.
* `disabled`, a boolean. The default is `false`.
* `required`, a boolean, for use inside a form.
* `name` and `value`, for plain HTML form submission.

Switch also accepts every other normal Radix Switch root prop.

## Accessibility

* Switch renders as a real `button` with `role="switch"`, so screen readers announce it as on or off, not as a plain checkbox.
* It can be toggled with the Space key once focused.
* When you pass `label`, clicking the label text also flips the switch.
* When you skip `label`, always add your own `aria-label` or `aria-labelledby`.
* Prefer Switch over [Checkbox](./checkbox) when the change takes effect right away. Prefer Checkbox when the change only applies after a form is submitted.
