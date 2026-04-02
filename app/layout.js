import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'SafetySignal AI — AI-Native Pharmacovigilance Platform',
  description: 'The world\'s first AI-native pharmacovigilance platform. Automate adverse event detection, causality assessment, E2B(R3) submissions, and benefit-risk evaluation — powered by SafetySignal-PV-7B.',
  keywords: 'pharmacovigilance, adverse event, drug safety, ICH E2B, CIOMS XIV, Oracle Argus alternative, signal detection, AI pharmacovigilance software, adverse event reporting, drug safety platform, pharmacovigilance automation',
  metadataBase: new URL('https://safetysignal.ai'),
  alternates: { canonical: 'https://safetysignal.ai' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SafetySignal AI — AI-Native Pharmacovigilance',
    description: 'Automate PV with AI. Causality assessment in 3s. E2B(R3) XML in 20ms. BRAT benefit-risk in 50ms.',
    url: 'https://safetysignal.ai',
    siteName: 'SafetySignal AI',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafetySignal AI — AI-Native Pharmacovigilance',
    description: 'The world\'s first AI-native PV platform. Causality assessment in 3s. E2B(R3) XML in 20ms.',
    creator: '@safetysignalai',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"SafetySignal AI","applicationCategory":"BusinessApplication","description":"AI-native pharmacovigilance platform. E2B(R3) in 20ms, MedDRA auto-coding 94%, Bayesian signal detection.","url":"https://safetysignal.ai","creator":{"@type":"Organization","name":"Venture Vertex LLC"}}`}}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
