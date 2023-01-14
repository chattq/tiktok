import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../apis/UserAPI'

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
          <div>
            <div>
              <div className='h-[116px] w-[116px] overflow-hidden rounded-full'>
                <img className='h-full w-full object-cover' src={inforUser?.avatar} alt={inforUser?.first_name} />
              </div>
              <div>
                <span>{inforUser?.nickname}</span>
                <span>{`${inforUser?.first_name} ${inforUser?.last_name}`}</span>
                <button type='button'>Follow</button>
              </div>
            </div>
            <div>
              <span>
                <b>260M</b>Đang Follow
              </span>
              <span>
                <b>7.3M</b>Follower
              </span>
              <span>
                <b>257.5M</b>Thích
              </span>
            </div>
            <h3>Mãi Yêu Gia Đình Villa</h3>
            <span>Link</span>
          </div>
          <div>icon</div>
        </div>
        <div>video</div>
      </div>
    </>
  )
}
