import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, interest, message } = body

    if (!email || !firstName || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const errors = []

    // 1. Store in Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        )
        await supabase.from('contact_submissions').insert([{
          first_name: firstName,
          last_name: lastName,
          email,
          company,
          interest,
          message,
          created_at: new Date().toISOString(),
          source: 'safetysignal-website',
        }])
      } catch (e) {
        errors.push('db_store_failed')
      }
    }

    // 2. Send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'SafetySignal AI <noreply@safetysignal.ai>',
          to: [process.env.CONTACT_EMAIL || 'pv@venture-vertex.com'],
          subject: `[SafetySignal] New inquiry from ${firstName} ${lastName} — ${interest || 'General'}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#0A1628;padding:24px;border-radius:12px 12px 0 0;">
                <h2 style="color:white;margin:0;font-size:20px;">New Contact Submission</h2>
                <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">SafetySignal AI Website</p>
              </div>
              <div style="background:#F8FAFF;padding:24px;border-radius:0 0 12px 12px;border:1px solid #E2EAF4;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;color:#64748B;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0A1628;">${firstName} ${lastName}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748B;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;color:#2563EB;">${email}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748B;font-size:13px;">Company</td><td style="padding:8px 0;color:#0A1628;">${company || '—'}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748B;font-size:13px;">Interest</td><td style="padding:8px 0;color:#0A1628;">${interest || '—'}</td></tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #E2EAF4;">
                  <div style="font-size:12px;color:#64748B;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">Message</div>
                  <p style="color:#1E3A5F;line-height:1.6;margin:0;">${message}</p>
                </div>
              </div>
            </div>
          `,
        })

        // Auto-reply to user
        await resend.emails.send({
          from: 'Vyasa Murthy — SafetySignal AI <pv@venture-vertex.com>',
          to: [email],
          subject: 'Thank you for your interest in SafetySignal AI',
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
              <div style="background:#0A1628;padding:24px;border-radius:12px 12px 0 0;">
                <h2 style="color:white;margin:0;font-size:20px;">SafetySignal AI</h2>
                <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">AI-Native Pharmacovigilance Platform</p>
              </div>
              <div style="background:#F8FAFF;padding:28px;border-radius:0 0 12px 12px;border:1px solid #E2EAF4;">
                <p style="color:#0A1628;font-size:15px;">Hi ${firstName},</p>
                <p style="color:#1E3A5F;line-height:1.7;">Thank you for reaching out about SafetySignal AI. I've received your message and will get back to you within 24 hours.</p>
                <p style="color:#1E3A5F;line-height:1.7;">SafetySignal AI is the world's first AI-native pharmacovigilance platform — we automate causality assessment, E2B(R3) submissions, signal prioritization, and benefit-risk evaluation using a 7.6B parameter PV model trained on real adverse event data.</p>
                <div style="margin:24px 0;padding:16px;background:#EFF6FF;border-left:3px solid #2563EB;border-radius:0 8px 8px 0;">
                  <p style="color:#1E3A5F;margin:0;font-size:14px;">In the meantime, feel free to explore our platform capabilities at <a href="https://safetysignal.ai" style="color:#2563EB;">safetysignal.ai</a></p>
                </div>
                <p style="color:#64748B;font-size:13px;margin-top:24px;">Best regards,<br/><strong style="color:#0A1628;">Vyasa Murthy</strong><br/>Managing Partner, Venture Vertex LLC<br/>pv@venture-vertex.com · Frisco, Texas</p>
              </div>
            </div>
          `,
        })
      } catch (e) {
        errors.push('email_failed')
      }
    }

    return Response.json({
      success: true,
      message: 'Submission received',
      errors: errors.length > 0 ? errors : undefined,
    })

  } catch (err) {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
