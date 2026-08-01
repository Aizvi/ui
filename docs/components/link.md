# Link

A styled `<a>` element, with safe, automatic handling for links that leave your site.

## Import

```tsx
import { Link } from "@aizvi/ui";
```

## Basic example

```tsx
<Link href="/about">About us</Link>
```

## External links

Set `external` to show a small arrow mark next to the link text, and to open the link safely in a new tab.

```tsx
<Link href="https://example.com" external>
  Read the full report
</Link>
```

When `external` is true, Link sets `target="_blank"` and `rel="noopener noreferrer"` for you, unless you already set your own `target` or `rel`. This stops the new page from being able to control your page through `window.opener`, which is a common security problem with links that use `target="_blank"`.

If you set `target="_blank"` yourself, without setting `external`, Link still adds the same safe `rel` value, and still shows the arrow mark.

## Props

Link accepts every normal `<a>` attribute, plus this one.

* `external`, a boolean. Shows an arrow mark, and opens the link in a new tab with a safe `rel` value. The default is `false`.

## Accessibility

* Link renders a real `<a>`, so it works with the keyboard, with screen readers, and with browser features like Open in new tab, exactly like any normal link.
* Write link text that makes sense on its own, such as Read the full report, instead of Click here.
* The arrow mark on an external link is hidden from screen readers with `aria-hidden`, since the important information, that the link leaves the site, should be part of your own link text or nearby copy when it matters.
