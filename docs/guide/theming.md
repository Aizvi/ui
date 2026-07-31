# Theming

Aizvi UI never uses a fixed color or a fixed size inside a component. Every part reads its look from a small set of tokens. If you change a token, every part that uses it changes too.

## Light and dark mode

Set `data-theme` on the `html` tag, or on any parent element, to pick a theme.

```html
<html data-theme="light"></html>
```

```html
<html data-theme="dark"></html>
```

If you leave `data-theme` off, the light theme is used. You can also read the user system setting and set `data-theme` from your own code, if you want the theme to follow the system.

## The color palette

Under the hood, Aizvi UI ships a set of raw color steps, such as `--gray-1` up to `--gray-12`, and `--blue-1` up to `--blue-12`. These come from the approved brand palette, plus a red, a green, and an amber scale for danger, success, and warning states.

You should almost never use these raw steps directly. Instead, use the semantic tokens below, which point to the right raw step for you, in both themes.

## Semantic color tokens

These are the tokens that components actually use.

* `--ds-color-background`, the page background.
* `--ds-color-surface`, a soft panel background.
* `--ds-color-surface-raised`, used by cards, dialogs, and menus.
* `--ds-color-border`, a normal border.
* `--ds-color-text`, main text.
* `--ds-color-text-secondary`, softer, less loud text.
* `--ds-color-primary`, your main brand color.
* `--ds-color-danger`, errors and delete actions.
* `--ds-color-success`, success messages.
* `--ds-color-warning`, warning messages.

To use your own brand color, override the tokens that point at blue.

```css
:root {
  --ds-color-primary: #7c3aed;
  --ds-color-primary-hover: #6d28d9;
}
```

## Spacing

Spacing tokens run from `--ds-space-0` up to `--ds-space-24`, in small, even steps, so that padding and gaps stay consistent across every part.

## Rounding, the easy way

Aizvi UI has a full rounding scale, from `--ds-radius-xs` up to `--ds-radius-2xl`, plus `--ds-radius-full` for a full circle or pill shape.

You can change the whole scale at once with one attribute, `data-radius`, placed on `html` or on any parent element.

* `<html data-radius="none">` makes every corner square.
* `<html data-radius="small">` gives tighter corners.
* `<html>` with no attribute gives the normal, medium look.
* `<html data-radius="large">` gives softer, rounder corners.
* `<html data-radius="full">` turns every part into a pill or a circle.

## Typography

The default font is Roboto.

```css
:root {
  --ds-font-family: "Roboto", system-ui, sans-serif;
}
```

Aizvi UI never loads a font file for you from the internet. You choose how Roboto gets onto the page, for example with a local file, a font service, or `next/font`. You can also swap `--ds-font-family` for any font you like.
