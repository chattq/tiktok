import React, { useEffect, useRef, useState } from 'react'
import ButtonFollow from '../../../components/buttonFollow/ButtonFollow'
import { FormatTextBold } from '../../../../assets/FormatTextBoild'
import { ImgBasic } from '../../../../assets/img'
import {
  Email,
  Embedded,
  FacebookIcon,
  LineIcon,
  LinkedIn,
  PaperPlane,
  Pinterest,
  Reddit,
  Telegram,
  TitterIcon,
  WhatsApp
} from '../../../../Icons/Icons'
import CommentComponent from '../../../components/commentComponent/CommentComponent'
import HeartComponent from '../../../components/heartComponent/HeartComponent'
import ItemShare from '../../../components/itemShare/ItemShare'
import ItemSocial from '../../../components/itemSocial/ItemSocial'
import ShareMoreComponent from '../../../components/shareMore/ShareMoreComponent'
import ButtonUnfollow from '../../../components/buttonUnfollow/ButtonUnfollow'
import { User } from '../../../../apis/UserAPI'

function VideosItems({ data }) {
  console.log('data', data)
  console.log(27, data.user.is_followed)
  const ratio = data?.meta.video.resolution_x > data?.meta.video.resolution_y
  const videoRef = useRef()
  const [isFollowed, setIsFollowed] = useState(data?.user.is_followed)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setIsFollowed(data?.user.is_followed)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [data])

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
      threshold: 0.6
    })
    allVideos.forEach((item, index) => {
      sectionObserver.observe(item)
    })
  }

  const handleFollow = () => {
    User.followUser(data?.user_id).then((res) => {
      console.log(61, res)
      setIsFollowed(res.data.data.is_followed)
    })
  }
  const handleUnFollow = () => {
    User.unFollowUser(data?.user_id).then((res) => {
      console.log(res)
      setIsFollowed(res.data.data.is_followed)
    })
  }
  console.log('fol', isFollowed)

  return (
    <div className='w-[710px] border-b pt-2'>
      <div className='flex'>
        <div>
          <div className='mt-1 h-[56px] w-[56px] overflow-hidden rounded-full'>
            <img src={ImgBasic(data?.user.avatar)} alt='' className='h-full w-full object-cover' />
          </div>
        </div>
        <div className='ml-3 p-1'>
          <div className='flex items-center'>
            <div className='text-[18px] font-black'>{data?.user.nickname}</div>
            <div className='ml-2 text-[14px] font-extralight tracking-tighter'>
              {data?.user.last_name}
              {data?.user.first_name}
            </div>
            <div className='mt-3 h-4 translate-x-[285px]'>
              <div className='cursor-pointer rounded-md border border-[rgba(254,44,85,1)] px-5 py-1 hover:bg-[#FFF2F5]'>
                {!isFollowed ? (
                  <button className='font-medium text-[rgba(254,44,85,1)]' type='button' onClick={handleFollow}>
                    Follow
                  </button>
                ) : (
                  <button className='font-medium text-[rgba(254,44,85,1)]' type='button' onClick={handleUnFollow}>
                    Following
                  </button>
                )}
                {/* {!data?.user.is_followed ? (
                  <ButtonFollow style={'font-medium text-[rgba(254,44,85,1)]'} idUserFollow={data?.user_id} />
                ) : (
                  <ButtonUnfollow title={'following'} idUserUnFollow={data?.user_id} />
                )} */}
              </div>
            </div>
          </div>
          <div className='w-[430px] text-base font-light leading-6 tracking-tighter line-clamp-3'>
            <FormatTextBold text={data?.description} /> 🎧
          </div>
          {data?.music ? <div className='mt-1 font-medium'>Nhạc Nền - {data?.music} 🎧🎧🎧</div> : null}
          <div className='mt-3 mb-3 flex  '>
            <div
              className={`div-video mr-2 ${
                ratio ? 'w-[calc(450px+((100vw-768px)/1152)*100)]' : 'h-[calc(450px+((100vw-768px)/1152)*100)]'
              } ${ratio ? 'h-fit' : 'w-fit'} `}
            >
              <video
                className='video-display h-full w-full overflow-hidden rounded-lg outline-none '
                muted
                src={data?.file_url}
                ref={videoRef}
              />
            </div>
            <div className='flex h-full flex-col items-center  self-end'>
              <div>
                <HeartComponent />
                <p>1k</p>
              </div>
              <div>
                <CommentComponent />
                <p>1k</p>
              </div>
              <div className='flex items-center justify-center gap-1 text-[24px]'>
                <ShareMoreComponent
                  data={[
                    <ItemShare icon={<LinkedIn />} nameIcon={'LinkedIn'} />,
                    <ItemShare icon={<Reddit />} nameIcon={'Reddit'} />,
                    <ItemShare icon={<Telegram />} nameIcon={'Telegram'} />,
                    <ItemShare icon={<Email />} nameIcon={'Email'} />,
                    <ItemShare icon={<LineIcon />} nameIcon={'LineIcon'} />,
                    <ItemShare icon={<Pinterest />} nameIcon={'Pinterest'} />
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideosItems
