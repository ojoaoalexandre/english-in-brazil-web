import { getLessonByLink } from "@/actions/get-lesson-by-link"
import { getMe } from "@/actions/get-me"
import { AsideTasks } from "@/components/aside-tasks"
import { AsideTasksMobile } from "@/components/aside-tasks-mobile"
import Breadcrump from "@/components/breadcrump"
import { ButtonSwitchTaskStatus } from "@/components/button-switch-task-status"
import { FormDoubts } from "@/components/form/form-doubts"
import { Markdown } from "@/components/markdown"
import TaskDialog from "@/components/task/task-dialog"
import { TaskExercise } from "@/components/task/task-exercise"
import { TaskFile } from "@/components/task/task-file"
import { TaskVideo } from "@/components/task/task-video"
import { TaskVocabulary } from "@/components/task/task-vocabulary"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default async function Page({ params }: {
  params: Promise<{
    course_slug: string,
    chapter_slug: string,
    lesson: [lesson_slug: string, component: string, component_id: string]
  }>
}) {
  const { course_slug, chapter_slug, lesson } = await params

  const [me, lessonDetails] = await Promise.all([
    getMe(),
    getLessonByLink({
      course_slug: course_slug,
      chapter_slug: chapter_slug,
      lesson_slug: lesson[0],
      component: lesson[1],
      component_id: lesson[2]
    })
  ])

  return (
    <div className="flex min-h-screen">
      <div className="p-4 xl:p-8 grow">
        <Breadcrump
          path={[
            { title: 'Módulos', url: `/class/${course_slug}` },
            { title: 'Aulas', url: `/class/${course_slug}/${chapter_slug}` },
            { title: lessonDetails?.data?.titulo || '', url: `/class/${course_slug}/${chapter_slug}` }
          ]}
        />

        {lessonDetails?.data ? (
          <div key={lessonDetails.data.id}>
            {lessonDetails?.data.conteudo.filter(task => task.id === Number(lesson[2]) && task.__component === lesson[1]).map((task, index) => {
              const previousTask = lessonDetails.data.conteudo[
                lessonDetails
                  .data.conteudo.findIndex(
                    task => task.id === Number(lesson[2])
                      && task.__component === lesson[1]
                  ) - 1
              ]

              const nextTask = lessonDetails.data.conteudo[
                lessonDetails
                  .data.conteudo.findIndex(
                    task => task.id === Number(lesson[2])
                      && task.__component === lesson[1]
                  ) + 1
              ]

              return (
                <div key={index} className="flex flex-col gap-4 py-4">
                  {nextTask || previousTask ? (
                    <div className={`flex ${previousTask ? 'justify-between' : 'justify-end'} bg-background px-4 py-2 rounded-md`}>
                      {previousTask ? (
                        <Link
                          href={`/class/${course_slug}/${chapter_slug}/${lesson[0]}/${previousTask.__component}/${previousTask.id}`}
                          className="flex gap-2 items-center"
                        >
                          <ChevronLeft size={24} />
                          <div className="flex flex-col">
                            <span className="text-xs">Anterior</span>
                            <span>{previousTask.titulo}</span>
                          </div>
                        </Link>
                      ) : null}

                      {nextTask ? (
                        <Link
                          href={`/class/${course_slug}/${chapter_slug}/${lesson[0]}/${nextTask.__component}/${nextTask.id}`}
                          className="flex gap-2 items-center"
                        >
                          <div className="flex flex-col text-right">
                            <span className="text-xs">Próximo</span>
                            <span>{nextTask.titulo}</span>
                          </div>
                          <ChevronRight size={24} />
                        </Link>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="flex justify-between items-center bg-background px-4 py-3 rounded-md">
                    <span className="text-lg font-bold">{task.titulo}</span>

                    {task.pontos > 0 ? (
                      <ButtonSwitchTaskStatus
                        course_slug={course_slug}
                        chapter_slug={chapter_slug}
                        lesson_slug={lesson[0]}
                        component={lesson[1]}
                        component_id={lesson[2]}
                        taskStatus={task.atividadeConcluida}
                      />
                    ) : null}
                  </div>

                  {task.prefixo ? (
                    <div className="py-4">
                      <Markdown>{task.prefixo}</Markdown>
                    </div>
                  ) : null}

                  {task.__component === "aula.video-1-0" && 'link' in task ? (
                    <TaskVideo link={task.link} />
                  ) : null}

                  {task.__component === "aula.arquivo-1-0" && 'arquivo' in task ? task.arquivo.map(file => {
                    return <TaskFile key={file.id} name={file.caption} link={file.url} />
                  }) : null}

                  {task.__component === "aula.vocabulario-1-0" && 'tabelas' in task ? (
                    <TaskVocabulary tables={task.tabelas} />
                  ) : null}

                  {task.__component === "aula.dialogo-2-0" && 'dialogoFrases' in task ? (
                    <TaskDialog dialogs={task.dialogoFrases} audio={task.audio} />
                  ) : null}

                  {task.__component === "aula.exercicio-em-aula" && 'aula_exercicio' in task ? (
                    <TaskExercise
                      task={task.aula_exercicio}
                      completed={task.atividadeConcluida}
                    />
                  ) : null}

                  {/* {task.__component === "aula.speak-up2-0" && 'conteudo' in task ? (
                    <TaskSpeakUp content={task.conteudo} />
                  ) : null} */}

                  {task.__component === "aula.conteudo-livre" && 'conteudoTexto' in task ? (
                    <Markdown>{task.conteudoTexto}</Markdown>
                  ) : null}

                  {task.sufixo ? (
                    <div className="py-4">
                      <Markdown>{task.sufixo}</Markdown>
                    </div>
                  ) : null}
                </div>
              )
            })}

            <AsideTasksMobile me={me} lesson={{ data: lessonDetails.data }} path={`/class/${course_slug}/${chapter_slug}`} currentTask={`${lesson[1]}/${lesson[2]}`} />

            {lessonDetails.data?.commentPending?.length > 0 && (
              <div className="flex flex-col gap-4 pb-4 text-gray-300">
                <h3 className="font-bold text-xl">
                  Dúvidas Não Respondidas
                </h3>
                <article className="flex flex-col gap-4">
                  {lessonDetails.data?.commentPending.map(comment => {
                    return (
                      <div key={comment.id}>
                        <div className="flex gap-4 py-2">
                          <Avatar>
                            <AvatarImage src={comment.avatar} />
                            <AvatarFallback>EB</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{comment.author}</p>
                            <p>{comment.question}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </article>
              </div>
            )}

            {lessonDetails.data.enabledComments ? (
              <section>
                <h3 className="text-xl font-bold pb-4">Dúvidas</h3>

                <FormDoubts
                  course_slug={course_slug}
                  chapter_slug={chapter_slug}
                  lesson_slug={lesson[0]}
                  component={lesson[1]}
                  component_id={lesson[2]}
                  avatar={''}
                />

                {lessonDetails.data.commentResponse.map(comment => (
                  <div key={comment.id} className="flex flex-col p-4">
                    <div className="flex gap-4 py-2">
                      <Avatar>
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>EB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{comment.author}</p>
                        <p>{comment.question}</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      {comment.response.map(response => (
                        <div key={response.id} className="pl-8 pt-4">
                          <div className="flex gap-4 py-2">
                            <Avatar>
                              <AvatarImage src={response.avatar} />
                              <AvatarFallback>EB</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{response.author}</p>
                              <Markdown>{response.message}</Markdown>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ) : null}
          </div>
        ) : null}
      </div>

      {lessonDetails?.data && (
        <AsideTasks me={me} lesson={{ data: lessonDetails.data }} path={`/class/${course_slug}/${chapter_slug}`} currentTask={`${lesson[1]}/${lesson[2]}`} />
      )}
    </div>
  )
}
