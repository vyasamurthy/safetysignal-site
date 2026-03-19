export default function sitemap() {
  return [
    { url: 'https://safetysignal.ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://safetysignal.ai/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://safetysignal.ai/careers', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://safetysignal.ai/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
