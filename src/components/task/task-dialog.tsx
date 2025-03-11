'use client'

import { useEffect, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { PauseIcon, PlayIcon } from "../icon";
import { AudioSchema, DialogSchema } from "@/types/task-schema";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiTranslate } from "react-icons/hi";

function convertTimeToMilliseconds(timeString: string) {
  const [minutes, seconds] = timeString.split(':').map(Number)
  return (minutes * 60 + seconds) * 100
}

const TaskDialog = ({
  dialogs,
  audio
}: {
  dialogs: DialogSchema[];
  audio: AudioSchema;
}) => {
  const [showTraducao, setShowTraducao] = useState(false);
  const [position, setPosition] = useState(0);

  const { isPlaying, duration, getPosition, seek, player } = useAudioPlayer(`${process.env.NEXT_PUBLIC_API_URL}${audio.url}`, {
    autoplay: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPosition = getPosition();
      setPosition((currentPosition / duration) * 100)
    }, 500)

    return () => clearInterval(interval)
  }, [getPosition, duration]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = parseInt(e.target.value);
    setPosition(newPosition);
    seek((newPosition / 100) * duration)
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-background rounded-md">
        <button
          className="p-5 rounded-full cursor-pointer"
          onClick={handlePlayPause}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div className="flex flex-1 ml-5 justify-between text-sm text-grey-darker">
          <p>{(position * duration).toFixed(2)}</p>

          <input
            type="range"
            className="w-full mx-5"
            value={position || 0}
            max={100}
            min={0}
            step={1}
            onChange={handleSeek}
          />

          <p>{duration}</p>
        </div>
        <div className="text-grey-darker flex">
          <button
            onClick={() => {
              setShowTraducao(!showTraducao);
            }}
            className={`mx-5`}
          >
            <HiTranslate className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4 min-h-[400px]">
        {dialogs.map((dialog, index) => {

          const showDialog = (position * duration) >= convertTimeToMilliseconds(dialog.inicio);

          return showDialog ? (
            <div
              key={dialog.id}
            >
              <div className={`flex gap-2 justify-start ${index % 2 ? 'flex-row-reverse' : ''}`}>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${dialog.dialogo_interlocutor.imagem.url}`} alt={dialog.dialogo_interlocutor.nome} />
                  <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <div
                  className={`flex flex-col text-sm max-w-xl ${index % 2 ? 'bg-backgroundSecondary' : 'bg-background'} border-2 p-2 rounded-lg shadow-lg`}
                >
                    <div className="grid grid-cols-1 divide-y space-y-2">
                      <div>{dialog.fraseEn}</div>
                      <div className={`py-1 transition-all ${!showTraducao ? "hidden" : ""}`}>
                        <small>{dialog.frasePt}</small>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          ) : null
        })}
      </div>

    </div>
  );
};

export default TaskDialog;
