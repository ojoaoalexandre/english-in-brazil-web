import { z } from 'zod'

export const NotificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Notification = z.infer<typeof NotificationSchema>
