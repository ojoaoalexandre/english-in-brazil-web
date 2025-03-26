'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"

export async function forgotPassword({
  email,
}: {
  email: string
}) {
  const http = new FetcherAdapter()

  try {
    const response = await http.post('/api/aluno/findTermo', {
      email
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.error.message)
    }

    return {
      error: null,
      data
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
