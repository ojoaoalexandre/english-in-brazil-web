'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

export async function signIn() {
  const http = new FetcherAdapter()

  const response = await http.post('/api/auth/local', {
    identifier: 'aluno@gmail.com',
    password: '123456'
  })

  const data = await response.json()

  if(!response.ok) {
    throw new Error(data.error.message)
  }

  await createSession(data.user.email, data.jwt)

  redirect('/')
}
