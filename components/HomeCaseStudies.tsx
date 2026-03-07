"use client";

import { caseStudies } from "@/lib/case-studies-data";

const mono = "var(--font-jetbrains-mono), 'SF Mono', monospace";
const serif = "var(--font-source-serif-4), Georgia, serif";
const display = "var(--font-instrument-serif), Georgia, serif";

const featured = [caseStudies[0], caseStudies[1], caseStudies[3]];

export default function HomeCaseStudies() {
  return (
    <section id="work" style={{ padding: "100px 24px", maxWidth: 860, margin: "0 auto" }}>

      <div style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#444", marginBottom: 12 }}>
          Selected Work
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: display, fontSize: 36, fontWeight: 400, color: "#e8e4df", margin: 0 }}>
            Proven results.
          </h2>
          <a href="/work" style={{ fontFamily: mono, fontSize: 10, color: "#666", textDecoration: "none", letterSpacing: "0.06em" }}>
            All case studies →
          </a>
        </div>
      </div>

      <div style={{ display: "grid", gap: 24 }}>
        {featured.map((c) => (
          <a
            key={c.slug}
            href={`/work/${c.slug}`}
            style={{
              display: "block", textDecoration: "none", color: "inherit",
              padding: "32px 28px",
              background: "rgba(255,255,255,0.012)",
              border: "1px solid rgba(255,255,255,0.04)",
              borderRadius: 12,
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
              <div>
                <p style={{ fontFamily: mono, fontSize: 9, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>
                  {c.vertical}
                </p>
                <h3 style={{ fontFamily: display, fontSize: 24, fontWeight: 400, color: "#e8e4df", margin: 0, lineHeight: 1.25 }}>
                  {c.listingHeadline}
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
              <div>
                <span style={{ fontFamily: mono, fontSize: 18, color: "#e8e4df", fontWeight: 600 }}>{c.heroMetrics[0].value}</span>
                <span style={{ fontFamily: mono, fontSize: 9, color: "#555", marginLeft: 6 }}>{c.heroMetrics[0].label}</span>
              </div>
              <div>
                <span style={{ fontFamily: mono, fontSize: 18, color: "#e8e4df", fontWeight: 600 }}>{c.heroMetrics[1].value}</span>
                <span style={{ fontFamily: mono, fontSize: 9, color: "#555", marginLeft: 6 }}>{c.heroMetrics[1].label}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
