'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async () => {
    if (!form.email || !form.firstName || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const input = (placeholder, key, type = 'text') => (
    <input
      type={type} placeholder={placeholder} value={form[key]} onChange={set(key)}
      style={{ background: '#F8FAFF', border: '1px solid #E2EAF4', borderRadius: '8px', padding: '12px 15px', fontSize: '13px', fontFamily: "'DM Sans',sans-serif", color: '#0A1628', outline: 'none', width: '100%', transition: 'border-color 0.2s' }}
      onFocus={e => e.target.style.borderColor = '#2563EB'}
      onBlur={e => e.target.style.borderColor = '#E2EAF4'}
    />
  )

  return (
    <div style={{ paddingTop: '66px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#0A1628', padding: '80px 64px 64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Contact</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Ready to Transform<br/>Your PV Operations?</h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', lineHeight: 1.75 }}>Request early access, schedule a live demo, or discuss Oracle integration and enterprise partnership opportunities.</p>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: '#F8FAFF', padding: '64px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '72px', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            {[
              { icon: '📧', label: 'Email', value: 'pv@venture-vertex.com' },
              { icon: '🏢', label: 'Headquarters', value: 'Frisco, Texas, USA' },
              { icon: '🌐', label: 'Company', value: 'Venture Vertex LLC' },
              { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '13px', marginBottom: '22px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '9px', flexShrink: 0, background: '#EFF6FF', border: '1px solid #E2EAF4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>{icon}</div>
                <div>
                  <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0A1628', marginTop: '2px' }}>{value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '32px', padding: '20px', background: '#EFF6FF', borderRadius: '10px', border: '1px solid #DBEAFE' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', marginBottom: '8px' }}>Oracle Integration Demo</div>
              <p style={{ fontSize: '12px', color: '#1E3A5F', lineHeight: 1.65 }}>Interested in seeing SafetySignal AI integrated with your existing Oracle Argus environment? We offer a 30-minute live integration demo with your actual system.</p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {input('First Name', 'firstName')}
              {input('Last Name', 'lastName')}
            </div>
            {input('Work Email *', 'email', 'email')}
            {input('Company / Organization', 'company')}
            <select value={form.interest} onChange={set('interest')} style={{ background: '#F8FAFF', border: '1px solid #E2EAF4', borderRadius: '8px', padding: '12px 15px', fontSize: '13px', fontFamily: "'DM Sans',sans-serif", color: form.interest ? '#0A1628' : '#64748B', outline: 'none', width: '100%' }}>
              <option value="">I'm interested in...</option>
              <option>Platform Demo</option>
              <option>Early Access / Pilot</option>
              <option>Oracle Integration</option>
              <option>Enterprise Licensing</option>
              <option>Partnership</option>
              <option>Investor Relations</option>
            </select>
            <textarea
              placeholder="Tell us about your pharmacovigilance challenges... *"
              value={form.message} onChange={set('message')}
              rows={5}
              style={{ background: '#F8FAFF', border: '1px solid #E2EAF4', borderRadius: '8px', padding: '12px 15px', fontSize: '13px', fontFamily: "'DM Sans',sans-serif", color: '#0A1628', outline: 'none', width: '100%', resize: 'vertical', transition: 'border-color 0.2s' }}
              onFocus={e => e.target.style.borderColor = '#2563EB'}
              onBlur={e => e.target.style.borderColor = '#E2EAF4'}
            />

            {status === 'success' ? (
              <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', marginBottom: '6px' }}>✅</div>
                <div style={{ fontWeight: 700, color: '#166534', marginBottom: '4px' }}>Message sent!</div>
                <div style={{ fontSize: '13px', color: '#166534' }}>We'll be in touch within 24 hours. Check your email for a confirmation.</div>
              </div>
            ) : status === 'error' ? (
              <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#991B1B' }}>Something went wrong. Please email us directly at pv@venture-vertex.com</div>
              </div>
            ) : (
              <button
                onClick={submit}
                disabled={status === 'loading'}
                style={{
                  background: status === 'loading' ? '#93C5FD' : '#2563EB',
                  color: 'white', border: 'none', padding: '13px',
                  borderRadius: '8px', width: '100%',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '14px', fontWeight: 700, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { if (status !== 'loading') e.target.style.background = '#1E4D8C'; }}
                onMouseLeave={e => { if (status !== 'loading') e.target.style.background = '#2563EB'; }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns: 5fr 7fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          div[style*="padding: 64px"] { padding: 44px 22px !important; }
          div[style*="padding: 80px 64px"] { padding: 80px 22px 44px !important; }
        }
      `}</style>
    </div>
  )
}
