import { z } from 'zod'

const ResponseSchema = z.object({
  id: z.string(),
  author: z.string(),
  avatar: z.string(),
  date: z.string(),
  message: z.string(),
  reacao: z.null(),
});

export const commentSchema = z.object({
  id: z.number(),
  author: z.string(),
  avatar: z.string(),
  date: z.string(),
  question: z.string(),
  privacity: z.enum(['Publico']),
  response: z.array(ResponseSchema),
});

export type CommentSchema = z.infer<typeof commentSchema>
