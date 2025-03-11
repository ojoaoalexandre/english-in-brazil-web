'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { TaskSchema } from "@/types/task-schema"

export async function getLessonByLink({
  course_slug,
  chapter_slug,
  lesson_slug,
  component,
  component_id
}: {
  course_slug: string
  chapter_slug: string
  lesson_slug: string
  component: string
  component_id: string
}) {
  const http = new FetcherAdapter()

  try {
    const response = await http.get(`/api/aluno/curso/${course_slug}/${chapter_slug}/${lesson_slug}/${component}/${component_id}`)

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: data as TaskSchema
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
