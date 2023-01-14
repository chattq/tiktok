import React from 'react'
import { Link } from 'react-router-dom'
import { ImgBasic } from '../../../../assets/img'

export default function UserPreview({ data }) {
  return (
    <>
      <div className='w-[290px] rounded-[6px] border bg-white p-5 shadow-xl'>
        <div className='flex items-center justify-between pb-4'>
          <Link to={`users/@${data.nickname}`}>
            <div className='h-[40px] w-[40px] overflow-hidden rounded-full'>
              <img className='h-full w-full object-cover' src={ImgBasic(data?.avatar)} alt={data?.nickname} />
            </div>
          </Link>
          <div className=''>
            <button className='rounded-[6px] border-0 bg-tiktokPink py-2 px-6 font-medium text-white' type='button'>
              Follow
            </button>
          </div>
        </div>
        <div>
          <h2>{data?.nickname}</h2>
          <span></span>
        </div>
        <h4>{`${data?.first_name} ${data?.last_name}`}</h4>
        <div className='flex'>
          <div className='flex'>
            <span>{data?.followers_count}M</span>
            <p>Follower</p>
          </div>
          <div className='flex'>
            <span>{data?.likes_count}M</span>
            <p>Thích</p>
          </div>
        </div>
      </div>
    </>
  )
}
