import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SafetySignal AI — AI-Native Pharmacovigilance Platform',
  description: 'The world\'s first AI-native pharmacovigilance platform. Automate adverse event detection, causality assessment, E2B(R3) submissions, and benefit-risk evaluation — powered by SafetySignal-PV-7B.',
  keywords: 'pharmacovigilance, adverse event, drug safety, ICH E2B, CIOMS XIV, Oracle Argus, signal detection, AI',
  openGraph: {
    title: 'SafetySignal AI — AI-Native Pharmacovigilance',
    description: 'Automate PV with AI. Causality assessment in 3s. E2B(R3) XML in 20ms. BRAT benefit-risk in 50ms.',
    url: 'https://safetysignal.ai',
    siteName: 'SafetySignal AI',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
