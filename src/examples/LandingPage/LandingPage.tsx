import { useState } from "react";
import type { ReactNode, SyntheticEvent } from "react";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { FormField } from "../../components/FormField";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import { Tooltip } from "../../components/Tooltip";
import styles from "./LandingPage.module.css";

export interface LandingPageProps {
  /** Called with the entered address when the newsletter form is submitted. */
  onNewsletterSubmit?: (email: string) => void;
}

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Accessible by default",
    description:
      "Every component ships with keyboard support, visible focus states, and correct ARIA — verified against WCAG 2.2 AA.",
    icon: <ShieldIcon />,
  },
  {
    title: "Themeable design tokens",
    description:
      "Colors, spacing, and radius are all CSS custom properties. Override a token once and the whole system follows.",
    icon: <TokensIcon />,
  },
  {
    title: "Light and dark, out of the box",
    description:
      "Flip data-theme on any ancestor element and every component repaints — no per-component dark-mode work required.",
    icon: <MoonIcon />,
  },
  {
    title: "Radix under the hood",
    description:
      "Complex interactions (dialogs, menus, selects) are powered by Radix Primitives, wrapped so you never import Radix directly.",
    icon: <LayersIcon />,
  },
];

const FAQS = [
  {
    question: "Is Aizvi UI accessible?",
    answer:
      "Yes. Every component targets WCAG 2.2 AA: keyboard support, visible focus-visible styling, correct labels and ARIA attributes, sufficient contrast, and reduced-motion support are part of the definition of done, not an afterthought.",
  },
  {
    question: "Does it support dark mode?",
    answer:
      'Yes. Set data-theme="dark" on <html> or any ancestor element and every component repaints using the same semantic tokens — no separate dark-mode styles to maintain.',
  },
  {
    question: "Can I use my own brand color?",
    answer:
      "Yes. Components only ever read semantic tokens like --ds-color-primary, never raw hex values, so overriding a handful of custom properties re-themes the entire library.",
  },
  {
    question: "Do I need Radix Themes or Tailwind?",
    answer:
      "No. Aizvi UI uses Radix Primitives internally for complex interactive components and plain CSS Modules for styling — no other CSS framework required.",
  },
];

export function LandingPage({ onNewsletterSubmit }: LandingPageProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return;
    }
    onNewsletterSubmit?.(trimmedEmail);
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container size="xl">
          <Stack direction="row" align="center" justify="between">
            <Text as="span" size="lg" weight="bold">
              Aizvi UI
            </Text>
            <nav aria-label="Main">
              <Stack direction="row" gap="6" align="center">
                <Link href="#features">Features</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="https://github.com" external>
                  GitHub
                </Link>
              </Stack>
            </nav>
            <Stack direction="row" gap="2">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button variant="primary" size="sm">
                Get started
              </Button>
            </Stack>
          </Stack>
        </Container>
      </header>

      <main>
        <section className={styles.hero} aria-label="Introduction">
          <Container size="md">
            <div className={styles.heroContent}>
              <span className={styles.badge}>New: full dark mode support</span>
              <Heading level={1} size="3xl" className={styles.heroTitle}>
                A design system your whole product team can actually ship with
              </Heading>
              <Text size="lg" color="secondary" className={styles.heroSubtitle}>
                Accessible, themeable React components built on Radix Primitives and CSS Modules —
                so you spend your time on your product, not on re-inventing focus rings.
              </Text>
              <Stack direction="row" gap="3" justify="center" wrap>
                <Button size="lg">Get started free</Button>
                <Button size="lg" variant="secondary">
                  Browse components
                </Button>
              </Stack>
            </div>
          </Container>
        </section>

        <section className={styles.stats} aria-label="Highlights">
          <Container size="xl">
            <Stack direction="row" justify="between" wrap className={styles.statsRow}>
              <Stat value="20+" label="Components" />
              <Stat
                value="2.2 AA"
                label="WCAG target"
                tooltip="Every component is built and tested against WCAG 2.2 level AA."
              />
              <Stat value="2" label="Themes, one token set" />
              <Stat value="0" label="Radix imports needed" />
            </Stack>
          </Container>
        </section>

        <section id="features" aria-labelledby="features-heading" className={styles.section}>
          <Container size="xl">
            <Heading id="features-heading" level={2} size="2xl" className={styles.sectionTitle}>
              Everything you need to build fast
            </Heading>
            <div className={styles.featureGrid}>
              {FEATURES.map((feature) => (
                <Card key={feature.title} padding="lg" className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <Heading level={3} size="md">
                    {feature.title}
                  </Heading>
                  <Text color="secondary" size="sm">
                    {feature.description}
                  </Text>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className={styles.section}>
          <Container size="sm">
            <Heading id="faq-heading" level={2} size="2xl" className={styles.sectionTitle}>
              Frequently asked questions
            </Heading>
            <Accordion type="single" collapsible defaultValue="q-0">
              {FAQS.map((faq, index) => (
                <Accordion.Item key={faq.question} value={`q-${String(index)}`}>
                  <Accordion.Trigger>{faq.question}</Accordion.Trigger>
                  <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>

        <section className={styles.section} aria-labelledby="newsletter-heading">
          <Container size="sm">
            <Card variant="elevated" padding="lg" className={styles.newsletterCard}>
              <Heading id="newsletter-heading" level={2} size="xl">
                Get product updates
              </Heading>
              <Text color="secondary" size="sm" className={styles.newsletterCopy}>
                One email a month when we ship something worth telling you about. No spam,
                unsubscribe anytime.
              </Text>
              {submitted ? (
                <Text role="status" color="success" weight="medium">
                  Thanks — check your inbox to confirm your subscription.
                </Text>
              ) : (
                <form className={styles.newsletterForm} onSubmit={handleSubmit} noValidate>
                  <FormField label="Email address" hint="We'll never share it.">
                    <Input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </FormField>
                  <Button type="submit" fullWidth disabled={!email.trim()}>
                    Subscribe
                  </Button>
                </form>
              )}
            </Card>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <Container size="xl">
          <Stack direction="row" justify="between" align="center" wrap gap="3">
            <Text color="muted" size="sm">
              © {new Date().getFullYear()} Aizvi UI. All rights reserved.
            </Text>
            <Stack direction="row" gap="4">
              <Link href="#privacy">Privacy policy</Link>
              <Link href="#terms">Terms of service</Link>
              <Link href="https://github.com" external>
                GitHub
              </Link>
            </Stack>
          </Stack>
        </Container>
      </footer>
    </div>
  );
}

function Stat({ value, label, tooltip }: { value: string; label: string; tooltip?: string }) {
  const content = (
    <div className={styles.stat}>
      <Text as="span" size="xl" weight="bold" className={styles.statValue}>
        {value}
      </Text>
      <Text as="span" size="sm" color="secondary">
        {label}
      </Text>
    </div>
  );

  if (!tooltip) {
    return content;
  }

  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <button type="button" className={styles.statTooltipTrigger}>
          {content}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>{tooltip}</Tooltip.Content>
    </Tooltip>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TokensIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A8.5 8.5 0 119.5 4a7 7 0 0010.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M12 3l9 5-9 5-9-5 9-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
