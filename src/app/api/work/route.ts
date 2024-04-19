import { NextResponse } from 'next/server'

import { client } from '../../../lib/microCMS/client'

export async function GET(limit = 30) {
  try {
    const data = await client.get({
      endpoint: 'work',
      queries: { limit: limit },
    })

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error in /api/work:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
