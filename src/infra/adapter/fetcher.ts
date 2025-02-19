import { HttpAdapter } from '@/infra/adapter/http'
import { env } from '../../lib/env'
import { getSession } from '@/lib/session'

export class FetcherAdapter implements HttpAdapter {
  private host = env.API_URL
  private headers = {}

  async get(
    input: string | URL | Request,
    init?: RequestInit | undefined,
    publicRoute: boolean = false,
  ): Promise<Response> {
    const url = `${this.host}/${input.toString().replace('/', '')}`
    await this.setHeaders(publicRoute)

    return await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
      ...init,
    })
  }

  async post(
    input: string | URL | Request,
    body: Record<string, unknown>,
    init?: RequestInit | undefined,
    publicRoute: boolean = false,
  ): Promise<Response> {
    const url = `${this.host}/${input.toString().replace('/', '')}`
    await this.setHeaders(publicRoute)

    return await fetch(url, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      ...init,
      body: JSON.stringify(body),
    })
  }

  async put(
    input: string | URL | Request,
    body: Record<string, unknown>,
    init?: RequestInit | undefined,
    publicRoute: boolean = false,
  ): Promise<Response> {
    const url = `${this.host}/${input.toString().replace('/', '')}`
    await this.setHeaders(publicRoute)

    return await fetch(url, {
      method: 'PUT',
      headers: this.headers,
      credentials: 'include',
      ...init,
      body: JSON.stringify(body),
    })
  }

  async delete(
    input: string | URL | Request,
    init?: RequestInit | undefined,
    publicRoute: boolean = false,
  ): Promise<Response> {
    const url = `${this.host}/${input.toString().replace('/', '')}`
    await this.setHeaders(publicRoute)

    return await fetch(url, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
      ...init,
    })
  }

  async setHeaders(publicRoute: boolean = false) {
    const cookieStore = await getSession(env.COOKIE_JWT)
    const token = cookieStore?.token

    if (token && !publicRoute) {
      this.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    } else {
      this.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  }
}
