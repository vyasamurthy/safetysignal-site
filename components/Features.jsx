'use client'
'use client'

const FEATURES = [
  { icon: '🧠', title: 'AI Causality Assessment', desc: 'Three-algorithm consensus using Naranjo, WHO-UMC, and Kramer — powered by SafetySignal-PV-7B v3, a 7.6B parameter model fine-tuned on real adverse event data. 80% agreement with Claude Sonnet 4.', tag: 'SafetySignal-PV-7B v3', bg: '#EFF6FF' },
  { icon: '📊', title: 'Signal Prioritization Scoring', desc: 'Composite priority score combining PRR/ROR/IC/EBGM, causality strength, clinical severity, case volume, and novelty. A ranked queue that Oracle Empirica cannot produce alone.', tag: 'BRAT Framework · Sprint 60', bg: '#F0FDF4' },
  { icon: '⚖️', title: 'Benefit-Risk Assessment', desc: "World's first AI-native BRAT benefit-risk evaluation engine. ICH E2C(R2)-aligned assessments from case data in under 50ms — a capability no legacy PV platform offers.", tag: 'First-in-Class · Sprint 66', bg: '#FFFBEB' },
  { icon: '🏷️', title: 'Labeling Gap Detection', desc: 'Automated listedness determination — cross-references signals against product labeling to flag unlisted AEs requiring 15-day expedited reporting per ICH E2B(R3).', tag: 'ICH E2B(R3) · Sprint 62', bg: '#FEF2F2' },
  { icon: '📋', title: 'E2B(R3) XML Generator', desc: 'Submission-ready ICH E2B(R3) ICSRs with all required fields generated in milliseconds. Patient demographics, drug details, causality assessment, narrative — FDA and EMA formats.', tag: 'FDA · EMA · Sprint 65', bg: '#EFF6FF' },
  { icon: '📚', title: 'Literature Surveillance', desc: 'Automated PubMed portfolio surveillance — extracts AE signals from abstracts, cross-references against case DB, and flags literature-only signals not yet in FAERS data.', tag: 'PubMed API · Sprint 61', bg: '#F0FDF4' },
  { icon: '📈', title: 'Signal Trending Over Time', desc: 'Week-over-week signal emergence tracking across 344+ drug-AE pairs. Identifies NEW, RISING, DECLINING, and STABLE signals with WoW% changes for regulatory intelligence.', tag: 'Portfolio Level · Sprint 63', bg: '#FFFBEB' },
  { icon: '📄', title: 'ICH Narrative Generation', desc: 'ICH E2B-compliant individual case narratives auto-generated from structured data with completeness scoring and quality grading A–D. Eliminates manual PV authoring.', tag: 'ICH E2B · Sprint 59', bg: '#FEF2F2' },
  { icon: '🏥', title: 'Regulatory Intelligence Dashboard', desc: 'Consolidated compliance status, KPI tracking, deadline alerts, signal queue, and risk heatmap — aggregated from 130+ CIOMS XIV tables. Platform health score included.', tag: 'CIOMS XIV · Sprint 64', bg: '#EFF6FF' },
]

export default function Features() {
  return (
    <section id="features" style={{ background: '#F8FAFF', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="fade-up">
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', marginBottom: '12px' }}>Platform Capabilities</div>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: '#0A1628', marginBottom: '12px' }}>Every PV Workflow,<br/>Powered by AI</h2>
          <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '500px', lineHeight: 1.75 }}>From case intake to regulatory submission — SafetySignal AI replaces manual workflows with AI-native automation in seconds, not days.</p>
        </div>

        <div className="fade-up" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px', marginTop: '52px',
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #features > div > div:last-child { grid-template-columns: 1fr !important; }
          #features { padding: 72px 22px !important; }
        }
      `}</style>
    </section>
  )
}

function FeatureCard({ icon, title, desc, tag, bg }) {
  return (
    <div style={{
      background: 'white', border: '1px solid #E2EAF4',
      borderRadius: '13px', padding: '26px',
      transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
      cursor: 'default',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#93C5FD'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(10,22,40,0.12)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = '#E2EAF4'; e.currentTarget.style.boxShadow = ''; }}
    >
      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px', marginBottom: '16px' }}>{icon}</div>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '7px' }}>{title}</div>
      <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.65 }}>{desc}</div>
      <div style={{ marginTop: '14px', fontSize: '10px', fontWeight: 600, color: '#2563EB', fontFamily: "'Space Mono', monospace" }}>{tag}</div>
    </div>
  )
}
