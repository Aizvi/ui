# Container

Keeps page content at a good, readable width, and centers it on the page, with a small amount of side padding for small screens.

## Import

```tsx
import { Container } from "@aizvi/ui";
```

## Basic example

```tsx
<Container>
  <Heading level={1}>Page title</Heading>
  <Text>Page content stays at a readable width.</Text>
</Container>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-container--default&viewMode=story&globals=theme:light" height="120" loading="lazy" title="Container basic example"></iframe>
</div>

## Sizes

```tsx
<Container size="sm">A narrow container, good for a single article.</Container>
<Container size="md">A medium container.</Container>
<Container size="lg">The normal, general purpose width.</Container>
<Container size="xl">A wide container, good for a full page layout.</Container>
<Container size="full">No maximum width at all.</Container>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-container--sizes&viewMode=story&globals=theme:light" height="260" loading="lazy" title="Container sizes"></iframe>
</div>

## Props

Container accepts every normal `<div>` attribute, plus this one.

* `size`, one of `sm`, `md`, `lg`, `xl`, or `full`. The default is `lg`.

## Accessibility

* Container is a plain layout box. It does not add or remove any meaning, so it never affects how a screen reader reads your page.
