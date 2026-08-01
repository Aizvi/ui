# Textarea

A native `<textarea>` element for a longer piece of text, such as a message, a comment, or a description.

## Import

```tsx
import { Textarea } from "@aizvi/ui";
```

## Basic example

```tsx
<Textarea placeholder="Write your message" />
```

Like Input, Textarea is often used inside a [FormField](./formField).

```tsx
<FormField label="Message">
  <Textarea placeholder="Write your message" />
</FormField>
```

## Invalid state

```tsx
<Textarea invalid defaultValue="Too short" />
```

## Disabled

```tsx
<Textarea disabled defaultValue="Cannot be changed" />
```

A disabled Textarea can no longer be resized by the user.

## Props

Textarea accepts every normal `<textarea>` attribute, plus this one.

* `invalid`, a boolean. Styles the textarea as an error and sets `aria-invalid`. The default is `false`.

## Accessibility

* Textarea renders a real `<textarea>`, so it can be resized, and read by a screen reader, with no extra code.
* Always give a Textarea a label, either with [FormField](./formField), or with your own `<label htmlFor>`.
* When `invalid` is true, `aria-invalid="true"` is set automatically.
