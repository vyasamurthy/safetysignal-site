export async function GET() {
  try {
    const apiUrl = process.env.SAFETYSIGNAL_API_URL || 'http://localhost:8888'
    const res = await fetch(`${apiUrl}/api/v1/dashboard/stats`, {
      next: { revalidate: 300 }, // cache for 5 min
    })
    if (!res.ok) throw new Error('API error')
    const data = await res.json()
    return Response.json({
      total: data.total_cases || data.cases || 3000,
      source: 'live',
    })
  } catch {
    // Fallback if SafetySignal API unreachable
    return Response.json({ total: 3000, source: 'fallback' })
  }
}
