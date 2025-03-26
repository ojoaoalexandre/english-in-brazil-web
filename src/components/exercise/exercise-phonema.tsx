import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Markdown } from '../markdown'
import { shuffle } from '@/lib/utils'
import { GrupoPerguntaFonemaSchema } from '@/types/task-schema'
import { toast } from 'sonner'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'

export const ExercisePhonema = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed
}: {
  GrupoPergunta: GrupoPerguntaFonemaSchema[]
  allActivitiesCompletedStatus: boolean
  completed: (status: boolean) => void
}) => {
  const { register, handleSubmit, formState, setError, getValues, reset } =
    useForm()

  const [exerciseCompleted, setExerciseCompleted] = useState<boolean>(
    allActivitiesCompletedStatus
  )

  const [words, setWords] = useState<Array<string>>([])
  const [phonemes, setPhonemes] = useState<{ [key: string]: Array<string> }>({})

  useEffect(() => {
    setExerciseCompleted(allActivitiesCompletedStatus)

    GrupoPergunta.map((question) => {
      question.opcoes.map(option => {
        const splitedWords = option.respostas.split('\n')

        setWords(old => [...old, ...splitedWords])
        setPhonemes(old => ({
          ...old,
          [option.fonema]: splitedWords
        }))
      })
    })

    setWords((old: string[]) => shuffle(old))
  }, [allActivitiesCompletedStatus, GrupoPergunta])

  const onSubmit = (data: Record<string, string>) => {
    try {
      const incorrectResponses: Array<string> = []
      const correctResponses: Array<string> = []

      Object.keys(data).forEach(field => {
        const isCorrect = phonemes[data[field]].includes(field)

        if (isCorrect) {
          correctResponses.push(field)
        } else {
          incorrectResponses.push(field)
        }
      })

      if (incorrectResponses.length > 0) {
        toast.error('Whoops, algumas respostas estão incorretas')

        incorrectResponses.map(field =>
          setError(`${field}`, {
            type: 'custom',
            message: 'Resposta Incorreta:'
          })
        )

        correctResponses.map(field =>
          setError(`${field}`, {
            type: 'custom',
            message: 'Resposta Correta:'
          })
        )

        return
      }

      setExerciseCompleted(true)
      completed(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleResetExercise = () => {
    completed(false)
    reset()
    setExerciseCompleted(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-5 pl-2">
      {GrupoPergunta?.map((question) => {
        return (
          <div key={question.id}>
            <header>
              <h2 className="font-medium text-lg mb-2">
                {question.pergunta}
              </h2>
              <Markdown>{question.perguntaComplemento}</Markdown>
            </header>

            <table className="table-auto my-4">
              <tbody>
                {words?.map((word: string, index: number) => {
                  const correctResponse = [
                    Object.keys(phonemes).filter(phoneme =>
                      phonemes[phoneme].includes(word)
                    )
                  ]

                  return (
                    <tr key={`${word}-${index}`}>
                      <td  className='relative'>
                        <Popover>
                          <PopoverTrigger
                            className={`
                              relative
                            dark:border-gray-800
                            ${
                              formState.dirtyFields[word]
                                ? 'border-blue-500 dark:border-blue-500'
                                : ''
                            }
                         ${
                           formState.errors[word] &&
                           getValues(word) != correctResponse
                             ? 'border-theme-red dark:border-theme-red'
                             : ''
                         } ${
                              formState.errors[word] &&
                              getValues(word) == correctResponse
                                ? 'border-theme-green-500'
                                : ''
                            } ${
                              exerciseCompleted ? 'border-theme-green-500' : ''
                            } border-2 w-full py-1 rounded-md disabled:bg-gray-200 dark:bg-gray-800 disabled:text-gray-500 bg-gray-300 px-4`}
                            disabled={exerciseCompleted}
                          >
                            {word}
                          </PopoverTrigger>
                          <PopoverContent className="absolute -top-3/4 left-1/3">
                            <div className="grid grid-flow-col place-items-stretch gap-2 p-2 bg-white dark:bg-gray-900 shadow-md rounded-md z-alwaysOnTop">
                              {Object.keys(phonemes).map(phoneme => {
                                return (
                                  <div key={phoneme}>
                                    <div className="relative h-8">
                                      <label className="flex w-full h-full items-center justify-center text-xl font-semibold absolute pointer-events-none">
                                        {phoneme}
                                      </label>
                                      <input
                                        type="radio"
                                        value={phoneme}
                                        {...register(word, {
                                          required: 'Favor selecionar uma opção'
                                        })}
                                        className={`appearance-none w-16 h-full border bg-gray-100 dark:bg-gray-800 rounded-sm hover:bg-blue-300 checked:bg-blue-500`}
                                      />
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </td>

                      {formState.errors[word] && !exerciseCompleted && (
                        <td>
                          <span className="text-sm pr-1">
                            {formState.errors[word]?.message as string}
                          </span>
                          <span className="text-lg">{getValues(word)}</span>
                        </td>
                      )}

                      {exerciseCompleted && (
                        <td className="flex gap-2 items-center">
                          <span className="text-sm">Resposta Correta:</span>
                          <span className="text-lg">{correctResponse}</span>
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
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
