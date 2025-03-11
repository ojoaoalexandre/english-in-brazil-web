import { fetchCourses } from "@/actions/fetch-courses";
import { getMe } from "@/actions/get-me";
import Breadcrump from "@/components/breadcrump";
import { ProgressByDay } from "@/components/chart/progress-by-day";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from 'react-icons/ci'

export default async function Page() {
  const [me, courses] = await Promise.all([getMe(),fetchCourses()])

  return (
    <div className="flex flex-col">
      <Breadcrump path={[]} />

      <section className="py-4">
        <header className="pb-4">
          <h3 className="text-2xl font-semibold">Outros Cursos</h3>
          <p>Acesse o seu curso aqui e conheça os outros cursos</p>
        </header>
        <div className={`grid grid-cols-6 gap-2`}>
          {courses?.data?.map(course => {
            return (
              <Link key={course.id} href={course.enabled ? `/class/${course.slug}` : `${course.landingPage}`}>
                <div className="relative w-full h-40 rounded-md">
                  <Image
                    src={course.thumbnail || ''}
                    alt={course.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />

                  {!course.enabled ? (
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50" />
                  ) : null}

                  {!course.enabled ? (
                    <CiLock className="absolute top-4 right-4 stroke-black stroke-2" size={32} />
                  ) : null}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="py-4">
        <header className="pb-4">
          <h3 className="text-2xl font-semibold">Continue a aula</h3>
          <p>Não perca o foco, continue de onde parou!</p>
        </header>
        {me?.data?.last_lesson ? (
          <div className="flex justify-between items-center bg-background rounded-md px-4 py-8 w-full">
            <div>
              <h3 className="text-lg font-semibold">{me.data.last_lesson.course_name}</h3>
              <p>{me.data.last_lesson.class_name}</p>
            </div>
            <Link href={`/class/${me.data.last_lesson.course_slug}/${me.data.last_lesson.module_slug}/${me.data.last_lesson.class_slug}/${me.data.last_lesson.component}/${me.data.last_lesson.component_id}`}
              className="flex gap-2 bg-backgroundSecondary px-4 font-semibold py-2 rounded-md"
            >
              <span>Continuar Aula</span>
              <ChevronRight size={24} />
            </Link>
          </div>
        ) : null}
      </section>

      <section className="py-4">
        <ProgressByDay data={me?.data?.my_progress} />
      </section>
    </div>
  )
}
