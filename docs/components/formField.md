# FormField

FormField wraps a label, a hint, and an error message around a single form control, such as [Input](./input) or [Textarea](./textarea). It connects everything together for you, so the label, the hint, and the error are all read correctly by a screen reader.

## Import

```tsx
import { FormField, Input } from "@aizvi/ui";
```

## Basic example

```tsx
<FormField label="Email address" hint="We will never share this.">
  <Input type="email" placeholder="you@example.com" />
</FormField>
```

## Required fields

```tsx
<FormField label="Email address" required>
  <Input type="email" />
</FormField>
```

This shows a small required mark next to the label, and it also passes `required` down to the control itself.

## Error state

```tsx
<FormField label="Email address" error="Enter a valid email address.">
  <Input type="email" defaultValue="not-an-email" />
</FormField>
```

When `error` is set, FormField marks the control invalid for you, and it shows the error message instead of the hint, in a way a screen reader will announce right away.

## How it works

FormField takes exactly one child, the control. It reads the child element and adds an `id`, an `aria-describedby`, and, if needed, `aria-invalid` and `required`, all lined up with a label and a hint or error paragraph. You do not have to write any of these connections by hand.

Any control can be used inside FormField, as long as it accepts `id`, `required`, `aria-invalid`, and `aria-describedby`. This works for [Input](./input) and [Textarea](./textarea) out of the box.

## Props

* `label`, the visible label text. This is required.
* `hint`, supporting text shown under the control, when there is no error.
* `error`, an error message shown under the control. Also marks the control invalid.
* `required`, a boolean. Shows a required mark and passes `required` to the control.
* `children`, a single form control, such as `<Input />` or `<Textarea />`. This is required.

## Accessibility

* The label is always connected to the control with `htmlFor` and `id`, so clicking the label focuses the control, and a screen reader always announces the label first.
* The hint or the error is connected with `aria-describedby`, so a screen reader reads it as part of the field, right after the label.
* The error message uses `role="alert"`, so it is announced right away when it appears.
