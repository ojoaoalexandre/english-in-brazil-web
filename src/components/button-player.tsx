'use client'

import { PauseIcon, PlayIcon } from "lucide-react"
import { useAudioPlayer } from "react-use-audio-player"

export const ButtonPlayer = ({ path }: { path: string }) => {
  const { isPlaying, player } = useAudioPlayer(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    autoplay: false
  })

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <div className="flex items-center">
      <div
        className="p-2 rounded-full cursor-pointer bg-theme-red-500 m-2"
        onClick={handlePlayPause}
      >
        {isPlaying ? <PauseIcon className="w-5 h-5 text-white" /> : <PlayIcon className="w-5 h-5 text-white" />}
      </div>
    </div>
  )
}
