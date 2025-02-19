'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"

export async function me() {
  const http = new FetcherAdapter()

  try {
    const response = await http.get('/api/aluno/me')
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data
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
