"use client";

import { caseStudies, portfolioStats } from "@/lib/case-studies-data";

const mono = "var(--font-jetbrains-mono), 'SF Mono', monospace";
const serif = "var(--font-source-serif-4), Georgia, serif";
const display = "var(--font-instrument-serif), Georgia, serif";

export default function CaseStudyListing() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e8e4df", padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Page header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#444", marginBottom: 16 }}>
            Case Studies
          </p>
          <h1 style={{ fontFamily: display, fontSize: 48, fontWeight: 400, color: "#e8e4df", margin: "0 0 18px", lineHeight: 1.1 }}>
            Proven results across four verticals.
          </h1>
          <p style={{ fontFamily: serif, fontSize: 15, color: "#666", lineHeight: 1.7, margin: 0, maxWidth: 580 }}>
            Streetwear ecommerce, sneaker retail, design services, and a non-profit cinema. Different budgets, different goals, same discipline.
          </p>
        </div>

        {/* Roll-up stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 1, background: "rgba(255,255,255,0.04)", borderRadius: 12,
          overflow: "hidden", marginBottom: 64,
        }}>
          {[
            { label: "Revenue",     value: portfolioStats.revenue },
            { label: "ROAS",        value: portfolioStats.roas },
            { label: "Conversions", value: portfolioStats.conversions },
            { label: "Ad Spend",    value: portfolioStats.spend },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0a0a0a", padding: "22px 20px" }}>
              <div style={{ fontFamily: mono, fontSize: 8, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: display, fontSize: 28, color: "#e8e4df" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div style={{ display: "grid", gap: 32 }}>
          {caseStudies.map((c) => (
            <a
              key={c.slug}
              href={`/work/${c.slug}`}
              style={{
                display: "block", textDecoration: "none", color: "inherit",
                background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: 16, padding: "40px 36px", transition: "border-color 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)")}
            >
              <div style={{ fontFamily: mono, fontSize: 9, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                {c.vertical}
              </div>

              <h2 style={{ fontFamily: display, fontSize: 30, fontWeight: 400, color: "#e8e4df", margin: "0 0 14px", lineHeight: 1.2 }}>
                {c.listingHeadline}
              </h2>

              <p style={{ fontFamily: serif, fontSize: 14, color: "#777", lineHeight: 1.7, margin: "0 0 20px", maxWidth: 620 }}>
                {c.listingSummary}
              </p>

              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {c.heroMetrics.slice(0, 3).map((m, i) => (
                  <div key={i}>
                    <span style={{ fontFamily: mono, fontSize: 16, color: "#e8e4df", fontWeight: 600 }}>{m.value}</span>
                    <span style={{ fontFamily: mono, fontSize: 9, color: "#555", marginLeft: 6, letterSpacing: "0.04em" }}>{m.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontFamily: mono, fontSize: 10, color: "#666", marginTop: 20, letterSpacing: "0.06em" }}>
                View case study →
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 64, textAlign: "center" }}>
          <p style={{ fontFamily: mono, fontSize: 8, color: "#2a2a2a", lineHeight: 2, maxWidth: 500, margin: "0 auto" }}>
            Data from Google Ads API, 30-day window (March 2026). Benchmarks from Triple Whale 2025, Pixis 2025, Varos 2025, WordStream 2025, Focus Digital 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
