import React, { useEffect, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import { ImgBasic } from '../../../../assets/img'
import VideosItems from '../Component/VideosItems'
import VideosList from '../Component/VideosList'

export default function HomeMain() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)
  const handleLoadMoreData = () => {
    setNumberLoad((prev) => (prev += 1))
    Videos.getVideosHomePage('for-you', numberLoad + 1)
      .then((res) => {
        console.log(res, 17)
        setDataRender((prev) => [...prev, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    console.log('useEffectHome')
    Videos.getVideosHomePage('for-you', 1)
      .then((res) => {
        console.log(res, 17)
        setDataRender(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <VideosList dataRender={dataRender} />
      <button onClick={handleLoadMoreData}>loadmore</button>
    </>
  )
}

// [calc(450px+((100vw-768px)/1152)*100)]
