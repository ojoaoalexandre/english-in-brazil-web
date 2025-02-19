'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { env } from "@/lib/env"
import { getSession } from "@/lib/session"

export async function getLastLive() {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.post('/api/lives/last', {
      username: session.email
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    const publishedAt = data.publishedAt ? new Date(data.publishedAt).toLocaleDateString("pt-br", {
      hour: "numeric",
      minute: "numeric"
    }) : ''

    return {
      error: null,
      data: data ? {
        ...data,
        publishedAt,
        thumbnail: `${env.API_URL}${data.thumbnail}`
      } : null
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
