import { createClient } from 'microcms-js-sdk'
import { NextResponse } from 'next/server'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
})

export const getWorkDetailsBySlug = async (id: string) => {
  try {
    const data = await client.get({
      endpoint: `work/${id}`,
    })

    return data
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to Get Data' }, error)
  }
}
