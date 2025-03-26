/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getLetter } from '@/lib/utils';
import MessageBanner from '../message-banner';
import { ButtonPlayer } from '../button-player';
import { GrupoPerguntaSchema } from '@/types/task-schema';
import { Markdown } from '../markdown';

export const ExerciseMultipleChoice = ({
    GrupoPergunta,
    allActivitiesCompletedStatus = false,
    completed,
    updateExercisesFeedback,
    isUniqueValidation = false,
}: {
    GrupoPergunta: GrupoPerguntaSchema[];
    allActivitiesCompletedStatus?: boolean;
    completed: (status: boolean) => void;
    updateExercisesFeedback: (correctCount: number, incorrectCount: number) => void;
    isUniqueValidation?: boolean;
}) => {
    const { register, formState, handleSubmit, setError, reset,  } = useForm();
    const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus);

    useEffect(() => {
        setExerciseCompleted(allActivitiesCompletedStatus);
    }, [allActivitiesCompletedStatus]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
      const incorrectResponses: string[] = [];
      const correctResponses: string[] = [];

      Object.keys(data).forEach((choice) => {
        const isCorrect = data[choice] === "true";

        if (isCorrect) {
          correctResponses.push(choice);
        } else {
          incorrectResponses.push(choice);
        }
      });

      incorrectResponses.forEach((field) => setError(field, { types: { incorrect: "Resposta Incorreta:" } }));
      correctResponses.forEach((field) => setError(field, { types: { correct: "Resposta Correta:" } }));

      if (isUniqueValidation) {
        updateExercisesFeedback(correctResponses.length, incorrectResponses.length);
        setExerciseCompleted(true);
        completed(true);
        return;
      }
    };

    const handleResetExercise = () => {
        completed(false);
        reset();
        setExerciseCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            {GrupoPergunta.map((question: GrupoPerguntaSchema, index: number) => (
                <div key={`${question.id}-${index}`}>
                    <header>
                        <h3 className="flex items-end gap-2 font-medium text-lg mb-2">
                            <span className="pt-2">{index}.</span>
                            <div>
                                {question.pergunta?.split('\n').map((pergunta, index) => (
                                    <Markdown key={`${index}-${pergunta}`}>{pergunta}</Markdown>
                                ))}
                            </div>
                        </h3>
                        <Markdown>{question.perguntaComplemento}</Markdown>
                    </header>

                    {question.media && (
                        question.media.ext === ".mp3" ? (
                            <ButtonPlayer path={question.media.url} />
                        ) : (
                            <div className="my-5 justify-center flex">
                              <img alt="" className="object-cover max-w-2xl xs:max-w-full" src={`https://cadastro.englishinbrazil.com.br${question.media.url}`} />
                            </div>
                        )
                    )}

                    <div className="flex flex-col gap-2">
                      {formState.errors[question.id]?.message && (
                        <MessageBanner
                        title=''
                          message={`${formState.errors[question.id]?.message}`}
                          type="error"
                        />
                      )}

                      {formState.errors[question.id]?.types?.incorrect && (
                        <MessageBanner
                          title="Resposta Incorreta"
                          message={question.respostaComentada || ''}
                          type="error"
                        />
                      )}

                      {(formState.errors[question.id]?.types?.correct ||
                        exerciseCompleted) && (
                        <MessageBanner
                          title="Resposta Correta"
                          message={question.respostaComentada || ''}
                          type="success"
                        />
                      )}

                        {question.opcoes.map((option, position) => (
                            <div key={`${option.id}-${position}`} className="flex items-center gap-1">
                                <input
                                    id={option.id.toString()}
                                    type="radio"
                                    value={'correta' in option ? option.correta?.toString(): ''}
                                    {...register(question.id.toString(), { required: "É necessário responder todas as questões", disabled: exerciseCompleted })}
                                    className={`appearance-none w-6 h-6  rounded-full checked:bg-theme-red-500 ${exerciseCompleted && option.correta ? "bg-theme-red-500" : "bg-white"} border border-grey`}
                                />
                                <Markdown>{`${getLetter(position)}) ${'opcao' in option ? option.opcao : ''}`}</Markdown>
                            </div>
                        ))}
                    </div>
                    <Markdown>{question.sufixo}</Markdown>
                </div>
            ))}

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
    );
};
