import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/app.context'
import { OffVolume, Volume } from '../../../Icons/Icons'

export default function ButtonVolume({ videoRef }) {
  const { numberMuted, setNumberRange } = useContext(AppContext)
  const [isMuted, setMuted] = useState(false)
  const playVideo = () => {
    if (isMuted) {
      videoRef.current.muted = true
      setNumberRange(0)
    } else {
      videoRef.current.muted = false
      setNumberRange(100)
    }
    setMuted((currentMutedStatus) => !currentMutedStatus)
  }
  return <button onClick={playVideo}>{numberMuted === '0' ? OffVolume() : isMuted ? Volume() : OffVolume()}</button>
}
