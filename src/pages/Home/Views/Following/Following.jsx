import React, { useEffect, useState } from 'react'
import { Videos } from '../../../../apis/Video'
import VideosItems from '../Component/VideosItems'
import VideosList from '../Component/VideosList'
import VideosListNotLogin from '../Component/VideosListNotLogin'

export default function Following() {
  const [dataRender, setDataRender] = useState([])
  const [numberLoad, setNumberLoad] = useState(1)
  const token = JSON.parse(localStorage.getItem('token'))
  const previousPath = window.location.pathname
  const isLogin = token ? true : false

  const handleScroll = () => {
    console.log(window.innerHeight + window.scrollY, '= ', document.body.offsetHeight)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setNumberLoad((prev) => (prev += 1))
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    if (isLogin) {
      Videos.getVideosFollowing('following', numberLoad, token)
        .then((res) => {
          setDataRender((prev) => [...prev, ...res.data.data])
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      Videos.getVideosForyou('for-you', 1)
        .then((res) => {
          setDataRender(res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [numberLoad])
  return (
    <div className={isLogin ? '' : 'flex w-[700px] flex-wrap gap-5'}>
      {isLogin ? (
        <VideosList dataRender={dataRender} previousPath={previousPath} isLogin={isLogin} />
      ) : (
        <VideosListNotLogin dataRender={dataRender} previousPath={previousPath} />
      )}
    </div>
  )
}
