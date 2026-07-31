# Installation

## Add the package

Run this in your project folder.

```bash
npm install @aizvi/ui
```

`react` and `react-dom` must already be in your project, version 18 or version 19. They are peer dependencies, so npm will warn you if they are missing.

## Import the styles

Aizvi UI ships one stylesheet that holds the color palette, the design tokens, a small reset, and every component style. Import it once, near the top of your app.

```tsx
import "@aizvi/ui/styles.css";
```

A common place for this is your app root file, for example `main.tsx` or `App.tsx`.

## Use a component

Once the stylesheet is loaded, you can import any component straight from the package root.

```tsx
import { Button } from "@aizvi/ui";

export function Example() {
  return <Button variant="primary">Continue</Button>;
}
```

## Import a single component

If you would rather not import from the package root, every component also has its own path. This can help some bundlers split code into smaller pieces.

```tsx
import { Button } from "@aizvi/ui/Button";
```

Both forms give you the exact same component. Pick whichever fits your project.

## Next.js and other frameworks that render on the server

Every part of Aizvi UI that needs the browser, such as Dialog or Select, already carries a `"use client"` marker inside the package. You do not need to add it yourself. Plain parts, like Text or Card, do not need a client marker at all, so they can even render on the server.
