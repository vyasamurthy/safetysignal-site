'use client'
import { useState } from 'react'

const JOBS = [
  { title: 'Senior Pharmacovigilance Scientist', type: 'Full-time', location: 'Remote', tags: ['PV', 'ICH', 'GVP'], desc: 'Lead clinical safety assessment workflows, work directly with the SafetySignal AI model team, and help shape how AI transforms pharmacovigilance.' },
  { title: 'AI/ML Engineer — Life Sciences', type: 'Full-time', location: 'Remote', tags: ['Python', 'LLMs', 'Fine-tuning'], desc: 'Build and improve SafetySignal-PV-7B. Work on causality assessment models, signal detection algorithms, and real-world evidence pipelines.' },
  { title: 'Regulatory Affairs Director', type: 'Full-time', location: 'Remote', tags: ['FDA', 'EMA', 'CIOMS'], desc: 'Own our regulatory strategy — from CIOMS XIV compliance to FDA/EMA submissions. Be the bridge between regulatory science and AI automation.' },
  { title: 'Enterprise Sales — Pharma/Biotech', type: 'Full-time', location: 'Remote', tags: ['Life Sciences', 'SaaS', 'GSIs'], desc: 'Drive enterprise adoption across pharma companies and GSIs. You know the Oracle Argus world and understand why AI-native is different.' },
  { title: 'Clinical Data Scientist', type: 'Full-time', location: 'Remote', tags: ['FAERS', 'Signal Detection', 'R/Python'], desc: 'Work with real-world FAERS data, build signal detection models, and turn adverse event data into regulatory intelligence.' },
]

export default function CareersPage() {
  const [applied, setApplied] = useState({})

  const apply = (idx) => {
    setApplied(prev => ({ ...prev, [idx]: true }))
    setTimeout(() => setApplied(prev => ({ ...prev, [idx]: false })), 3000)
  }

  return (
    <div style={{ paddingTop: '66px', minHeight: '100vh' }}>
      <div style={{ background: '#0A1628', padding: '80px 64px 64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Careers</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>Build the Future of<br/>Drug Safety</h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', lineHeight: 1.75 }}>Remote-first, mission-driven. We're a lean team building the first AI-native pharmacovigilance platform. If you care about patient safety and love hard problems, we want to talk.</p>
        </div>
      </div>

      <div style={{ background: '#F8FAFF', padding: '64px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {JOBS.map((job, i) => (
            <div key={i} style={{
              background: 'white', border: '1px solid #E2EAF4', borderRadius: '12px',
              padding: '24px 28px', marginBottom: '16px',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              gap: '20px', flexWrap: 'wrap',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#93C5FD'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(10,22,40,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2EAF4'; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '16px', fontWeight: 700, color: '#0A1628', marginBottom: '6px' }}>{job.title}</div>
                <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '100px', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981', fontWeight: 500 }}>{job.location}</span>
                  <span style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '100px', border: '1px solid #E2EAF4', color: '#64748B' }}>{job.type}</span>
                  {job.tags.map(t => <span key={t} style={{ fontSize: '11px', padding: '2px 9px', borderRadius: '100px', border: '1px solid #E2EAF4', color: '#64748B' }}>{t}</span>)}
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.65 }}>{job.desc}</div>
              </div>
              <button
                onClick={() => apply(i)}
                style={{
                  background: applied[i] ? '#10B981' : 'white',
                  border: `1px solid ${applied[i] ? '#10B981' : '#2563EB'}`,
                  color: applied[i] ? 'white' : '#2563EB',
                  padding: '8px 18px', borderRadius: '7px',
                  fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                  fontFamily: "'Space Grotesk',sans-serif",
                }}
                onMouseEnter={e => { if (!applied[i]) { e.target.style.background = '#2563EB'; e.target.style.color = 'white'; } }}
                onMouseLeave={e => { if (!applied[i]) { e.target.style.background = 'white'; e.target.style.color = '#2563EB'; } }}
              >
                {applied[i] ? '✓ Applied!' : 'Apply →'}
              </button>
            </div>
          ))}

          <div style={{ marginTop: '40px', padding: '28px', background: '#EFF6FF', borderRadius: '12px', border: '1px solid #DBEAFE', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '16px', fontWeight: 700, color: '#0A1628', marginBottom: '8px' }}>Don't see the right role?</div>
            <p style={{ fontSize: '14px', color: '#1E3A5F', marginBottom: '16px' }}>We're always interested in exceptional people. Send us a note at <strong>pv@venture-vertex.com</strong></p>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          div[style*="padding: 64px"] { padding: 44px 22px !important; }
          div[style*="padding: 80px 64px"] { padding: 80px 22px 44px !important; }
        }
      `}</style>
    </div>
  )
}
