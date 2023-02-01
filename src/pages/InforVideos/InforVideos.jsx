import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '../../apis/Video'

export default function InforVideos() {
  const { userId, videoId } = useParams()
  console.log(videoId)
  const { data: videoData } = useQuery({
    queryKey: ['/api/users/@', videoId],
    queryFn: () => Videos.getVideos(videoId)
  })
  const video = videoData?.data.data
  return (
    <>
      <div>
        <video controls src={`${video?.file_url}`}></video>
      </div>
    </>
  )
}
