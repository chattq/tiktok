import React, { useCallback, useState } from 'react'
import { OffVolume, PauseVideo, PlayVideo } from '../../../Icons/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function ButtonPlayVideo({ videoRef }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying((currentPlayStatus) => !currentPlayStatus)
  }
  return (
    <div className='h-[40px] w-[40px] bg-transparent'>
      <button onClick={playVideo}>
        {
          <FontAwesomeIcon
            style={{ width: '20px', height: '20px', color: '#fff' }}
            icon={isPlaying ? faPause : faPlay}
          />
        }
      </button>
    </div>
  )
}