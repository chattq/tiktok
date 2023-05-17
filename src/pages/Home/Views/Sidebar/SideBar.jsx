import React, { useEffect, useState } from 'react'
import { Hashtag, HomeIcon, LiveIcon, MusicSidebar, UserIcon } from '../../../../Icons/Icons'
import MenuItem from '../../components/MenuItem/MenuItem'
import SuggestUser from '../../components/SuggestUser/SuggestUser'
import FollowUser from '../../components/FollowUser/FollowUser'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import { useQuery } from '@tanstack/react-query'
import { User } from '../../../../apis/UserAPI'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function SideBar() {
  const { t } = useTranslation()
  const dataUserLocal = JSON.parse(localStorage.getItem('userInfo'))
  const { userId } = useParams()
  const newArr = []
  newArr.push(userId)
  const checkUser = Boolean(newArr.includes('@' + dataUserLocal?.nickname))
  const checkToken = Boolean(localStorage.getItem('token'))
  const [data, setData] = useState([])
  const [page] = useState(1)
  const [perPage] = useState(15)
  const { data: dataUser, isLoading } = useQuery({
    queryKey: ['/api/users/suggested', { page, perPage }],
    queryFn: () => User.suggestUserList({ page, perPage })
  })
  useEffect(() => {
    const getAcounts = async () => {
      const result = await User.followUserList({ page, perPage })
      const lessResult = result.data.data.slice(0, 5)
      setData(lessResult)
    }
    getAcounts()
  }, [page, perPage])

  return (
    <>
      <div className='pr-[10px] pb-[100px]'>
        <div className='h-[156px] border-b border-[#F1F1F2]'>
          <MenuItem title={t('For you')} icon={<HomeIcon />} router={`/`} />
          <MenuItem title={t('Following')} icon={<UserIcon />} router={`/following`} />
          <MenuItem title={'LIVE'} icon={<LiveIcon />} router={`/live`} />
        </div>
        <div>
          {checkToken ? null : (
            <div className='mt-5 border-b-[1px] border-[#F1F1F2]'>
              <h1 className='mb-5 text-[rgba(22,24,35,0.5)]'>
                {t('Log in to follow creators, like videos, and view comments.')}
              </h1>
              <Link
                to={'/login'}
                className='mb-6 flex h-[48px] w-full cursor-pointer justify-center rounded-[3px] border-[1px] border-[rgb(254,44,85)] hover:bg-[#FFF2F5]'
              >
                <span className='flex items-center justify-center text-[17px] font-medium text-[rgb(254,44,85)]'>
                  {t('Login')}
                </span>
              </Link>
            </div>
          )}
        </div>
        {checkUser ? null : (
          <div className='mt-2 mb-3 px-2 py-1'>
            <h1 className='text-fontSizeTitle font-semibold text-tiktokColorText'>{t('Suggested accounts')}</h1>
            {isLoading ? <SkeletonUserSuggest /> : <SuggestUser />}
          </div>
        )}
        {checkToken ? (
          <div className=' border-t border-[#F1F1F2] px-2 py-2'>
            <h4 className='mt-1 text-fontSizeTitle font-semibold text-tiktokColorText'>{t('Following accounts')}</h4>
            {data.length === 0 ? (
              <p className='text-[14px] font-thin text-[rgba(22,24,35,0.5)]'>
                {t('Accounts you follow will appear here')}
              </p>
            ) : isLoading ? (
              <SkeletonUserSuggest />
            ) : (
              <FollowUser />
            )}
          </div>
        ) : null}
        <div className='mt-2 border-t-[1px] border-[#F1F1F2]'>
          <h1 className='mt-3 text-fontSizeTitle font-semibold text-tiktokColorText'>{t('Discover')}</h1>
          <div className='mt-4'>
            <div className='flex items-center'>
              <span className='flex cursor-pointer items-center rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[3px] text-[rgba(22,24,35,0.75)] hover:bg-[#F1F1F2]'>
                {Hashtag()}suthatla
              </span>
              <span className='ml-4 flex cursor-pointer  items-center rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[3px] text-[rgba(22,24,35,0.75)] hover:bg-[#F1F1F2]'>
                {Hashtag()}mackedoi
              </span>
            </div>
            <div className='mt-3 flex w-[153px] cursor-pointer items-center rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[3px] text-[rgba(22,24,35,0.75)] hover:bg-[#F1F1F2]'>
              <span>{Hashtag()} </span>
              <span>sansangthaydoi</span>
            </div>
            <div className='mt-3 flex cursor-pointer rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[4px] text-[14px] hover:bg-[#F1F1F2]'>
              <span className='mr-1'>{MusicSidebar()}</span>
              <span className='text-[rgba(22,24,35,0.75)] line-clamp-1'>
                Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia
              </span>
            </div>
            <div className='mt-3 flex cursor-pointer rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[4px] text-[14px] hover:bg-[#F1F1F2]'>
              <span className='mr-1'>{MusicSidebar()}</span>
              <span className='text-[rgba(22,24,35,0.75)] line-clamp-1'>
                Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
              </span>
            </div>
            <div className='mt-3 flex cursor-pointer rounded-full border-[1px] border-[rgba(22,24,35,0.2)] px-[10px] py-[4px] text-[14px] hover:bg-[#F1F1F2]'>
              <span className='mr-1'>{MusicSidebar()}</span>
              <span className='text-[rgba(22,24,35,0.75)] line-clamp-1'>Thiên Thần Tình Yêu - RICKY STAR</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
