import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get('https://zenn.dev/api/articles', {
      params: {
        username: 'sato_frontend',
        order: 'latest',
      },
    })

    const data = camelcaseKeys(response.data, { deep: true })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Zenn articles' },
      { status: 500 },
    )
  }
}
