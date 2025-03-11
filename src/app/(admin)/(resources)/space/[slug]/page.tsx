import { getPostById } from "@/actions/get-post-by-slug"
import Breadcrump from "@/components/breadcrump"
import Markdown from "@/components/markdown"
import Image from "next/image"

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const post = await getPostById(slug)

  return (
    <div>
      <Breadcrump path={[{ title: 'Space', url: '/space' }]} />

      <div className="bg-background p-4 rounded-md max-w-3xl mx-auto mt-4">
        <section>
          <header className="flex gap-2">
            {post?.data?.aluno?.avatar?.url ? (
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post?.data?.aluno?.avatar.url}
                    alt={post?.data?.title || ''}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
              </div>
            ): null}
          <div>
            <h3>{post?.data?.aluno?.primeiroNome}</h3>
            <span>{post?.data?.createdAt}</span>
          </div>
          </header>
          <Markdown content={post?.data?.content ||  ''} />

          <div className="flex">
            <div className="flex gap-1 items-center bg-backgroundSecondary px-2 py-1 rounded-full text-sm mb-2">
              <span>❤️</span>
              <span>{post?.data?.reactions ? Object.keys(post?.data?.reactions).length : 0}</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          {post?.data?.Message?.map(message => {
            return (
              <div key={message.id} className="flex flex-col gap-2 p-2">
                <div className="flex gap-2">
                    {message.aluno?.avatar?.url ? (
                      <div className="flex-shrink-0 relative w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={message.aluno?.avatar.url}
                            alt={message.aluno?.primeiroNome || ''}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                      </div>
                    ): null}
                  <div className="flex flex-col bg-backgroundSecondary p-2 rounded-md text-sm relative">
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">{message.aluno?.primeiroNome}</h3>
                      <span className="text-xs">{message.sentAt}</span>
                    </div>
                    <p>{message.content}</p>
                    {message.reactions && Object.keys(message.reactions).length > 0 ? (
                      <div className="flex absolute -right-2 -bottom-4">
                        <div className="flex gap-1 items-center bg-slate-800 px-2 rounded-full text-sm mb-2">
                          <span>❤️</span>
                          <span>{Object.keys(message.reactions).length}</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                {message.MessageResponse?.map(response => {
                  return (
                    <div key={response.id} className="flex gap-2 p-2 pl-8">
                      <div className="flex gap-2">
                        {response.aluno?.avatar?.url ? (
                          <div className="flex-shrink-0 relative w-10 h-10 rounded-full overflow-hidden">
                            <Image
                              src={response.aluno?.avatar.url}
                              alt={response.aluno?.primeiroNome || ''}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                          </div>
                        ): null}
                        <div className="flex flex-col bg-backgroundSecondary p-2 rounded-md text-sm relative">
                          <div className="flex gap-2 items-center">
                            <h3 className="font-semibold">{response.aluno?.primeiroNome}</h3>
                            <span className="text-xs">{response.sentAt}</span>
                          </div>
                          <p>{response.content}</p>
                          {message.reactions && Object.keys(message.reactions).length > 0 ? (
                            <div className="flex absolute -right-2 -bottom-4">
                              <div className="flex gap-1 items-center bg-slate-800 px-2 rounded-full text-sm mb-2">
                                <span>❤️</span>
                                <span>{Object.keys(message.reactions).length}</span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )
                })}
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
