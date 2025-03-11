'use server'

import { FetcherAdapter } from "@/infra/adapter/fetcher"
import { getSession } from "@/lib/session"
import { Post, Space } from "@/types/post-schema"

export async function fetchPosts() {
  const http = new FetcherAdapter()

  try {
    const session = await getSession()

    if(!session) {
      throw new Error('Not Allowed')
    }

    const response = await http.get('/api/posts/withcategories')
    const data = await response.json()

    if(!response.ok) {
      throw new Error(data.message)
    }

    return {
      error: null,
      data: data.map((category: Space) => {
        return {
          category: category.category,
          posts: category.posts.map((post: Post) => {
            return {
              ...post,
              thumbnail: {
                id: post.thumbnail.id,
                url: `${process.env.API_URL}${post.thumbnail.url}`
              }
            }
          })
        }
      }) as Space[]
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
