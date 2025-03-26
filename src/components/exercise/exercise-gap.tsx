import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import MessageBanner from '../message-banner'
import { Markdown } from '../markdown'
import { ButtonPlayer } from '../button-player'
import { shuffle } from '@/lib/utils'
import Image from 'next/image'
import { GrupoPerguntaGapSchema } from '@/types/task-schema'

type OptionProps = {
  [name: string]: Array<string>
}

type WordProps = {
  [name: string]: OptionProps
}

export const ExerciseGap = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed,
  isUniqueValidation = false
}: {
  GrupoPergunta: GrupoPerguntaGapSchema[]
  allActivitiesCompletedStatus: boolean
  completed: (status: boolean) => void
  isUniqueValidation?: boolean
}) => {
  const form = useForm()
  const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus)
  const [words, setWords] = useState<WordProps>({})
  const [allWords, setAllWords] = useState<OptionProps>({})

  useEffect(() => {
    setExerciseCompleted(allActivitiesCompletedStatus)

    GrupoPergunta.map(question => {
      const options: OptionProps = question.opcoes
        .map(option => {
          const responses =
            option.frase.match(/\[\(([^()]*)\)\]/g)?.map(word => {
              return word
                .toLowerCase()
                .replace('[(', '')
                .replace(')]', '')
                .split('|')
            }) || []

          if (responses.length > 1) {
            return responses
              .map((response, position) => {
                return {
                  [`${option.id}${position}`]: response
                }
              })
              .reduce((previous, current) => {
                return {
                  ...previous,
                  ...current
                }
              })
          }

          return {
            [`${option.id}`]: responses[0]
          }
        })
        .map(option => {
          return option
        })
        .reduce((previous, current) => {
          return {
            ...previous,
            ...current
          }
        })

      setWords(old => ({
        ...old,
        [question.id]: options
      }))

      if (question.apresentarOpcoes) {
        setAllWords(old => ({
          ...old,
          [question.id]: shuffle(
            Object.values(options).reduce<string[]>((previous, current) => [
              ...previous,
              ...current
            ], [])
          )
        }))
      }
    })
  }, [allActivitiesCompletedStatus, GrupoPergunta])

  const onSubmit = (data: any) => {
    try {
      const incorrectResponses: Array<string> = []
      const correctResponses: Array<string> = []

      Object.keys(data).map(option => {
        const [question] = Object.values(words)

        const formatter = data[option]
          .toLowerCase()
          .trim()
          .replace(/\s{2,}/g, ' ')

        let isCorrect = false

        if (question[option]?.filter(word => /^\*/gi.test(word)).length > 0) {
          isCorrect = /^\*/gi.test(data[option].toLowerCase())
        } else {
          isCorrect = question[option]?.includes(formatter)
        }

        if (isCorrect) {
          correctResponses.push(option)
        } else {
          incorrectResponses.push(option)
        }
      })

      if (incorrectResponses.length > 0) {
        incorrectResponses.map(field => {
          form.setError(`${field}`, {
            types: {
              incorrect: 'Resposta Incorreta'
            }
          })
        })

        correctResponses.map(field => {
          form.setError(`${field}`, {
            types: {
              correct: 'Resposta Correta'
            }
          })
        })

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
    form.reset()
    setExerciseCompleted(false)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
      {GrupoPergunta.map(question => {
        return (
          <div key={question.id}>
            <header>
              <h3 className="font-medium text-lg mb-2">
                {question.pergunta}
              </h3>
              <Markdown>{question.perguntaComplemento}</Markdown>
            </header>

            {question?.media && question.media?.ext === '.mp3' && (
              <ButtonPlayer path={question.media.url} />
            )}

            {question.media && question.media?.ext !== '.mp3' && (
              <div className="my-5 justify-center flex">
                <Image
                  alt=''
                  className="object-cover max-w-2xl xs:max-w-full"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${question.media?.url}`}
                />
              </div>
            )}

            {Object.keys(form.formState.errors).filter(
              field => form.formState.errors[field]?.types?.incorrect
            ).length > 0 && (
              <MessageBanner
                title="Resposta Incorreta"
                message={question.respostaComentada || ''}
                type="error"
              />
            )}

            {exerciseCompleted && (
              <MessageBanner
                title="Resposta Correta"
                message={question.respostaComentada || ''}
                type="success"
              />
            )}

            <div className="flex flex-col gap-2">
              {question.apresentarOpcoes && (
                <div className="py-2">
                  {allWords[question.id]?.map(word => {
                    return (
                      <span
                        key={word}
                        className="text-md mx-1 my-1 inline-block p-2 px-4 leading-none text-center whitespace-nowrap align-baseline  bg-gray-800 text-white rounded-full"
                      >
                        {word}
                      </span>
                    )
                  })}
                </div>
              )}

              <div className="py-2">
                {question.opcoes.map(option => {
                  const gaps =
                    option.frase.match(/\[\(([^()]*)\)\]/g)?.map(word => {
                      return word
                        .toLowerCase()
                        .replace('[(', '')
                        .replace(')]', '')
                    }) || []

                  return (
                    <div key={`${option.id}-option`} className="my-2">
                      <div className="flex flex-wrap items-center">
                        {option.frase.split(/\[(.*?)\]/gm).map(expression => {
                          const isGap = expression.slice(0, 1) === '('
                          const index =
                            gaps?.length > 1
                              ? `${option.id}${gaps.indexOf(
                                  expression
                                    .replace('(', '')
                                    .replace(')', '')
                                    .toLowerCase()
                                )}`
                              : `${option.id}`

                          return (
                            <div key={expression} className="flex">
                              {!isGap && (
                                <>
                                  {expression.indexOf('.mp3') >= 0 ? (
                                    <div className="flex flex-col pr-2">
                                      {expression.indexOf('.mp3?player=eib') >=
                                      0 ? (
                                        <ButtonPlayer
                                          path={expression
                                            .replace('{', '')
                                            .replace('}', '')}
                                        />
                                      ) : (
                                        <audio
                                          src={`${
                                            process.env.NEXT_PUBLIC_API_URL
                                          }${expression
                                            .replace('{', '')
                                            .replace('}', '')}`}
                                          controls
                                        />
                                      )}
                                    </div>
                                  ) : expression.indexOf('<br/>') >= 0 ? (
                                    <br />
                                  ) : (
                                    <Markdown>{expression}</Markdown>
                                  )}
                                </>
                              )}

                              {isGap && (
                                <span>
                                  {question.preenchimento === 'Texto' && (
                                    <input
                                      type="text"
                                      disabled={exerciseCompleted}
                                      defaultValue={
                                        exerciseCompleted
                                          ? words[question.id]?.[index]?.join(
                                              ', '
                                            )
                                          : ''
                                      }
                                      className={`${
                                        form.formState.errors[index]?.type ||
                                        form.formState.errors[index]?.types
                                          ?.incorrect
                                          ? 'border-theme-red'
                                          : ''
                                      } shadow text-sm appearance-none border rounded py-1 px-2 mx-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                      {...form.register(`${index}`, {
                                        required: true
                                      })}
                                    />
                                  )}

                                  {question.preenchimento === 'Lista' && (
                                    <select
                                      {...form.register(`${index}`, {
                                        required: true
                                      })}
                                      disabled={exerciseCompleted}
                                      defaultValue={
                                        exerciseCompleted
                                          ? words[question.id]?.[index][0]
                                          : ''
                                      }
                                      className={`${
                                        form.formState.errors[index]?.type ||
                                        form.formState.errors[index]?.types
                                          ?.incorrect
                                          ? 'border-theme-red'
                                          : ''
                                      } form-select appearance-none px-3
                                        py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300 rounded transition
                                        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2`}
                                    >
                                      <option value="">Selecione...</option>
                                      {words[question.id]?.[index].map(
                                        option => {
                                          return (
                                            <option key={option} value={option}>
                                              {option.replace('*', '')}
                                            </option>
                                          )
                                        }
                                      )}
                                    </select>
                                  )}
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}

      <div className='flex'>
          {!exerciseCompleted && (
              <button type="submit" className="flex font-bold shadow-md bg-background px-6 py-2 rounded-md">Validar</button>
          )}

          {exerciseCompleted && isUniqueValidation && (
              <button className="flex font-bold shadow-md px-6  bg-background py-2 rounded-md" disabled>Validado</button>
          )}

          {exerciseCompleted && !allActivitiesCompletedStatus && !isUniqueValidation && (
              <button onClick={handleResetExercise} className="flex font-bold shadow-md  bg-background px-6 py-2 rounded-md">Refazer Atividade</button>
          )}
        </div>
    </form>
  )
}
