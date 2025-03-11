'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { env } from "@/lib/env"
import { getSession } from "@/lib/session"
import { ChapterSchema } from "@/types/chapter-schema"

export async function fetchChapters(slug: string) {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get(`/api/aluno/curso/${slug}`)
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: data.map((chapter: any) => {
        return {
          ...chapter,
          capa: {
            ...chapter.capa,
            url: `${env.API_URL}${chapter.capa.url}`
          }
        }
      }) as ChapterSchema[]
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
