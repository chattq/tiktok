import React from 'react'
import { Link } from 'react-router-dom'
import { formatNumberFollow, formatNumberLike } from '../../../../assets/formatNumber'
import { ImgBasic } from '../../../../assets/img'
import ButtonFollow from '../../../components/buttonFollow/ButtonFollow'

export default function UserPreview({ data, page, perPage }) {
  return (
    <>
      <div className='w-[330px] rounded-[6px] border bg-white p-5 shadow-xl'>
        <div className='flex items-center justify-between pb-4'>
          <Link to={`/users/@${data?.nickname}`}>
            <div className='h-[40px] w-[40px] overflow-hidden rounded-full'>
              <img className='h-full w-full object-cover' src={ImgBasic(data?.avatar)} alt={data?.nickname} />
            </div>
          </Link>
          <div>
            <ButtonFollow
              style={'rounded-[6px] border-0 bg-tiktokPink py-2 px-6 font-medium text-white cursor-pointer'}
              idUserFollow={data?.id}
              page={page}
              perPage={perPage}
            />
            {/* <button className='rounded-[6px] border-0 bg-tiktokPink py-2 px-6 font-medium text-white'>Follow</button> */}
          </div>
        </div>
        <div className='flex items-center'>
          <h2 className='text-[20px] font-bold'>{data?.nickname}</h2>
          {data?.tick && (
            <div className='ml-2'>
              <svg
                className='tiktok-shsbhf-StyledVerifyBadge e1aglo370'
                width='14'
                data-e2e=''
                height='14'
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
        <h4 className='mb-2 mt-[2px] text-sm font-medium'>{`${data?.first_name} ${data?.last_name}`}</h4>
        <div className='flex'>
          <div className='flex items-center'>
            <span className='mr-2 font-semibold'>{formatNumberFollow(data?.followers_count)}</span>
            <p>Follower</p>
          </div>
          <div className='ml-3 flex items-center'>
            <span className='mr-2 font-semibold'>{formatNumberLike(data?.likes_count)}</span>
            <p>Thích</p>
          </div>
        </div>
      </div>
    </>
  )
}
