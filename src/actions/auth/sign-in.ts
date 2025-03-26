'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { createSession } from "@/lib/session"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signIn({
  email,
  password
}: {
  email: string
  password: string
}) {
  const http = new FetcherAdapter()

  try {
    const response = await http.post('/api/auth/local', {
      identifier: email,
      password
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.error.message)
    }

    await createSession(data.user.email, data.jwt)
  } catch (error) {
    if(error instanceof Error) {
      return {
        error: error.message,
        data: null
      }
    }
  }

  revalidatePath('/')
  redirect('/')
}
