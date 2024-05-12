import { NextRequest, NextResponse } from 'next/server'

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD

const EXPIRES_IN = 60 * 60 * 24

export async function POST(request: NextRequest) {
  const { userId, password } = await request.json()

  const valid = userId === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD
  const expiresIn = EXPIRES_IN

  if (valid) {
    const response = new NextResponse(null, { status: 200 })

    response.cookies.set('isAuthorized', 'true', {
      httpOnly: true,
      maxAge: expiresIn,
    })

    return response
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
