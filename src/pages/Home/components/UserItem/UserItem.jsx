import React from 'react'
import Tippy from '@tippyjs/react/headless'
import UserPreview from '../UserPreview/UserPreview'
import { ImgBasic } from '../../../../assets/img'

export default function UserItem({ data }) {
  const RenderUserPreview = (props) => {
    if (data.is_followed === false) {
      return (
        <div tabIndex='-1' {...props}>
          <UserPreview data={data} />
        </div>
      )
    }
  }

  return (
    <>
      <Tippy interactive placement='bottom' offset={[-20, 10]} delay={[800, 0]} render={RenderUserPreview}>
        <div key={data?.id} className='mb-3 flex cursor-pointer items-center'>
          <div className='mr-3 h-[32px] w-[32px] overflow-hidden rounded-full'>
            <img
              className='h-full w-full rounded-full object-cover'
              src={ImgBasic(data?.avatar)}
              alt={data?.first_name}
            />
          </div>
          <div>
            <img src='' alt='' />
            <div className='flex translate-y-[2px] items-center'>
              <h4 className='text-fontSizeName font-semibold tracking-wider'>{data?.nickname}</h4>
              {data?.tick && (
                <div className='ml-1'>
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
            <span className='text-fontSizeMin font-thin text-[rgba(22,24,35,0.75)]'>{`${data?.first_name} ${data?.last_name}`}</span>
          </div>
        </div>
      </Tippy>
    </>
  )
}
