import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { LandingPage } from "./LandingPage";

/**
 * A full example page composed entirely from Aizvi UI components, meant to
 * be copied from rather than imported: Container/Stack for layout, Card +
 * Heading + Text for content, Accordion for the FAQ, FormField + Input +
 * Button for the newsletter form, and Tooltip on a stat.
 *
 * It only uses semantic tokens (no hard-coded colors), so switching the
 * Storybook toolbar's theme between light and dark repaints it with no
 * component-level dark-mode code. The dedicated "Dark" story below pins
 * dark mode regardless of the toolbar, for a quick side-by-side look.
 *
 * SEO note: this component only renders the page's visual structure (one
 * <h1>, header/nav/main/footer landmarks, meaningful link text). Document
 * <title> and <meta name="description"> still belong to the host app's
 * shell (e.g. Next.js metadata API, react-helmet) — a component can't set
 * those reliably on its own.
 */
const meta = {
  title: "Examples/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onNewsletterSubmit: fn(),
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [
    (Story) => (
      <div data-theme="dark">
        <Story />
      </div>
    ),
  ],
};
