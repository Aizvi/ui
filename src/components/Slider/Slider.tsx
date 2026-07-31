"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import styles from "./Slider.module.css";

export type SliderProps = RadixSlider.SliderProps;

export function Slider({
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SliderProps) {
  const thumbCount = props.value?.length ?? props.defaultValue?.length ?? 1;

  return (
    <RadixSlider.Root className={[styles.root, className].filter(Boolean).join(" ")} {...props}>
      <RadixSlider.Track className={styles.track}>
        <RadixSlider.Range className={styles.range} />
      </RadixSlider.Track>
      {Array.from({ length: thumbCount }, (_, index) => (
        <RadixSlider.Thumb
          key={index}
          className={styles.thumb}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        />
      ))}
    </RadixSlider.Root>
  );
}
