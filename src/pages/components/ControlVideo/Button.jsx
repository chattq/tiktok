import React, { useEffect, useState } from 'react'
import { OffVolume, Volume } from '../../../Icons/Icons'

export default function Button({ videoRef }) {
  const [volume, setVolume] = useState(0)
  const [checkVolume, setCheckVolume] = useState(null)
  useEffect(() => {
    if (videoRef) {
      videoRef.current.volume = volume / 100
    }
  }, [volume])
  const [isMuted, setMuted] = useState(false)
  const playVideo = () => {
    if (isMuted) {
      videoRef.current.muted = true
      setVolume(0)
    } else {
      videoRef.current.muted = false
      setVolume(100)
    }
    setMuted((currentMutedStatus) => !currentMutedStatus)
  }
  const handleChange = (e) => {
    if (e.target.value) {
      videoRef.current.muted = false
      setVolume(e.target.value)
    }
    setVolume(e.target.value)
  }
  return (
    <>
      <div>
        <span onClick={playVideo}>
          {volume === '0' ? (
            <OffVolume style={{ width: '24px', height: '24px' }} />
          ) : isMuted ? (
            <Volume style={{ width: '24px', height: '24px' }} />
          ) : (
            <OffVolume style={{ width: '24px', height: '24px' }} />
          )}
        </span>
        <div className='controlVolume hidden'>
          <div className='absolute bottom-[36px] right-[93px] h-[64px] w-[26px] rounded-[14px] bg-[#918c8c6a]' />
          <input
            type='range'
            className='rangeVolume absolute right-[80.5px] z-10 w-[50px] translate-y-[-69px] rotate-[-90deg]'
            step={1}
            min={0}
            max={100}
            value={volume}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}
