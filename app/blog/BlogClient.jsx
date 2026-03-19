'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function BlogClient({ posts }) {
  const [selected, setSelected] = useState(null)
  const [clicks, setClicks] = useState({})

  const handleClick = (idx) => {
    const now = Date.now()
    const last = clicks[idx] || 0
    if (now - last < 400) {
      setSelected(posts[idx])
    }
    setClicks(prev => ({ ...prev, [idx]: now }))
  }

  return (
    <>
      <div style={{ paddingTop: '66px', minHeight: '100vh', background: '#fff' }}>
        {/* Header */}
        <div style={{ background: '#0A1628', padding: '80px 64px 64px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Insights</div>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>PV Intelligence &<br/>Industry Insights</h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', lineHeight: 1.75 }}>Deep dives into AI pharmacovigilance, regulatory science, and drug safety technology. Double-click any article to read the full writeup.</p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ padding: '64px', background: '#F8FAFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {posts.map((post, i) => (
              <div key={post.slug}
                onClick={() => handleClick(i)}
                style={{
                  background: 'white', border: '1px solid #E2EAF4', borderRadius: '13px',
                  overflow: 'hidden', cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  userSelect: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(10,22,40,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ height: '150px', background: post.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px' }}>{post.emoji}</div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#2563EB', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '7px' }}>{post.category}</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '17px', fontWeight: 700, color: '#0A1628', marginBottom: '7px', lineHeight: 1.3 }}>{post.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.6 }}>{post.excerpt}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #E2EAF4', fontSize: '11px', color: '#64748B' }}>
                    <span>{post.date} · {post.readTime}</span>
                    <span style={{ fontSize: '10px', color: '#3B82F6', fontWeight: 600 }}>Double-click to read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
          style={{
            position: 'fixed', inset: 0, zIndex: 500,
            background: 'rgba(10,22,40,0.72)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px',
          }}
        >
          <div style={{
            background: 'white', borderRadius: '18px',
            maxWidth: '760px', width: '100%', maxHeight: '90vh',
            overflowY: 'auto', position: 'relative',
            animation: 'modalIn 0.28s ease',
          }}>
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute', top: '18px', right: '18px',
                width: '34px', height: '34px', borderRadius: '50%',
                background: '#EFF6FF', border: '1px solid #E2EAF4',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '15px', color: '#64748B', zIndex: 10,
              }}
            >✕</button>

            <div style={{ height: '200px', background: selected.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', borderRadius: '18px 18px 0 0' }}>{selected.emoji}</div>

            <div style={{ padding: '32px 36px 36px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#2563EB', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>{selected.category}</div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '26px', fontWeight: 700, color: '#0A1628', lineHeight: 1.2, marginBottom: '6px', letterSpacing: '-0.5px' }}>{selected.title}</h2>
              <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #E2EAF4' }}>{selected.date} · {selected.readTime} · SafetySignal AI</div>
              <div className="prose-pv" dangerouslySetInnerHTML={{ __html: selected.body }} />
            </div>
          </div>
          <style>{`@keyframes modalIn { from { opacity:0; transform:translateY(18px) scale(0.97); } to { opacity:1; transform:none; } }`}</style>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          div[style*="padding: 64px"] { padding: 44px 22px !important; }
          div[style*="padding: 80px 64px"] { padding: 80px 22px 44px !important; }
        }
      `}</style>
    </>
  )
}
