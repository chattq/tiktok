import React, { useEffect, useRef, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import VideosList from '../Component/VideosList'

export default function HomeMain() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)

  const previousPath = window.location.pathname
  const handleLoadMoreData = () => {
    setNumberLoad((prev) => (prev += 1))
    Videos.getVideosForyou('for-you', numberLoad + 1)
      .then((res) => {
        console.log(res, 17)
        setDataRender((prev) => [...prev, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      handleLoadMoreData()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    Videos.getVideosForyou('for-you', 1)
      .then((res) => {
        console.log(res, 17)
        setDataRender(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div>
        <VideosList dataRender={dataRender} previousPath={previousPath} />
      </div>
    </>
  )
}

// [calc(450px+((100vw-768px)/1152)*100)]
