'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { env } from "@/lib/env"
import { getSession } from "@/lib/session"
import { Live } from "@/types/live-schema"

export async function fetchLives() {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.post('/api/lives', {
      username: session.email
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: data.map((live: Live) => {
        const publishedAt = live.publishedAt ? new Date(live.publishedAt).toLocaleDateString("pt-br", {
          hour: "numeric",
          minute: "numeric"
        }) : ''

        return {
          ...live,
          publishedAt,
          thumbnail: `${env.API_URL}${live.thumbnail}`
        }
      }) as Live[]
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        data: null,
      }
    }
  }
}
