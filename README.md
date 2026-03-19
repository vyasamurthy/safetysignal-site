# SafetySignal AI — Next.js Website

AI-Native Pharmacovigilance Platform website built with Next.js 14, deployed on Vercel.

## Stack
- **Next.js 14** — React framework with App Router
- **Tailwind CSS** — utility styling
- **Supabase** — contact form submissions database
- **Resend** — transactional email (3K/month free)
- **Vercel** — deployment (free tier)

## Pages
- `/` — Homepage (Hero, Features, Oracle Integration, Demo, How It Works, Metrics, Blog Preview, Careers)
- `/blog` — All 6 blog articles with double-click modal reader
- `/careers` — 5 open roles with apply buttons
- `/contact` — Live contact form with real email delivery

## Dynamic Features
- **Live case count** — fetches from SafetySignal API at `/api/cases`
- **Contact form** — sends email via Resend + stores in Supabase
- **Auto-reply** — sends confirmation email to submitter

## Setup

### 1. Clone and install
```bash
git clone <your-repo>
cd safetysignal-site
npm install
```

### 2. Environment variables
Copy `.env.local.example` to `.env.local` and fill in:
```
SAFETYSIGNAL_API_URL=http://localhost:8888
NEXT_PUBLIC_SUPABASE_URL=<from supabase.com>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<from supabase.com>
SUPABASE_SERVICE_ROLE_KEY=<from supabase.com>
RESEND_API_KEY=<from resend.com>
CONTACT_EMAIL=pv@venture-vertex.com
```

### 3. Supabase table
Run this in Supabase SQL editor:
```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text,
  last_name text,
  email text NOT NULL,
  company text,
  interest text,
  message text,
  source text DEFAULT 'safetysignal-website',
  created_at timestamptz DEFAULT now()
);
```

### 4. Run locally
```bash
npm run dev
# → http://localhost:3000
```

### 5. Deploy to Vercel
```bash
npm install -g vercel
vercel
# Follow prompts, add env vars in Vercel dashboard
```

Or connect GitHub repo to Vercel — auto-deploys on every push.

## Adding Blog Posts
Add `.mdx` files to `content/blog/` with frontmatter:
```mdx
---
title: "Your Post Title"
excerpt: "Short description"
category: "Category Name"
date: "2026-04-01"
readTime: "5 min read"
emoji: "🔬"
slug: "your-post-slug"
---

Your markdown content here...
```

## Cost
- Vercel: **$0/month** (free tier)
- Supabase: **$0/month** (free tier, 500MB)
- Resend: **$0/month** (3,000 emails free)
- Domain: **$12/yr** (.com) or **$80-150/yr** (.ai)
