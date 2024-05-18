import { createClient } from 'microcms-js-sdk'
import { NextResponse } from 'next/server'

import { WorkApiResponse } from '@/types/work'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
})

export const getWorkDetailsBySlug = async (id: string) => {
  try {
    const res = await client.get({
      endpoint: `work/${id}`,
    })

    const data = { ...res, thumbPc: res.thumb_pc, thumbSp: res.thumb_sp }

    return data
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to Get Data' }, error)
  }
}

export const getRestrictedWork = async (limit = 30) => {
  try {
    const data = await client.get({
      endpoint: 'work/',
      queries: { limit: limit, filters: 'isRestricted[equals]true' },
    })

    return data
  } catch (error: any) {
    console.error('Error in /api/work:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

export const getPublicWork = async (limit = 30) => {
  try {
    const data = await client.get({
      endpoint: 'work/',
      queries: { limit: limit, filters: 'isRestricted[equals]false' },
    })

    return data
  } catch (error: any) {
    console.error('Error in /api/work:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
