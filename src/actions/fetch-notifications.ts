'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { Notification } from "@/types/notification-schema"

export async function fetchNotifications() {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get('/api/notification/byUser')
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: data as Notification[]
    }
  } catch (error) {
    if(error instanceof Error) {
      return {
        error: error.message,
        data: null
      }
    }
  }
}
