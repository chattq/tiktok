/* eslint-disable jsx-a11y/media-has-caption */
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { User } from '../../apis/UserAPI'
import { formatNumberFollow, formatNumberLike } from '../../assets/formatNumber'
import { ImgBasic } from '../../assets/img'
import { dots, EditProfile, links, locks, LockUser, share, TikUser } from '../../Icons/Icons'
import ButtonFollow from '../components/buttonFollow/ButtonFollow'
import ButtonUnfollow from '../components/buttonUnfollow/ButtonUnfollow'
import ModalEditProfile from '../components/ModalEditProfile/ModalEditProfile'
import SkeletonUserInfor from '../components/Skeleton/SkeletonUseInfor'

import Videos from './Videos/Videos'

export default function InforUser() {
  const { t } = useTranslation()
  const DataUser = JSON.parse(localStorage.getItem('userInfo'))
  const [checkPage, setCheckPage] = useState(false)
  const previousPath = window.location.pathname
  const { userId } = useParams()
  const { data: user, isLoading } = useQuery({
    queryKey: [`/api/users/@`, userId],
    queryFn: () => User.getUser(userId),
    cacheTime: 10 * 100
  })
  const inforUser = user?.data.data
  const checkDataUser = Boolean(DataUser?.id === inforUser?.id)
  const handleVideo = () => {
    setCheckPage(false)
  }
  const handleLike = () => {
    setCheckPage(true)
  }
  return (
    <>
      {isLoading ? (
        <SkeletonUserInfor />
      ) : (
        <div>
          <div>
            <div className='relative max-w-[624px]'>
              <div className='flex'>
                <div className='h-[116px] w-[116px] overflow-hidden rounded-full'>
                  <img
                    className='h-full w-full object-cover'
                    src={ImgBasic(inforUser?.avatar)}
                    alt={inforUser?.first_name}
                  />
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
                  {checkDataUser ? (
                    <ModalEditProfile style={'w-[125px]'}>
                      <div className='w-[125px] cursor-pointer'>
                        <div className='border-[rgba(22, 24, 35, 0.12)] flex items-center justify-center rounded-[4px] border font-bold'>
                          {EditProfile()}
                          <span className='ml-2'>{t('Edit profile')}</span>
                        </div>
                      </div>
                    </ModalEditProfile>
                  ) : !inforUser?.is_followed ? (
                    <ButtonFollow
                      style={
                        'w-[207px] cursor-pointer rounded border border-tiktokPink bg-tiktokPink px-[8px] text-center font-medium text-white hover:bg-[#dc1f44]'
                      }
                      isFollowed={false}
                      idUserFollow={inforUser?.id}
                    />
                  ) : (
                    <div className='flex items-center'>
                      <div className='w-[164px] cursor-pointer rounded border border-[rgba(254,44,85,1)] px-[8px] text-center font-medium text-[rgba(254,44,85,1)] hover:bg-[#FFF2F5]'>
                        {t('Messages')}
                      </div>
                      <ButtonUnfollow
                        isFollowed={true}
                        idUserUnFollow={inforUser?.id}
                        title={TikUser()}
                        style={
                          'ml-2 flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded border hover:bg-[#F8F8F8]'
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className='mt-6 flex items-center'>
                <div className='mr-5'>
                  <b className='mr-2 text-[18px]'>{formatNumberFollow(inforUser?.followings_count)}</b>
                  <span className='text-[#23242fbf]'>{t('Following')}</span>
                </div>
                <div className='mr-5'>
                  <b className='mr-2 text-[18px]'>{formatNumberFollow(inforUser?.followers_count)}</b>
                  <span className='text-[#23242fbf]'>Follower</span>
                </div>
                <div>
                  <b className='mr-2 text-[18px]'>{formatNumberLike(inforUser?.likes_count)}</b>
                  <span className='text-[#23242fbf]'>{t('Likes')}</span>
                </div>
              </div>
              <h1 className='mt-3 max-w-[550px] leading-7 tracking-[0.5px]'>{`${inforUser?.bio}`}</h1>
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
            <div className='tab_list border-gray flex h-[44px] w-[460px] cursor-pointer items-center border-b-[2px] text-[rgba(22,24,35,0.5)]'>
              <div
                className={'tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium '}
                onClick={handleVideo}
              >
                <span className={!checkPage ? 'text-black' : ''}>Video</span>
              </div>
              <div
                className={
                  checkPage
                    ? 'tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium text-black'
                    : 'tab_item flex h-full w-[230px] items-center justify-center text-[18px] font-medium'
                }
                onClick={handleLike}
              >
                {locks()}
                <span className='ml-2'>{t('liked')}</span>
              </div>
              {!checkPage ? <div className={'tab_line1'} /> : <div className={'tab_line2'} />}
            </div>
            <div className='mt-[20px] min-h-[220px] min-w-[300px]'>
              {!checkPage ? (
                <div className='grid grid-cols-6 gap-x-[10px] gap-y-[25px]'>
                  {inforUser?.videos.map((video) => (
                    <Videos dataVideos={video} previousPath={previousPath} totalData={inforUser?.videos} />
                  ))}
                </div>
              ) : (
                <div className='mt-[150px] flex flex-col items-center'>
                  <div className=' text-[#b0b0b4]'>{LockUser()}</div>
                  <p className='mt-4 text-[25px] font-bold'>Video đã thích của người dùng này ở trạng thái riêng tư</p>
                  <p className='mt-4'>Các video được thích bởi tiin.vn hiện đang ẩn</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
