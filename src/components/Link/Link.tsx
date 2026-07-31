import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Adds a visual affordance for links that leave the current site. */
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { external = false, className, target, rel, children, ...props },
  ref,
) {
  const isExternal = external || target === "_blank";

  return (
    <a
      ref={ref}
      className={[styles.root, className].filter(Boolean).join(" ")}
      target={isExternal ? (target ?? "_blank") : target}
      rel={isExternal ? (rel ?? "noopener noreferrer") : rel}
      {...props}
    >
      {children}
      {isExternal ? (
        <span className={styles.externalIcon} aria-hidden="true">
          ↗
        </span>
      ) : null}
    </a>
  );
});
