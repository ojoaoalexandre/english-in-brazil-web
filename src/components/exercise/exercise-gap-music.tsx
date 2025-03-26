"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { shuffle } from "@/lib/utils";
import { GrupoPerguntaGapMusicSchema } from "@/types/task-schema";
import MessageBanner from "../message-banner";
import { Markdown } from "../markdown";
import { ButtonPlayer } from "../button-player";
import Image from "next/image";

export const ExerciseGapMusic = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed
}: {
  GrupoPergunta: GrupoPerguntaGapMusicSchema[];
  allActivitiesCompletedStatus: boolean;
  completed: (status: boolean) => void;
}) => {
  const form = useForm();

  const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus);
  const [words, setWords] = useState({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [allWords, setAllWords] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setExerciseCompleted(allActivitiesCompletedStatus);

    GrupoPergunta.forEach((question) => {
      const options = question.opcoes.reduce((acc: Record<string, string[]>, option) => {
        const responses = option.frase.match(/\[\(([^()]*)\)\]/g)?.map((word) =>
          word.toLowerCase().replace("[(", "").replace(")]", "").split("|")
        ) || [];
        responses.forEach((response, position: number) => {
          acc[`${option.id}${position}`] = response;
        });
        return acc;
      }, {});

      setWords((prev) => ({ ...prev, [question.id]: options }));

      if (question.apresentarOpcoes) {
        setAllWords((prev) => ({
          ...prev,
          [question.id]: shuffle(Object.values(options).flat() as string[])
        }));
      }
    });
  }, [allActivitiesCompletedStatus, GrupoPergunta]);

  const onSubmit = (data: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    try {
      const incorrectResponses: string[] = [];
      const correctResponses = [];
      setErrors({});

      if (Object.values(data).includes("")) {
        Object.keys(data).forEach((field) => {
          if ((data as Record<string, unknown>)[field] === "") {
            setErrors((prev) => ({ ...prev, [field]: null }));
          }
        });
        // toast.error("Preencha todos os campos");
        return;
      }

      Object.keys(data).forEach((option) => {
        const [question] = Object.values(words) as Record<string, string[]>[];
        const formatter = (data as Record<string, unknown>)[option]?.toString().toLowerCase().trim().replace(/\s{2,}/g, " ");
        const hasApostrophe = /['"´]/g.test(formatter || "") ? (formatter || "").replace(/['"´]/g, "'") : null;
        let isCorrect = false;

        if ((question as Record<string, string[]>)[option]?.some((word: string) => /^\*/.test(word))) {
          isCorrect = /^\*/.test((data as Record<string, string>)[option].toLowerCase());
        } else {
          isCorrect = hasApostrophe ? question[option]?.includes(hasApostrophe ?? "") : question[option]?.includes(formatter ?? "");
        }

        if (isCorrect) {
          correctResponses.push(option);
        } else {
          incorrectResponses.push(option);
        }
      });

      if (incorrectResponses.length > 0) {
        incorrectResponses.forEach((field) => {
          setErrors((prev) => ({ ...prev, [field]: "wrong" }));
        });
        return;
      }

      setExerciseCompleted(true);
      completed(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetExercise = () => {
    completed(false);
    form.reset();
    setExerciseCompleted(false);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {GrupoPergunta.map((question) => (
          <div key={question.id}>
            <header>
              <h3 className="font-medium text-lg mb-2">
                {question.pergunta}
              </h3>
              {question.perguntaComplemento && (
                <Markdown
                  exerciseCompleted={exerciseCompleted}
                  errors={errors}
                >
                  {question.perguntaComplemento}
                </Markdown>
              )}
            </header>

            {question?.media && question.media.ext === ".mp3" && <ButtonPlayer path={question.media.url} />}

            {question.media && question.media.ext !== ".mp3" && (
              <div className="my-5 justify-center flex">
                <Image
                  className="object-cover max-w-2xl xs:max-w-full"
                  src={`https://cadastro.englishinbrazil.com.br${question.media?.url || ""}`}
                  alt="Image"
                />
              </div>
            )}

            {errors && Object.values(errors).includes('wrong') && (
              <MessageBanner title="Resposta Incorreta" message={question.respostaComentada} type="error" />
            )}

            {exerciseCompleted && (
              <MessageBanner title="Resposta Correta" message={question.respostaComentada} type="success" />
            )}

            <div className="flex flex-col gap-2">
              {question.apresentarOpcoes && (
                <div className="py-2">
                  {allWords[question.id]?.map((word: string) => (
                    <span key={word} className="text-md mx-1 my-1 inline-block p-2 px-4 bg-gray-800 text-white rounded-full">
                      {word}
                    </span>
                  ))}
                </div>
              )}

              <div className="py-2">
                {question.opcoes.map((option) => (
                  <div key={option.id} className="text-center leading-loose">
                    <Markdown optionId={option.id} exerciseCompleted={exerciseCompleted} errors={errors}>
                      {option.frase}
                    </Markdown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex">
          {!exerciseCompleted && (
            <button type="submit" className="font-bold shadow-md bg-background text-theme-blue-2 px-6 py-2 rounded-md">
              Validar
            </button>
          )}

          {exerciseCompleted && !allActivitiesCompletedStatus && (
            <button onClick={handleResetExercise} className="font-bold shadow-md bg-background text-theme-blue-2 px-6 py-2 rounded-md">
              Refazer Atividade
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
