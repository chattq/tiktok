import React, { useEffect, useRef, useState } from 'react'
import { ImgBasic } from '../../../../assets/img'

function VideosItems({ dataRender }) {
  const ratio = dataRender.video?.resolution_x > dataRender.video?.resolution_y
  const videoRef = useRef()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleScroll = (e) => {
    const allVideos = document.querySelectorAll('.video-display')
    const revealSection = function (entries, observer) {
      const [entry] = entries
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
      observer.unobserve(entry.target)
    }
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.65
    })
    allVideos.forEach((item, index) => {
      sectionObserver.observe(item)
    })
  }

  return (
    <div>
      {dataRender.map((item, index) => {
        return (
          <div className='w-[710px] border-b pt-2' key={index}>
            <div className='flex'>
              <div>
                <div className='mt-1 h-[56px] w-[56px] overflow-hidden rounded-full'>
                  <img src={ImgBasic(item.user?.avatar)} alt='' className='h-full w-full object-cover' />
                </div>
              </div>
              <div className='ml-3 p-1'>
                <div className='flex items-center'>
                  <div className='text-[18px] font-black'>{item.user?.nickname}</div>
                  <div className='ml-2 text-[14px] font-extralight tracking-tighter'>
                    {item.user?.last_name}
                    {item.user?.first_name}
                  </div>
                  <div className='mt-3 h-4 translate-x-[285px]'>
                    <div className='cursor-pointer rounded-md border border-[rgba(254,44,85,1)] px-5 py-1 hover:bg-[#FFF2F5]'>
                      <button className='font-medium text-[rgba(254,44,85,1)]' type='button'>
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className='w-[430px] text-base font-light leading-6 tracking-tighter line-clamp-3'>
                  {item?.description} 🎧
                </div>
                {item.music ? <div className='mt-1 font-medium'>Nhạc Nền - {item?.music} 🎧🎧🎧</div> : null}
                <div className='mt-3 mb-3 flex items-start overflow-hidden '>
                  <div
                    className={`div-video mr-2 ${
                      ratio ? 'w-[calc(450px+((100vw-768px)/1152)*100)]' : 'h-[calc(450px+((100vw-768px)/1152)*100)]'
                    } `}
                  >
                    <video
                      className='video-display h-full w-full rounded-lg'
                      controls
                      muted
                      src={item?.file_url}
                      ref={videoRef}
                    />
                  </div>
                  <div className=''>thả tym</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default VideosItems
