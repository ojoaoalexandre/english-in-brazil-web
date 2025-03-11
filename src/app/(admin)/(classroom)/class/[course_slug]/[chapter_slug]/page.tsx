import { fetchLessons } from "@/actions/fetch-lessons"
import { getMe } from "@/actions/get-me"
import { getLastLive } from "@/actions/lives/get-last-live"
import { Aside } from "@/components/aside"
import Breadcrump from "@/components/breadcrump"
import { SectionChapters } from "@/components/section-chapters"

export default async function Page({
  params,
}: {
  params: Promise<{ chapter_slug: string }>
}) {
  const chapter = (await params).chapter_slug
  const [me, live, lessons] = await Promise.all([getMe(), getLastLive(), fetchLessons(chapter)])

  return (
    <div className="flex min-h-screen">
      <div className="p-4 xl:p-8 grow">
        <Breadcrump path={[{ title: 'Módulos', url: `/class` }]} />

        {lessons?.data ? (
          <section className="py-4">
            <SectionChapters lessons={lessons.data} />
          </section>
        ) : null}
      </div>

      <Aside me={me} live={live} />
    </div>
  )
}
