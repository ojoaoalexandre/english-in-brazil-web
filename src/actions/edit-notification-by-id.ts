'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { redirect } from "next/navigation"

export async function editNotificationById(id: string) {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get(`/api/notifications/add/${id}`)
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

  redirect(`/notifications/${id}`)
}
