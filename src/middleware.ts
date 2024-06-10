import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { AccesDeniedError } from './services/common/http.errors'
import authAPI from './services/auth/auth.api'

export async function middleware(request: NextRequest) {
  const cookieStore = cookies()
  try {
    const sessionId = cookieStore.get('SocialSessionID')?.value ?? ''

    if (!sessionId) throw new AccesDeniedError('Session ID is not valid anymore')
    const accesToken = await getAccessToken(sessionId)
    if (!accesToken) throw new AccesDeniedError('Session ID is not valid anymore')
    return getAuthenticationHeaders(request, accesToken)
  } catch (e) {
    if(e instanceof AccesDeniedError){
      if (!request.url.endsWith("/profile")) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
    } 
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authAPI.getRedisValue(sessionId)).value
}

const getAuthenticationHeaders = (request: NextRequest, accesToken: string) => {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-social-acces-token', accesToken)
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/', '/messages/:path*', '/profile', '/api/proxy/:path*'],
}
