/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { HomeIcon, LiveIcon, UserIcon } from '../../../../Icons/Icons'
import MenuItem from '../../components/MenuItem/MenuItem'
import UserItem from '../../components/UserItem/UserItem'
import { User } from '../../../../apis/UserAPI'
import { Link } from 'react-router-dom'

export default function SideBar() {
  const [data, setData] = useState([])
  const [allSuggestedUsers, setAllSuggestedUsers] = useState([])
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [page] = useState(1)
  const [perPage] = useState(15)
  const [seeMore, setSeeMore] = useState(false)
  useEffect(() => {
    const getAcounts = async () => {
      const result = await User.suggestUserList({ page, perPage })
      setAllSuggestedUsers(result.data.data)
      const lessResult = result.data.data.slice(0, 5)
      setSuggestedUsers(lessResult)
      setData(lessResult)
    }
    getAcounts()
  }, [page, perPage])

  const handleSeeAll = async () => {
    seeMore ? setData(suggestedUsers) : setData(allSuggestedUsers)
    setSeeMore(!seeMore)
  }
  return (
    <>
      <div className='h-[156px] border-b border-[#F1F1F2]'>
        <MenuItem title={'Dành cho bạn'} icon={<HomeIcon />} router={`/`} />
        <MenuItem title={'Đang Follow'} icon={<UserIcon />} router={`/following`} />
        <MenuItem title={'LIVE'} icon={<LiveIcon />} router={`/live`} />
      </div>
      <div className='mt-2 px-2 py-1'>
        <h1 className='text-fontSizeTitle font-semibold text-tiktokColorText'>Tài khoản được đề xuất</h1>
        <div className='mt-5'>
          {data &&
            data.map((user) => (
              <Link to={`users/@${user.nickname}`}>
                <div></div>
                <UserItem key={user.id} data={user} />
              </Link>
            ))}
        </div>
        <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
          {seeMore ? `Ẩn bớt` : `Xem tất cả`}
        </span>
      </div>
      <div className='mt-3 border-t border-[#F1F1F2] px-2 py-2'>
        <h4 className='text-fontSizeTitle font-semibold text-tiktokColorText'>Các tài khoản đang follow</h4>
        <div className='mt-5'>
          {data &&
            data.map((user) => (
              <Link to={`users/@${user.nickname}`}>
                <UserItem key={user.id} data={user} />
              </Link>
            ))}
        </div>
        <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
          {seeMore ? `Ẩn bớt` : `Xem tất cả`}
        </span>
      </div>
    </>
  )
}
