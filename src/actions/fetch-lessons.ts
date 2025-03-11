'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { env } from "@/lib/env"
import { getSession } from "@/lib/session"
import { LessonSchema } from "@/types/lesson-schema"

export async function fetchLessons(chapterSlug: string, lessonSlug?: string) {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get(`/api/modulo/auth/${chapterSlug}`)
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Aulas: data.data.attributes.Aulas.filter((lesson: any) => lessonSlug ? lesson.aula.slug === lessonSlug : lesson).map((lesson: any) => ({
            ...lesson,
            aula: {
              ...lesson.aula,
              thumbnail: {
                ...lesson.aula.thumbnail,
                url: `${env.API_URL}${lesson.aula?.thumbnail?.url || ''}`
              }
            }
          }))
        }
      } as LessonSchema
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
