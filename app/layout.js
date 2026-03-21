import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "SafetySignal AI",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Pharmacovigilance Software",
      "description": "The world's first AI-native pharmacovigilance platform. Automates adverse event detection, causality assessment, E2B(R3) XML submissions, MedDRA coding, and signal detection using SafetySignal-PV-7B \u2014 a proprietary 7.6B parameter model fine-tuned on pharmacovigilance data.",
      "url": "https://safetysignal.ai",
      "operatingSystem": "Web, API",
      "offers": {
        "@type": "Offer",
        "price": "250000",
        "priceCurrency": "USD",
        "description": "Annual enterprise license"
      },
      "featureList": [
        "AI Causality Assessment (Naranjo, WHO-UMC, Kramer)",
        "E2B(R3) XML Generation in 20ms",
        "MedDRA Auto-Coding (94% automation rate)",
        "Bayesian Signal Detection (PRR, ROR, IC, EBGM)",
        "PSUR/PBRER Report Generation",
        "Benefit-Risk Assessment (BRAT Framework)",
        "GVP Module IX Signal Workflow",
        "CIOMS I Form Generation",
        "Literature Surveillance Automation",
        "IDMP Compliance Engine"
      ],
      "creator": {
        "@type": "Organization",
        "name": "Venture Vertex LLC",
        "url": "https://safetysignal.ai",
        "founder": {
          "@type": "Person",
          "name": "Vyasa Murthy"
        }
      }
    },
    {
      "@type": "Organization",
      "name": "Venture Vertex LLC",
      "url": "https://safetysignal.ai",
      "description": "AI-native pharmacovigilance software company. Creator of SafetySignal AI and VARC (Verifiable AI Runtime Control).",
      "sameAs": [
        "https://varc.live"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SafetySignal AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafetySignal AI is the world's first AI-native pharmacovigilance platform, built by Venture Vertex LLC. It automates the full adverse event lifecycle from intake to E2B(R3) regulatory submission using SafetySignal-PV-7B, a proprietary 7.6B parameter model fine-tuned on real pharmacovigilance cases."
          }
        },
        {
          "@type": "Question",
          "name": "How does SafetySignal AI compare to Oracle Argus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafetySignal AI offers AI-native causality assessment (Naranjo, WHO-UMC, Kramer consensus), automated MedDRA coding at 94% rate, E2B(R3) XML in 20ms, and Bayesian signal detection \u2014 capabilities Oracle Argus does not offer. SafetySignal AI costs $250K/year vs Oracle Argus at $2M+/year, delivering 248% ROI with a 3.4-month payback."
          }
        },
        {
          "@type": "Question",
          "name": "Is SafetySignal AI HIPAA compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SafetySignal AI uses SafetySignal-PV-7B, a locally-deployed model that runs on-premise via Ollama. No patient data leaves the network, ensuring full HIPAA and GDPR compliance \u2014 a critical advantage over cloud-based PV platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What regulatory standards does SafetySignal AI support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SafetySignal AI supports ICH E2B(R3), ICH E2C(R2), ICH E2F, EU GVP Modules V, VI, IX, ISO IDMP 11615/11238, MedDRA v26.0, CIOMS I, BRAT Framework, and 21 CFR Part 11."
          }
        }
      ]
    }
  ]
}</script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
