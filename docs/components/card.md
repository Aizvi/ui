# Card

A bordered or raised box for grouping related content, such as a pricing plan, a settings section, or a single item in a list.

## Import

```tsx
import { Card } from "@aizvi/ui";
```

## Basic example

```tsx
<Card>
  <Heading level={3} size="md">Plan: Pro</Heading>
  <Text color="secondary">Billed monthly. Cancel anytime.</Text>
</Card>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-card--default&viewMode=story&globals=theme:light" height="140" loading="lazy" title="Card basic example"></iframe>
</div>

## Variants

```tsx
<Card variant="outlined">A card with a border.</Card>
<Card variant="elevated">A card with a soft shadow instead of a border.</Card>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-card--elevated&viewMode=story&globals=theme:light" height="140" loading="lazy" title="Card elevated variant"></iframe>
</div>

## Padding

```tsx
<Card padding="none">No inner spacing at all.</Card>
<Card padding="sm">A small amount of inner spacing.</Card>
<Card padding="md">The normal amount of inner spacing.</Card>
<Card padding="lg">A large amount of inner spacing.</Card>
```

## Props

Card accepts every normal `<div>` attribute, plus these.

* `variant`, one of `outlined` or `elevated`. The default is `outlined`.
* `padding`, one of `none`, `sm`, `md`, or `lg`. The default is `md`.

## Accessibility

* Card is a plain grouping box. It has no built in role, so give it a heading inside, like [Heading](./heading), when the card represents a distinct section a screen reader user should be able to find.
