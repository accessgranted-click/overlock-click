import { caseStudies } from "@/lib/case-studies-data";

const mono = "var(--font-jetbrains-mono), 'SF Mono', monospace";
const serif = "var(--font-source-serif-4), Georgia, serif";
const display = "var(--font-instrument-serif), Georgia, serif";

function fmt(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

export default function CaseStudyDetail({ slug }: { slug: string }) {
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) {
    return <div style={{ padding: 80, textAlign: "center", color: "#666" }}>Case study not found.</div>;
  }

  const isGrant = study.slug === "client-d";

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e8e4df", padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Back link */}
        <a href="/work" style={{ fontFamily: mono, fontSize: 10, color: "#555", textDecoration: "none", letterSpacing: "0.06em", display: "inline-block", marginBottom: 40 }}>
          ← All case studies
        </a>

        {/* Vertical tag */}
        <div style={{ fontFamily: mono, fontSize: 9, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          {study.vertical} · {study.region}
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: display, fontSize: 42, fontWeight: 400, color: "#e8e4df", margin: "0 0 40px", lineHeight: 1.15 }}>
          {study.detailHeadline}
        </h1>

        {/* Hero metrics */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 1, background: "rgba(255,255,255,0.04)", borderRadius: 12,
          overflow: "hidden", marginBottom: 56,
        }}>
          {study.heroMetrics.map((m, i) => (
            <div key={i} style={{ background: "#0a0a0a", padding: "24px 20px" }}>
              <div style={{ fontFamily: display, fontSize: 32, color: "#e8e4df", marginBottom: 4 }}>{m.value}</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Narrative sections */}
        {study.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555", marginBottom: 14 }}>
              {s.heading}
            </h2>
            <p style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.8, color: "#999", margin: 0 }}>
              {s.body}
            </p>
          </div>
        ))}

        {/* Callout */}
        <div style={{
          padding: "24px 28px", margin: "48px 0",
          borderLeft: "2px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.015)", borderRadius: "0 10px 10px 0",
        }}>
          <p style={{ fontFamily: serif, fontSize: 15, color: "#bbb", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
            {study.callout}
          </p>
        </div>

        {/* Benchmark comparison */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
            Performance vs. 2025 benchmarks
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {["Metric", "This Account", "Industry", ""].map((h, i) => (
                    <th key={i} style={{
                      textAlign: i === 0 ? "left" : "right", padding: "10px 12px",
                      fontFamily: mono, fontSize: 8, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "#3a3a3a", fontWeight: 500,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {study.benchmarks.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.025)" }}>
                    <td style={{ padding: "12px", fontFamily: mono, fontSize: 11, color: "#888" }}>{r.metric}</td>
                    <td style={{ padding: "12px", textAlign: "right", fontFamily: mono, fontSize: 13, fontWeight: 700, color: "#e8e4df" }}>{r.ours}</td>
                    <td style={{ padding: "12px", textAlign: "right", fontFamily: mono, fontSize: 11, color: "#555" }}>{r.industry}</td>
                    <td style={{ padding: "12px", textAlign: "right", fontFamily: mono, fontSize: 11, fontWeight: 600, color: "#8efa9e" }}>{r.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Campaign breakdown */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
            Campaign breakdown
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {["Campaign", "Impr.", "Clicks", "CTR", "Spend", "Conv.", ...(isGrant ? [] : ["ROAS"])].map((h) => (
                    <th key={h} style={{
                      textAlign: h === "Campaign" ? "left" : "right", padding: "10px 10px",
                      fontFamily: mono, fontSize: 8, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "#3a3a3a", fontWeight: 500,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {study.campaigns.map((c, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.025)" }}>
                    <td style={{ padding: "10px", color: "#999", fontFamily: serif, fontSize: 13 }}>{c.name}</td>
                    <td style={{ padding: "10px", textAlign: "right", color: "#555", fontFamily: mono, fontSize: 10 }}>{fmt(c.imp)}</td>
                    <td style={{ padding: "10px", textAlign: "right", color: "#555", fontFamily: mono, fontSize: 10 }}>{fmt(c.clicks)}</td>
                    <td style={{ padding: "10px", textAlign: "right", color: "#555", fontFamily: mono, fontSize: 10 }}>{c.ctr.toFixed(2)}%</td>
                    <td style={{ padding: "10px", textAlign: "right", color: "#555", fontFamily: mono, fontSize: 10 }}>{isGrant ? "$0" : "$" + fmt(c.cost)}</td>
                    <td style={{ padding: "10px", textAlign: "right", color: "#555", fontFamily: mono, fontSize: 10 }}>{c.conv}</td>
                    {!isGrant && (
                      <td style={{ padding: "10px", textAlign: "right", fontFamily: mono, fontSize: 11, fontWeight: 700, color: "#8efa9e" }}>
                        {c.roas!.toFixed(2)}x
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center", padding: "48px 0",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}>
          <p style={{ fontFamily: serif, fontSize: 18, color: "#888", margin: "0 0 16px" }}>
            Want results like these?
          </p>
          <a href="mailto:hello@overlock.click" style={{
            fontFamily: mono, fontSize: 11, color: "#e8e4df", letterSpacing: "0.06em",
            textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)",
            paddingBottom: 2,
          }}>
            hello@overlock.click ↗
          </a>
        </div>

        {/* Source note */}
        <p style={{ fontFamily: mono, fontSize: 8, color: "#2a2a2a", lineHeight: 2, textAlign: "center" }}>
          Data from Google Ads API, 30-day window (March 2026). Client name anonymized.
        </p>
      </div>
    </div>
  );
}
