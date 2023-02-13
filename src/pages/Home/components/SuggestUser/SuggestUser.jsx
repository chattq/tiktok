import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../../apis/UserAPI'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import UserItem from '../UserItem/UserItem'

export default function SuggestUser() {
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
      const filterResult = result.data.data.filter((item) => !item.is_followed)
      const lessResult = filterResult.slice(0, 5)
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
      <div className='mt-5'>
        {data.length === 0 ? (
          <SkeletonUserSuggest />
        ) : (
          data.map((user) => {
            if (user?.is_followed === false) {
              return (
                <>
                  <Link key={user.id} to={`/users/@${user.nickname}`}>
                    <UserItem data={user} />
                  </Link>
                </>
              )
            }
          })
        )}
        <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
          {seeMore ? `Ẩn bớt` : `Xem tất cả`}
        </span>
      </div>
    </>
  )
}
