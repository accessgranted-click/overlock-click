// All client data for case study listing + detail pages

export interface HeroMetric {
  value: string;
  label: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface Campaign {
  name: string;
  imp: number;
  clicks: number;
  ctr: number;
  cost: number;
  conv: number;
  roas: number | null;
}

export interface Benchmark {
  metric: string;
  ours: string;
  industry: string;
  delta: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  vertical: string;
  region: string;
  listingHeadline: string;
  listingSummary: string;
  detailHeadline: string;
  heroMetrics: HeroMetric[];
  sections: Section[];
  callout: string;
  campaigns: Campaign[];
  benchmarks: Benchmark[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "client-a",
    name: "Client A",
    vertical: "Streetwear / Ecommerce",
    region: "Midwest US",

    listingHeadline: "$57K from a restructure that started with deleting half the account",
    listingSummary: "Five Smart Shopping campaigns were bidding against each other in every auction. We tore the account down, rebuilt it as a tiered PMax architecture, and turned a $14K monthly budget into a $57K revenue month.",

    detailHeadline: "$57K from a restructure that started with deleting half the account",

    heroMetrics: [
      { value: "4.13x", label: "Blended ROAS" },
      { value: "$57.4K", label: "30-Day Revenue" },
      { value: "$13.9K", label: "Ad Spend" },
      { value: "358", label: "Conversions" },
    ],

    sections: [
      {
        heading: "The problem",
        body: "This account had been running five Smart Shopping campaigns, all targeting the same product feed with no segmentation. Every campaign was competing against itself in the auction. The result was inflated CPCs, inconsistent ROAS, and zero control over which products showed for which queries. Legacy Display and YouTube campaigns sat alongside the Shopping mess, spending budget without meaningful attribution.",
      },
      {
        heading: "What we changed",
        body: "We paused everything and started over. The new architecture has four campaigns, each with a specific job. A primary PMax covers the full catalog. A sales-tier PMax rotates promotional products using custom labels tied to markdown status. A brand-specific PMax isolates premium athletic products into dedicated asset groups with model-level search themes. And a branded Search campaign defends the store's name at sub-$25 CPA. Each PMax campaign uses separate audience signals so they do not overlap.",
      },
      {
        heading: "The results",
        body: "The sales-tier PMax hit 4.73x ROAS, which is 84% above the Performance Max platform average of 2.57x. The brand-specific PMax spent $314 and returned 4.54x. The branded Search campaign runs at 26.3% CTR, which is 20x the apparel industry average. Blended across the account, the 30-day window produced $57.4K in revenue on $13.9K in spend at 4.13x ROAS. The industry median ROAS fell 10% year over year in 2025. This account moved in the other direction.",
      },
    ],

    callout: "$314 on a brand-specific PMax. 11 conversions. 4.54x return. Budget did not make the campaign. Signal precision did.",

    campaigns: [
      { name: "PMax, Primary Shopping", imp: 877833, clicks: 10545, ctr: 1.20, cost: 7890, conv: 177, roas: 4.13 },
      { name: "PMax, Sales Tier",       imp: 716875, clicks: 10660, ctr: 1.49, cost: 5038, conv: 156, roas: 4.73 },
      { name: "PMax, Brand Focus",      imp: 28449,  clicks: 587,   ctr: 2.06, cost: 314,  conv: 11,  roas: 4.54 },
      { name: "Branded Search",         imp: 1937,   clicks: 509,   ctr: 26.28, cost: 244, conv: 11,  roas: 4.30 },
    ],

    benchmarks: [
      { metric: "Blended ROAS", ours: "4.13x", industry: "3.68x (down 10% YoY)", delta: "+12%" },
      { metric: "PMax ROAS",    ours: "4.73x", industry: "2.57x platform avg",    delta: "+84%" },
      { metric: "CTR",          ours: "1.39%", industry: "1.26% (down 12% YoY)",  delta: "+10%" },
      { metric: "Brand CTR",    ours: "26.3%", industry: "1.26% apparel avg",      delta: "20.9x" },
    ],
  },

  {
    slug: "client-b",
    name: "Client B",
    vertical: "Sneakers / Ecommerce",
    region: "Midwest US",

    listingHeadline: "5.89x ROAS from shoppers who were browsing the competition",
    listingSummary: "Instead of bidding on competitor keywords at $8 per click, we built PMax audience signals from rival brand URLs and let Google find those shoppers across every surface. That campaign became the best performer in the account.",

    detailHeadline: "5.89x ROAS from shoppers who were browsing the competition",

    heroMetrics: [
      { value: "5.27x",   label: "Blended ROAS" },
      { value: "$102.5K", label: "30-Day Revenue" },
      { value: "519",     label: "Conversions" },
      { value: "5.89x",   label: "Conquest ROAS" },
    ],

    sections: [
      {
        heading: "The problem",
        body: "This is a heritage sneaker retailer going against StockX, GOAT, Foot Locker, and the DTC brand sites. The traditional move is to bid on competitor brand terms in Search. That costs $8 or more per click, produces low CTR, and often low conversion rates. The other gap was demographic: the brand had no active strategy to reach women's sneaker buyers, which is one of the fastest-growing segments in footwear ecommerce.",
      },
      {
        heading: "What we changed",
        body: "We replaced keyword-level competitor bidding with audience-signal conquest through PMax. The competitor campaign uses rival brand URLs and keyword lists as custom audience segments. Google then finds those users across Shopping, YouTube, Display, and Discover at a fraction of the CPC. Separately, we launched a women's PMax with a gender-segmented feed and audience signals combining in-market footwear with women's fashion affinity. A Standard Shopping catch-all runs underneath both as a safety net and, more importantly, as a search-term intelligence layer. PMax does not give full search term reports. Shopping does. That data feeds the entire account.",
      },
      {
        heading: "The results",
        body: "The competitor PMax hit 5.89x ROAS with 131 conversions at $33.65 CPA. That is 129% above the PMax platform average. The women's campaign scaled to 1.3 million impressions and 226 conversions at 5.46x ROAS in a market the brand had never actively pursued. Shopping held near 5x. Brand Search at 7.82x. Blended: $102.5K revenue on $19.4K spend at 5.27x, which is 43% above the industry median in a year where that median fell 10%.",
      },
    ],

    callout: "Audience-signal conquest through PMax costs a fraction of keyword-level competitor bidding. And it converts at more than double the platform average.",

    campaigns: [
      { name: "PMax, Women's Expansion",  imp: 1305102, clicks: 14965, ctr: 1.15, cost: 8149, conv: 226, roas: 5.46 },
      { name: "Shopping, Catch-All",       imp: 866951,  clicks: 11037, ctr: 1.27, cost: 5982, conv: 146, roas: 4.94 },
      { name: "PMax, Competitor Conquest", imp: 508258,  clicks: 7432,  ctr: 1.46, cost: 4419, conv: 131, roas: 5.89 },
      { name: "Brand Defense",             imp: 1798,    clicks: 420,   ctr: 23.36, cost: 255, conv: 12,  roas: 7.82 },
    ],

    benchmarks: [
      { metric: "Blended ROAS",  ours: "5.27x", industry: "3.68x (down 10% YoY)", delta: "+43%" },
      { metric: "Conquest ROAS", ours: "5.89x", industry: "2.57x PMax avg",        delta: "+129%" },
      { metric: "Shopping ROAS", ours: "4.94x", industry: "2.87x ecom avg",        delta: "+72%" },
      { metric: "Brand CTR",     ours: "23.4%", industry: "1.26% apparel avg",      delta: "18.5x" },
    ],
  },

  {
    slug: "client-c",
    name: "Client C",
    vertical: "Design Services / Lead Gen",
    region: "Midwest US",

    listingHeadline: "$11 CPA in a market where the median is $28",
    listingSummary: "A boutique design studio spending $1,519 per month. The Search campaign alone runs at 36.6% CTR because every keyword is exact or phrase match. No broad. No waste. 134 conversions at the lowest CPA in the portfolio.",

    detailHeadline: "$11 CPA in a market where the median is $28",

    heroMetrics: [
      { value: "5.54x",   label: "Blended ROAS" },
      { value: "36.6%",   label: "Search CTR" },
      { value: "134",     label: "Conversions" },
      { value: "$11.34",  label: "CPA" },
    ],

    sections: [
      {
        heading: "The problem",
        body: "Small budget, simple goal: fill the pipeline. $1,519 per month is the entire spend. There is no room for experimentation or wasted clicks. Every dollar needs to convert or contribute directly to a conversion. The median CPA in fashion and design services was $27.52 and rising 23% year over year in 2025.",
      },
      {
        heading: "What we changed",
        body: "We built three layers. Search handles high-intent queries with exact and phrase match only. No broad match. No smart bidding experiments eating budget on low-quality traffic. Shopping runs a best-sellers campaign at $97 per month for product visibility. PMax runs a branding layer at $292 per month for awareness that feeds the Search conversion engine below it. Each campaign has a specific role and a tight budget allocation. The Search campaign gets the majority because it converts the best.",
      },
      {
        heading: "The results",
        body: "Search hit 36.6% CTR and 6.16x ROAS with 107 conversions. That CTR is 5.4x the apparel average. Shopping returned 4.42x on $97 in spend. PMax branding held 3.52x while generating 27K impressions for top-of-funnel awareness. Account-wide CPA is $11.34 against a fashion median of $27.52. Blended ROAS is 5.54x, which is 51% above the Google Ads industry median. This is the smallest budget in the portfolio and the most efficient.",
      },
    ],

    callout: "36.6% CTR means the match types are right. Every impression is a qualified prospect. You do not need a big budget. You need a clean one.",

    campaigns: [
      { name: "Search, Core",           imp: 5637,  clicks: 2065, ctr: 36.63, cost: 1130, conv: 107, roas: 6.16 },
      { name: "PMax, Branding",         imp: 26990, clicks: 560,  ctr: 2.07,  cost: 292,  conv: 21,  roas: 3.52 },
      { name: "Shopping, Best-Sellers", imp: 11345, clicks: 229,  ctr: 2.02,  cost: 97,   conv: 6,   roas: 4.42 },
    ],

    benchmarks: [
      { metric: "Blended ROAS", ours: "5.54x",  industry: "3.68x (down 10% YoY)", delta: "+51%" },
      { metric: "Search ROAS",  ours: "6.16x",  industry: "5.17x Search avg",      delta: "+19%" },
      { metric: "Search CTR",   ours: "36.6%",  industry: "6.77% apparel avg",      delta: "5.4x" },
      { metric: "CPA",          ours: "$11.34", industry: "$27.52 fashion avg",     delta: "-59%" },
    ],
  },

  {
    slug: "client-d",
    name: "Client D",
    vertical: "Non-Profit / Google Ad Grant",
    region: "Northeast US",

    listingHeadline: "966 conversions. The ad budget was free.",
    listingSummary: "An independent cinema running on Google's Ad Grant. $10K in monthly credits, zero dollars out of pocket. Most Grant accounts waste the budget or get suspended. This one runs at 16.9% CTR with nearly 1,000 conversions per month.",

    detailHeadline: "966 conversions. The ad budget was free.",

    heroMetrics: [
      { value: "966",   label: "Conversions" },
      { value: "16.9%", label: "Blended CTR" },
      { value: "1,735", label: "Clicks" },
      { value: "$0",    label: "Out-of-Pocket" },
    ],

    sections: [
      {
        heading: "The problem",
        body: "Google gives eligible non-profits $10,000 per month in free ad credits through the Ad Grant program. The catch is compliance: accounts must maintain a 5% CTR minimum or face suspension. Most non-profits underutilize the budget, run generic campaigns, or get suspended within a few months. This client is an independent cinema that needed to drive ticket awareness, promote specific film series, and attract tourism traffic from outside the local area.",
      },
      {
        heading: "What we changed",
        body: "We built three PMax campaigns, each targeting a different audience. The branding campaign covers general ticket awareness and event discovery. The series campaign targets specific film programming verticals like documentaries, indie features, and curated screenings. The tourism campaign reaches out-of-area visitors searching for cultural activities in the region. Each campaign has distinct search themes and audience signals. The Grant budget is distributed based on conversion volume and CTR performance.",
      },
      {
        heading: "The results",
        body: "The branding PMax drives 661 conversions at 23.4% CTR. The series campaign adds 145 from niche audiences who care about specific programming. Tourism pulls 160 from visitors who had not heard of the venue before the ad found them. Total: 966 conversions and 1,735 clicks at 16.9% blended CTR. That is 3.4x the Grant compliance floor. The ad spend is entirely Grant-funded. Out-of-pocket cost is zero. The Grant is fully utilized, which most non-profits never achieve.",
      },
    ],

    callout: "Most non-profits treat the Google Grant as an afterthought. This account uses all of it, converts nearly 1,000 actions per month, and runs at triple the CTR floor.",

    campaigns: [
      { name: "PMax, Branding",    imp: 4431, clicks: 1036, ctr: 23.38, cost: 0, conv: 661, roas: null },
      { name: "PMax, Film Series", imp: 2763, clicks: 408,  ctr: 14.77, cost: 0, conv: 145, roas: null },
      { name: "PMax, Tourism",     imp: 3100, clicks: 291,  ctr: 9.39,  cost: 0, conv: 160, roas: null },
    ],

    benchmarks: [
      { metric: "CTR",               ours: "16.9%", industry: "5% Grant minimum",  delta: "3.4x" },
      { metric: "PMax Branding CTR", ours: "23.4%", industry: "2.07% PMax avg",    delta: "11.3x" },
      { metric: "Conversions",       ours: "966",   industry: "On $0 real spend",   delta: "N/A" },
      { metric: "Grant Utilization", ours: "100%",  industry: "Most use under 20%", delta: "Full" },
    ],
  },
];

export const portfolioStats = {
  revenue: "$168.3K",
  roas: "4.85x",
  conversions: "2,035",
  spend: "$34.8K",
};
