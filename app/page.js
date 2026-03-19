import Hero from '@/components/Hero'
import Features from '@/components/Features'
import OracleIntegration from '@/components/OracleIntegration'
import ComplianceBar from '@/components/ComplianceBar'
import { Demo, HowItWorks, Metrics, BlogPreview, CareersPreview } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Hero />
      <ComplianceBar />
      <Features />
      <OracleIntegration />
      <Demo />
      <HowItWorks />
      <Metrics />
      <BlogPreview />
      <CareersPreview />
    </>
  )
}
