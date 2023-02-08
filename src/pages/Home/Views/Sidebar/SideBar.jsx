import React, { useContext, useEffect, useState } from 'react'
import { HomeIcon, LiveIcon, UserIcon } from '../../../../Icons/Icons'
import MenuItem from '../../components/MenuItem/MenuItem'
import SuggestUser from '../../components/SuggestUser/SuggestUser'
import FollowUser from '../../components/FollowUser/FollowUser'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import { AppContext } from '../../../../context/app.context'
import { useQuery } from '@tanstack/react-query'
import { User } from '../../../../apis/UserAPI'

export default function SideBar() {
  const [data, setData] = useState([])
  const [page] = useState(1)
  const [perPage] = useState(15)
  useEffect(() => {
    const getAcounts = async () => {
      const result = await User.followUserList({ page, perPage })
      const lessResult = result.data.data.slice(0, 5)
      setData(lessResult)
    }
    getAcounts()
  }, [page, perPage])
  const { data: dataUser, isLoading } = useQuery({
    queryKey: ['/api/users/suggested', { page, perPage }],
    queryFn: () => User.suggestUserList({ page, perPage })
  })
  return (
    <>
      <div className='h-[156px] border-b border-[#F1F1F2]'>
        <MenuItem title={'Dành cho bạn'} icon={<HomeIcon />} router={`/`} />
        <MenuItem title={'Đang Follow'} icon={<UserIcon />} router={`/following`} />
        <MenuItem title={'LIVE'} icon={<LiveIcon />} router={`/live`} />
      </div>
      <div className='mt-2 px-2 py-1'>
        <h1 className='text-fontSizeTitle font-semibold text-tiktokColorText'>Tài khoản được đề xuất</h1>
        {isLoading ? <SkeletonUserSuggest /> : <SuggestUser />}
      </div>
      <div className='mt-3 border-t border-[#F1F1F2] px-2 py-2'>
        <h4 className='mt-1 text-fontSizeTitle font-semibold text-tiktokColorText'>Các tài khoản đang follow</h4>
        {data.length === 0 ? (
          <p className='text-[14px] font-thin text-[rgba(22,24,35,0.5)]'>
            Những tài khoản bạn follow sẽ được xuất hiện tại đây
          </p>
        ) : isLoading ? (
          <SkeletonUserSuggest />
        ) : (
          <FollowUser />
        )}
      </div>
    </>
  )
}
