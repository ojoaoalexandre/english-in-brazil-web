/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
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

export const AsideTasksMobile = ({ lesson, path, currentTask }: { me: any, lesson?: { data: TaskSchema }, path: string, currentTask: string }) => {
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
    <aside className="w-full xl:hidden bg-background rounded-md py-8 my-4">
        <div className="flex flex-col gap-2 px-4">
          <h4 className="font-semibold text-lg text-theme-red-500">{lesson?.data.titulo}</h4>
          <div className="py-2">
            <Markdown>{lesson?.data.descricao}</Markdown>
          </div>

          <div className="flex flex-col gap-2">
            {lesson?.data.conteudo && groupInfoboxes(lesson.data.conteudo as Item[]).map((task, index) => {
              return !task.group ? (
                <Link href={`${path}/${lesson.data.slug}/${'__component' in task ? task.__component : ''}/${'id' in task ? task.id : ''}`} key={`${'id' in task ? task.id : index}`}
                  className={`flex items-center gap-2 px-4 py-2 bg-backgroundSecondary rounded-md ${ 'id' in task && '__component' in task && currentTask === `${task.__component}/${task.id}` ? 'bg-theme-red-500' : '' }`}>
                  <Check className={`w-5 h-5 text-theme-green-500 ${'atividadeConcluida' in task && task.atividadeConcluida ? 'opacity-100': 'opacity-0'}`} />
                  {'titulo' in task && <span className="font-semibold">{task.titulo}</span>}
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
