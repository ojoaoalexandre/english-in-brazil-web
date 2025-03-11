import { z } from 'zod'

export const LiveSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  publishedAt: z.string().nullable(),
  thumbnail: z.string(),
  tags: z.array(z.string()),
})

export type Live = z.infer<typeof LiveSchema>
