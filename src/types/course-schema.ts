import { z } from 'zod'

export const CourseSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  landingPage: z.string().nullable(),
  order: z.number().nullable(),
  hotmartCode: z.string().nullable(),
  thumbnail: z.string().nullable(),
  enabled: z.boolean().nullable(),
})

export type Course = z.infer<typeof CourseSchema>
