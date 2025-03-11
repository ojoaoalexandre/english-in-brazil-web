"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Markdown } from "../markdown";
import { GrupoPerguntaPronunciationSchema } from "@/types/task-schema";

export const ExercisePronunciation = ({
  GrupoPergunta,
  allActivitiesCompletedStatus,
  completed
}: {
  GrupoPergunta: GrupoPerguntaPronunciationSchema[]
  allActivitiesCompletedStatus: boolean
  completed: (status: boolean) => void
}) => {
    const form = useForm();
    const [exerciseCompleted, setExerciseCompleted] = useState(allActivitiesCompletedStatus);
    const [tracks, setTracks] = useState({});

    useEffect(() => {
        setExerciseCompleted(allActivitiesCompletedStatus);
    }, [allActivitiesCompletedStatus]);

    const getTracks = (newTracks) => {
        setTracks((prev) => ({ ...prev, ...newTracks }));
    };

    const handleUpload = async (formData) => {
        await fetch("https://cadastro.englishinbrazil.com.br/api/aluno/audioPronuncia", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData
        });

        // toast.promise(upload, {
        //     loading: "Salvando seus áudios...",
        //     success: "Áudios enviados com sucesso!",
        //     error: "Erro no envio dos áudios."
        // });
    };

    const onSubmit = () => {
        try {
            const totalResponses = GrupoPergunta.reduce((acc, q) => acc + q.opcoes.length, 0);
            if (Object.keys(tracks).length < totalResponses) {
                form.setError("empty", { types: { required: "Por favor grave todos os áudios" } });
                return;
            }

            const formData = new FormData();
            formData.append("type", "audio");
            Object.keys(tracks).forEach((track) => {
                formData.append("files", tracks[track].audioBlob, tracks[track]?.fileName);
            });

            handleUpload(formData);
            setExerciseCompleted(true);
            completed(true);
        } catch (error) {
            console.error("Erro ao processar envio:", error);
        }
    };

    const handleResetExercise = () => {
        completed(false);
        setExerciseCompleted(false);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {GrupoPergunta.map((question, index) => (
                <div key={question.id} className="pt-5 pl-2">
                    <h3 className="font-medium text-lg mb-2">{question.pergunta}</h3>

                    {question.perguntaComplemento && <Markdown>{question.perguntaComplemento}</Markdown>}

                    {form.formState.errors.empty?.types?.required && <p className="text-red-500">{form.formState.errors.empty.types.required}</p>}

                    {exerciseCompleted && <p className="text-green-500">Parabéns, todos os áudios foram gravados!</p>}

                    <div className="py-2">
                        <table className="border-collapse table-auto w-full text-sm">
                            <thead>
                                <tr>
                                    <th className="font-medium p-4 pt-0 pb-3 text-slate-400 text-left">Frase</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white border-t">
                                {question.opcoes.map((sentence, position) => {
                                    const fileName = `audio_pronuncia_${new Date()}_${sentence.id}_${position}.mp3`;
                                    return (
                                        <tr key={sentence.id}>
                                            <td className="border-b border-slate-100 p-4 text-slate-500">
                                                <Markdown>{sentence.frase}</Markdown>
                                                {allActivitiesCompletedStatus ? (
                                                    <audio src={`https://cadastro.englishinbrazil.com.br/uploads/audio_pronuncia/${fileName}?${Date.now()}`} controls />
                                                ) : (
                                                    tracks[position]?.response && <audio src={tracks[position].response} controls />
                                                )}
                                            </td>
                                            {!exerciseCompleted && (
                                                <td className="border-b border-slate-100 p-4 text-slate-500">
                                                    <button onClick={() => getTracks({ [position]: { response: "mocked_audio_url", fileName } })}>
                                                        Gravar
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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
