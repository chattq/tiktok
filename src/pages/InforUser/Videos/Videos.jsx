/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Play } from '../../../Icons/Icons'

export default function Videos({ dataVideos, previousPath, totalData }) {
  const { userId, videoId } = useParams()
  const [isHover, setIsHover] = useState(false)
  const videoRef = useRef(null)
  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }
  const ratio = dataVideos.meta.video.resolution_x / dataVideos.meta.video.resolution_y

  return (
    <>
      <Link
        to={`/users/${userId}/${dataVideos.uuid}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        state={{ totalData: totalData, previousPath: previousPath }}
      >
        <div className='relative w-full'>
          <div className=' '>
            <div className=' h-[250px] w-[190px] overflow-hidden rounded'>
              <div
                className={
                  ratio > 1 ? 'w-[290%] translate-x-[-34%]' : ratio === 1 ? 'w-[133%] overflow-hidden' : 'scale-[1]'
                }
              >
                <img src={dataVideos.thumb_url} alt='' className='h-full w-full rounded object-cover' />
                {isHover && (
                  <div
                    className={
                      ratio > 1
                        ? 'absolute top-0 z-50 h-[250px] w-[99%] translate-x-[3%] overflow-hidden'
                        : ratio === 1
                        ? 'absolute top-0 z-50 h-[250px] w-[190px] overflow-hidden '
                        : 'absolute top-0 z-50 h-[250px] w-[190px] overflow-hidden'
                    }
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                      className='h-full w-full overflow-hidden rounded object-cover'
                    >
                      <source src={dataVideos.file_url} type='video/mp4' />
                    </video>
                  </div>
                )}
              </div>
              <p className='absolute bottom-[35px] left-[15px] z-[100] text-orange-600'>{Play()}</p>
            </div>
            <p className='mt-1 w-[190px] truncate'>{dataVideos.description}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
