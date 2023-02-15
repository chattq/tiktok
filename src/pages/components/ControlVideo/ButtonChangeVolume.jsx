import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/app.context'

export default function ButtonChangeVolume({ videoRef, style }) {
  const [volume, setVolume] = useState(100)
  const { setNumberMuted, numberRange, setNumberRange } = useContext(AppContext)
  const handleChangeVolume = (e) => {
    setVolume(e.target.value)
    videoRef.current.volume = e.target.value / 100
    setNumberMuted(e.target.value)
  }

  return (
    <>
      <div className={style}>
        <input
          type='range'
          className='rangeVolume absolute top-[50%] left-[12px] z-10 translate-y-[-50%] text-[white]'
          value={volume}
          onChange={handleChangeVolume}
          min='0'
          max={numberRange}
        />
        <div className='relative h-[25px] w-[80px] rounded-[15px] bg-[#d7d6d635]'></div>
      </div>
    </>
  )
}
