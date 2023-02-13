import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../../apis/UserAPI'
import { AppContext } from '../../../../context/app.context'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import UserItem from '../UserItem/UserItem'

export default function FollowUser() {
  const [data, setData] = useState([])
  const [allFollowUsers, setAllFollowUsers] = useState([])
  const [FollowUsers, setFollowUsers] = useState([])
  const [page] = useState(1)
  const [perPage] = useState(15)
  const [seeMore, setSeeMore] = useState(false)
  useEffect(() => {
    const getAcounts = async () => {
      const result = await User.followUserList({ page, perPage })
      setAllFollowUsers(result.data.data)
      const filterResult = result.data.data.filter((item) => item.is_followed)
      const lessResult = filterResult.slice(0, 5)
      setFollowUsers(lessResult)
      setData(lessResult)
    }
    getAcounts()
  }, [page, perPage])

  const handleSeeAll = async () => {
    seeMore ? setData(FollowUsers) : setData(allFollowUsers)
    setSeeMore(!seeMore)
  }
  return (
    <>
      <div className='mt-4'>
        {data.length === 0 ? (
          <SkeletonUserSuggest />
        ) : (
          data.map((user) => (
            <Link key={user.id} to={`/users/@${user.nickname}`}>
              <UserItem data={user} />
            </Link>
          ))
        )}
      </div>
      <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
        {seeMore ? `Ẩn bớt` : `Xem tất cả`}
      </span>
    </>
  )
}
