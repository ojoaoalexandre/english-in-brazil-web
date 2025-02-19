'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"

export async function hasLogin() {
  const http = new FetcherAdapter()

  try {
    const response = await http.post('/api/aluno/hasLogin', {
      email: 'aluno@gmail.com'
    }, undefined, true)

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
