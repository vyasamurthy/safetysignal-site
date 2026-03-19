import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 1fr', gap: '44px', marginBottom: '44px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '7px', background: 'linear-gradient(135deg,#2563EB,#1A3A6B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', color: 'white', fontFamily: "'Space Grotesk',sans-serif" }}>SS</div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '18px', color: 'white' }}>Safety<span style={{ color: '#2563EB' }}>Signal</span> AI</span>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginTop: '12px', maxWidth: '240px' }}>
              The world's first AI-native pharmacovigilance platform. A Venture Vertex LLC product, Frisco, Texas.
            </p>
          </div>
          {[
            ['Platform', [['/#features','Features'],['/#oracle','Oracle Integration'],['/#demo','Demo'],['/#how','How It Works']]],
            ['Company', [['/blog','Insights'],['/careers','Careers'],['/contact','Contact'],['#','Privacy Policy']]],
            ['Standards', [['#','ICH E2B(R3)'],['#','GVP Module VI/IX'],['#','CIOMS XIV'],['#','21 CFR Part 11']]],
          ].map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>{heading}</h4>
              {links.map(([href, label]) => (
                <Link key={label} href={href} style={{ display: 'block', fontSize: '12px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', marginBottom: '9px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                >{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: '22px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Venture Vertex LLC. SafetySignal AI. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '7px' }}>
            {['v3.66.0','HIPAA Ready','GxP Aligned'].map(t => (
              <span key={t} style={{ fontSize: '9px', padding: '3px 9px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)', fontFamily: "'Space Mono',monospace" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer { padding: 44px 22px !important; }
        }
      `}</style>
    </footer>
  )
}
