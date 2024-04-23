import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/work/restricted/'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1] ?? ''
    const [user, pwd] = Buffer.from(authValue, 'base64')
      .toString('utf-8')
      .split(':')

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/basic-auth'

  return NextResponse.rewrite(url)
}
