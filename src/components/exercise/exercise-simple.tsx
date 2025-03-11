"use client";

import { useEffect } from "react";
import Markdown from "../markdown";
import { GrupoSimplesSchema } from "@/types/task-schema";

export const ExerciseSimple = ({
  GrupoPergunta,
  completed
}: {
    GrupoPergunta: GrupoSimplesSchema[],
    completed: (status: boolean) => void
}) => {
    useEffect(() => {
        completed(true);
    }, [completed]);

    return (
        <div className="flex flex-col gap-4 p-5 border rounded-md bg-gray-100">
            {GrupoPergunta.map((question) => (
                <div key={question.id} className="p-4 border-b last:border-none">
                    <h3 className="text-lg font-semibold">
                        {question.titulo} - {question.tipo}
                    </h3>
                    {question.subTitulo && <Markdown content={question.subTitulo} />}
                    {question.conteudo && <Markdown content={question.conteudo} />}
                    {question.comentarioResposta && (
                        <small className="text-gray-500">{question.comentarioResposta}</small>
                    )}
                </div>
            ))}
        </div>
    );
};
