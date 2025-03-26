/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { MicrophoneIcon, PauseIcon } from "./icon";

const recorder = new MicRecorder({ bitRate: 128 });

interface ButtonRecordPlayerProps {
  id: string;
  position: number;
  tracks: unknown
  getTracks: (tracks: Record<number, unknown>) => void;
  fileName: string;
}

export const ButtonRecordPlayer = ({ id, position, getTracks, fileName }: ButtonRecordPlayerProps) => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      await recorder.start();
      setIsRecording(true);

      getTracks({
        [position]: {
          id,
          isRecording: true,
          response: "",
        },
      });
    } catch (error) {
      console.error("Erro ao iniciar a gravação:", error);
    }
  };

  const stopRecording = async () => {
    try {
      const [buffer, blob] = await recorder.stop().getMp3();
      const file = new File(buffer, fileName, { type: blob.type, lastModified: Date.now() });
      const blobURL = URL.createObjectURL(file);

      setIsRecording(false);

      getTracks({
        [position]: {
          id,
          isRecording: false,
          response: blobURL,
          audioBlob: file,
          audioBuffer: buffer,
          fileName,
        },
      });
    } catch (error) {
      console.error("Erro ao finalizar a gravação:", error);
    }
  };

  const handleRecord = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    isRecording ? stopRecording() : startRecording();
  };

  return (
    <button
      onClick={handleRecord}
      className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
    >
      {isRecording ? <PauseIcon size={24} color="#fff" /> : <MicrophoneIcon size={24} color="#fff" />}
    </button>
  );
}
