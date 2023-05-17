import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { User } from '../../../../apis/UserAPI'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import UserItem from '../UserItem/UserItem'
import { useQuery } from '@tanstack/react-query'

export default function FollowUser() {
  const { t } = useTranslation()
  const [data, setData] = useState([])
  const [allFollowUsers, setAllFollowUsers] = useState([])
  const [FollowUsers, setFollowUsers] = useState([])
  const [page] = useState(0)
  const [perPage] = useState(30)
  const [seeMore, setSeeMore] = useState(false)

  const { data: dataFollow } = useQuery({
    queryKey: ['/api/me/followings', { page, perPage }],
    queryFn: () => User.followUserList({ page, perPage })
  })
  const dataListFollow = dataFollow?.data.data

  useEffect(() => {
    if (dataListFollow) {
      setAllFollowUsers(dataListFollow)
      const filterResult = dataListFollow.filter((item) => item.is_followed)
      const lessResult = filterResult.slice(0, 5)
      setFollowUsers(lessResult)
      setData(lessResult)
    }
  }, [dataFollow])

  const handleSeeAll = async () => {
    seeMore ? setData(FollowUsers) : setData(allFollowUsers)
    setSeeMore(!seeMore)
  }
  return (
    <>
      <div className='mt-4'>
        {FollowUsers.length === 0 ? (
          <SkeletonUserSuggest />
        ) : (
          FollowUsers.map((user) => <UserItem key={user?.id} data={user} />)
        )}
      </div>
      <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
        {seeMore ? `${t('See less')}` : `${t('See all')}`}
      </span>
    </>
  )
}
