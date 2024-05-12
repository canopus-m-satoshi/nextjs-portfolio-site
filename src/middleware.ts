import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const config = {
  matcher: '/work/restricted/:path*',
}

export function middleware(request: NextRequest) {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has('isAuthorized')

  if (!hasCookie) {
    const homeUrl = new URL('/', request.url)
    return NextResponse.redirect(homeUrl)
  }

  return NextResponse.next()
}
