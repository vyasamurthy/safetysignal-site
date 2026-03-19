'use client'
// ComplianceBar.jsx
export function ComplianceBar() {
  const items = ['ICH E2B(R3)', 'GVP Module VI/IX', '21 CFR Part 11', 'CIOMS XIV', 'FDA FAERS', 'EMA EudraVigilance']
  return (
    <div style={{ background: '#EFF6FF', borderTop: '1px solid #E2EAF4', borderBottom: '1px solid #E2EAF4', padding: '16px 64px', display: 'flex', gap: 0, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '0 28px', borderRight: i < items.length - 1 ? '1px solid #E2EAF4' : 'none', fontSize: '12px', fontWeight: 600, color: '#1E3A5F' }}>
          <span style={{ color: '#10B981' }}>✓</span> {item}
        </div>
      ))}
    </div>
  )
}
export default ComplianceBar
