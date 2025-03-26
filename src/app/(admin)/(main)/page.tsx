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
        <header className="pb-4 px-2">
          <h3 className="text-xl font-semibold">Outros Cursos</h3>
          <p>Acesse o seu curso aqui e conheça os outros cursos</p>
        </header>
        <div className={`grid grid-cols-5 gap-2`}>
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

      {me?.data?.last_lesson ? (
        <section className="py-4">
          <header className="pb-4 px-2">
            <h3 className="text-xl font-semibold">Continue a aula</h3>
            <p>Não perca o foco, continue de onde parou!</p>
          </header>
            <div className="flex justify-between items-center text-white bg-theme-blue dark:bg-background rounded-md p-8 w-full">
              <div>
                <h3 className="text-lg font-semibold">{me.data.last_lesson.course_name}</h3>
                <p>{me.data.last_lesson.class_name}</p>
              </div>
              <Link href={`/class/${me.data.last_lesson.course_slug}/${me.data.last_lesson.module_slug}/${me.data.last_lesson.class_slug}/${me.data.last_lesson.component}/${me.data.last_lesson.component_id}`}
                className="flex gap-2 bg-white text-theme-blue dark:text-white dark:bg-backgroundSecondary px-4 font-semibold py-3 rounded-md"
              >
                <span>Continuar Aula</span>
                <ChevronRight size={24} />
              </Link>
            </div>
        </section>
      ) : null}

      <section className="py-4">
        <header className="pb-4 px-2">
          <h3 className="text-xl font-semibold">Meu Progresso</h3>
          <p>Esse é o seu histórico de treinamento das últimas 2 semanas</p>
        </header>
        <ProgressByDay data={me?.data?.my_progress} />
      </section>
    </div>
  )
}
