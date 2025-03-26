'use client'

import { GrupoPerguntaPronunciationSchema } from '@/types/task-schema'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ButtonRecordPlayer } from '../button-record-player'
import { Markdown } from '../markdown'
import MessageBanner from '../message-banner'
import { ButtonPlayer } from '../button-player'

export const ExercisePronunciation = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed
}: {
  GrupoPergunta: GrupoPerguntaPronunciationSchema[]
  allActivitiesCompletedStatus: boolean
  completed: (status: boolean) => void
}) => {
  const { handleSubmit, formState, register, setError } = useForm()

  const [exerciseCompleted, setExerciseCompleted] = useState<boolean>(
    allActivitiesCompletedStatus
  )

  const [tracks, setTracks] = useState<Tracks>({})

  interface Track {
    audioBlob: Blob;
    fileName: string;
    response?: string;
  }

  interface Tracks {
    [key: number]: Track;
  }

  const getTracks = (tracks: Tracks) => {
    setTracks((old: Tracks) => ({
      ...old,
      ...tracks
    }));
  }

  useEffect(() => {
    setExerciseCompleted(allActivitiesCompletedStatus)
  }, [allActivitiesCompletedStatus])

  const handleUpload = async (formData: FormData) => {
    const upload = fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL_DEV}/api/aluno/audioPronuncia`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      }
    )

    toast.promise(upload, {
      loading: 'Estamos salvando o seus audios....',
      success: 'Áudios Enviados com Sucesso',
      error: 'Whoops, tivemos algum erro no envio'
    })
  }

  const onSubmit = () => {
    try {
      const totalResponses = GrupoPergunta.reduce(
        (previousSentence, currentSentence) =>
          previousSentence + currentSentence.opcoes.length,
        0
      )

      if (Object.keys(tracks).length < totalResponses) {
        setError('empty', {
          types: {
            required: 'Por favor grave todos os áudios'
          }
        })

        return
      }

      const formData = new FormData()
      formData.append('type', 'audio')
      formData.append('audio-filename', 'arquivo')

      Object.keys(tracks).map(track => {
        formData.append(
          'files',
          tracks[Number(track)].audioBlob,
          tracks[Number(track)]?.fileName
        )
      })

      handleUpload(formData)
      setExerciseCompleted(true)
      completed(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleResetExercise = () => {
    completed(false)
    setExerciseCompleted(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {GrupoPergunta.map((question) => {
        return (
          <div key={question.id} className="pt-5 pl-2">
            <header>
              <h3 className="font-medium text-lg mb-2">
                {question.pergunta}
              </h3>
              <Markdown>{question.perguntaComplemento}</Markdown>
            </header>

            <input type="hidden" {...register(`empty`)} />
            {formState.errors['empty']?.types?.required && (
              <MessageBanner
                title='Por favor grave todos os áudios'
                message={`${formState.errors['empty']?.types?.required}`}
                type="error"
              />
            )}

            {exerciseCompleted && (
              <MessageBanner
                title="Parabéns"
                message="Todos os áudios foram gravados!"
                type="success"
              />
            )}

            <div className="py-2">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th className="font-medium p-4  pt-0 pb-3 text-slate-400 text-left">
                      Frase
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white border-t">
                  {question.opcoes.map((sentence, position: number) => {
                    const fileName = `audio_pronuncia_${(Math.random() * 10000)
                      .toString()
                      .padStart(5, '0')}_${sentence.id}_${position}.mp3`

                    return (
                      <tr key={sentence.id}>
                        <td className="border-b w-[70px] border-slate-100 p-4  text-slate-500">
                          {sentence.media?.url ? (
                            <ButtonPlayer path={sentence.media?.url} />
                          ) : (
                            <span>-</span>
                          )}
                        </td>
                        <td className="border-b border-slate-100 p-4  text-slate-500">
                          <Markdown>{sentence.frase}</Markdown>

                          {allActivitiesCompletedStatus && (
                            <audio
                              src={`${
                                process.env.NEXT_PUBLIC_HOST_URL_DEV
                              }/uploads/audio_pronuncia/${fileName}?${new Date().getTime()}`}
                              controls
                            />
                          )}

                          {!allActivitiesCompletedStatus &&
                            tracks[position]?.response && (
                              <audio src={tracks[position].response} controls />
                            )}
                        </td>
                        <td className="border-b w-[70px] border-slate-100 p-4  text-slate-500">
                          {!exerciseCompleted && (
                            <ButtonRecordPlayer
                              id={sentence.id.toString()}
                              position={position}
                              tracks={tracks}
                              fileName={fileName}
                              getTracks={getTracks}
                            />
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}

      {!exerciseCompleted && (
        <button
          type="submit"
          className="flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md"
        >
          Validar
        </button>
      )}

      {exerciseCompleted && !allActivitiesCompletedStatus && (
        <button
          onClick={handleResetExercise}
          className="flex font-bold shadow-md bg-white text-theme-blue-2 px-6 py-2 rounded-md"
        >
          Refazer Atividade
        </button>
      )}
    </form>
  )
}
