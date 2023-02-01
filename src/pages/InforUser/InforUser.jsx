/* eslint-disable jsx-a11y/media-has-caption */
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../apis/UserAPI'
import { formatNumberFollow, formatNumberLike } from '../../assets/formatNumber'
import { dots, links, locks, share } from '../../Icons/Icons'
import Videos from './Videos/Videos'

export default function InforUser() {
  const { userId } = useParams()
  const { data: user } = useQuery({
    queryKey: ['/api/users/@', userId],
    queryFn: () => User.getUser(userId)
  })
  const inforUser = user?.data.data
  return (
    <>
      <div>
        <div>
          <div className='relative max-w-[624px]'>
            <div className='flex'>
              <div className='h-[116px] w-[116px] overflow-hidden rounded-full'>
                <img className='h-full w-full object-cover' src={inforUser?.avatar} alt={inforUser?.first_name} />
              </div>
              <div className='ml-5 flex flex-col leading-[35px]'>
                <div className='flex items-center'>
                  <span className='text-[32px] font-[700] tracking-wider'>{inforUser?.nickname}</span>
                  {inforUser?.tick && (
                    <div className='ml-1'>
                      <svg
                        className='tiktok-shsbhf-StyledVerifyBadge e1aglo370'
                        width='24'
                        data-e2e=''
                        height='24'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='24' fill='#20D5EC'></circle>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z'
                          fill='white'
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
                <span className='mt-2 mb-4 h-[25px] font-tiktokFont text-[18px] font-[500] leading-[25px]'>{`${inforUser?.first_name} ${inforUser?.last_name}`}</span>
                <button
                  type='button'
                  className='w-[164px] rounded-md border-0 bg-tiktokPink px-[8px] font-medium text-white hover:bg-[#dc1f44]'
                >
                  Follow
                </button>
              </div>
            </div>
            <div className='mt-6 flex items-center'>
              <div className='mr-5'>
                <b className='mr-2 text-[18px]'>{formatNumberFollow(inforUser?.followings_count)}</b>
                <span className='text-[#23242fbf]'>Đang Follow</span>
              </div>
              <div className='mr-5'>
                <b className='mr-2 text-[18px]'>{formatNumberFollow(inforUser?.followers_count)}</b>
                <span className='text-[#23242fbf]'>Follower</span>
              </div>
              <div>
                <b className='mr-2 text-[18px]'>{formatNumberLike(inforUser?.likes_count)}</b>
                <span className='text-[#23242fbf]'>Thích</span>
              </div>
            </div>
            <h1 className='mt-3 max-w-[550px] leading-7'>{`${inforUser?.bio}`}</h1>
            <div className='mt-1'>
              {inforUser?.website_url && (
                <a
                  target='_blank'
                  href={`${inforUser?.website_url}`}
                  rel='noreferrer'
                  className='flex items-center font-medium'
                >
                  {links()}
                  <span className='hover:underline'>{`${inforUser?.website_url}`}</span>
                </a>
              )}
              {inforUser?.facebook_url && (
                <a
                  target='_blank'
                  href={`${inforUser?.facebook_url}`}
                  rel='noreferrer'
                  className='flex items-center font-medium'
                >
                  {links()}
                  <span className='hover:underline'>{`${inforUser?.facebook_url}`}</span>
                </a>
              )}
              {inforUser?.youtube_url && (
                <a
                  target='_blank'
                  href={`${inforUser?.youtube_url}`}
                  rel='noreferrer'
                  className='flex items-center font-medium'
                >
                  {links()}
                  <span className='hover:underline'>{`${inforUser?.youtube_url}`}</span>
                </a>
              )}
              {inforUser?.twitter_url && (
                <a
                  target='_blank'
                  href={`${inforUser?.twitter_url}`}
                  rel='noreferrer'
                  className='flex items-center font-medium'
                >
                  {links()}
                  <span className='hover:underline'>{`${inforUser?.twitter_url}`}</span>
                </a>
              )}
              {inforUser?.instagram_url && (
                <a
                  target='_blank'
                  href={`${inforUser?.instagram_url}`}
                  rel='noreferrer'
                  className='flex items-center font-medium'
                >
                  {links()}
                  <span className='hover:underline'>{`${inforUser?.instagram_url}`}</span>
                </a>
              )}
            </div>
            <div className='absolute right-12 top-2 cursor-pointer'>{share()}</div>
            <div className='absolute top-2 right-0 cursor-pointer'>{dots()}</div>
          </div>
        </div>
        <div>
          <div className='tab_list border-gray relative flex h-[44px] w-[460px] cursor-pointer items-center border-b-[1px] text-[rgba(22,24,35,0.5)]'>
            <div className='tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium'>
              <span>Video</span>
            </div>
            <div className='tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium'>
              {locks()}
              <span className='ml-2'>Đã thích</span>
            </div>
            <div className='tab_line absolute bottom-[-1px] h-[2px] w-[230px] bg-black' />
          </div>
          <div className='mt-[20px]'>
            <Videos dataVideos={inforUser?.videos} />
          </div>
        </div>
      </div>
    </>
  )
}
