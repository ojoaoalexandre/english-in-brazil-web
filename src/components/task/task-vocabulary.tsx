'use client'

import { useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { TableSchema } from "@/types/task-schema";
import { PauseIcon, PlayIcon } from "../icon";

export const TaskVocabulary = ({
  tables
}: {
  tables: TableSchema[]
}) => {
  const { togglePlayPause, isPlaying ,load } = useAudioPlayer()
  const [currentPath, setCurrentPath] = useState('')

  const handleTogglePlayPause = (path: string) => {
    setCurrentPath(path)

    if(isPlaying && currentPath === path) {
      togglePlayPause()
    }

    load(path, {
      format: 'mp3',
      autoplay: true,
    })
  }

  return (
    <div>
      {tables.map((table, tableIndex) => (
          <section key={table.id} className="flex flex-col gap-4">
            <h3 className="font-bold">{table.titulo}</h3>
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th></th>
                  <th className="font-medium p-4 pt-0 pb-3 text-slate-400 text-left">EN</th>
                  <th className="font-medium p-4 pt-0 pb-3 text-slate-400 text-left">PT</th>
                </tr>
              </thead>
              <tbody>
                {table.TabelaConteudo.map((content, contentIndex) => (
                  <tr key={`${tableIndex}-${contentIndex}`}>
                      <td className="border-b border-slate-100 p-4">
                        <button onClick={() => handleTogglePlayPause(`${process.env.NEXT_PUBLIC_API_URL}${content.audio?.url}` || '')}>
                          {isPlaying && currentPath === `${process.env.NEXT_PUBLIC_API_URL}${content.audio?.url}` ? <PauseIcon /> : <PlayIcon />}
                        </button>
                      </td>
                      <td className="border-b border-slate-100 p-4">
                        {content.conteudoEn.split('\\n').map((text: string, idx: number) => (
                          <p key={idx}>{text}</p>
                        ))}
                      </td>
                      <td className="border-b border-slate-100 p-4">
                        {content.conteudoPt.split('\\n').map((text: string, idx: number) => (
                          <p key={idx}>{text}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        ))}
    </div>
  )
}
