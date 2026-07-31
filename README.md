# Aizvi/UI

An open-source React design system for building modern, consistent, and accessible user interfaces.

Built with **TypeScript**, **Radix Primitives**, and **CSS Modules**. Radix stays an internal
implementation detail, you never import it directly.

```text
Consumer application
        ↓
Public components (@aizvi/ui)
        ↓
TypeScript API + CSS Modules
        ↓
Radix Primitive or native HTML
```

## Install

```bash
npm install @aizvi/ui
```

`react` and `react-dom` are peer dependencies (`^18.2.0 || ^19.0.0`).

## Usage

```tsx
import { Button, Dialog, Input } from "@aizvi/ui";
import "@aizvi/ui/styles.css";

export function Example() {
  return <Button variant="primary">Continue</Button>;
}
```

`@aizvi/ui/styles.css` bundles the color palette, semantic tokens, and a base reset alongside
every component's styles, import it once, at the root of your app.

Each component is also available as its own subpath, if you'd rather not import from the
package root:

```tsx
import { Button } from "@aizvi/ui/Button";
```

## Themes

Set `data-theme` on `<html>` (or any ancestor element) to switch between light and dark:

```html
<html data-theme="light"></html>
<html data-theme="dark"></html>
```

Falling back to `:root` styling means light is the default even with no attribute set.

## Typography

Roboto is the default font, loaded from nowhere in particular, the package never fetches a
font from an external URL. Bring your own Roboto (self-hosted, `next/font`, a `<link>` tag,
whatever fits your app), or override the token to use something else entirely:

```css
:root {
  --ds-font-family: "Inter", system-ui, sans-serif;
}
```

## Design tokens

Components read from semantic CSS custom properties, never hard-coded colors, spacing, or
radii. Override any of them in your own stylesheet to reskin the library:

```css
:root {
  --ds-color-primary: var(--blue-9);
  --ds-radius-md: 0.375rem;
  --ds-space-4: 1rem;
}
```

See `src/styles/tokens.css` for the full set (color, spacing, radius, typography, shadows,
motion, focus ring).

## Components

| Component                                | Built on         |
| ---------------------------------------- | ---------------- |
| Button, Input, FormField, Textarea, Link | Native HTML      |
| Heading, Text, Card, Container, Stack    | Native HTML      |
| Dialog, Select, Checkbox, Switch         | Radix Primitives |
| Tabs, Tooltip, Popover, DropdownMenu     | Radix Primitives |
| Accordion, Slider                        | Radix Primitives |

## Accessibility

Every component ships with keyboard support, visible `:focus-visible` styling, correct
labeling, ARIA attributes where required, sufficient color contrast, `prefers-reduced-motion`
support, and disabled/loading states. Storybook's accessibility addon runs automated checks
against every story.

## Development

```bash
npm install
npm run dev              # Storybook at localhost:6006
npm run build             # library build (dist/)
npm run build:storybook   # static Storybook site
npm run typecheck
npm run lint
npm run test
npm run generate:palette  # regenerate palette.css from @radix-ui/colors
```

## Package requirements

- ESM output only, with generated TypeScript declarations.
- `react` / `react-dom` are peer dependencies; Radix primitives are regular dependencies.
- CSS files are marked as side effects; everything else is side-effect free.
- Interactive component entry points keep their `"use client"` directive intact, so
  Next.js's app router can draw the client boundary correctly.

## License

MIT
