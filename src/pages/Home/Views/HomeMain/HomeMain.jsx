import React, { useEffect, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import { ImgBasic } from '../../../../assets/img'
import VideosItems from '../Component/VideosItems'

export default function HomeMain() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)

  const handleLoadMoreData = () => {
    setNumberLoad((prev) => (prev += 1))
  }
  useEffect(() => {
    Videos.getVideosHomePage('for-you', numberLoad)
      .then((res) => {
        console.log(res)
        setDataRender((prev) => [...prev, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [numberLoad])

  return (
    <>
      <VideosItems dataRender={dataRender} />
      <button onClick={handleLoadMoreData}>loadmore</button>
    </>
  )
}

// [calc(450px+((100vw-768px)/1152)*100)]
