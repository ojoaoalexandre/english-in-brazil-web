'use client'

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export type Item = {
  id: number;
  __component: string;
  titulo: string;
  atividadeConcluida: boolean;
  group?: string | null;
};

export const ButtonInfobox = ({ task, path, currentTask }: { task: { group: string, items: Item[] }, path: string, currentTask: string }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(task.items.find(infobox => currentTask === `${infobox.__component}/${infobox.id}`) ) {
      setOpen(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <div className="flex flex-col gap-2 border border-white p-1 rounded-md">
      <button
        className="flex items-center justify-between gap-2 px-4 py-2 bg-backgroundSecondary rounded-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-2 items-center">
          <Check className={`w-4 h-4 ${task.items.filter(taskBox => taskBox.atividadeConcluida).length >= task.items.length ? 'opacity-100': 'opacity-0'}`} />
          <span className="font-semibold">INFOBOX</span>
          <span>{task.items.filter(taskBox => taskBox.atividadeConcluida).length}/{task.items.length}</span>
        </div>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {open ? (
        <div className="flex flex-col gap-2">
          {task.items.map(taskBox => (
            <Link href={`${path}/${taskBox.__component}/${taskBox.id}`} key={`${taskBox.id}-task`}
              className={`flex items-center gap-2 px-4 py-2 bg-backgroundSecondary rounded-md ${ currentTask === `${taskBox.__component}/${taskBox.id}` ? 'bg-theme-red-500' : '' }`}>
              <Check className={`w-5 h-5 text-theme-green-500 ${taskBox.atividadeConcluida ? 'opacity-100': 'opacity-0'}`} />
              <span>{taskBox.titulo}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
