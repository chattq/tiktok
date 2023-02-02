import React from 'react'
import { Link } from 'react-router-dom'
import { ImgBasic } from '../../../assets/img'
import { DownArow, HeartComment, MenuIcon } from '../../../Icons/Icons'

export default function CommentItem({ comment }) {
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const year = day * 365
  const dateComment = new Date(comment.created_at).getTime()
  const today = new Date().getTime()
  const timeComment = today - dateComment
  let timePeriod = ''
  if (timeComment / year > 1) {
    timePeriod = `${Math.floor(timeComment / year)} năm trước`
  } else if (timeComment / day > 1) {
    timePeriod = `${Math.floor(timeComment / day)} ngày trước`
  } else if (timeComment / hour > 1) {
    timePeriod = `${Math.floor(timeComment / hour)} giờ trước`
  } else {
    timePeriod = `${Math.floor(timeComment / minute)} phút trước`
  }
  console.log(timePeriod)
  return (
    <div className='group mb-4'>
      <div className='mb-4'>
        <div className='relative mb-4 flex items-start'>
          <div className='mr-3 flex-[0_0_40px]'>
            <div className='relative m-0 h-10 w-10 overflow-hidden whitespace-nowrap rounded-[50%] bg-[#88888880] p-0 text-center align-middle leading-8 text-[#ffffff]'>
              <img src={ImgBasic(comment.user.avatar)} alt='' />
            </div>
          </div>
          <div className='flex-[1_1_auto] '>
            <Link className='text-[18px] font-semibold leading-[25px] hover:underline'>
              {comment.user.first_name + ' ' + comment.user.last_name}
            </Link>
            <p className='text-4 mb-[6px] whitespace-pre-line break-words leading-[22px]'>
              <span>{comment.comment}</span>
            </p>
            <div className='m-0 text-[14px] leading-5 text-[#16182380]'>
              <span className='m-0 text-[14px] leading-5 text-[#16182380]'>{timePeriod}</span>
              <span className='ml-6 cursor-pointer font-normal text-[#16182380]'>Trả lời</span>
            </div>
          </div>
          <div className='ml-[18px] flex w-6 flex-[0_0_24px] flex-col items-center pr-[2px] pt-6'>
            <div className='flex w-5 cursor-pointer flex-col items-center text-[12px] leading-[17px] text-[#16182380]'>
              <div className='hidden rotate-90 group-hover:block'>
                <MenuIcon />
              </div>
              <div>
                <HeartComment />
              </div>
              <span className='text-[12px] leading-[17px]'>{comment.likes_count}</span>
            </div>
          </div>
        </div>
        <div className='pl-[52px]'>
          <div className='relative  flex justify-between'>
            <p className='flex cursor-pointer items-center text-[14px] font-medium leading-5 text-[#16182380] hover:underline'>
              Xem thêm câu trả lời khác (1)
              <span className='ml-1'>
                <DownArow />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
