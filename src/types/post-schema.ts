import { z } from 'zod'

const MessageSchema = z.object({
  id: z.string(),
  content: z.string(),
  sentAt: z.string(),
  reactions: z.object({}).optional(),
  aluno: z.object({
    id: z.number(),
    primeiroNome: z.string(),
    ultimoNome: z.string().optional(),
    bio: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    notification: z.object({}).optional(),
    avatar: z.object({
      id: z.number(),
      url: z.string(),
    }),
  }).optional()
})


export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string().optional(),
  reactions: z.object({}).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  thumbnail: z.object({
    id: z.string(),
    url: z.string(),
  }),
  courses: z.array(z.number()),
  teams: z.array(
    z.object({
      id: z.number(),
      titulo: z.string(),
      curso: z.object({
        id: z.number(),
        Nome: z.string(),
        Slug: z.string(),
      }),
    })
  ),
  challenge: z.null(),
  messagesTotal: z.number(),
  aluno: z.object({
    id: z.number(),
    primeiroNome: z.string(),
    ultimoNome: z.string().optional(),
    bio: z.string().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    notification: z.object({}).optional(),
    avatar: z.object({
      id: z.number(),
      url: z.string(),
    }),
  }).optional(),
  Message: z.array(
    z.object({
      id: z.string(),
      content: z.string(),
      sentAt: z.string(),
      reactions: z.object({}).optional(),
      aluno: z.object({
        id: z.number(),
        primeiroNome: z.string(),
        ultimoNome: z.string().optional(),
        bio: z.string().optional(),
        createdAt: z.string(),
        updatedAt: z.string(),
        notification: z.object({}).optional(),
        avatar: z.object({
          id: z.number(),
          url: z.string(),
        }),
      }).optional(),
      MessageResponse: z.array(MessageSchema),
    })
  ).optional(),
})

export type Post = z.infer<typeof PostSchema>

export const SpaceSchema = z.object({
  category: z.string(),
  posts: z.array(PostSchema),
})

export type Space = z.infer<typeof SpaceSchema>
export type Message = z.infer<typeof MessageSchema>
