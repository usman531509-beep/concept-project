"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

type Feature = {
  title: string;
  body: string;
};

export default function ServiceStory() {
  return (
    <FlowArt aria-label="What we make">
      {/* 01 — Website Design */}
      <FlowSection
        aria-label="Website Design"
        style={{ backgroundColor: "#f4f1ea", color: "#0a0a0a" }}
      >
        <Header
          eyebrow="01 — Website Design"
          kicker="Sites that read like systems."
          ruleColor="rgba(10,10,10,0.18)"
        />
        <Title
          lines={["BUILD", "SITES", "LIKE", "SYSTEMS"]}
          tone="black"
        />
        <Rule color="rgba(10,10,10,0.18)" />
        <p className="max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] font-normal leading-[1.4]">
          Pages aren&apos;t the unit. The unit is the system that makes every
          page possible — a single, considered vocabulary you can extend for
          years without ever rebuilding the foundation.
        </p>
        <Rule color="rgba(10,10,10,0.18)" />
        <FeatureGrid
          tone="black"
          items={[
            {
              title: "Foundations",
              body: "Type scale, spacing, and colour built once. Reused everywhere.",
            },
            {
              title: "Templates",
              body: "Editorial, marketing, and product layouts wired to the same primitives.",
            },
            {
              title: "Motion",
              body: "An animation language with rules — not a list of one-off tricks.",
            },
          ]}
        />
      </FlowSection>

      {/* 02 — CMS Setup */}
      <FlowSection
        aria-label="CMS Setup"
        style={{ backgroundColor: "#0a0a0a", color: "#f0e7d5" }}
      >
        <Header
          eyebrow="02 — CMS Setup"
          kicker="Write where it ships."
          ruleColor="rgba(240,231,213,0.35)"
          dark
        />
        <Title
          lines={["WRITE", "WHERE", "IT", "SHIPS"]}
          tone="cream"
        />
        <Rule color="rgba(240,231,213,0.35)" />
        <p className="max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] font-normal leading-[1.4]">
          A CMS shaped around how your team actually writes — not the other way
          around. Roles, workflow, and preview tuned so the path from idea to
          live takes minutes, not meetings.
        </p>
        <Rule color="rgba(240,231,213,0.35)" />
        <FeatureGrid
          tone="cream"
          items={[
            {
              title: "Roles & Workflow",
              body: "Drafts, reviews, and approvals modelled around your real team.",
            },
            {
              title: "Localisation",
              body: "Per-locale variants without forking the schema.",
            },
            {
              title: "Migrations",
              body: "Schema changes that don&apos;t require a downtime window.",
            },
          ]}
        />
        <Rule color="rgba(240,231,213,0.35)" />
        <FeatureGrid
          tone="cream"
          items={[
            {
              title: "Preview",
              body: "Side-by-side draft and live, on every change.",
            },
            {
              title: "Versioning",
              body: "Roll back any field, any time, without losing context.",
            },
            {
              title: "Permissions",
              body: "Granular access — what each role sees, edits, and ships.",
            },
          ]}
        />
      </FlowSection>

      {/* 03 — Components */}
      <FlowSection
        aria-label="Components"
        style={{ backgroundColor: "#f04222", color: "#ffffff" }}
      >
        <Header
          eyebrow="03 — Components"
          kicker="A small library, used twice."
          ruleColor="rgba(255,255,255,0.55)"
          dark
        />
        <Title
          lines={["SHIP", "TWICE", "AS", "FAST"]}
          tone="cream"
        />
        <Rule color="rgba(255,255,255,0.55)" />
        <p className="max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] font-normal leading-[1.4]">
          A short list of considered components, pulling double-duty across
          product and marketing. Same tokens, same a11y, same docs — so
          everyone ships from the same shelf.
        </p>
        <Rule color="rgba(255,255,255,0.55)" />
        <FeatureGrid
          tone="cream"
          items={[
            {
              title: "Tokens",
              body: "One source for colour, type, radius, motion, and elevation.",
            },
            {
              title: "Variants",
              body: "Predictable rules for size, tone, and density per component.",
            },
            {
              title: "A11y first",
              body: "Keyboard, focus, contrast, and motion preferences — non-negotiable defaults.",
            },
          ]}
        />
        <Rule color="rgba(255,255,255,0.55)" />
        <FeatureGrid
          tone="cream"
          items={[
            {
              title: "Tests",
              body: "Stories cover state, RTL, and visual regression on every PR.",
            },
            {
              title: "Documentation",
              body: "Each component ships with a do / don&apos;t and a live example.",
            },
            {
              title: "Versioning",
              body: "Semver across the library so consumers know what changes.",
            },
          ]}
        />
      </FlowSection>

      {/* 04 — Content Structure */}
      <FlowSection
        aria-label="Content Structure"
        style={{ backgroundColor: "#f0e7d5", color: "#0a0a0a" }}
      >
        <Header
          eyebrow="04 — Content Structure"
          kicker="A shape for ideas."
          ruleColor="rgba(10,10,10,0.22)"
        />
        <Title
          lines={["A", "SHAPE", "FOR", "IDEAS"]}
          tone="black"
        />
        <Rule color="rgba(10,10,10,0.22)" />
        <p className="max-w-[55ch] text-[clamp(1rem,2vw,1.6rem)] font-normal leading-[1.4]">
          Taxonomies, schemas, and relationships that make finding, reusing,
          and growing content effortless. Built to survive an entire team
          turning over and still feel obvious.
        </p>
        <Rule color="rgba(10,10,10,0.22)" />
        <FeatureGrid
          tone="black"
          items={[
            {
              title: "Schemas",
              body: "Models that match how editors think, not how databases work.",
            },
            {
              title: "Relations",
              body: "Authors, projects, sectors — wired so one update propagates everywhere.",
            },
            {
              title: "Slugs & SEO",
              body: "Predictable URLs, structured data, and metadata defaults.",
            },
          ]}
        />
        <Rule color="rgba(10,10,10,0.22)" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(0.95rem,1.8vw,1.4rem)] font-medium leading-[1.4]">
          Together: a site you can ship today, edit on Tuesday, and rebuild
          twice the size in two years — without throwing any of it away.
        </p>
      </FlowSection>
    </FlowArt>
  );
}

/* ─── Header row ─── */

function Header({
  eyebrow,
  kicker,
  ruleColor,
  dark = false,
}: {
  eyebrow: string;
  kicker: string;
  ruleColor: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
        {eyebrow}
      </p>
      <span
        className={`hidden text-[15px] font-medium md:inline ${
          dark ? "opacity-80" : "opacity-70"
        }`}
      >
        {kicker}
      </span>
    </div>
  );
}

function Rule({ color }: { color: string }) {
  return (
    <hr
      className="my-[1.5vw] border-none border-t"
      style={{ borderTopColor: color, borderTopWidth: 1 }}
    />
  );
}

/* ─── Stacked title ─── */

function Title({
  lines,
  tone,
}: {
  lines: string[];
  tone: "black" | "cream";
}) {
  return (
    <h2
      className="font-display font-bold leading-[0.85] tracking-tight uppercase"
      style={{
        fontSize: "clamp(3.5rem, 13vw, 16rem)",
        color: tone === "black" ? "#0a0a0a" : "currentColor",
      }}
    >
      {lines.map((l, i) => (
        <span key={`${l}-${i}`} className="block">
          {l}
        </span>
      ))}
    </h2>
  );
}

/* ─── Feature grid ─── */

function FeatureGrid({
  items,
  tone,
}: {
  items: Feature[];
  tone: "black" | "cream";
}) {
  const dark = tone === "cream";
  return (
    <div className="flex flex-wrap gap-[3vw]">
      {items.map((f) => (
        <div key={f.title} className="min-w-[180px] flex-1">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            {f.title}
          </p>
          <p
            className={`text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed ${
              dark ? "opacity-80" : "opacity-75"
            }`}
          >
            {f.body}
          </p>
        </div>
      ))}
    </div>
  );
}
