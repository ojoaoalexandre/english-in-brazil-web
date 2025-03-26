'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { revalidatePath } from "next/cache"

export async function createDoubt({
  lesson,
  course,
  chapter,
  __component,
  id,
  message
}: {
  lesson: string
  course: string
  chapter: string
  __component: string
  id: string
  message: string
}) {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.post(`/api/aluno/registrarDuvida`, {
      aula_slug: lesson,
      curso_slug: course,
      modulo_slug: chapter,
      componente: __component,
      componente_id: id,
      duvida: message,
      url: `/class/${course}/${chapter}/${lesson}/${__component}/${id}`
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }
  } catch (error) {
    if(error instanceof Error) {
      return {
        error: error.message,
        data: null
      }
    }
  }

  revalidatePath(`/class/${course}/${chapter}/${lesson}/${__component}/${id}`)
}
