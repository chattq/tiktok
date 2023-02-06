import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from '@tanstack/react-query'
import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { CommentAPI } from '../../apis/CommentAPI'
import { LikeAPI } from '../../apis/Like'

import { Videos } from '../../apis/Video'

import {
  CloseIcon,
  CommentIcon,
  Email,
  Embedded,
  FacebookIcon,
  FlagReport,
  GooGleIcon,
  Heart,
  IconAt,
  IconFace,
  InstagramIcon,
  LineIcon,
  LinkedIn,
  Music,
  ToOtherVideo,
  PaperPlane,
  Pinterest,
  Reddit,
  RedHeart,
  share,
  Telegram,
  TiktokLogo,
  TitterIcon,
  WhatsApp,
  LikedHeart
} from '../../Icons/Icons'
import ButtonFollow from '../components/buttonFollow/ButtonFollow'
import CommentVideo from '../components/commentVideo/CommentVideo'
import ItemShare from '../components/itemShare/ItemShare'
import ItemSocial from '../components/itemSocial/ItemSocial'
import LinkVideo from '../components/linkVideo/LinkVideo'
import UserItemDetailVideo from '../components/userItemDetailVideo/UserItemDetailVideo'
import UserItem from '../Home/components/UserItem/UserItem'

export default function InforVideos() {
  const { userId, videoId } = useParams()
  console.log(videoId)
  const { data: videoData, isSuccess } = useQuery({
    queryKey: ['/api/users/@', videoId],
    queryFn: () => Videos.getVideos(videoId)
  })
  console.log(videoData)
  const videoRef = useRef()
  const inputCommentRef = useRef()
  let isPlaying = false
  // const video = videoData?.data.data
  const [videoRender, setVideoRender] = useState(undefined)
  const [user, setUser] = useState(undefined)
  const [idVideo, setIdVideo] = useState(undefined)
  const uuidVideo = videoRender?.uuid
  const heightVideo = videoRender?.meta.video.resolution_y
  const widthVideo = videoRender?.meta.video.resolution_x
  const checkVideo = heightVideo > widthVideo
  const [isLiked, setIsLiked] = useState(undefined)
  useEffect(() => {
    console.log('re render')
    if (isSuccess) {
      setUser((old) => videoData.data.data.user)
      setIsLiked((old) => videoData.data.data.is_liked)
      setVideoRender((old) => videoData.data.data)
      setIdVideo((old) => {
        const IdVideo = videoData.data.data.id
        return { IdVideo: IdVideo }
      })
    }
  }, [isSuccess])

  function handlePlay() {
    console.log(isPlaying)
    if (!isPlaying) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    isPlaying = !isPlaying
  }

  function handleComment() {
    const newComment = inputCommentRef.current.value
    if (newComment.trim().length) {
      CommentAPI.createANewComment(uuidVideo, newComment).then(() => {
        toast.success(
          <>
            <FontAwesomeIcon icon={faTiktok} />
            <span className='ml-[5px]'>Bình luận thành công</span>
          </>,
          {
            position: 'top-right',
            autoClose: 2000,
            theme: 'light'
          }
        )
        setIdVideo((old) => {
          const IdVideo = JSON.parse(JSON.stringify(old))
          return IdVideo
        })
      })
    } else {
      toast.warning(
        <>
          <FontAwesomeIcon icon={faTiktok} />
          <span className='ml-[5px]'>Không thể đăng comment trống</span>
        </>,
        {
          position: 'top-right',
          autoClose: 2000,
          theme: 'light'
        }
      )
    }
  }

  async function handleLikeVideo() {
    if (isLiked) {
      const newData = await LikeAPI.UnLikePost(idVideo.IdVideo)
      console.log(newData)
      setVideoRender((old) => newData.data.data)
      setIsLiked((old) => !old)
    } else {
      const newData = await LikeAPI.LikePost(idVideo.IdVideo)
      console.log(newData)
      setVideoRender((old) => newData.data.data)
      setIsLiked((old) => !old)
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='webkit-scroll-hide flex'>
        <div
          className={`webkit-scroll-hide relative flex h-[100vh] max-w-full flex-[1_0_600px] justify-center bg-cover`}
          style={{ backgroundImage: `url(${videoRender?.thumb_url})` }}
        >
          {/* <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-gray-500 opacity-90'></div> */}
          <div
            className={`h-full w-full self-center bg-[#6b7280e6] ${
              checkVideo ? 'h-full' : 'w-full'
            } flex justify-center`}
            // onClick={handlePlay}
          >
            <video
              ref={videoRef}
              controls
              loop
              muted
              src={`${videoRender?.file_url}`}
              className={`max-h-full max-w-full ${checkVideo ? 'h-full' : 'w-full'}`}
            ></video>
          </div>
          <button
            className='absolute top-5 left-5 z-10 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#54545480] hover:bg-[#25252599] hover:opacity-70'
            onClick={() => {}}
          >
            <CloseIcon />
          </button>
          <div className='absolute left-[84px] top-5 z-10 h-10 w-10 overflow-hidden rounded-[50%] '>
            <TiktokLogo />
          </div>
          <div className='absolute top-5 right-1 z-10 flex rounded-3xl bg-[#54545480] p-[10px_16px] text-[14px] font-medium  leading-[20px] text-white shadow-[rgb(0,0,0,12%)_0px_4px_16px] hover:bg-[#25252599] hover:opacity-70'>
            <FlagReport />
            <span className='ml-3'>Báo cáo</span>
          </div>
          <button className='absolute right-5 top-[calc(50%-48px)] z-10 flex h-10 w-10 -rotate-90 cursor-pointer items-center justify-center rounded-[50%] border-none bg-[#54545480] outline-none hover:bg-[#25252599] hover:opacity-70'>
            <ToOtherVideo />
          </button>
          <button className='absolute top-[calc(50%+8px)] right-5 z-10 flex h-10 w-10 rotate-90 cursor-pointer items-center justify-center rounded-[50%] border-none bg-[#54545480] outline-none hover:bg-[#25252599] hover:opacity-70'>
            <ToOtherVideo />
          </button>
        </div>
        <div className='webkit-scroll-hide flex h-[100vh] w-[554px] flex-col pt-8'>
          <div className='mb-[15px] flex flex-[0_0_82px] justify-between px-8 pt-[22px]'>
            {user ? (
              <Link to={`/users/@${user?.nickname}`}>
                <UserItemDetailVideo data={user} timePublish={videoRender?.created_at} />
              </Link>
            ) : null}
            <ButtonFollow />
          </div>
          <div className='flex flex-shrink-0 flex-col px-8'>
            <div>{videoRender?.description}</div>
            {videoRender?.music ? (
              <Link className='mt-[10px] mb-[16px] flex font-[500] hover:underline'>
                <span className='mr-1'>
                  <Heart></Heart>
                  {/* <MusicSvg /> */}
                </span>
                {videoRender?.music}
              </Link>
            ) : null}
            <div className='py-4'>
              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='flex items-center'>
                    <span
                      className='mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] bg-[#1618230f]'
                      onClick={handleLikeVideo}
                    >
                      {isLiked ? <LikedHeart /> : <Heart />}
                    </span>
                    <strong>{videoRender?.likes_count}</strong>
                  </div>
                  <div className='flex items-center'>
                    <span className='mr-1 ml-4 flex h-8 w-8 items-center justify-center rounded-[50%] bg-[#1618230f]'>
                      <CommentIcon />
                    </span>
                    <strong>{videoRender?.comments_count}</strong>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-1 text-[24px]'>
                  <ItemSocial icon={<Embedded />} meassage={'Nhúng'} />
                  <ItemSocial icon={<PaperPlane />} meassage={'Gửi đến bạn bè'} />
                  <ItemSocial icon={<TitterIcon />} meassage={'Chia sẻ với Twitter'} />
                  <ItemSocial icon={<FacebookIcon />} meassage={'Chia sẻ với Facebook'} />
                  <ItemSocial icon={<WhatsApp />} meassage={'Chia sẻ với WhatsApp'} />
                  <Tippy
                    interactive
                    placement='bottom'
                    offset={[0, 5]}
                    delay={[100, 0]}
                    render={(attr) => (
                      <div className='w-[280px] overflow-auto rounded-lg bg-white p-[8px_0] text-[16px] font-medium leading-[22px] shadow-[rgb(0,0,0,12%)_0px_4px_16px]'>
                        <ItemShare icon={<LinkedIn />} nameIcon={'LinkedIn'} />
                        <ItemShare icon={<Reddit />} nameIcon={'Reddit'} />
                        <ItemShare icon={<Telegram />} nameIcon={'Telegram'} />
                        <ItemShare icon={<Email />} nameIcon={'Email'} />
                        <ItemShare icon={<LineIcon />} nameIcon={'LineIcon'} />
                        <ItemShare icon={<Pinterest />} nameIcon={'Pinterest'} />
                      </div>
                    )}
                  >
                    <span className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] text-center hover:bg-[#1618230f]'>
                      {share()}
                    </span>
                  </Tippy>
                </div>
              </div>
              <div className='mt-4'>
                <LinkVideo data={window.location.href} />
              </div>
            </div>
          </div>
          <div className='webkit-scroll-hide relative w-[100%] flex-grow overflow-y-auto overflow-x-hidden border border-t-[#16182333] border-b-[#16182333] bg-[#f8f8f8] py-6 px-8'>
            {idVideo ? <CommentVideo idVideo={idVideo} /> : null}
          </div>
          <div className='mx-[30px] flex-[0_0_auto] bg-[#ffffff] py-[21px]'>
            <div className='flex items-end '>
              <div className='flex-[1_1_auto]'>
                <div className='relative flex flex-row items-end rounded-lg border-[1px] border-solid border-transparent bg-[#1618230f] px-[9px]'>
                  <div className='m-[10px_8px_10px_0] h-auto flex-[1_1_auto] '>
                    <div className='max-h-[68px] min-h-[17px] overflow-y-auto break-all text-[14px] leading-[17px] text-[#161823]'>
                      <input
                        ref={inputCommentRef}
                        type='text'
                        placeholder='Thêm bình luận'
                        className='w-[100%] bg-transparent caret-red-600 outline-none'
                      />
                    </div>
                  </div>
                  <div className='m-[3px] flex h-8 w-8 flex-[0_0_32px] cursor-pointer items-center justify-center rounded-lg bg-transparent p-[5px] text-[24px] hover:bg-[#0000001f]'>
                    <IconAt />
                  </div>
                  <div className='m-[3px] flex h-8 w-8 flex-[0_0_32px] cursor-pointer items-center justify-center rounded-lg bg-transparent p-[5px] text-[24px] hover:bg-[#0000001f]'>
                    <IconFace />
                  </div>
                </div>
              </div>
              <div
                className='text mr-1 flex-[0_0_48px] rounded-lg px-[9px] text-right text-[14px]  font-medium leading-[39px] text-[#16182357]'
                onClick={handleComment}
              >
                Đăng
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
