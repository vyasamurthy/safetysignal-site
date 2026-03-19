'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [caseCount, setCaseCount] = useState('3K+')

  useEffect(() => {
    fetch('/api/cases')
      .then(r => r.json())
      .then(d => {
        if (d.total > 0) {
          const formatted = d.total >= 1000
            ? `${(d.total / 1000).toFixed(1)}K+`
            : `${d.total}+`
          setCaseCount(formatted)
        }
      })
      .catch(() => {}) // fallback to default
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(155deg,#0A1628 0%,#102B54 50%,#0D1F3C 100%)',
      display: 'flex', alignItems: 'center',
      padding: '100px 64px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />

      {/* Glows */}
      <div style={{
        position: 'absolute', width: '700px', height: '700px',
        background: 'radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 65%)',
        top: '-150px', right: '-50px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '350px', height: '350px',
        background: 'radial-gradient(circle,rgba(16,185,129,0.09) 0%,transparent 65%)',
        bottom: '50px', left: '150px', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '72px', alignItems: 'center',
        position: 'relative', zIndex: 2, width: '100%',
      }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '24px',
            fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)',
            letterSpacing: '1.2px', textTransform: 'uppercase',
          }}>
            <span className="live-dot" />
            Production · 66 Sprints · 350+ Endpoints
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(36px,4.5vw,62px)',
            fontWeight: 700, lineHeight: 1.06,
            letterSpacing: '-1.5px', color: 'white', marginBottom: '18px',
          }}>
            The AI-Native<br/>
            <span style={{
              background: 'linear-gradient(135deg,#60A5FA,#34D399)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Pharmacovigilance</span><br/>
            Platform
          </h1>

          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75, maxWidth: '480px', marginBottom: '36px',
          }}>
            SafetySignal AI automates adverse event detection, causality assessment,
            regulatory reporting, and benefit-risk evaluation — powered by a 7.6B
            parameter PV model trained on real-world safety data.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <Link href="/#demo" style={{
              background: 'white', color: '#102B54',
              border: 'none', padding: '13px 26px', borderRadius: '8px',
              fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              textDecoration: 'none', display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >▶ Watch Demo</Link>
            <Link href="/contact" style={{
              background: 'rgba(255,255,255,0.07)', color: 'white',
              border: '1px solid rgba(255,255,255,0.18)',
              padding: '13px 26px', borderRadius: '8px',
              fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >Request Early Access →</Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '36px' }}>
            {[
              [caseCount, 'Cases Processed'],
              ['94%', 'CIOMS XIV Compliant'],
              ['3s', 'Causality Assessment'],
            ].map(([num, label]) => (
              <div key={label} style={{
                borderLeft: '2px solid rgba(255,255,255,0.12)',
                paddingLeft: '14px',
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '28px', fontWeight: 700,
                  color: 'white', lineHeight: 1, letterSpacing: '-1px',
                }}>{num}</div>
                <div style={{
                  fontSize: '10px', color: 'rgba(255,255,255,0.4)',
                  marginTop: '3px', letterSpacing: '0.5px', textTransform: 'uppercase',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — platform card */}
        <div className="glass" style={{ borderRadius: '16px', padding: '24px' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '18px',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>Live Signal Queue</div>
            <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>● 3 Active Alerts</div>
          </div>
          {[
            { icon: '🚨', label: 'Amoxicillin → Anaphylaxis', sub: '10 cases · 15-day expedited required', score: 'CRITICAL 92', sc: 'rgba(16,185,129,0.15)', tc: '#34D399' },
            { icon: '⚠️', label: 'XARELTO → Death', sub: '7 cases · HIGH priority', score: 'HIGH 68', sc: 'rgba(245,158,11,0.15)', tc: '#FCD34D' },
            { icon: '📊', label: 'JAKAFI → Thrombocytopenia', sub: 'PRR 16.1 · 3 methods detecting', score: 'MED 46', sc: 'rgba(59,130,246,0.15)', tc: '#93C5FD' },
            { icon: '✅', label: 'E2B(R3) XML Generated', sub: 'FDA FAERS · 3,585 chars · 0.02s', score: 'READY', sc: 'rgba(16,185,129,0.15)', tc: '#34D399' },
          ].map((row, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px', padding: '12px 14px', marginBottom: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '16px' }}>{row.icon}</span>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.82)', fontWeight: 500 }}>{row.label}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>{row.sub}</div>
                </div>
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: '11px', fontWeight: 500,
                padding: '3px 8px', borderRadius: '100px',
                background: row.sc, color: row.tc, whiteSpace: 'nowrap',
              }}>{row.score}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section > div { grid-template-columns: 1fr !important; }
          section { padding: 100px 24px 72px !important; }
        }
      `}</style>
    </section>
  )
}
