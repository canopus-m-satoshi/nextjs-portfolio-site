import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get('https://zenn.dev/api/articles', {
      params: {
        username: 'sato_frontend',
        order: 'latest',
      },
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching Zenn articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Zenn articles' },
      { status: 500 },
    )
  }
}
