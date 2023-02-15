import React, { useCallback, useState } from 'react'
import { OffVolume, PauseVideo, PlayVideo } from '../../../Icons/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'

export default function ButtonPlayVideo({ videoRef }) {
  const { isPlaying, setIsPlaying } = useContext(AppContext)

  const playVideo = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying((currentPlayStatus) => !currentPlayStatus)
  }
  return (
    <>
      <button onClick={playVideo}>
        {
          <FontAwesomeIcon
            style={{ width: '20px', height: '20px', color: '#fff' }}
            icon={isPlaying ? faPause : faPlay}
          />
        }
      </button>
    </>
  )
}
