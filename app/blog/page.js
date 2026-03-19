import { INLINE_POSTS } from '@/lib/posts'
import BlogClient from './BlogClient'

export const metadata = {
  title: 'Insights — SafetySignal AI',
  description: 'Deep dives into AI pharmacovigilance, regulatory science, and drug safety technology.',
}

export default function BlogPage() {
  return <BlogClient posts={INLINE_POSTS} />
}
