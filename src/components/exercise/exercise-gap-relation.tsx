"use client";

import { useState, useEffect } from "react";
import { Markdown } from "../markdown";
import { useForm } from "react-hook-form";
import { getLetter, getLettersRange } from "@/lib/utils";
import MessageBanner from "../message-banner";

interface FormData {
  [key: string]: string;
}

interface WordOptions {
  id: string;
  responses: string[];
}

export const ExerciseGapRelation = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GrupoPergunta: any[];
  allActivitiesCompletedStatus: boolean;
  completed: (status: boolean) => void;
}) => {
    const form = useForm();
    const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus);
    const [words, setWords] = useState({});

    useEffect(() => {
        setExerciseCompleted(allActivitiesCompletedStatus);
        const tempWords: { [key: string]: string } = {};

        GrupoPergunta.forEach((question) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const options = question.opcoes.map((option: any) => {
                return {
                    id: option.id,
                    responses: option.fraseLacuna.split(/\[(.*?)\]/gm).filter((value: string) => value !== "").map((word: string) => word.replace("(", "").replace(")", ""))
                };
            });

            tempWords[question.id] = options;
        });

        setWords(tempWords);
    }, [allActivitiesCompletedStatus, GrupoPergunta]);

    const onSubmit = (data: FormData) => {
      try {
        const incorrectResponses: string[] = [];
        const correctResponses: string[] = [];

        Object.keys(data).forEach((option) => {
          const [question] = Object.values(words) as WordOptions[][];
          const [filter] = question.filter((response) => response.id == option);
          const isCorrect = filter?.responses[0]?.toLowerCase() == data[option].toLowerCase();

          if (isCorrect) {
            correctResponses.push(option);
          } else {
            incorrectResponses.push(option);
          }
        });

        if (incorrectResponses.length > 0) {
          incorrectResponses.forEach((field) => {
            form.setError(field, { type: "incorrect", message: "Resposta Incorreta" });
          });
          return;
        }

        setExerciseCompleted(true);
        completed(true);
      } catch (error) {
        console.error("Erro na validação:", error);
      }
    };

    const handleResetExercise = () => {
        completed(false);
        form.reset();
        setExerciseCompleted(false);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {GrupoPergunta.map((question) => (
                <div key={question.id}>
                    <h3 className="font-medium text-lg mb-2">{question.pergunta}</h3>

                    {question.perguntaComplemento && <Markdown>{question.perguntaComplemento}</Markdown>}

                    {form.formState.errors && Object.values(form.formState.errors).length > 0 && <MessageBanner title="Resposta Incorreta" message={question.respostaComentada} type="error" />}

                    {exerciseCompleted && <MessageBanner title="Resposta Correta" message={question.respostaComentada} type="success" />}

                    <div className="py-2">
                        {question.opcoes.map((option: {
                          id: string
                          fraseOpcao: string
                          fraseLacuna: string
                        }, index: number) => (
                            <div key={option.id} className="grid grid-cols-2 gap-4 my-2">
                                <div className="flex gap-2 items-center">
                                  <span>{getLetter(index)})</span>
                                  <Markdown>{option.fraseOpcao}</Markdown>
                                </div>
                                <div className="flex gap-4 items-center">
                                <select
                                    disabled={exerciseCompleted}
                                    className={`border p-2 rounded-md ${form.formState.errors[option.id] ? "border-theme-red" : "border-gray-300"}`}
                                    {...form.register(`${option.id}`, { required: "Campo obrigatório" })}
                                >
                                    <option value="">...</option>
                                    {getLettersRange(0, question.opcoes.length).map((word) => (
                                        <option key={word} value={word}>{word}</option>
                                    ))}
                                </select>
                                <pre>{option.id}</pre>
                                <span>{option.fraseLacuna.split(']')[1]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex">
            {!exerciseCompleted && <button type="submit" className="flex font-bold shadow-md bg-background px-6 py-2 rounded-md">Validar</button>}

            {exerciseCompleted && !allActivitiesCompletedStatus && <button onClick={handleResetExercise} className="flex font-bold shadow-md  bg-background px-6 py-2 rounded-md">Refazer Atividade</button>}
            </div>

        </form>
    );
}
