import { NextRequest } from 'next/server'

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD

export async function POST(request: NextRequest) {
  const { userId, password } = await request.json()

  const valid = userId === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD

  if (valid) {
    return new Response(null, { status: 200 })
  } else {
    return new Response(
      JSON.stringify({ message: 'IDかパスワードが異なります' }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
