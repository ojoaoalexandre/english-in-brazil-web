import { fetchChapters } from "@/actions/fetch-chapters"
import { getMe } from "@/actions/get-me"
import { getLastLive } from "@/actions/get-last-live"
import { Aside } from "@/components/aside"
import Breadcrump from "@/components/breadcrump"
import { ProgressCircle } from "@/components/progress-circle"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function Page({
  params,
}: {
  params: Promise<{ course_slug: string }>
}) {
  const slug = (await params).course_slug
  const [me, chapters, live] = await Promise.all([getMe(), fetchChapters(slug), getLastLive()])

  return(
    <div className="flex min-h-screen">
      <div className="p-4 xl:p-8 grow">
        <Breadcrump path={[{ title: 'Módulos', url: `/class/${slug}` }]} />

        {me?.data?.last_lesson_by_course?.filter(lesson => lesson.curso_slug === slug).map(lesson => lesson.aula_slug ? (
          <section className="py-8" key={lesson.curso_slug}>
            <header className="pb-4 px-4">
              <h3 className="text-xl font-semibold">Continue a aula</h3>
              <p>Não perca o foco, continue de onde parou!</p>
            </header>
              <div className="flex justify-between items-center bg-background rounded-md p-8 w-full">
                <div>
                  <h3 className="text-lg font-semibold">{lesson.curso_nome}</h3>
                  <p>{lesson.aula_titulo}</p>
                </div>
                <Link href={`/class/${lesson.curso_slug}/${lesson.modulo_slug}/${lesson.aula_slug}/${lesson.componente}/${lesson.componente_id}`}
                  className="flex gap-2 bg-backgroundSecondary px-4 font-semibold py-2 rounded-md"
                >
                  <span>Continuar Aula</span>
                  <ChevronRight size={24} />
                </Link>
              </div>
          </section>
        ): null)}

        {chapters?.data && chapters?.data.length > 0 ? (
        <section className="py-4">
            <header className="pb-4">
              <h3 className="text-2xl font-semibold">Módulos</h3>
              <p>Acompanhe aqui o seu progresso</p>
          </header>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {chapters?.data?.map(chapter => (
                <Link
                key={chapter.id}
                className="relative w-full max-w-xs rounded-lg overflow-hidden bg-gray-900 shadow-md hover:scale-110 mt-4"
                href={`/class/${slug}/${chapter.Slug}`}
                >
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={chapter.capa.url}
                        alt={chapter.Titulo}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hover:from-transparent" />
                    </div>

                    <div  className="flex justify-center items-center absolute z-50 bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full text-black">
                      <ProgressCircle progress={Number((chapter.qtdeAulasConcluidas/chapter.qtdeAulas * 100).toFixed(0))} />
                    </div>
                  </Link>
            ))}
          </div>

      </section>
        ) : null}
      </div>

      <Aside me={me} live={live} />
    </div>
  )
}
