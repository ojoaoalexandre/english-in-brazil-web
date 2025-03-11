'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getUrl } from "@/lib/utils"

type LastLesson = {
  "curso_slug": string
  "curso_nome": string
  "modulo_titulo": string
  "modulo_slug": string
  "modulo_id": number
  "aula_slug": string
  "aula_titulo": string
  "componente": string
  "componente_id": number
}

export async function getMe() {
  const http = new FetcherAdapter()

  try {
    const response = await http.get('/api/aluno/me?includes=[conquistas,ultimaConclusao,progresso]')
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: {
        username: data.username,
        name: data.aluno.primeiroNome,
        notificationsRead: Object.keys(data.aluno.notification),
        notifications: Object.keys(data.notifications).length,
        my_progress: data.progresso,
        last_lesson: {
          course_slug: data.ultimaAulaConcluida?.curso_slug,
          course_name: data.ultimaAulaConcluida?.curso_nome,
          class_slug: data.ultimaAulaConcluida?.aula_slug,
          class_name: data.ultimaAulaConcluida?.aula_titulo,
          module_name: data.ultimaAulaConcluida?.modulo_titulo,
          module_slug: data.ultimaAulaConcluida?.modulo_slug,
          module_id: data.ultimaAulaConcluida?.modulo_id,
          component: data.ultimaAulaConcluida?.componente,
          component_id: data.ultimaAulaConcluida?.componente_id,
          thumbnail: getUrl(data.ultimaAulaConcluida?.capa?.url),
        },
        last_lesson_by_course: data.lastLessons as LastLesson[],
      }
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
