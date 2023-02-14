import React, { useState } from 'react'
import { OffVolume, Volume } from '../../../Icons/Icons'

export default function ButtonVolume({ videoRef }) {
  const [isMuted, setMuted] = useState(false)
  const playVideo = () => {
    if (isMuted) {
      videoRef.current.muted = true
    } else {
      videoRef.current.muted = false
    }
    setMuted((currentMutedStatus) => !currentMutedStatus)
  }
  return (
    <div>
      <button onClick={playVideo}>{isMuted ? Volume() : OffVolume()}</button>
    </div>
  )
}
