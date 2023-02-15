import React, { useEffect, useRef, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import VideosList from '../Component/VideosList'

export default function HomeMain() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)
  const previousPath = window.location.pathname

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      setNumberLoad((old) => (old += 1))
      console.log('load data')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    Videos.getVideosForyou('for-you', numberLoad)
      .then((res) => {
        setDataRender((prev) => [...prev, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [numberLoad])

  return (
    <>
      <div>
        <VideosList dataRender={dataRender} previousPath={previousPath} />
      </div>
    </>
  )
}

// [calc(450px+((100vw-768px)/1152)*100)]
