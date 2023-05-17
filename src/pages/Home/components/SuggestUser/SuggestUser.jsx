import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { User } from '../../../../apis/UserAPI'
import SkeletonUserSuggest from '../../../components/Skeleton/SkeletonUserSuggest'
import UserItem from '../UserItem/UserItem'

export default function SuggestUser() {
  const { t } = useTranslation()
  const [data, setData] = useState([])
  const [allSuggestedUsers, setAllSuggestedUsers] = useState([])
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [page] = useState(1)
  const [perPage] = useState(15)
  const [seeMore, setSeeMore] = useState(false)
  const { data: dataUser } = useQuery({
    queryKey: ['/api/users/suggested', { page, perPage }],
    queryFn: () => User.suggestUserList({ page, perPage })
  })
  const profile = dataUser?.data.data
  useEffect(() => {
    if (profile) {
      setAllSuggestedUsers(profile)
      const filterResult = profile.filter((item) => !item.is_followed)
      const lessResult = filterResult.slice(0, 5)
      setSuggestedUsers(lessResult)
      setData(lessResult)
    }
  }, [dataUser])

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
              return <UserItem key={user.id} data={user} page={page} perPage={perPage} />
            }
          })
        )}
        <span onClick={handleSeeAll} className='mt-4 cursor-pointer text-fontSizeTitle font-semibold text-tiktokPink'>
          {seeMore ? `${t('See less')}` : `${t('See all')}`}
        </span>
      </div>
    </>
  )
}
