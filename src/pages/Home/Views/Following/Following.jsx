import React, { useEffect, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import VideosItems from '../Component/VideosItems'
import VideosList from '../Component/VideosList'

export default function Following() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)
  const token = JSON.parse(localStorage.getItem('token'))
  const previousPath = window.location.pathname

  const handleLoadMoreData = () => {
    setNumberLoad((pre) => pre + 1)
    Videos.getVideosFollowing('following', numberLoad + 1, token)
      .then((res) => {
        console.log(res)
        setDataRender((prev) => [...prev, ...res.data.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    Videos.getVideosFollowing('following', 1, token)
      .then((res) => {
        console.log(res)
        setDataRender(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='wrapper'>
      <VideosList dataRender={dataRender} previousPath={previousPath} />
      <button onClick={handleLoadMoreData}>loadmore</button>
    </div>
  )
}
