/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Videos({ dataVideos }) {
  const { userId, videoId } = useParams()
  return (
    <>
      <div className='flex flex-wrap'>
        {dataVideos &&
          dataVideos.map((items) => (
            <Link to={`/users/${userId}/${items.uuid}`}>
              <div className='mb-[24px] h-72 w-[190px]  cursor-pointer'>
                <div className=' rounded'>
                  <div className=''>
                    <div>
                      <img src='' alt='' />
                      <video controls src={items.file_url} className='h-full w-full'></video>
                    </div>
                    <p>các icon</p>
                  </div>
                  <p>Tiêu đề</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}
