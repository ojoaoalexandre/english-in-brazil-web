'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { revalidatePath } from "next/cache"

export async function switchTaskStatus({
  course_slug,
  chapter_slug,
  lesson_slug,
  component,
  component_id,
  points = 0
}: {
  course_slug: string
  chapter_slug: string
  lesson_slug: string
  component: string
  component_id: string
  points?: number
}) {
  const http = new FetcherAdapter()

  try {
    const response = await http.post(`/api/aluno/eventoConclusao`, {
      aula_slug: lesson_slug,
      curso_slug: course_slug,
      modulo_slug: chapter_slug,
      componente: component,
      componente_id: component_id,
      points
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        data: null,
      }
    }
  }

  revalidatePath(`/class/${course_slug}/${chapter_slug}/${lesson_slug}/${component}/${component_id}`)
}
