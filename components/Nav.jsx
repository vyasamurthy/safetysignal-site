'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 64px', height: '66px',
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #E2EAF4',
      boxShadow: scrolled ? '0 2px 12px rgba(10,22,40,0.08)' : '0 1px 4px rgba(10,22,40,0.04)',
      transition: 'all 0.3s',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '7px',
          background: 'linear-gradient(135deg,#2563EB,#1A3A6B)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '13px', color: 'white', letterSpacing: '-0.5px',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>SS</div>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800, fontSize: '18px', color: '#0A1628', letterSpacing: '-0.3px',
        }}>Safety<span style={{ color: '#2563EB' }}>Signal</span> AI</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
        {[
          ['/#features', 'Features'],
          ['/#oracle', 'Oracle'],
          ['/#demo', 'Demo'],
          ['/blog', 'Insights'],
          ['/careers', 'Careers'],
        ].map(([href, label]) => (
          <Link key={href} href={href} style={{
            fontSize: '13px', fontWeight: 500, color: '#64748B',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#2563EB'}
          onMouseLeave={e => e.target.style.color = '#64748B'}
          >{label}</Link>
        ))}
        <Link href="/contact" style={{
          background: '#2563EB', color: 'white',
          padding: '8px 20px', borderRadius: '7px',
          fontWeight: 700, fontSize: '13px', textDecoration: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.target.style.background = '#1E4D8C'}
        onMouseLeave={e => e.target.style.background = '#2563EB'}
        >Request Access</Link>
      </div>

      <style>{`
        @media(max-width:768px){
          .desktop-nav { display: none !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  )
}
