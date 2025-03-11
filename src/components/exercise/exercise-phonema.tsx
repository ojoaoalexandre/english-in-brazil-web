"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { shuffle } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Markdown from "../markdown";

export const ExercisePhonema = ({
  GrupoPergunta,
  exercisePosition,
  allActivitiesCompletedStatus,
  completed
}: {
  GrupoPergunta: any,
  exercisePosition: number,
  allActivitiesCompletedStatus: boolean,
  completed: (status: boolean) => void
}) => {
    const { register, handleSubmit, formState: { errors }, setError, getValues, reset } = useForm();
    const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus);
    const [words, setWords] = useState([]);
    const [phonemes, setPhonemes] = useState({});

    useEffect(() => {
        setExerciseCompleted(allActivitiesCompletedStatus);
        let tempWords: [] = [];
        const tempPhonemes = {};

        GrupoPergunta.forEach((question) => {
            question.opcoes.forEach((option) => {
                const splitedWords = option.respostas.split("\n");
                tempWords = [...tempWords, ...splitedWords];
                tempPhonemes[option.fonema] = splitedWords;
            });
        });
        setWords(shuffle(tempWords));
        setPhonemes(tempPhonemes);
    }, [allActivitiesCompletedStatus, GrupoPergunta]);

    const onSubmit = (data) => {
        try {
            const incorrectResponses = [];
            const correctResponses = [];

            Object.keys(data).forEach((field) => {
                const isCorrect = phonemes[data[field]]?.includes(field);
                isCorrect ? correctResponses.push(field) : incorrectResponses.push(field);
            });

            incorrectResponses.forEach((field) => setError(field, { type: "custom", message: "Resposta Incorreta:" }));
            correctResponses.forEach((field) => setError(field, { type: "custom", message: "Resposta Correta:" }));

            if (incorrectResponses.length === 0) {
                setExerciseCompleted(true);
                completed(true);
            }
        } catch (error) {
            console.error("Erro ao validar respostas:", error);
        }
    };

    const handleResetExercise = () => {
        completed(false);
        reset();
        setExerciseCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {GrupoPergunta.map((question, index) => (
                <div key={question.id}>
                    <h2 className="text-lg font-semibold">
                        {exercisePosition + index}. {question.pergunta}
                    </h2>
                    {question.perguntaComplemento && <Markdown content={question.perguntaComplemento}  />}
                    <table className="table-auto my-4">
                        <tbody>
                            {words.map((word) => {
                                const correctResponse = Object.keys(phonemes).find((phoneme) => phonemes[phoneme].includes(word));
                                return (
                                    <tr key={word}>
                                        <td>
                                            <select
                                                {...register(word, { required: "Favor selecionar uma opção" })}
                                                className={`border p-2 rounded-md ${
                                                    errors[word] ? "border-red-500" : "border-gray-300"
                                                }`}
                                                disabled={exerciseCompleted}
                                            >
                                                <option value="">Selecione</option>
                                                {Object.keys(phonemes).map((phoneme) => (
                                                    <option key={phoneme} value={phoneme}>{phoneme}</option>
                                                ))}
                                            </select>
                                        </td>
                                        {exerciseCompleted && (
                                            <td className="pl-4 text-green-500">{correctResponse}</td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ))}

            {!exerciseCompleted && <Button type="submit">Validar</Button>}

            {exerciseCompleted && !allActivitiesCompletedStatus && <Button onClick={handleResetExercise}>Refazer Atividade</Button>}
        </form>
    );
};
