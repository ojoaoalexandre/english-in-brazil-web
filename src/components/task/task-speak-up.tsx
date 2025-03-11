"use client";

import { useState, useEffect } from "react";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import { useLesson } from "@/lib/context/Lesson";
import { useProfile } from "@/lib/context/Profile";
import Markdown from "@/components/Markdown";
import toast from "react-hot-toast";

const TaskSpeakUp = ({ dadoConteudo, token }) => {
    const { titulo, prefixo, sufixo, conteudo = [] } = dadoConteudo;
    const [audioPlay, setAudioPlay] = useState("");
    const [audioPlayGrup, setAudioPlayGrup] = useState([]);
    const [positionGrupo, setPositionGrupo] = useState(-1);
    const [showTraducao, setShowTraducao] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioProduzido, setAudioProduzido] = useState("");
    const [listAudioGravados, setListAudioGravados] = useState([]);

    const { setCanClose, atividadeConcluida } = useLesson();
    const { profile } = useProfile();

    const { togglePlayPause, playing, load } = useAudioPlayer({
        autoplay: false,
        format: "mp3",
        onend: () => setAudioPlay(""),
    });

    useEffect(() => {
        setListAudioGravados(
            conteudo.map((item, i) => ({
                i,
                audioPergunta: item.audio?.url,
                isRecording: false,
                audioResposta: "",
            }))
        );
    }, [conteudo]);

    useEffect(() => {
        if (positionGrupo === -1) return;
        const file = audioPlayGrup[positionGrupo];
        if (!file) return;
        setAudioPlay(file);
        load({
            src: `https://cadastro.englishinbrazil.com.br${file}`,
            autoplay: true,
        });
    }, [positionGrupo, audioPlayGrup, load]);

    const PlayAudioGroup = (grupoAudio) => {
        if (grupoAudio[positionGrupo] === audioPlay) {
            togglePlayPause();
            return;
        }
        setAudioPlayGrup(grupoAudio);
        setPositionGrupo(0);
    };

    const uploadAudio = async () => {
        if (listAudioGravados.some((item) => !item.audioBlob)) {
            toast.error("Antes de produzir o diálogo, grave todas as respostas abaixo.");
            return;
        }
        const formData = new FormData();
        formData.append("type", "audio");
        formData.append("aula_slug", dadoConteudo.lesson);
        formData.append("curso_slug", dadoConteudo.course);
        formData.append("modulo_slug", dadoConteudo.module);
        formData.append("componente", dadoConteudo.__component);
        formData.append("componente_id", dadoConteudo.id);
        listAudioGravados.forEach((file, i) => {
            formData.append(`audioPergunta_${i}`, file.audioPergunta);
            formData.append(`files`, file.audioBlob, `audio_${i}.mp3`);
        });

        toast.loading("Estamos criando o Diálogo...");
        const response = await fetch("https://cadastro.englishinbrazil.com.br/api/aluno/speakup", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        });

        const retornoAudio = await response.json();
        toast.dismiss();
        toast.success("Diálogo criado com sucesso!");
        setAudioProduzido(`${retornoAudio.file}?${Date.now()}`);
        setCanClose(true);
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-100 border rounded-md">
            <h1 className="text-xl font-semibold">{titulo}</h1>
            {prefixo && <Markdown>{prefixo}</Markdown>}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={uploadAudio}>
                Produzir Diálogo
            </button>
            {(audioProduzido || atividadeConcluida) && (
                <audio className="w-full" src={`https://cadastro.englishinbrazil.com.br${audioProduzido}`} controls />
            )}
            <div className="flex flex-col gap-3">
                {conteudo.map((frase, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 border rounded-md bg-white">
                        <button className="p-2 bg-gray-200 rounded-md" onClick={() => PlayAudioGroup([frase.audio?.url])}>
                            {audioPlay === frase.audio?.url && playing ? "⏸️" : "▶️"}
                        </button>
                        <Markdown>{frase.frasePergunta.replace("\n", "<br>")}</Markdown>
                        {showTraducao && <small className="text-gray-500">{frase.frasePerguntaPt}</small>}
                    </div>
                ))}
            </div>
        </div>
    );
}
