/* eslint-disable @typescript-eslint/no-explicit-any */
import { TbSettings } from "react-icons/tb"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { IoNotificationsOutline } from "react-icons/io5"
import { ToggleTheme } from "./toggle-theme"
import { Check } from "lucide-react"
import { TaskSchema } from "@/types/task-schema"
import { ButtonInfobox } from "./button-infobox"
import { Markdown } from "./markdown"

type Item = {
  id: number;
  __component: string;
  titulo: string;
  atividadeConcluida: boolean;
  group?: string | null;
};

export const AsideTasks = ({ me, lesson, path, currentTask }: { me: any, lesson?: { data: TaskSchema }, path: string, currentTask: string }) => {
  const groupInfoboxes = (items: Item[]): (Item | { group: string; items: Item[] })[] => {
    const result: (Item | { group: string; items: Item[] })[] = [];
    let currentGroup: Item[] = [];

    items.forEach(item => {
      if (item.group === 'infobox') {
        currentGroup.push(item);
      } else {
        if (currentGroup.length > 0) {
          result.push({ group: 'infobox', items: currentGroup });
          currentGroup = [];
        }

        result.push(item);
      }
    });

    if (currentGroup.length > 0) {
      result.push({ group: 'infobox', items: currentGroup });
    }

    return result;
  }

  return (
    <aside className="hidden w-full xl:block xl:max-w-sm bg-background">
        <div className="flex px-4 py-4 justify-between gap-2">
          <div className="flex gap-2 items-center px-2 bg-backgroundSecondary w-full rounded-lg">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/images/avatar.png" alt="" />
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
              <TbSettings className="absolute -bottom-1 -right-1 w-5 h-5" />
            </div>
            <p className="text-white truncate overflow-hidden">{me?.data?.name}</p>
          </div>
          <div className="flex gap-3 px-4 items-center bg-backgroundSecondary rounded-lg">
            <ToggleTheme />
            <Link href="/notifications"  className="relative">
              <IoNotificationsOutline className="w-6 h-6" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 px-2 rounded-full text-xs">{me?.data?.notifications}</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <h4 className="font-semibold text-lg">{lesson?.data.titulo}</h4>
          <div className="py-2">
            <Markdown>{lesson?.data.descricao}</Markdown>
          </div>

          <div className="flex flex-col gap-2">
            {lesson?.data.conteudo && groupInfoboxes(lesson.data.conteudo).map((task, index) => {
              return !task.group ? (
                <Link href={`${path}/${lesson.data.slug}/${task.__component}/${task.id}`} key={`${task?.id}-${index}`}
                  className={`flex items-center gap-2 px-4 py-2 bg-backgroundSecondary rounded-md ${ currentTask === `${task.__component}/${task.id}` ? 'bg-theme-blue-dark dark:bg-gray-700' : '' }`}>
                  <Check className={`w-4 h-4 ${task.atividadeConcluida ? 'opacity-100': 'opacity-0'}`} />
                  <span className="font-semibold">{task.titulo}</span>
                </Link>
              ) : 'items' in task ? <ButtonInfobox key={index} task={task} path={`${path}/${lesson.data.slug}`} currentTask={currentTask} /> : null
            })}

            {lesson?.data.nextLesson ? (
              <Link className="px-4 py-2 rounded-md bg-backgroundSecondary text-center mt-2" href={`${path}/${lesson?.data.nextLesson?.lessonSlug}/${lesson?.data.nextLesson?.contentType}/${lesson?.data.nextLesson?.contentId}`}>
                Próxima Aula
              </Link>
            ) : null}
          </div>

        </div>
      </aside>
  )
}
