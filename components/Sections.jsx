'use client'
import { useState } from 'react'
import Link from 'next/link'
import { INLINE_POSTS } from '@/lib/posts'

// ── DEMO ──────────────────────────────────────────────────────
export function Demo() {
  const [active, setActive] = useState(0)
  const tabs = ['Case Processing', 'Signal Detection', 'E2B Generation', 'Benefit-Risk', 'Reg Dashboard']
  return (
    <section id="demo" style={{ background: '#fff', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', marginBottom: '12px' }}>Platform Demo</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: '#0A1628', marginBottom: '12px' }}>See SafetySignal AI in Action</h2>
          <p style={{ fontSize: '15px', color: '#64748B', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>Watch the full platform walkthrough — from case intake to E2B(R3) submission in under 4 minutes.</p>
        </div>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #E2EAF4', boxShadow: '0 12px 48px rgba(10,22,40,0.12)', background: '#0A1628', aspectRatio: '16/9', position: 'relative', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', background: 'linear-gradient(155deg,#0D1F3C,#0A2B52)' }}>
              <div style={{ width: '68px', height: '68px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'white', background: 'rgba(37,99,235,0.5)' }}>▶</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '19px', color: 'white', fontWeight: 700 }}>SafetySignal AI — Full Platform Walkthrough</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Click to play · 4 min · Live system demo</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            {tabs.map((t, i) => (
              <button key={t} onClick={() => setActive(i)} style={{
                padding: '8px 18px', borderRadius: '100px',
                border: `1px solid ${active === i ? '#2563EB' : '#E2EAF4'}`,
                background: active === i ? '#EFF6FF' : 'white',
                fontSize: '12px', fontWeight: 500,
                color: active === i ? '#2563EB' : '#64748B',
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: "'DM Sans',sans-serif",
              }}>{t}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── HOW IT WORKS ──────────────────────────────────────────────
export function HowItWorks() {
  const steps = [
    { n: '01', title: 'Automated Case Intake', desc: 'FAERS bulk import, EMA feed, manual upload, or REST API. AI triage assigns priority and routes cases to the assessment pipeline in real time.' },
    { n: '02', title: 'AI Causality Assessment', desc: 'SafetySignal-PV-7B v3 runs Naranjo, WHO-UMC, and Kramer algorithms in parallel. Three-algorithm consensus in under 3 seconds per case.' },
    { n: '03', title: 'Signal Prioritization', desc: 'PRR, ROR, IC, EBGM disproportionality plus composite priority scoring. Rising signals auto-flagged with labeling gap analysis.' },
    { n: '04', title: 'Regulatory Output', desc: 'ICH E2B(R3) XML, CIOMS I forms, PSUR packages, benefit-risk assessments, and ICH narratives — submission-ready in seconds.' },
  ]
  return (
    <section id="how" style={{ background: '#F8FAFF', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', marginBottom: '12px' }}>Workflow</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: '#0A1628' }}>From Case Intake to<br/>Regulatory Submission</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #E2EAF4', borderRadius: '13px', padding: '26px 22px', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '52px', fontWeight: 700, color: '#EFF6FF', lineHeight: 1, marginBottom: '14px' }}>{s.n}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '7px' }}>{s.title}</div>
              <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){#how > div > div:last-child{grid-template-columns:1fr 1fr!important;}#how{padding:72px 22px!important;}}`}</style>
    </section>
  )
}

// ── METRICS ──────────────────────────────────────────────────
export function Metrics() {
  const stats = [
    { v: '3s', l: 'Causality Assessment' },
    { v: '94%', l: 'CIOMS XIV Compliance' },
    { v: '80%', l: 'Model-Claude Agreement' },
    { v: '350+', l: 'API Endpoints' },
    { v: '66', l: 'Production Sprints' },
  ]
  return (
    <section style={{ background: '#0A1628', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Performance</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: 'white', marginBottom: '52px' }}>Built for Enterprise Scale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '13px', padding: '28px 16px', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '42px', fontWeight: 700, color: 'white', letterSpacing: '-2px', lineHeight: 1, marginBottom: '8px' }}>{s.v}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.5px', lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section > div > div:last-child{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  )
}

// ── BLOG PREVIEW ──────────────────────────────────────────────
export function BlogPreview() {
  const posts = INLINE_POSTS.slice(0, 3)
  return (
    <section id="blog" style={{ background: '#fff', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', marginBottom: '12px' }}>Insights</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: '#0A1628' }}>PV Intelligence &<br/>Industry Insights</h2>
          </div>
          <Link href="/blog" style={{ fontSize: '14px', fontWeight: 600, color: '#2563EB', textDecoration: 'none' }}>View all articles →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {posts.map((post) => (
            <Link key={post.slug} href="/blog" style={{ textDecoration: 'none', display: 'block', background: 'white', border: '1px solid #E2EAF4', borderRadius: '13px', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(10,22,40,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ height: '150px', background: post.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px' }}>{post.emoji}</div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#2563EB', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '7px' }}>{post.category}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '16px', fontWeight: 700, color: '#0A1628', marginBottom: '7px', lineHeight: 1.3 }}>{post.title}</div>
                <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.6 }}>{post.excerpt}</div>
                <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #E2EAF4', fontSize: '11px', color: '#2563EB', fontWeight: 600 }}>Read on Insights page →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){#blog > div > div:last-child{grid-template-columns:1fr!important;}#blog{padding:72px 22px!important;}}`}</style>
    </section>
  )
}

// ── CAREERS PREVIEW ──────────────────────────────────────────
export function CareersPreview() {
  return (
    <section id="careers" style={{ background: '#F8FAFF', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', marginBottom: '12px' }}>Careers</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: '#0A1628', marginBottom: '12px' }}>Build the Future of<br/>Drug Safety</h2>
          <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.75, marginBottom: '32px' }}>Remote-first, mission-driven. We're looking for people who care deeply about patient safety and love hard problems.</p>
          <Link href="/careers" style={{ background: '#2563EB', color: 'white', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1E4D8C'}
          onMouseLeave={e => e.currentTarget.style.background = '#2563EB'}>View Open Roles →</Link>
        </div>
        <div>
          {['Senior Pharmacovigilance Scientist', 'AI/ML Engineer — Life Sciences', 'Regulatory Affairs Director', 'Enterprise Sales — Pharma/Biotech', 'Clinical Data Scientist'].map((title, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #E2EAF4', gap: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628' }}>{title}</div>
              <span style={{ fontSize: '10px', padding: '2px 9px', borderRadius: '100px', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontWeight: 500, whiteSpace: 'nowrap' }}>Remote</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){#careers > div{grid-template-columns:1fr!important;}#careers{padding:72px 22px!important;}}`}</style>
    </section>
  )
}

export default Demo
