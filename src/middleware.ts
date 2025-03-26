import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { env } from './lib/env'

const protectedRoutes = ['/']
const publicRoutes = ['/login', '/reset-password']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const cookieStore = await cookies()
  const cookie = cookieStore.get(env.COOKIE_JWT)?.value

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  if(cookie && isPublicRoute) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
