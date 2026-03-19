export const INLINE_POSTS = [
  {
    slug: 'oracle-vs-ai-native-pv',
    title: 'Why Oracle Argus Cannot Compete with AI-Native Pharmacovigilance',
    excerpt: 'Legacy platforms bolt AI onto existing workflows. SafetySignal builds from the model up — and the difference shows in every causality assessment.',
    category: 'AI in Pharmacovigilance',
    date: '2026-03-15', readTime: '8 min read', emoji: '🧠',
    bg: 'linear-gradient(135deg,#0D1F3C,#1A3A6B)',
    body: `<p>Oracle Argus Safety processes 10 million adverse event cases annually. SafetySignal challenges it because the architecture is fundamentally different — AI is the engine, not a bolt-on.</p><h3>The Architecture Gap</h3><p>Argus was designed before AI existed. SafetySignal-PV-7B v3 runs causality assessment, signal prioritization, narrative generation, and benefit-risk evaluation natively.</p><div class="highlight">SafetySignal-PV-7B v3 achieves 80% agreement with Claude Sonnet 4, average Naranjo score difference of 1.0 across 3,000+ cases.</div><h3>Signal Prioritization Gap</h3><p>Oracle Empirica detects statistical signals using PRR and ROR. SafetySignal Sprint 60 composite Priority Score combines disproportionality, causality confidence, clinical severity, case volume, and novelty into one ranked queue.</p><h3>Listedness Determination</h3><p>In Oracle Argus this is manual. SafetySignal Sprint 62 automates it — cross-referencing signals against labeling and generating the 15-day expedited reporting decision in real time.</p><h3>Benefit-Risk</h3><p>Oracle has no AI-native benefit-risk assessment. SafetySignal Sprint 66 generates BRAT evaluations in under 50ms. First-in-class.</p>`,
  },
  {
    slug: 'e2b-r3-automation',
    title: 'Automating ICH E2B(R3) Submissions: The End of Manual ICSR Authoring',
    excerpt: 'E2B(R3) XML generation is largely manual today. SafetySignal automates the full ICSR lifecycle from structured case data to submission-ready XML.',
    category: 'Regulatory Science',
    date: '2026-03-10', readTime: '6 min read', emoji: '📋',
    bg: 'linear-gradient(135deg,#0A2B1E,#0D3B2A)',
    body: `<p>Every serious adverse event reported to a regulatory authority requires an ICH E2B(R3) ICSR. In large pharma, ICSR authoring is an enormous manual burden.</p><h3>What E2B(R3) Requires</h3><p>Over 100 data fields — message headers, patient demographics, drug information, reaction details, causality, and clinical narrative — all with specific formatting requirements.</p><div class="highlight">SafetySignal Sprint 65 generates fully ICH E2B(R3) compliant XML in 0.02 seconds — all required fields populated, ICH narrative auto-generated.</div><h3>What SafetySignal Generates</h3><ul><li>Message header with unique identifiers and transmission date</li><li>Seriousness flags — death, life-threatening, hospitalization</li><li>Patient demographics with proper E2B unit codes</li><li>MedDRA LLT reaction term, onset date, outcome code</li><li>Drug section with Naranjo causality result embedded</li><li>Auto-generated ICH-compliant clinical narrative</li></ul><h3>Oracle Integration</h3><p>Generated E2B XMLs push directly to Oracle Argus via E2B messaging interface — full compatibility with existing workflows.</p>`,
  },
  {
    slug: 'brat-framework-ai',
    title: 'The BRAT Framework for AI: Building the First AI-Native Benefit-Risk Engine',
    excerpt: "Benefit-risk assessment is one of the most complex judgment calls in regulatory PV. Here's how we encode the BRAT framework into an automated scoring system.",
    category: 'Signal Science',
    date: '2026-02-28', readTime: '7 min read', emoji: '⚖️',
    bg: 'linear-gradient(135deg,#231A00,#3D2D00)',
    body: `<p>Benefit-risk assessment historically requires weeks of expert analysis. SafetySignal Sprint 66 automates it using the BRAT framework aligned with EMA CHMP methodology and ICH E2C(R2).</p><h3>How We Encode BRAT</h3><p>Benefit scoring: therapeutic effect (0.5 weight), clinical recovery rate (0.3), indication coverage breadth (0.2). Risk scoring: SAE rate (0.4), fatality rate (0.3), Naranjo causality factor (0.2), AE diversity (0.1).</p><div class="highlight">SafetySignal Sprint 66 is the first implementation of BRAT in an automated AI system — complete evaluations in under 50 milliseconds.</div><h3>Real World Results</h3><p>Across 15 drugs: 11 favorable, 3 marginally favorable, 1 unfavorable. Amoxicillin shows 92% SAE rate driven by anaphylaxis — flagging it for immediate labeling review despite 92% recovery rate.</p>`,
  },
  {
    slug: 'signal-prioritization-ai',
    title: 'Signal Prioritization in the Age of AI: Moving Beyond PRR and ROR',
    excerpt: 'Statistical disproportionality methods like PRR and ROR are necessary but not sufficient. Composite priority scoring changes how PV scientists work.',
    category: 'Pharmacovigilance Operations',
    date: '2026-02-20', readTime: '5 min read', emoji: '📊',
    bg: 'linear-gradient(135deg,#1A0A2E,#2D1A4A)',
    body: `<p>PRR and ROR answer one question: "Is this combination unusual?" SafetySignal answers five: how unusual, how causal, how severe, how frequent, how novel.</p><div class="highlight">SafetySignal composite Priority Score: disproportionality (30pts) + causality confidence (20pts) + clinical severity (20pts) + case volume (15pts) + novelty (15pts) = 100pts maximum.</div><h3>In Practice</h3><p>Amoxicillin → Anaphylactic Reaction scores 92/100 CRITICAL. PRR 303, ROR 1313, IC 4.8, 100% serious case rate, 10 cases. Every dimension converges on urgency — expedited reporting decision generated automatically.</p><h3>Oracle Empirica Integration</h3><p>SafetySignal's priority scoring ingests signal lists from Oracle Empirica via the Topics SOAP API, adding the composite layer on top of Empirica's statistical outputs.</p>`,
  },
  {
    slug: 'cioms-xiv-compliance',
    title: 'CIOMS XIV Compliance Automation: What 94% Really Looks Like',
    excerpt: 'CIOMS XIV sets a new benchmark for AI governance in pharmacovigilance. SafetySignal is the first platform built to comply from day one.',
    category: 'Regulatory Intelligence',
    date: '2026-01-30', readTime: '6 min read', emoji: '🏥',
    bg: 'linear-gradient(135deg,#0A1628,#102B54)',
    body: `<p>CIOMS XIV establishes AI governance requirements across 10 modules covering case processing, signal management, aggregate reporting, RMP, and model governance.</p><h3>SafetySignal Compliance Profile</h3><ul><li><strong>Case Processing (GVP Module VI):</strong> 96% — automated intake, MedDRA coding, 94% NLP accuracy</li><li><strong>Aggregate Reporting (ICH E2C/E2F):</strong> 94.4% — automated PSUR/PBRER/DSUR</li><li><strong>RMP (EU GVP Module V):</strong> 100% — full safety specification and RMM tracking</li><li><strong>Signal Management (GVP Module IX):</strong> 90% — 2 requirements pending</li></ul><div class="highlight">94.3% overall CIOMS XIV compliance across 10 modules. No other AI-native PV platform has published a CIOMS XIV compliance scorecard.</div>`,
  },
  {
    slug: 'safetysignal-pv7b-model',
    title: 'Building SafetySignal-PV-7B: Fine-Tuning a Language Model for Pharmacovigilance',
    excerpt: "How we trained a 7.6B parameter model for adverse event causality assessment — and why general-purpose LLMs aren't enough.",
    category: 'Technology',
    date: '2026-01-15', readTime: '9 min read', emoji: '🔬',
    bg: 'linear-gradient(135deg,#001A0A,#002B10)',
    body: `<p>General-purpose LLMs can discuss pharmacovigilance. Scoring a Naranjo algorithm requires specialization — 10 specific questions, defined integer scores, clinically defensible outputs every time.</p><div class="highlight">SafetySignal-PV-7B v3 achieves 80% agreement with Claude Sonnet 4, average Naranjo score difference of 1.0 across 3,000+ cases — within clinical acceptable range at 7.6B parameters.</div><h3>Training Architecture</h3><p>Built on Qwen2-7B at Q4_K_M quantization, running locally on Ollama. Training data: synthetic adverse event cases generated with Claude Sonnet 4 using real FAERS structures, causality assessments validated against published Naranjo literature, and DPO pairs from Sprint 41's feedback loop.</p><h3>Local Deployment Advantage</h3><p>Runs entirely within the customer's infrastructure — no PHI leaves the environment, no API costs per assessment, no external model dependency. Critical for GxP-regulated environments.</p>`,
  },
]

export function getAllPosts() { return INLINE_POSTS }
export function getPostBySlug(slug) { return INLINE_POSTS.find(p => p.slug === slug) || null }
