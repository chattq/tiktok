import React, { useEffect, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import VideosItems from '../Component/VideosItems'
import VideosList from '../Component/VideosList'

export default function Following() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)
  const token = JSON.parse(localStorage.getItem('token'))

  const handleLoadMoreData = () => {
    setNumberLoad((pre) => (pre += 1))
  }
  useEffect(() => {
    Videos.getVideosHomePage('following', numberLoad, token)
      .then((res) => {
        console.log(res)
        setDataRender((pre) => [...pre, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [numberLoad])
  return (
    <>
      <VideosList dataRender={dataRender} />
      <button onClick={handleLoadMoreData}>loadmore</button>
    </>
  )
}
