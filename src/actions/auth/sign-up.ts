'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { createSession } from "@/lib/session"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function signUp({
  name,
  email,
  password
}: {
  name: string
  email: string
  password: string
}) {
  const http = new FetcherAdapter()

  try {
    const response = await http.post('/api/aluno/registro', {
      email,
      username: email,
      password,
      primeiroNome: name
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.error.message)
    }

    if(data.jwt) {
      await createSession(data.user.email, data.jwt)
    } else {
      throw new Error(data.error.message);
    }
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
