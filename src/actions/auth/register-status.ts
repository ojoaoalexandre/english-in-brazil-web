'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"

export async function registerStatus({ email }: { email: string }) {
  const http = new FetcherAdapter()

  try {
    const response = await http.post('/api/aluno/hasLogin', {
      email,
    })

    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.error.message)
    }

    if(data.hasAluno) {
      return {
        error: null,
        data: {
          registered: true,
          message: 'Cadastro Encontrado'
        }
      }
    }

    if(data.message){
      throw new Error(data.message);
    }

    return {
      error: null,
      data: {
        registered: false,
        message: 'Ainda não ativado'
      }
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
