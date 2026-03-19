export default function OracleIntegration() {
  const integrations = [
    { name: 'Oracle Argus Safety (Cloud)', status: 'LIVE', color: '#10B981' },
    { name: 'Argus Mart Data Connector', status: 'LIVE', color: '#10B981' },
    { name: 'Empirica Topics SOAP API', status: 'LIVE', color: '#10B981' },
    { name: 'Oracle Clinical One (SAE)', status: 'READY', color: '#3B82F6' },
    { name: 'GVP Module IX Workflow', status: 'READY', color: '#3B82F6' },
    { name: 'OCI Kubernetes / Terraform', status: 'READY', color: '#3B82F6' },
    { name: 'Oracle Health Sciences InForm', status: 'PLANNED', color: '#64748B' },
    { name: 'Oracle Analytics Intelligence', status: 'PLANNED', color: '#64748B' },
  ]

  const badgeStyle = (s) => ({
    fontSize: '9px', padding: '2px 7px', borderRadius: '100px', fontWeight: 600,
    fontFamily: "'Space Mono', monospace",
    background: s === 'LIVE' ? 'rgba(16,185,129,0.15)' : s === 'READY' ? 'rgba(59,130,246,0.15)' : 'rgba(100,116,139,0.12)',
    color: s === 'LIVE' ? '#34D399' : s === 'READY' ? '#60A5FA' : 'rgba(255,255,255,0.3)',
  })

  const points = [
    { icon: '🔗', title: 'Argus Safety Bidirectional Sync', desc: 'Real-time case data exchange with Oracle Argus Safety via REST API and E2B messaging. SafetySignal enriches Argus cases with AI-generated causality assessments and narratives.' },
    { icon: '📡', title: 'Empirica Topics SOAP API', desc: 'Connect to Oracle Empirica Topics Web Service to import signal detection results and augment with SafetySignal\'s composite priority scoring and benefit-risk assessment.' },
    { icon: '🗄️', title: 'Argus Mart Data Connector', desc: 'Direct read access to Argus Mart analytical data warehouse. Pull aggregate safety data and case listings into SafetySignal\'s regulatory intelligence dashboard.' },
    { icon: '☁️', title: 'OCI Kubernetes Deployment', desc: 'Deploy SafetySignal AI alongside Oracle Cloud Infrastructure using validated Terraform and Kubernetes manifests for GxP-compliant enterprise deployments.' },
  ]

  return (
    <section id="oracle" style={{ background: '#0A1628', padding: '96px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

        {/* Left — text */}
        <div className="fade-up">
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Integrations</div>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: 700, letterSpacing: '-1px', color: 'white', marginBottom: '12px' }}>Native Oracle<br/>Argus Integration</h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', lineHeight: 1.75, marginBottom: '32px' }}>
            SafetySignal AI connects directly to Oracle's PV ecosystem — augmenting Argus Safety, Empirica Signal, and Argus Mart without replacing your existing infrastructure.
          </p>
          {points.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>{p.icon}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '5px' }}>{p.title}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right — integration matrix */}
        <div className="fade-up" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', paddingBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '9px', background: 'linear-gradient(135deg,#C0392B,#E74C3C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '12px', color: 'white' }}>Ora</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'white' }}>Oracle PV Ecosystem</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>SafetySignal AI Integration Matrix</div>
            </div>
          </div>
          {integrations.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '11px 13px', borderRadius: '7px', marginBottom: '8px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              transition: 'background 0.2s', cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 500, flex: 1 }}>{item.name}</div>
              <div style={badgeStyle(item.status)}>{item.status}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #oracle > div { grid-template-columns: 1fr !important; }
          #oracle { padding: 72px 22px !important; }
        }
      `}</style>
    </section>
  )
}
