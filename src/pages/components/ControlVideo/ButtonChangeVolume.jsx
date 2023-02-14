import React, { useState } from 'react'

export default function ButtonChangeVolume({ videoRef }) {
  const [volume, setVolume] = useState(100)
  const handleChangeVolume = (e) => {
    setVolume(e.target.value)
    videoRef.current.volume = e.target.value / 100
  }
  return (
    <>
      <div className='relative h-[25px] w-[80px] rounded-[15px] bg-[#d7d6d635]'>
        <input
          type='range'
          className='rangeVolume absolute top-[50%] left-[12px] z-10 translate-y-[-50%] text-[white]'
          value={volume}
          onChange={handleChangeVolume}
          min='0'
          max='100'
        />
      </div>
    </>
  )
}
