'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"

export async function getFooter() {
  const http = new FetcherAdapter()

  try {
    const response = await http.get('/api/rodape?populate=logo,links')

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
