'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { getUrl } from "@/lib/utils"
import { Course } from "@/types/course-schema"

export async function fetchCourses() {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get('/api/aluno/cursos')
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: data.map((course: {
        id: string,
        Nome: string,
        Slug: string,
        Descricao: string,
        PaginaVenda: string,
        ordem: number,
        hotmartCode: string,
        capa: {
          url: string
        },
        liberado: boolean
      }) => ({
        id: course.id,
        name: course.Nome,
        slug: course.Slug,
        description: course?.Descricao,
        landingPage: course?.PaginaVenda,
        order: course?.ordem,
        hotmartCode: course?.hotmartCode,
        thumbnail: getUrl(course?.capa?.url),
        enabled: course?.liberado,
      })) as Course[]
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
