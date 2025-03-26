'use client'

import { GrupoPerguntaSpeakUpSchema } from '@/types/task-schema'
import MicRecorder from 'mic-recorder-to-mp3'
import { useCallback, useEffect, useState } from 'react'
import { useAudioPlayer, useAudioPlayerContext, useAudioPosition } from 'react-use-audio-player'

const recorder = new MicRecorder({
  bitRate: 128
})

const svgPlay = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="30px"
    height="30px"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
)

const svgPause = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 275.725 275.725"
  >
    <path
      fill="#e94653"
      d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862    C275.725,61.726,214.001,0,137.862,0z M114.26,188.856c0,11.967-7.925,21.655-17.704,21.655c-9.776,0-17.704-9.688-17.704-21.655    V100.65c0-11.957,7.927-21.655,17.704-21.655c9.779,0,17.704,9.698,17.704,21.655V188.856z M196.877,188.856    c0,11.967-7.933,21.655-17.704,21.655c-9.771,0-17.698-9.688-17.698-21.655V100.65c0-11.957,7.928-21.655,17.698-21.655    c9.776,0,17.704,9.698,17.704,21.655V188.856z"
    />
  </svg>
)

const svgTranslate = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 16 C 3 17.093063 3.9069372 18 5 18 L 7 18 L 12 18 L 12 22 L 8 22 L 8 19 L 7 18 L 6 19 L 6 22 L 8 24 L 12 24 L 12 25 C 12 26.105 12.895 27 14 27 L 25 27 C 26.105 27 27 26.105 27 25 L 27 14 C 27 12.895 26.105 12 25 12 L 18 12 L 18 5 C 18 3.9069372 17.093063 3 16 3 L 5 3 z M 5 5 L 16 5 L 16 12 L 14 12 C 12.895 12 12 12.895 12 14 L 12 16 L 5 16 L 5 5 z M 12 14 L 12 13 C 11.755293 13 11.521351 12.969766 11.291016 12.933594 C 11.314874 12.916254 11.341774 12.902596 11.365234 12.884766 C 12.436415 12.070668 13 10.75101 13 9 L 14 9 L 14 8 L 11 8 L 11 6.5 L 10 6.5 L 10 8 L 7 8 L 7 9 L 12 9 C 12 10.54899 11.563585 11.478941 10.759766 12.089844 C 10.53998 12.25688 10.278088 12.396887 9.9902344 12.517578 C 9.667359 12.357894 9.3640918 12.177141 9.109375 11.962891 C 8.3922951 11.359732 8 10.591752 8 10 L 7 10 C 7 10.997248 7.5736736 11.978924 8.4648438 12.728516 C 8.5238513 12.778149 8.5962189 12.817683 8.6582031 12.865234 C 8.1567671 12.945359 7.6170728 13 7 13 L 7 14 C 8.1153185 14 9.1081165 13.884672 9.9570312 13.605469 C 10.57585 13.850013 11.261979 14 12 14 z M 18.402344 15.976562 L 20.59375 15.976562 L 22.962891 23.023438 L 21.009766 23.023438 L 20.570312 21.474609 L 18.269531 21.474609 L 17.816406 23.023438 L 16.039062 23.023438 L 18.402344 15.976562 z M 19.382812 17.564453 L 18.611328 20.185547 L 20.232422 20.185547 L 19.476562 17.564453 L 19.382812 17.564453 z" />
  </svg>
)

const svgMicrophone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fffff"
    viewBox="0 0 20 20"
    width="30px"
    height="30px"
  >
    <path
      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
      clipRule="evenodd"
    />
  </svg>
)

export const TaskSpeakUp = ({ content }: { content: GrupoPerguntaSpeakUpSchema[] }) => {
  const { titulo, prefixo, sufixo, conteudo = [] } = dadoConteudo

  const [audioPlay, setAudioPlay] = useState('')
  const [audioPlayGrup, setAudioPlayGrup] = useState([])
  const [positionGrupo, setPositionGrupo] = useState(-1)
  const { percentComplete, duration, seek } = useAudioPosition({
    highRefreshRate: true
  })
  const [velocidadeAudio, setVelocidadeAudio] = useState(1)
  const [showTraducao, setShowTraducao] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const [listAudioGravados, setListAudioGravados] = useState([
    ...conteudo.map((item, i) => {
      return {
        i: i,
        audioPergunta: item.audio?.url,
        isRecording: false,
        audioResposta: ''
      }
    })
  ])

  useEffect(() => {
    setListAudioGravados([
      ...conteudo.map((item, i) => {
        return {
          i: i,
          audioPergunta: item.audio?.url,
          isRecording: false,
          audioResposta: ''
        }
      })
    ])
  }, [])

  const { togglePlayPause, ready, playing, load, pause, player } =
    useAudioPlayer({
      autoplay: false,
      format: 'mp3',
      onend: () => {
        console.log('acabou audio')
        setAudioPlay('')
      }
    })

  // useEffect(() => {
  //   goToPosition(0)
  //   // PlayAudioGroup([audio?.url])
  // }, [audio?.url])

  useEffect(() => {
    if (positionGrupo == -1) {
      return false
    }
    const file = audioPlayGrup[positionGrupo]
    if (!file) {
      return false
    }
    setAudioPlay(file)
    load({
      src: `${process.env.NEXT_PUBLIC_HOST_URL_DEV}${file}`,
      autoplay: true,
      onend: () => {
        const nextPosicao = positionGrupo + 1
        // if (nextPosicao < audioPlayGrup.length) {
        //   setPositionGrupo(nextPosicao)
        // } else {
        //   setAudioPlayGrup([])
        //   setPositionGrupo(-1)
        // }
      }
    })
  }, [positionGrupo, audioPlayGrup])

  const PlayAudioGroup = grupoAudio => {
    if (grupoAudio[positionGrupo] == audioPlay) {
      togglePlayPause()
      return false
    }
    if (grupoAudio[positionGrupo] != audioPlayGrup[positionGrupo]) {
      setAudioPlayGrup([])
      setPositionGrupo(-1)
    }
    setAudioPlayGrup(grupoAudio)
    setPositionGrupo(0)
  }

  const goToPosition = useCallback(
    percentage => {
      seek(duration * (percentage / 100))
    },
    [duration, seek]
  )

  const audioGravar = idAudio => {
    let audios = []
    audios = listAudioGravados
    if (audios.length == 0) {
      audios.length = conteudo.length
    }
    audios[idAudio] = {
      ...audios[idAudio],
      isRecording: true,
      audioResposta: ''
    }

    console.log(audios)
    recorder
      .start()
      .then(() => {
        setListAudioGravados([...audios])
        setIsRecording(true)
      })
      .catch(e => {
        console.error(e)
      })
  }

  const audioStop = idAudio => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const audios = listAudioGravados
        const file = new File(buffer, `audio_${idAudio}.mp3`, {
          type: blob.type,
          lastModified: Date.now()
        })
        const blobURL = URL.createObjectURL(file)
        audios[idAudio] = {
          ...audios[idAudio],

          isRecording: false,
          audioResposta: blobURL,
          audioBlob: file,
          audioBuffer: buffer
        }
        setListAudioGravados([...audios])
        setIsRecording(false)
      })
      .catch(e => {
        console.error(e)
      })
  }
  const uploadAudio = async () => {
    const formData = new FormData()
    const boundary = String(Math.random()).slice(2)

    formData.append('type', 'audio')

    formData.append('audio-filename', 'arquivo')
    formData.append(
      'qtdeItem',
      listAudioGravados.filter(item => (item ? true : false)).length
    )
    listAudioGravados
      .filter(item => (item ? true : false))
      .map((file, i) => {
        formData.append(`audioPergunta_${file.i}`, file.audioPergunta)
        formData.append(`files`, file.audioBlob)
      })

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL_DEV}/api/aluno/speakup`,
      {
        method: 'POST',
        headers: {
          // Accept: 'multipart/form-data;',
          //Authorization: `Bearer ${user.token}`
        },
        body: formData
      }
    )
  }

  const uploadAudio_1 = () => {
    let offset = 0
    listAudioGravados.forEach(buffer => {
      for (
        let channelNumber = 0;
        channelNumber < buffer.audioBuffer.numberOfChannels;
        channelNumber++
      ) {
        output
          .getChannelData(channelNumber)
          .set(buffer.audioBuffer.getChannelData(channelNumber), offset)
      }

      offset += buffer.audioBuffer.length
    })

    return output
  }
  let interlocutorAtual = 0

  return (
      <>
        <div className="flex-1  flex flex-col h-screen">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex flex-1 items-center space-x-4 ">
              <button onClick={() => uploadAudio()}>ssss</button>
            </div>
            {/*   <div className="flex flex-1 flex-col leading-tight">
                <div className="mt-1 flex flex-1 items-center ">
                  <RangeStepInput className="w-full mr-5" max={100} value={percentComplete} min={0} step={1} onChange={(e) => goToPosition(e.target.value)} />
                </div>
                <span className="text-md text-gray-600">{parseFloat(duration * (percentComplete / 100)).toFixed(0)}s - {duration.toFixed(0)}s</span>
              </div>
            </div> */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setShowTraducao(!showTraducao)
                }}
                className={`inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none ${
                  showTraducao ? 'bg-gray-300' : ''
                }`}
              >
                {svgTranslate}
              </button>
            </div>
          </div>

          <span>teste</span>
          <div id="messages" className="flex flex-col space-y-4 p-3 ">
            {conteudo.map((frase, i) => {
              interlocutorAtual = i % 2
              const { audio } = frase
              return (
                <>
                  <div
                    className={`chat-message transition-all`}
                    key={`chat_id_${frase.id}`}
                  >
                    <div className={`flex items-end justify-start`}>
                      <div
                        className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start`}
                      >
                        <div
                          className={`px-4 py-2 rounded-lg inline-block rounded-bl-none bg-theme-blue text-white  `}
                        >
                          <div className="flex flex-row items-start">
                            <button className="flex flex-col divide-y  space-y-2 mr-3">
                              <button
                                onClick={() => PlayAudioGroup([audio?.url])}
                              >
                                {audioPlay == audio?.url && playing
                                  ? svgPause
                                  : svgPlay}
                              </button>
                            </button>
                            <div className="flex flex-col divide-y  space-y-2">
                              <div>
                                <span>{frase.frasePergunta}</span>
                              </div>
                              <div
                                className={`py-1 transition-all ${
                                  !showTraducao ? 'hidden' : ''
                                }`}
                              >
                                <small>{frase.frasePerguntaPt}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={`https://curso.englishinbrazil.com.br/api/avatarBuilder?&topType=ShortHairShortFlat&accessoriesType=Prescription02&clotheType=GraphicShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown&facialHairType=Blank&skinAvatar=Abobora&hairColor=Black`}
                        alt="My profile"
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>

                  <div
                    className={`chat-message transition-all`}
                    key={`chat_id_resposta_${frase.id}`}
                    data-fraseId={`chat_id_resposta_${frase.id}`}
                  >
                    <div className={`flex items-end justify-end`}>
                      <div
                        className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end`}
                      >
                        <div
                          className={`px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600  `}
                        >
                          <div className="flex flex-row items-start">
                            <div className="flex flex-col space-y-2">
                              <div>
                                <span>{frase.fraseResposta}</span>
                              </div>
                              <div className="flex flex-row">
                                <button
                                  onClick={() =>
                                    listAudioGravados[i]?.isRecording
                                      ? audioStop(i)
                                      : audioGravar(i)
                                  }
                                >
                                  {listAudioGravados[i]?.isRecording
                                    ? svgPause
                                    : svgMicrophone}
                                </button>
                                {listAudioGravados[i]?.audioResposta != '' && (
                                  <audio
                                    src={listAudioGravados[i]?.audioResposta}
                                    controls="controls"
                                  />
                                )}
                              </div>

                              {/* <button onClick={() => audioGravar(i)} className='flex flex-col divide-y  space-y-2'>
                                  start
                                </button>
                                <button onClick={() => audioStop(i)} className='flex flex-col divide-y  space-y-2'>
                                  parar
                                </button> */}
                              <div
                                className={`py-1 transition-all  divide-y  ${
                                  !showTraducao ? 'hidden' : ''
                                }`}
                              >
                                <small>{frase.fraseRespostaPt}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={`https://curso.englishinbrazil.com.br/api/avatarBuilder?&topType=ShortHairShortFlat&accessoriesType=Prescription02&clotheType=GraphicShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Brown&facialHairType=Blank&skinAvatar=Abobora&hairColor=Black`}
                        alt="My profile"
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </>
  )
}
