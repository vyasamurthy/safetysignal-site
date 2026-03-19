import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...data,
        content,
        slug: data.slug || filename.replace('.mdx', ''),
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const posts = getAllPosts()
  return posts.find(p => p.slug === slug) || null
}

// Inline posts for when MDX files aren't present
export const INLINE_POSTS = [
  {
    slug: 'oracle-vs-ai-native-pv',
    title: 'Why Oracle Argus Cannot Compete with AI-Native Pharmacovigilance',
    excerpt: 'Legacy platforms bolt AI onto existing workflows. SafetySignal builds from the model up — and the difference shows in every causality assessment.',
    category: 'AI in Pharmacovigilance',
    date: '2026-03-15',
    readTime: '8 min read',
    emoji: '🧠',
    bg: 'linear-gradient(135deg,#0D1F3C,#1A3A6B)',
    body: `<p>Oracle Argus Safety processes 10 million adverse event cases annually and is deeply embedded in pharma operations worldwide. So why challenge it? Because the architecture is fundamentally different.</p><h3>The Architecture Gap</h3><p>Argus was designed before AI existed. Safety One Intake layers AI on top as a workflow automation. SafetySignal was designed with AI as the engine — causality assessment, signal prioritization, narrative generation, and benefit-risk evaluation are all AI-native, not bolt-ons.</p><div class="highlight">SafetySignal-PV-7B v3 achieves 80% agreement with Claude Sonnet 4 on causality assessments, with an average Naranjo score difference of 1.0 — within clinical acceptable range for a 7.6B parameter model.</div><h3>The Signal Prioritization Gap</h3><p>Oracle Empirica detects statistical signals using PRR and ROR. SafetySignal's Sprint 60 composite Priority Score combines disproportionality, causality confidence, clinical severity, case volume, and novelty into one ranked queue — a list a PV scientist can act on immediately.</p><h3>Listedness Determination</h3><p>In Oracle Argus, determining whether an AE is listed in product labeling is manual. SafetySignal Sprint 62 automates it entirely — cross-referencing signals against structured labeling data and generating the 15-day expedited reporting decision in real time.</p><h3>Benefit-Risk</h3><p>Oracle has no AI-native benefit-risk assessment. SafetySignal Sprint 66 generates BRAT evaluations in under 50ms. A true first-in-class capability.</p><h3>Deployment Reality</h3><p>Oracle Argus takes 12–18 months and millions to deploy. SafetySignal is API-first, containerized, and can be live in days.</p>`,
  },
  {
    slug: 'e2b-r3-automation',
    title: 'Automating ICH E2B(R3) Submissions: The End of Manual ICSR Authoring',
    excerpt: 'E2B(R3) XML generation is largely manual today. We explain how SafetySignal automates the full ICSR lifecycle from structured case data to submission-ready XML.',
    category: 'Regulatory Science',
    date: '2026-03-10',
    readTime: '6 min read',
    emoji: '📋',
    bg: 'linear-gradient(135deg,#0A2B1E,#0D3B2A)',
    body: `<p>An Individual Case Safety Report (ICSR) in ICH E2B(R3) format is the fundamental unit of pharmacovigilance communication. Every serious adverse event reported to a regulatory authority requires one. In a large pharma company processing hundreds of thousands of cases annually, ICSR authoring is an enormous manual burden.</p><h3>What E2B(R3) Requires</h3><p>The ICH E2B(R3) standard mandates a specific XML structure with over 100 data fields — message headers, safety report metadata, patient demographics, primary source information, sender/receiver identification, reaction details, drug information, and clinical narratives.</p><div class="highlight">SafetySignal Sprint 65 generates fully ICH E2B(R3) compliant XML from structured case data in 0.02 seconds — with all required fields populated and ICH narrative auto-generated.</div><h3>What SafetySignal Generates</h3><ul><li>Message header: Unique message number, sender/receiver identifiers, transmission date</li><li>Safety report: Report ID, version, seriousness flags (death, life-threatening, hospitalization)</li><li>Patient section: Demographics with proper E2B unit codes</li><li>Reaction section: MedDRA LLT term, onset date, outcome code</li><li>Drug section: Product, dosage, route, indication, causality with Naranjo result</li><li>Narrative: Auto-generated ICH-compliant clinical summary</li></ul><h3>Oracle Integration</h3><p>Generated E2B XMLs can be pushed directly to Oracle Argus via the E2B messaging interface, maintaining full compatibility with existing submission workflows while automating the authoring step.</p>`,
  },
  {
    slug: 'brat-framework-ai',
    title: 'The BRAT Framework for AI: Building the First AI-Native Benefit-Risk Engine',
    excerpt: "Benefit-risk assessment is one of the most complex judgment calls in regulatory PV. Here's how we encode the BRAT framework into an automated scoring system.",
    category: 'Signal Science',
    date: '2026-02-28',
    readTime: '7 min read',
    emoji: '⚖️',
    bg: 'linear-gradient(135deg,#231A00,#3D2D00)',
    body: `<p>Benefit-risk assessment sits at the heart of every regulatory decision in pharmacovigilance. These are billion-dollar questions that historically require weeks of expert analysis.</p><h3>The BRAT Framework</h3><p>The Benefit-Risk Action Team (BRAT) framework, aligned with EMA CHMP methodology and ICH E2C(R2), requires: identification of key benefits with outcome metrics, identification of key risks with seriousness classification, weighted scoring of each component, and calculation of benefit-risk ratio and net clinical benefit.</p><div class="highlight">SafetySignal Sprint 66 is the first implementation of BRAT in an automated AI system — generating complete benefit-risk evaluations from case data in under 50 milliseconds.</div><h3>How We Encode BRAT</h3><p>Benefit scoring: therapeutic effect (0.5 weight), clinical recovery rate (0.3), indication coverage breadth (0.2). Risk scoring: SAE rate (0.4), fatality rate (0.3), Naranjo-derived causality factor (0.2), AE profile diversity (0.1).</p><h3>Real World Results</h3><p>Across 15 drugs with sufficient case data: 11 favorable, 3 marginally favorable, 1 unfavorable. Amoxicillin demonstrates HIGH gap severity — 92% SAE rate driven by anaphylaxis cases — flagging it for immediate labeling review.</p>`,
  },
  {
    slug: 'signal-prioritization-ai',
    title: 'Signal Prioritization in the Age of AI: Moving Beyond PRR and ROR',
    excerpt: 'Statistical disproportionality methods like PRR and ROR are necessary but not sufficient. Composite priority scoring changes how PV scientists work.',
    category: 'Pharmacovigilance Operations',
    date: '2026-02-20',
    readTime: '5 min read',
    emoji: '📊',
    bg: 'linear-gradient(135deg,#1A0A2E,#2D1A4A)',
    body: `<p>For decades, PV signal detection has relied on PRR and ROR. These statistical measures identify drug-event combinations reported more frequently than expected. They work well — but they answer only one question: "Is this combination unusual?"</p><h3>What PRR and ROR Miss</h3><p>A drug might have a PRR of 50 — extremely elevated — but with only one reported case, clinical significance is limited. A PRR of 5 across 200 cases with 100% serious outcomes and strong Naranjo causality scores demands immediate attention.</p><div class="highlight">SafetySignal's composite Priority Score combines five dimensions: disproportionality (max 30 pts), causality confidence (max 20 pts), clinical severity (max 20 pts), case volume (max 15 pts), and novelty (max 15 pts) = 100 pts maximum.</div><h3>The Priority Queue in Practice</h3><p>Top-ranked signal: Amoxicillin → Anaphylactic Reaction, score 92/100 CRITICAL. PRR 303, ROR 1313, IC 4.8, Naranjo avg 5.3, 100% serious case rate, 10 cases. Every dimension converges on urgency — and the expedited reporting decision is automatically generated.</p>`,
  },
  {
    slug: 'cioms-xiv-compliance',
    title: 'CIOMS XIV Compliance Automation: What 94% Really Looks Like',
    excerpt: 'CIOMS XIV sets a new benchmark for AI governance in pharmacovigilance. SafetySignal is the first platform built to comply from day one.',
    category: 'Regulatory Intelligence',
    date: '2026-01-30',
    readTime: '6 min read',
    emoji: '🏥',
    bg: 'linear-gradient(135deg,#0A1628,#102B54)',
    body: `<p>CIOMS XIV — Artificial Intelligence in Drug Safety and Pharmacovigilance — establishes requirements across 10 modules covering case processing, signal management, aggregate reporting, RMP, REMS, PSMF, and AI model governance.</p><h3>SafetySignal's Compliance Profile</h3><ul><li><strong>Case Processing (GVP Module VI/ICH E2D):</strong> 96% — automated intake, MedDRA coding, 94% NLP accuracy</li><li><strong>Aggregate Reporting (ICH E2C/E2F):</strong> 94.4% — automated PSUR/PBRER/DSUR</li><li><strong>RMP (EU GVP Module V):</strong> 100% — full safety specification and RMM tracking</li><li><strong>Signal Management (GVP Module IX):</strong> 90% — 2 requirements pending</li></ul><div class="highlight">SafetySignal's overall CIOMS XIV compliance is 94.3% across 10 modules. No other AI-native PV platform has published a CIOMS XIV compliance scorecard.</div>`,
  },
  {
    slug: 'safetysignal-pv7b-model',
    title: 'Building SafetySignal-PV-7B: Fine-Tuning a Language Model for Pharmacovigilance',
    excerpt: "How we trained a 7.6B parameter model specifically for adverse event causality assessment — and why general-purpose LLMs aren't enough.",
    category: 'Technology',
    date: '2026-01-15',
    readTime: '9 min read',
    emoji: '🔬',
    bg: 'linear-gradient(135deg,#001A0A,#002B10)',
    body: `<p>General-purpose language models can discuss pharmacovigilance concepts intelligently. But scoring a Naranjo algorithm for a specific adverse event case requires specialization.</p><h3>Why Fine-Tuning Was Necessary</h3><p>The Naranjo algorithm requires answering 10 specific questions: Was there a prior conclusive report? Did the AE appear after drug administration? Did it resolve on dechallenge? Each answer has defined scoring criteria that require clinical knowledge, temporal reasoning, and drug pharmacology familiarity.</p><div class="highlight">SafetySignal-PV-7B v3 achieves 80% agreement with Claude Sonnet 4, with an average Naranjo score difference of 1.0 across 3,000+ cases — within clinical acceptable range for a 7.6B parameter model.</div><h3>The Training Architecture</h3><p>SafetySignal-PV-7B v3 is built on Qwen2-7B at Q4_K_M quantization, running locally on Ollama. Training data included synthetic adverse event cases generated with Claude Sonnet 4, causality assessments validated against published Naranjo literature, and DPO pairs from Sprint 41's feedback loop.</p><h3>Local Deployment Advantage</h3><p>Running on Ollama locally means SafetySignal-PV-7B operates entirely within the customer's infrastructure — no PHI leaves the environment, no API costs per assessment, no dependency on external model availability.</p>`,
  },
]
