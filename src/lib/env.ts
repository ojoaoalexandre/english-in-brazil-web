import { z } from 'zod'

export const schemaEnv = z.object({
  SESSION_SECRET: z.string(),
  COOKIE_JWT: z.string(),
  API_URL: z.string(),
  NEXT_PUBLIC_API_URL: z.string(),
})

const _env = schemaEnv.safeParse(process.env)

if (!_env.success) {
  console.error(_env.error.errors)
  throw new Error('Invalid env')
}

export const env = _env.data
