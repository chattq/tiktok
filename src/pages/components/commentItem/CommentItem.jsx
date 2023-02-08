import Tippy from '@tippyjs/react/headless'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { calculateTimePublish } from '../../../assets/calculateTimePublish'
import { ImgBasic } from '../../../assets/img'
import { FlagReport, HeartComment, LikedHeart, MenuIcon, MoreComment, TrashIcon } from '../../../Icons/Icons'
import { LikeAPI } from '../../../apis/Like'
import ModalConfirm from '../modalConfirm/ModalConfirm'

export default function CommentItem({ comment }) {
  const [openModal, setOpenModal] = useState(false)
  const dataUser = JSON.parse(localStorage.getItem('userInfo'))
  const isOwnLogin = dataUser.id === comment?.user.id
  const [dataComment, setDataComment] = useState(comment)
  const idComment = dataComment?.id
  const [isLiked, setIsLiked] = useState(dataComment?.is_liked)
  const timePeriod = calculateTimePublish(dataComment?.created_at)

  async function handleLikeComment() {
    if (isLiked) {
      const newData = await LikeAPI.UnLikeComment(idComment)
      setDataComment(newData.data.data)
      setIsLiked((old) => !old)
    } else {
      const newData = await LikeAPI.LikeComment(idComment)
      setDataComment(newData.data.data)
      setIsLiked((old) => !old)
    }
  }
  return (
    <>
      {dataComment ? (
        <div className='group mb-4'>
          <div className='mb-4'>
            <div className='relative mb-4 flex items-start'>
              <div className='mr-3 flex-[0_0_40px]'>
                <div className='relative m-0 h-10 w-10 overflow-hidden whitespace-nowrap rounded-[50%] bg-[#88888880] p-0 text-center align-middle leading-8 text-[#ffffff]'>
                  <img src={ImgBasic(dataComment.user.avatar)} alt='' />
                </div>
              </div>
              <div className='flex-[1_1_auto] '>
                <Link className='text-[18px] font-semibold leading-[25px] hover:underline'>
                  {dataComment.user.first_name + ' ' + dataComment.user.last_name}
                </Link>
                <p className='text-4 mb-[6px] whitespace-pre-line break-words leading-[22px]'>
                  <span>{dataComment.comment}</span>
                </p>
                <div className='m-0 text-[14px] leading-5 text-[#16182380]'>
                  <span className='m-0 text-[14px] leading-5 text-[#16182380]'>{timePeriod}</span>
                  <span className='ml-6 cursor-pointer font-normal text-[#16182380]'>Trả lời</span>
                </div>
              </div>
              <div className='ml-[18px] flex w-6 flex-[0_0_24px] flex-col items-center justify-center pr-[2px] pt-6 group-hover:pt-0'>
                <Tippy
                  interactive
                  placement='bottom'
                  offset={[-90, 5]}
                  delay={[100, 0]}
                  render={() => (
                    <div className='min-w-[200px] rounded-lg bg-white p-[8px_16px] text-[16px] font-semibold leading-[22px] shadow-[rgb(0,0,0,12%)_0px_4px_16px]'>
                      {isOwnLogin ? (
                        <p
                          className='flex cursor-pointer items-center whitespace-nowrap p-[12px_0] align-middle hover:text-[#fe2c55]'
                          onClick={() => {
                            setOpenModal(true)
                          }}
                        >
                          <TrashIcon />
                          <span className='ml-3'>Xóa</span>
                        </p>
                      ) : (
                        <p className='flex cursor-pointer items-center whitespace-nowrap p-[12px_0] align-middle hover:text-[#fe2c55]'>
                          <FlagReport />
                          <span className='ml-3'>Báo cáo</span>
                        </p>
                      )}
                    </div>
                  )}
                >
                  <div className='hidden h-6 rotate-90 cursor-pointer group-hover:block'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <MenuIcon />
                    </div>
                  </div>
                </Tippy>
                <div className='flex w-5 cursor-pointer flex-col items-center text-[12px] leading-[17px] text-[#16182380]'>
                  <div className='' onClick={handleLikeComment}>
                    {isLiked ? <LikedHeart /> : <HeartComment />}
                  </div>
                  <span className='text-[12px] leading-[17px]'>{dataComment.likes_count}</span>
                </div>
              </div>
            </div>
            <div className='pl-[52px]'>
              <div className='relative  flex justify-between'>
                <p className='flex cursor-pointer items-center text-[14px] font-medium leading-5 text-[#16182380] hover:underline'>
                  Xem thêm câu trả lời khác (1)
                  <span className='ml-1'>
                    <MoreComment />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <ModalConfirm
            openModal={openModal}
            setOpenModal={setOpenModal}
            idComment={idComment}
            setDataComment={setDataComment}
          />
        </div>
      ) : null}
    </>
  )
}
