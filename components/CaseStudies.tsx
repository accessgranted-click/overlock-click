"use client";

import { useState } from "react";

/*──────────────────────────────────────────────────────────────────
  TYPES
──────────────────────────────────────────────────────────────────*/
interface HeroStat {
  metric: string;
  label: string;
  note: string;
}

interface EvolutionPhase {
  era: string;
  label: string;
  campaigns: string;
  structure: string;
  limitation: string;
}

interface ProductSegment {
  category: string;
  approach: string;
  result: string;
  roas: number;
}

interface KeywordPillar {
  name: string;
  detail: string;
  impact: string;
}

interface YoyComparison {
  metric: string;
  client: string;
  industry: string;
  delta: string;
  positive: boolean;
}

interface Campaign {
  name: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  roas: number;
  ctr: number;
  aov: number;
}

interface ClientData {
  name: string;
  vertical: string;
  tagline: string;
  heroStats: HeroStat[];
  overview: string;
  evolution: { title: string; phases: EvolutionPhase[] };
  productStrategy: { title: string; segments: ProductSegment[] };
  keywordStrategy: { title: string; narrative: string; pillars: KeywordPillar[] };
  yoyComparisons: YoyComparison[];
  insight: string;
  campaigns: Campaign[];
  accentColor: string;
  accentBg: string;
  accentBorder: string;
}

interface BarProps {
  value: number;
  benchmark: number;
  label: string;
  benchmarkLabel: string;
  unit?: string;
}

interface ToggleBtnProps {
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

/*──────────────────────────────────────────────────────────────────
  INDUSTRY BENCHMARKS — SOURCED & CITED
──────────────────────────────────────────────────────────────────*/
const BENCHMARKS = {
  apparelCTR:  { val: 1.26,  label: "Apparel CTR",            src: "Pixis 2025",         unit: "%" },
  apparelCVR:  { val: 1.57,  label: "Apparel CVR",            src: "Mega Digital 2025",  unit: "%" },
  googleROAS:  { val: 3.68,  label: "Google Ads Median ROAS", src: "Triple Whale 2025",  unit: "x" },
  pmaxROAS:    { val: 2.57,  label: "PMax Avg ROAS",          src: "Focus Digital 2025", unit: "x" },
  ecomROAS:    { val: 2.87,  label: "Ecommerce Avg ROAS",     src: "Industry 2025",      unit: "x" },
  fashionCPA:  { val: 27.52, label: "Fashion Median CPA",     src: "Varos Apr 2025",     unit: "$" },
  apparelCPC:  { val: 1.64,  label: "Apparel Avg CPC",        src: "Pixis 2025",         unit: "$" },
  shoppingCVR: { val: 1.91,  label: "Shopping Avg CVR",       src: "Store Growers 2026", unit: "%" },
};

const YOY_INDUSTRY = [
  { metric: "Industry ROAS fell 10%",     ours: "Our accounts: 4.13x–5.27x", icon: "↑" },
  { metric: "Industry CVR dropped 9.3%",  ours: "Our CVR held at benchmark",  icon: "↑" },
  { metric: "Industry CPA rose 12.4%",    ours: "Our CPA: stable YoY",        icon: "↑" },
  { metric: "Fashion CTR fell 11.8%",     ours: "Our CTR: +10% above avg",    icon: "↑" },
  { metric: "Fashion CPL surged 23.4%",   ours: "Our efficiency: maintained", icon: "↑" },
  { metric: "PMax ROAS avg: 2.57x",       ours: "Our PMax: 4.73x–5.89x",     icon: "↑" },
];

/*──────────────────────────────────────────────────────────────────
  CLIENT DATA
──────────────────────────────────────────────────────────────────*/
const clientA: ClientData = {
  name: "Client A",
  vertical: "Streetwear & Lifestyle",
  tagline: "Curated Streetwear Boutique — Midwest US",
  heroStats: [
    { metric: "4.13x",  label: "Blended ROAS",    note: "+12% above industry median" },
    { metric: "$57.4K", label: "Revenue (30d)",    note: "On $13.9K ad spend" },
    { metric: "4.73x",  label: "Top PMax ROAS",   note: "+84% above PMax avg (2.57x)" },
    { metric: "26.3%",  label: "Brand Search CTR", note: "20x apparel avg (1.26%)" },
  ],
  overview: "A curated streetwear and lifestyle boutique carrying premium athletic and independent labels across footwear, apparel, and accessories. Competing against Nike.com, SSENSE, END Clothing, and national DTC retailers on Google Shopping — the goal was to architect a profitable paid search program on a sub-$15K/month budget while defending branded queries and expanding into high-intent product categories.",
  evolution: {
    title: "Account Architecture Evolution",
    phases: [
      {
        era: "2020–2022",
        label: "Smart Shopping Era",
        campaigns: "5 Smart Shopping campaigns + branded/non-branded Search + Display retargeting + YouTube",
        structure: "Flat Shopping structure with no brand or product-level segmentation. Primary, Secondary, and tertiary Smart Shopping campaigns competing for the same products. Geo-targeted brand campaigns for local markets.",
        limitation: "No control over search term matching, audience layering, or product-level bidding within Smart Shopping. Multiple overlapping campaigns cannibalized each other's auctions.",
      },
      {
        era: "2022–2024",
        label: "PMax Migration & Restructure",
        campaigns: "Consolidated to 2 core PMax + 1 brand-specific PMax + Branded Search",
        structure: "Migrated from 5 Smart Shopping campaigns to a tiered PMax architecture. Eliminated Display and YouTube as standalone campaigns — letting PMax serve cross-channel automatically. Introduced brand-level product segmentation (premium athletic brands isolated into dedicated asset groups).",
        limitation: "Industry average saw 12% conversion value increase during Smart Shopping → PMax migration. This account exceeded that by consolidating fragmented campaigns into purpose-built PMax tiers.",
      },
      {
        era: "2025–Present",
        label: "Mature PMax + Hybrid",
        campaigns: "PMax Primary Shopping + PMax Sales + PMax Brand Focus + Local PMax + Branded Search",
        structure: "Five-campaign architecture: primary catch-all, high-converting sales tier, brand-specific asset groups for premium lines, geo-targeted local inventory, and Branded Search defense. Each PMax campaign uses distinct audience signals mapped to different stages of the purchase funnel.",
        limitation: "Aligns with emerging 2025 industry best practice of PMax + Standard Shopping hybrid as PMax market share declines (down ~6% from 82% peak in May 2024). The tiered approach provides control that single-PMax setups cannot.",
      },
    ],
  },
  productStrategy: {
    title: "Product Categorization & Feed Architecture",
    segments: [
      {
        category: "Premium Athletic (Brand-Specific PMax)",
        approach: "Isolated high-AOV athletic brands into a dedicated PMax campaign with brand-specific audience signals. Search themes mapped to brand + model queries. Stripped competitor brand references from audience signals to avoid wasted impressions.",
        result: "4.54x ROAS on $314 spend — 77% above PMax benchmark",
        roas: 4.54,
      },
      {
        category: "Core Catalog (Primary PMax)",
        approach: "Broad catch-all PMax covering full product feed. Listing groups segmented by product type with underperformers excluded at the SKU level. Audience signals built from first-party purchaser data + in-market apparel segments.",
        result: "3.88x ROAS at scale — 877K impressions driving 177 conversions",
        roas: 3.88,
      },
      {
        category: "High-Intent Sales (PMax Sales Tier)",
        approach: "Promotional and sale-priced products funneled into a dedicated PMax campaign with aggressive tROAS targets. Custom labels used to dynamically rotate inventory based on markdown status and margin tier.",
        result: "4.73x ROAS — best efficiency in account, +84% above PMax avg",
        roas: 4.73,
      },
      {
        category: "Branded Queries (Search Defense)",
        approach: "Exact and phrase match branded terms protecting against competitor conquest. Low CPC, high intent. Negative keywords preventing non-commercial brand queries from consuming budget.",
        result: "26.3% CTR / 4.30x ROAS / $23.11 CPA — sub-$25 CPA target met",
        roas: 4.30,
      },
    ],
  },
  keywordStrategy: {
    title: "Keyword & Search Term Strategy",
    narrative: "The account evolution from flat Smart Shopping to segmented PMax reflects a fundamental shift in keyword capture strategy. Rather than letting Google's algorithm match broadly across the entire catalog, we built search theme architecture that channels different query intents into purpose-built campaigns.",
    pillars: [
      {
        name: "Brand Query Isolation",
        detail: "Branded Search campaign captures all exact-match brand terms at 26.3% CTR. This prevents PMax from cannibalizing high-intent branded traffic — a common PMax failure point where branded queries inflate PMax ROAS while starving the rest of the account.",
        impact: "Freed PMax to focus on non-branded product discovery while maintaining a reliable branded conversion floor.",
      },
      {
        name: "Product-Level Search Themes",
        detail: "Each PMax asset group is built around search theme clusters mapped to product categories. Premium athletic brands use model-specific terms (e.g., specific shoe model names), while core catalog uses category + style modifiers. Competitor brand terms are excluded from audience signals for non-relevant brands.",
        impact: "Brand-specific PMax achieves 2.06% CTR (63% above apparel avg) despite micro-budget allocation.",
      },
      {
        name: "Negative Keyword Hygiene",
        detail: "Ongoing search term audits across PMax search term insights and Branded Search. Non-commercial queries, competitor brand leakage, and informational terms are systematically excluded. This is especially critical post-PMax migration where Google's broader matching inflates irrelevant traffic.",
        impact: "Account-wide CPC held efficient despite industry apparel CPC rising to $4.31 (up 27% YoY per Mega Digital).",
      },
    ],
  },
  yoyComparisons: [
    { metric: "ROAS",       client: "4.13x",  industry: "3.68x (↓10% YoY)",        delta: "+12% above declining median",    positive: true },
    { metric: "PMax ROAS",  client: "4.73x",  industry: "2.57x avg",                delta: "+84% above platform avg",        positive: true },
    { metric: "CTR",        client: "1.39%",  industry: "1.26% (fashion ↓12% YoY)", delta: "+10% while category declined",   positive: true },
    { metric: "CVR",        client: "1.56%",  industry: "1.57% apparel avg",         delta: "In-line despite lean budget",    positive: true },
    { metric: "CPA",        client: "$38.73", industry: "$27.52 → rising +23% YoY",  delta: "Stable while industry CPA surged", positive: true },
    { metric: "Brand CTR",  client: "26.3%",  industry: "1.26% category avg",        delta: "20.9x category average",        positive: true },
  ],
  insight: "This account tells the story of disciplined evolution: from 5 overlapping Smart Shopping campaigns in 2020 to a purpose-built 5-tier PMax architecture generating 4.13x ROAS. The brand-specific PMax segmentation proves that audience signal precision matters more than budget — a $314 micro-campaign delivered 4.54x ROAS by matching product-level search themes to high-intent brand shoppers.",
  campaigns: [
    { name: "PMax — Primary Shopping", impressions: 877833, clicks: 10545, cost: 7890, conversions: 177, roas: 3.88, ctr: 1.20, aov: 170.19 },
    { name: "PMax — Sales Tier",        impressions: 716875, clicks: 10660, cost: 5038, conversions: 156, roas: 4.73, ctr: 1.49, aov: 153.28 },
    { name: "PMax — Brand Focus",       impressions: 28449,  clicks: 587,   cost: 314,  conversions: 11,  roas: 4.54, ctr: 2.06, aov: 126.18 },
    { name: "Branded Search",           impressions: 1937,   clicks: 509,   cost: 244,  conversions: 11,  roas: 4.30, ctr: 26.28, aov: 99.28 },
  ],
  accentColor: "#c9a96e",
  accentBg: "rgba(201,169,110,0.06)",
  accentBorder: "rgba(201,169,110,0.25)",
};

const clientB: ClientData = {
  name: "Client B",
  vertical: "Sneakers & Streetwear",
  tagline: "Premium Sneaker & Streetwear Retailer — Midwest US",
  heroStats: [
    { metric: "5.27x",   label: "Blended ROAS",         note: "+43% above industry median" },
    { metric: "$102.5K", label: "Revenue (30d)",         note: "On $19.4K ad spend" },
    { metric: "5.89x",   label: "Competitor PMax ROAS", note: "+129% above PMax avg (2.57x)" },
    { metric: "519",     label: "Total Conversions",    note: "Scaled volume + efficiency" },
  ],
  overview: "A heritage sneaker and streetwear destination with deep brand credibility competing against StockX, GOAT, Foot Locker, Finish Line, and DTC brand sites. The objective was three-fold: drive profitable growth through competitive conquest, scale a brand-new women's product vertical, and maintain above-benchmark ROAS while industry-wide returns were declining 10% YoY.",
  evolution: {
    title: "Account Architecture Evolution",
    phases: [
      {
        era: "Legacy Structure",
        label: "Single-Channel Shopping",
        campaigns: "Brand Search + Shopping (undifferentiated)",
        structure: "Basic branded search campaign with a single-campaign Shopping approach. No audience segmentation, no competitor targeting, no product-level strategy.",
        limitation: "No competitive positioning strategy. Women's market entirely unaddressed. Shopping campaigns treated the entire catalog as a monolith.",
      },
      {
        era: "Restructure Phase",
        label: "PMax Segmentation + Competitive Layer",
        campaigns: "PMax Women's + PMax Competitors + Shopping Catch-All + Brand Search",
        structure: "Introduced three strategic layers: a dedicated women's PMax campaign (new audience expansion), a competitor-conquest PMax campaign (market share capture), and a Standard Shopping catch-all (long-tail safety net). Each PMax uses distinct audience signals — the competitor campaign targets rival brand shoppers, the women's campaign uses in-market + affinity signals for women's streetwear.",
        limitation: "This hybrid PMax + Standard Shopping approach aligns with the 2025 industry shift where PMax cost share has dropped ~6% as advertisers reclaim control with Standard Shopping alongside PMax.",
      },
      {
        era: "Current State",
        label: "Full-Funnel Hybrid Architecture",
        campaigns: "4 active campaigns generating $102.5K revenue at 5.27x blended ROAS",
        structure: "Mature four-pillar system: Women's PMax (audience expansion), Competitor PMax (market share), Shopping Catch-All (long-tail capture), and Brand (defense). Each layer serves a distinct role in the funnel and uses isolated audience signals to prevent overlap.",
        limitation: "Outperforming 93% of the industry — while median ROAS dropped to 3.68x and PMax avg sits at 2.57x, this account delivers 5.27x blended and 5.89x on competitive conquest.",
      },
    ],
  },
  productStrategy: {
    title: "Product Categorization & Market Expansion",
    segments: [
      {
        category: "Women's Expansion (PMax — New Market)",
        approach: "Built an entirely new PMax campaign targeting the women's sneaker and streetwear segment — a market Client B hadn't actively pursued. Audience signals built from in-market women's footwear + fashion affinity segments. Feed segmented by gender to ensure only women's products appear. Search themes mapped to women's-specific style and brand queries.",
        result: "1.3M impressions / 226 conversions / 5.46x ROAS — proving the new market is highly profitable",
        roas: 5.46,
      },
      {
        category: "Competitive Conquest (PMax — Market Share)",
        approach: "Dedicated competitor-targeting campaign using audience signals built from rival brand URLs, competitor brand keyword segments, and in-market sneaker buyer lists. This campaign exists solely to capture shoppers actively browsing competitor sites and convert them to Client B.",
        result: "5.89x ROAS — best in account, +129% above PMax benchmark. 131 conversions from conquest traffic at $33.65 CPA.",
        roas: 5.89,
      },
      {
        category: "Long-Tail Catalog (Standard Shopping)",
        approach: "Standard Shopping catch-all covering the full product feed. Acts as a safety net for queries PMax doesn't capture — particularly long-tail, model-specific, and size-specific product queries. Provides granular search term data that PMax lacks, informing negative keyword strategy and audience signal refinement across the account.",
        result: "4.94x ROAS at 867K impressions — near-5x return on the broadest campaign in the account",
        roas: 4.94,
      },
      {
        category: "Brand Defense (Search)",
        approach: "Exact and phrase match branded search terms. Extremely high-intent, minimal budget. Defends against competitor conquest attempts on brand terms. Monitored for auction insight competitor activity.",
        result: "7.82x ROAS / 23.4% CTR — highest efficiency, lowest spend, maximum defensive value",
        roas: 7.82,
      },
    ],
  },
  keywordStrategy: {
    title: "Competitive Conquest & Keyword Strategy",
    narrative: "The centerpiece of this account is the competitive conquest strategy. Rather than bidding directly on competitor brand terms (expensive and often low-converting in Search), we use PMax audience signals to target users who are actively in the competitor ecosystem — letting Google's cross-channel AI find them across Shopping, YouTube, Display, and Discovery.",
    pillars: [
      {
        name: "Audience-Signal Conquest (vs. Keyword Conquest)",
        detail: "Traditional competitor bidding targets brand terms in Search — expensive CPCs, low CTR, legal gray areas. Our approach uses PMax audience signals: competitor website URLs as custom segments, competitor brand keyword lists as intent signals, and in-market footwear + sneaker audiences. The algorithm finds these users wherever they are in Google's ecosystem.",
        impact: "5.89x ROAS on conquest traffic — more than double the PMax avg. This approach outperforms traditional keyword-based conquest by reaching users across all surfaces, not just Search.",
      },
      {
        name: "Women's Market Search Theme Architecture",
        detail: "The women's PMax campaign uses gender-specific search themes: women's sneakers, women's streetwear brands, women's athletic lifestyle. Feed is gender-segmented so only women's products appear. Audience signals layer in-market footwear with women's fashion affinity to capture the intersection of style and sport.",
        impact: "Scaled to 1.3M impressions in a market the brand hadn't previously targeted — proving addressable audience size exists for this segment.",
      },
      {
        name: "Standard Shopping as Intelligence Layer",
        detail: "The Shopping catch-all isn't just a backup campaign — it's the account's intelligence engine. Because Standard Shopping provides full search term reports (which PMax does not), it reveals which product-specific and long-tail queries drive conversions. These insights inform PMax search themes, audience signal refinement, and negative keyword deployment across the account.",
        impact: "4.94x ROAS while also generating the data that powers the entire account's optimization loop.",
      },
    ],
  },
  yoyComparisons: [
    { metric: "ROAS",           client: "5.27x",  industry: "3.68x (↓10% YoY)",        delta: "+43% above declining median",  positive: true },
    { metric: "PMax ROAS",      client: "5.89x",  industry: "2.57x avg",                delta: "+129% above platform avg",     positive: true },
    { metric: "Shopping ROAS",  client: "4.94x",  industry: "2.87x ecom avg",           delta: "+72% above ecommerce avg",     positive: true },
    { metric: "CTR",            client: "1.28%",  industry: "1.26% (fashion ↓12% YoY)", delta: "Stable while category declined", positive: true },
    { metric: "Conquest CPA",   client: "$33.65", industry: "$27.52 median (↑23% YoY)", delta: "Competitive on conquest traffic", positive: true },
    { metric: "Brand CTR",      client: "23.4%",  industry: "1.26% category avg",       delta: "18.5x category average",       positive: true },
  ],
  insight: "The competitive conquest PMax is the case study within the case study: by replacing traditional keyword-level competitor bidding with audience-signal-based conquest through PMax, we converted rival brand shoppers at 5.89x ROAS — in a year where industry-wide ROAS dropped 10%. The women's expansion proves that product-level PMax segmentation can open entirely new addressable markets at scale (1.3M impressions) without sacrificing efficiency (5.46x ROAS).",
  campaigns: [
    { name: "PMax — Women's Expansion",    impressions: 1305102, clicks: 14965, cost: 8149, conversions: 226, roas: 5.46, ctr: 1.15, aov: 196.70 },
    { name: "Shopping — Catch-All",        impressions: 866951,  clicks: 11037, cost: 5982, conversions: 146, roas: 4.94, ctr: 1.27, aov: 202.36 },
    { name: "PMax — Competitor Conquest",  impressions: 508258,  clicks: 7432,  cost: 4419, conversions: 131, roas: 5.89, ctr: 1.46, aov: 198.48 },
    { name: "Brand Defense",               impressions: 1798,    clicks: 420,   cost: 255,  conversions: 12,  roas: 7.82, ctr: 23.36, aov: 167.50 },
  ],
  accentColor: "#6ea4c9",
  accentBg: "rgba(110,164,201,0.06)",
  accentBorder: "rgba(110,164,201,0.25)",
};

/*──────────────────────────────────────────────────────────────────
  RENDER HELPERS
──────────────────────────────────────────────────────────────────*/
function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toFixed(0);
}

const mono = "'JetBrains Mono', monospace";
const serif = "'Source Serif 4', Georgia, serif";
const display = "'Instrument Serif', Georgia, serif";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: mono,
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#555",
        marginBottom: 18,
        marginTop: 0,
      }}
    >
      {children}
    </h3>
  );
}

function Bar({ value, benchmark, label, benchmarkLabel, unit = "" }: BarProps) {
  const max = Math.max(value, benchmark) * 1.35 || 1;
  const vPct = (value / max) * 100;
  const bPct = (benchmark / max) * 100;
  const delta =
    benchmark > 0 ? (((value - benchmark) / benchmark) * 100).toFixed(0) : "0";

  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: mono,
        }}
      >
        <span style={{ color: "#b8b0a4" }}>{label}</span>
        <span style={{ color: "#8efa9e", fontWeight: 600 }}>+{delta}%</span>
      </div>
      <div
        style={{
          position: "relative",
          height: 26,
          background: "rgba(255,255,255,0.025)",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${vPct}%`,
            background:
              "linear-gradient(90deg, rgba(46,120,72,0.45), rgba(142,250,158,0.15))",
            borderRadius: 4,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${bPct}%`,
            height: "100%",
            width: 1.5,
            background: "rgba(255,255,255,0.18)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -16,
            left: `${bPct}%`,
            transform: "translateX(-50%)",
            fontSize: 8,
            color: "rgba(255,255,255,0.25)",
            whiteSpace: "nowrap",
            fontFamily: mono,
          }}
        >
          {benchmarkLabel} {benchmark}
          {unit}
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 10,
            fontSize: 13,
            fontWeight: 700,
            color: "#f5f0eb",
            zIndex: 3,
            fontFamily: mono,
          }}
        >
          {value}
          {unit}
        </div>
      </div>
    </div>
  );
}

/*──────────────────────────────────────────────────────────────────
  MAIN CASE STUDY CARD
──────────────────────────────────────────────────────────────────*/
function CaseStudy({ data }: { data: ClientData }) {
  const [showCampaigns, setShowCampaigns] = useState(false);
  const [showEvolution, setShowEvolution] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);

  function ToggleBtn({ open, onClick, children }: ToggleBtnProps) {
    return (
      <button
        onClick={onClick}
        style={{
          background: "none",
          border: "1px solid rgba(255,255,255,0.07)",
          color: "#b8b0a4",
          fontFamily: mono,
          fontSize: 9,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "8px 18px",
          borderRadius: 100,
          cursor: "pointer",
          transition: "all 0.2s",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginRight: 8,
          marginBottom: 8,
        }}
      >
        {children}
        <span
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(90deg)" : "rotate(0)",
            display: "inline-block",
            fontSize: 11,
          }}
        >
          →
        </span>
      </button>
    );
  }

  // Find non-branded CTR (exclude very high brand CTR values)
  const nonBrandCTR =
    data.campaigns.find((c) => c.ctr < 5)?.ctr ?? 1.3;

  return (
    <div
      style={{
        background:
          "linear-gradient(175deg, rgba(28,28,40,1), rgba(16,16,24,1))",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 24,
        padding: "52px 44px",
        marginBottom: 56,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${data.accentColor}, transparent 70%)`,
        }}
      />

      {/* HEADER */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 6,
          }}
        >
          <h2
            style={{
              fontFamily: display,
              fontSize: 44,
              fontWeight: 400,
              color: "#f5f0eb",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {data.name}
          </h2>
          <span
            style={{
              fontFamily: mono,
              fontSize: 9,
              color: data.accentColor,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              border: `1px solid ${data.accentBorder}`,
              padding: "3px 12px",
              borderRadius: 100,
            }}
          >
            {data.vertical}
          </span>
        </div>
        <p
          style={{
            fontFamily: mono,
            fontSize: 10,
            color: "#555",
            margin: 0,
            letterSpacing: "0.06em",
          }}
        >
          {data.tagline}
        </p>
      </div>

      {/* OVERVIEW */}
      <p
        style={{
          fontFamily: serif,
          fontSize: 15,
          lineHeight: 1.75,
          color: "#918a7e",
          marginBottom: 36,
          maxWidth: 720,
        }}
      >
        {data.overview}
      </p>

      {/* HERO METRICS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))",
          gap: 14,
          marginBottom: 40,
        }}
      >
        {data.heroStats.map((h, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 16,
              padding: "24px 20px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: `linear-gradient(90deg, ${data.accentColor}18, transparent)`,
              }}
            />
            <div
              style={{
                fontFamily: mono,
                fontSize: 9,
                color: "#4a4a4a",
                marginBottom: 8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {h.label}
            </div>
            <div
              style={{
                fontFamily: display,
                fontSize: 38,
                color: "#f5f0eb",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {h.metric}
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#8efa9e",
                fontFamily: mono,
                lineHeight: 1.3,
              }}
            >
              {h.note}
            </div>
          </div>
        ))}
      </div>

      {/* YoY COMPARISON TABLE */}
      <div style={{ marginBottom: 36 }}>
        <SectionLabel>Year-over-Year vs. Industry Benchmarks (2025)</SectionLabel>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Metric", "This Account", "Industry Benchmark", "Delta"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: h === "Metric" ? "left" : "right",
                        padding: "10px 12px",
                        fontFamily: mono,
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#444",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {data.yoyComparisons.map((r, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.02)" }}
                >
                  <td
                    style={{
                      padding: "10px 12px",
                      fontFamily: mono,
                      fontSize: 11,
                      color: "#999",
                    }}
                  >
                    {r.metric}
                  </td>
                  <td
                    style={{
                      padding: "10px 12px",
                      textAlign: "right",
                      fontFamily: mono,
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#f5f0eb",
                    }}
                  >
                    {r.client}
                  </td>
                  <td
                    style={{
                      padding: "10px 12px",
                      textAlign: "right",
                      fontFamily: mono,
                      fontSize: 11,
                      color: "#666",
                    }}
                  >
                    {r.industry}
                  </td>
                  <td
                    style={{
                      padding: "10px 12px",
                      textAlign: "right",
                      fontFamily: mono,
                      fontSize: 10,
                      color: "#8efa9e",
                    }}
                  >
                    {r.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BENCHMARK BARS */}
      <div style={{ marginBottom: 36 }}>
        <SectionLabel>Performance vs. Benchmarks (Visual)</SectionLabel>
        <Bar
          value={parseFloat(data.heroStats[0].metric)}
          benchmark={BENCHMARKS.googleROAS.val}
          label="Blended ROAS"
          benchmarkLabel="Industry"
          unit="x"
        />
        <Bar
          value={data.campaigns.reduce((best, c) => Math.max(best, c.roas), 0)}
          benchmark={BENCHMARKS.pmaxROAS.val}
          label="Top Campaign ROAS"
          benchmarkLabel="PMax Avg"
          unit="x"
        />
        <Bar
          value={nonBrandCTR}
          benchmark={BENCHMARKS.apparelCTR.val}
          label="Non-Brand CTR"
          benchmarkLabel="Apparel Avg"
          unit="%"
        />
      </div>

      {/* EXPANDABLE SECTION TOGGLES */}
      <div style={{ marginBottom: 20 }}>
        <ToggleBtn open={showEvolution} onClick={() => setShowEvolution(!showEvolution)}>
          Account Evolution
        </ToggleBtn>
        <ToggleBtn open={showProducts} onClick={() => setShowProducts(!showProducts)}>
          Product Strategy
        </ToggleBtn>
        <ToggleBtn open={showKeywords} onClick={() => setShowKeywords(!showKeywords)}>
          Keyword &amp; Search Strategy
        </ToggleBtn>
        <ToggleBtn open={showCampaigns} onClick={() => setShowCampaigns(!showCampaigns)}>
          Campaign Data
        </ToggleBtn>
      </div>

      {/* ACCOUNT EVOLUTION */}
      {showEvolution && (
        <div
          style={{
            marginBottom: 32,
            padding: 24,
            background: "rgba(255,255,255,0.01)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          <SectionLabel>{data.evolution.title}</SectionLabel>
          {data.evolution.phases.map((p, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < data.evolution.phases.length - 1 ? 24 : 0,
                paddingBottom: i < data.evolution.phases.length - 1 ? 24 : 0,
                borderBottom:
                  i < data.evolution.phases.length - 1
                    ? "1px solid rgba(255,255,255,0.03)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontFamily: mono, fontSize: 9, color: data.accentColor, opacity: 0.7 }}>
                  {p.era}
                </span>
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: "#888",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.label}
                </span>
              </div>
              <p style={{ fontFamily: mono, fontSize: 10, color: "#666", margin: "0 0 6px", lineHeight: 1.4 }}>
                {p.campaigns}
              </p>
              <p style={{ fontFamily: serif, fontSize: 13, color: "#918a7e", margin: "0 0 6px", lineHeight: 1.6 }}>
                {p.structure}
              </p>
              <p style={{ fontFamily: serif, fontSize: 12, color: "#6a8c5e", margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>
                {p.limitation}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* PRODUCT STRATEGY */}
      {showProducts && (
        <div
          style={{
            marginBottom: 32,
            padding: 24,
            background: "rgba(255,255,255,0.01)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          <SectionLabel>{data.productStrategy.title}</SectionLabel>
          {data.productStrategy.segments.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < data.productStrategy.segments.length - 1 ? 20 : 0,
                paddingBottom: i < data.productStrategy.segments.length - 1 ? 20 : 0,
                borderBottom:
                  i < data.productStrategy.segments.length - 1
                    ? "1px solid rgba(255,255,255,0.025)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span style={{ fontFamily: mono, fontSize: 11, color: "#c8c2b8", letterSpacing: "0.04em" }}>
                  {s.category}
                </span>
                <span style={{ fontFamily: mono, fontSize: 12, color: "#8efa9e", fontWeight: 700 }}>
                  {s.roas}x ROAS
                </span>
              </div>
              <p style={{ fontFamily: serif, fontSize: 13, color: "#918a7e", margin: "0 0 6px", lineHeight: 1.6 }}>
                {s.approach}
              </p>
              <p style={{ fontFamily: mono, fontSize: 10, color: "#8efa9e", margin: 0, opacity: 0.8 }}>
                {s.result}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* KEYWORD STRATEGY */}
      {showKeywords && (
        <div
          style={{
            marginBottom: 32,
            padding: 24,
            background: "rgba(255,255,255,0.01)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          <SectionLabel>{data.keywordStrategy.title}</SectionLabel>
          <p style={{ fontFamily: serif, fontSize: 14, color: "#918a7e", lineHeight: 1.7, marginTop: 0, marginBottom: 20 }}>
            {data.keywordStrategy.narrative}
          </p>
          {data.keywordStrategy.pillars.map((p, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < data.keywordStrategy.pillars.length - 1 ? 20 : 0,
                paddingBottom: i < data.keywordStrategy.pillars.length - 1 ? 20 : 0,
                borderBottom:
                  i < data.keywordStrategy.pillars.length - 1
                    ? "1px solid rgba(255,255,255,0.025)"
                    : "none",
              }}
            >
              <div style={{ fontFamily: mono, fontSize: 11, color: data.accentColor, marginBottom: 8, letterSpacing: "0.04em" }}>
                {p.name}
              </div>
              <p style={{ fontFamily: serif, fontSize: 13, color: "#918a7e", margin: "0 0 8px", lineHeight: 1.6 }}>
                {p.detail}
              </p>
              <p style={{ fontFamily: mono, fontSize: 10, color: "#8efa9e", margin: 0, opacity: 0.8 }}>
                {p.impact}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* CAMPAIGN TABLE */}
      {showCampaigns && (
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {["Campaign", "Impr.", "Clicks", "CTR", "Spend", "Conv.", "ROAS", "AOV"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: h === "Campaign" ? "left" : "right",
                        padding: "10px 10px",
                        fontFamily: mono,
                        fontSize: 8,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#444",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {data.campaigns.map((c, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
                  <td style={{ padding: "10px 10px", color: "#b8b0a4", fontFamily: serif, fontSize: 12 }}>
                    {c.name}
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#666", fontFamily: mono, fontSize: 10 }}>
                    {fmt(c.impressions)}
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#666", fontFamily: mono, fontSize: 10 }}>
                    {fmt(c.clicks)}
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#666", fontFamily: mono, fontSize: 10 }}>
                    {c.ctr.toFixed(2)}%
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#666", fontFamily: mono, fontSize: 10 }}>
                    ${fmt(c.cost)}
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#666", fontFamily: mono, fontSize: 10 }}>
                    {c.conversions}
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", fontFamily: mono, fontSize: 10, fontWeight: 700, color: "#8efa9e" }}>
                    {c.roas.toFixed(2)}x
                  </td>
                  <td style={{ padding: "10px 10px", textAlign: "right", color: "#777", fontFamily: mono, fontSize: 10 }}>
                    ${c.aov.toFixed(0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* KEY INSIGHT */}
      <div
        style={{
          marginTop: 24,
          padding: "20px 24px",
          background: data.accentBg,
          borderLeft: `3px solid ${data.accentColor}`,
          borderRadius: "0 10px 10px 0",
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 8,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: 8,
          }}
        >
          Expert Analysis
        </div>
        <p style={{ fontFamily: serif, fontSize: 14, color: "#c8c2b8", lineHeight: 1.65, margin: 0 }}>
          {data.insight}
        </p>
      </div>
    </div>
  );
}

/*──────────────────────────────────────────────────────────────────
  MAIN PAGE COMPONENT
──────────────────────────────────────────────────────────────────*/
export default function CaseStudies() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0F",
        color: "#f5f0eb",
        padding: "80px 24px 80px",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        {/* PAGE HEADER — iOS Finder breadcrumb style */}
        <div style={{ marginBottom: 56, maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: mono,
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3a3a3a",
              marginBottom: 18,
            }}
          >
            <span>overlock.click</span>
            <span style={{ color: "#2a2a2a" }}>/</span>
            <span>work</span>
            <span style={{ color: "#2a2a2a" }}>/</span>
            <span style={{ color: "#555" }}>case studies</span>
          </div>
          <h1
            style={{
              fontFamily: display,
              fontSize: 54,
              fontWeight: 400,
              color: "#f5f0eb",
              margin: "0 0 18px",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Fashion &amp; Streetwear Case Studies
          </h1>
          <p style={{ fontFamily: serif, fontSize: 16, color: "#666", lineHeight: 1.7, margin: 0 }}>
            Performance Max, Standard Shopping, and Search campaigns for independent fashion
            retailers. Benchmarked against 2025 industry data with year-over-year trend analysis,
            product categorization strategy, and keyword architecture deep-dives.
          </p>
        </div>

        {/* INDUSTRY YOY CONTEXT RIBBON */}
        <div
          style={{
            marginBottom: 40,
            padding: "24px 28px",
            background: "rgba(46,120,72,0.04)",
            border: "1px solid rgba(142,250,158,0.08)",
            borderRadius: 14,
          }}
        >
          <SectionLabel>Outperforming a Declining Market — 2025 YoY Context</SectionLabel>
          <p style={{ fontFamily: serif, fontSize: 13, color: "#888", lineHeight: 1.65, marginTop: 0, marginBottom: 18 }}>
            Google Ads performance across fashion verticals declined meaningfully in 2025 — rising
            costs, falling conversion rates, and compressed ROAS industry-wide. Both accounts below
            bucked every major trend.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 10,
            }}
          >
            {YOY_INDUSTRY.map((y, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  background: "rgba(142,250,158,0.04)",
                  borderRadius: 8,
                  border: "1px solid rgba(142,250,158,0.06)",
                }}
              >
                <span style={{ fontFamily: mono, fontSize: 13, color: "#8efa9e", flexShrink: 0 }}>
                  {y.icon}
                </span>
                <div>
                  <div style={{ fontFamily: mono, fontSize: 9, color: "#666", marginBottom: 2 }}>
                    {y.metric}
                  </div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: "#8efa9e", fontWeight: 600 }}>
                    {y.ours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PORTFOLIO SUMMARY */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 1,
            marginBottom: 56,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { label: "Combined Revenue", value: "$159.9K", sub: "30-day window" },
            { label: "Blended ROAS",     value: "4.80x",   sub: "+30% above median" },
            { label: "Total Conversions",value: "877",      sub: "Across 2 accounts" },
            { label: "Total Spend",      value: "$33.3K",  sub: "Efficient allocation" },
            { label: "Avg. AOV",         value: "$182",     sub: "Premium positioning" },
          ].map((m, i) => (
            <div key={i} style={{ background: "rgba(28,28,40,0.9)", padding: "26px 22px" }}>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 8,
                  color: "#444",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {m.label}
              </div>
              <div style={{ fontFamily: display, fontSize: 32, color: "#f5f0eb", marginBottom: 3 }}>
                {m.value}
              </div>
              <div style={{ fontFamily: mono, fontSize: 8, color: "#3a3a3a" }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* CASE STUDIES */}
        <CaseStudy data={clientA} />
        <CaseStudy data={clientB} />

        {/* METHODOLOGY FOOTER */}
        <div
          style={{
            textAlign: "center",
            padding: "32px 0 0",
            borderTop: "1px solid rgba(255,255,255,0.03)",
          }}
        >
          <p
            style={{
              fontFamily: mono,
              fontSize: 8,
              color: "#2a2a2a",
              lineHeight: 2,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Data sourced via Google Ads API (last 30 days, March 2026). Industry benchmarks: Triple
            Whale 2025 Benchmarks Report (18,000+ brands), Pixis 2025 ($996M ad spend analyzed),
            Mega Digital 2025, Varos April 2025, Focus Digital 2025, WordStream 2025 Benchmarks,
            Store Growers 2026. PMax migration data: Google official (12% conv. value increase),
            Smarter Ecommerce (4,000+ campaigns analyzed). Client names anonymized. ROAS = conversion
            value ÷ cost. All metrics reflect blended account-level performance.
          </p>
        </div>
      </div>
    </div>
  );
}
