'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { getUrl } from "@/lib/utils"
import { Message, Post } from "@/types/post-schema"

export async function getPostById(slug: string) {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get(`/api/post/${slug}`)
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: {
        id: data.id,
        title: data.title,
        slug: data.slug,
        content: data.content,
        reactions: data.reactions,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        aluno: {
          id: data.aluno?.id,
          primeiroNome: data.aluno?.primeiroNome,
          ultimoNome: data.aluno?.ultimoNome,
          bio: data.aluno?.bio,
          createdAt: data.aluno?.createdAt,
          updatedAt: data.aluno?.updatedAt,
          notification: data.aluno?.notification,
          avatar: {
            url: getUrl(data.aluno?.avatar?.url)
          }
        },
        Message: data.Message.map((message: Message & { MessageResponse: Message[] }) => {
          return {
            id: message.id,
            content: message.content,
            sentAt: message.sentAt,
            reactions: message.reactions,
            aluno: {
              id: message.aluno?.id,
              primeiroNome: message.aluno?.primeiroNome,
              ultimoNome: message.aluno?.ultimoNome,
              bio: message.aluno?.bio,
              createdAt: message.aluno?.createdAt,
              updatedAt: message.aluno?.updatedAt,
              notification: message.aluno?.notification,
              avatar: {
                url: getUrl(message.aluno?.avatar?.url)
              }
            },
            MessageResponse: message.MessageResponse.map((response: Message) => {
              return {
                id: response.id,
                content: response.content,
                sentAt: response.sentAt,
                reactions: response.reactions,
                aluno: {
                  id: response.aluno?.id,
                  primeiroNome: response.aluno?.primeiroNome,
                  ultimoNome: response.aluno?.ultimoNome,
                  bio: response.aluno?.bio,
                  createdAt: response.aluno?.createdAt,
                  updatedAt: response.aluno?.updatedAt,
                  notification: response.aluno?.notification,
                  avatar: {
                    url: getUrl(response.aluno?.avatar?.url)
                  }
                }
              }
            })
          }
        }
        )
      } as Post
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
