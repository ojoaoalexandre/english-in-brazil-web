import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { env } from './env'

export interface SessionPayload {
  email: string
  token: string
  [key: string]: unknown
}

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function getSession(sessionName: string | undefined = '') {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get(sessionName || env.COOKIE_JWT)

    if (!session) {
      throw new Error('Session not found')
    }

    const { payload } = await jwtVerify(session.value, encodedKey, {
      algorithms: ['HS256'],
    })

    return payload
  } catch (error) {
    console.log('Failed to verify session' + error)
  }
}

export async function createSession(email: string, token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ email, token, expiresAt })
  const cookieStore = await cookies()

  cookieStore.set(env.COOKIE_JWT, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}
