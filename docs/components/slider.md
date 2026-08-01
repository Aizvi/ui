# Slider

A control for picking one value, or a range of values, by dragging along a track, such as a volume level or a price range. Slider is built on the Radix Slider primitive.

## Import

```tsx
import { Slider } from "@aizvi/ui";
```

## Basic example

```tsx
<Slider defaultValue={[50]} min={0} max={100} step={1} aria-label="Volume" />
```

## Controlled

```tsx
function ExampleSlider() {
  const [value, setValue] = useState([50]);

  return (
    <Slider
      value={value}
      onValueChange={setValue}
      min={0}
      max={100}
      step={1}
      aria-label="Volume"
    />
  );
}
```

## Range with two thumbs

Pass an array with two numbers to get two thumbs on the same track, useful for picking a range instead of a single point. Slider looks at how many numbers you pass and renders one thumb for each.

```tsx
<Slider defaultValue={[20, 80]} min={0} max={100} step={1} aria-label="Price range" />
```

## Step size

```tsx
<Slider defaultValue={[0]} min={0} max={10} step={2} aria-label="Rating" />
```

## Disabled

```tsx
<Slider defaultValue={[30]} disabled aria-label="Not adjustable right now" />
```

## Orientation

```tsx
<Slider defaultValue={[50]} orientation="vertical" aria-label="Vertical volume" />
```

## Props

* `value`, an array of numbers, for a controlled slider. Pass one number for a single thumb, or two for a range.
* `defaultValue`, an array of numbers, for an uncontrolled starting position.
* `onValueChange`, called with the new array of numbers while the user drags a thumb.
* `onValueCommit`, called once the user finishes dragging, useful for expensive updates like a network request.
* `min` and `max`, the lowest and highest allowed values. The defaults match the Radix Slider defaults of `0` and `100`.
* `step`, how much the value changes per keyboard press or drag increment. The default is `1`.
* `orientation`, one of `horizontal` or `vertical`. The default is `horizontal`.
* `disabled`, a boolean. The default is `false`.
* `aria-label` or `aria-labelledby`, always required, since Slider has no visible label of its own.

## Accessibility

* Each thumb is a real, focusable element with `role="slider"`, and announces its current value, minimum, and maximum to screen readers.
* Once a thumb has focus, the arrow keys move it by one `step`, and Home and End jump to the minimum and maximum.
* Always set `aria-label`, or `aria-labelledby` pointing at a visible piece of text, so screen reader users know what the slider controls. Without one, a screen reader has nothing meaningful to announce.
