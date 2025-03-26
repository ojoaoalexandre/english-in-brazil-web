'use client'

import { switchTaskStatus } from "@/actions/switch-task-status"

export const ButtonSwitchTaskStatus = ({ course_slug, chapter_slug, lesson_slug, component, component_id, taskStatus }: {
  course_slug: string
  chapter_slug: string
  lesson_slug: string
  component: string
  component_id: string
  taskStatus: boolean
}) => {

  return (
    <button
      onClick={
        () => switchTaskStatus({
          course_slug,
          chapter_slug,
          lesson_slug,
          component,
          component_id,
        })
      }

      className={`font-semibold px-4 py-2 rounded-md ${taskStatus ? 'bg-theme-green-500 text-theme-blue-dark': 'bg-backgroundSecondary'}`}>
      {taskStatus ? 'Aula Concluída' : 'Marcar como Concluída'}
    </button>
  )
}
