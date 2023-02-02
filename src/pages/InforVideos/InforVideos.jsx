import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Videos } from '../../apis/Video'

import {
  Comment,
  Embedded,
  GooGleIcon,
  Heart,
  IconAt,
  IconFace,
  InstagramIcon,
  LineIcon,
  Music,
  PaperPlane,
  RedHeart,
  share,
  TitterIcon
} from '../../Icons/Icons'
import ButtonFollow from '../components/buttonFollow/ButtonFollow'
import CommentVideo from '../components/commentVideo/CommentVideo'
import LinkVideo from '../components/linkVideo/LinkVideo'
import UserItem from '../Home/components/UserItem/UserItem'

export default function InforVideos() {
  const { userId, videoId } = useParams()
  console.log(videoId)
  const { data: videoData } = useQuery({
    queryKey: ['/api/users/@', videoId],
    queryFn: () => Videos.getVideos(videoId)
  })
  console.log(videoData)
  const videoRef = useRef()
  const checkVideo = videoRef.current?.videoHeight > videoRef.current?.videoWidth
  const video = videoData?.data.data
  const user = video?.user
  const idVideo = video?.id

  return (
    <div className='webkit-scroll-hide flex'>
      <div
        className={`webkit-scroll-hide relative flex h-[100vh] max-w-full flex-[1_0_600px] justify-center bg-cover`}
        style={{ backgroundImage: `url(${video?.thumb_url})` }}
      >
        <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-gray-500 opacity-95'></div>
        <div className={`z-10 max-h-full max-w-full self-center ${checkVideo ? 'h-full' : 'w-full'}`}>
          <video
            ref={videoRef}
            controls
            muted
            src={`${video?.file_url}`}
            className={`max-h-full max-w-full ${checkVideo ? 'h-full' : 'w-full'}`}
          ></video>
        </div>
      </div>
      <div className='webkit-scroll-hide flex h-[100vh] w-[554px] flex-col pt-8'>
        {/* <div className='pt-8'> */}
        <div className='mb-[15px] flex flex-[0_0_82px] justify-between px-8 pt-[22px]'>
          <UserItem data={user} />
          <ButtonFollow />
        </div>
        <div className='flex flex-shrink-0 flex-col px-8'>
          <div>{video?.description}</div>
          <Link className='mt-[10px] mb-[16px] flex font-[500] hover:underline'>
            <span className='mr-1'>
              <Heart></Heart>
            </span>
            {video?.music}
          </Link>
          <div className='py-4'>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='flex items-center'>
                  <span className='mr-1 flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#1618230f]'>
                    <Heart />
                  </span>
                  <strong>{video?.likes_count}</strong>
                </div>
                <div className='flex items-center'>
                  <span className='mr-1 ml-4 flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#1618230f]'>
                    <Comment />
                  </span>
                  <strong>{video?.comments_count}</strong>
                </div>
              </div>
              <div className='flex'>
                <span>
                  <Embedded />
                </span>
                <span>
                  <PaperPlane />
                </span>
                <span>
                  <TitterIcon />
                </span>
                <span>
                  <LineIcon />
                </span>
                <span>
                  <InstagramIcon />
                </span>
                <span>{share()}</span>
              </div>
            </div>
            <div className='mt-4'>
              <LinkVideo data={window.location.href} />
            </div>
          </div>
        </div>
        <div className='webkit-scroll-hide relative w-[100%] flex-grow overflow-y-auto overflow-x-hidden border border-t-[#16182333] border-b-[#16182333] bg-[#f8f8f8] py-6 px-8'>
          <CommentVideo idVideo={idVideo} />
        </div>
        <div className='mx-[30px] flex-[0_0_auto] bg-[#ffffff] py-[21px]'>
          <div className='flex items-end '>
            <div className='flex-[1_1_auto]'>
              <div className='relative flex flex-row items-end rounded-lg border-[1px] border-solid border-transparent bg-[#1618230f] px-[9px]'>
                <div className='m-[10px_8px_10px_0] h-auto flex-[1_1_auto] '>
                  <div className='max-h-[68px] min-h-[17px] overflow-y-auto break-all text-[14px] leading-[17px] text-[#161823]'>
                    <input
                      type='text'
                      placeholder='Thêm bình luận'
                      className='w-[100%] bg-transparent caret-red-600 outline-none'
                    />
                  </div>
                </div>
                <div className='m-[3px] flex h-8 w-8 flex-[0_0_32px] cursor-pointer items-center justify-center rounded-lg bg-transparent p-[5px] hover:bg-[#0000001f]'>
                  <IconAt />
                </div>
                <div className='m-[3px] flex h-8 w-8 flex-[0_0_32px] cursor-pointer items-center justify-center rounded-lg bg-transparent p-[5px] hover:bg-[#0000001f]'>
                  <IconFace />
                </div>
              </div>
            </div>
            <div className='text mr-1 flex-[0_0_48px] rounded-lg px-[9px] text-right text-[14px]  font-medium leading-[39px] text-[#16182357]'>
              Đăng
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}
