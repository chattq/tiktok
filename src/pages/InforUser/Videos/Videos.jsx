/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

export default function Videos({ dataVideos }) {
  return (
    <>
      <div className='flex flex-wrap'>
        {dataVideos &&
          dataVideos.map((items) => (
            <div className='mb-[24px] h-72 w-[190px]  cursor-pointer'>
              <div className=' rounded'>
                <div className=''>
                  <div>
                    <img src='' alt='' />
                    <video src={items.file_url} className='h-full w-full'></video>
                  </div>
                  <p>các icon</p>
                </div>
                <p>Tiêu đề</p>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
