import "@testing-library/jest-dom/vitest";

// jsdom does not implement matchMedia; components that read
// prefers-reduced-motion / prefers-color-scheme need this in tests.
window.matchMedia = (query: string): MediaQueryList => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => undefined,
  removeListener: () => undefined,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  dispatchEvent: () => false,
});

// jsdom does not implement these; Radix Select/Tooltip/Popover/Menu use them
// for pointer interactions and viewport scrolling.
Element.prototype.hasPointerCapture = () => false;
Element.prototype.setPointerCapture = () => undefined;
Element.prototype.releasePointerCapture = () => undefined;
Element.prototype.scrollIntoView = () => undefined;

// jsdom does not implement ResizeObserver; Radix Tooltip/Select measure
// element size with it.
class MockResizeObserver implements ResizeObserver {
  observe(): void {
    return undefined;
  }
  unobserve(): void {
    return undefined;
  }
  disconnect(): void {
    return undefined;
  }
}
globalThis.ResizeObserver = MockResizeObserver;
