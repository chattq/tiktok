import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { memo, useEffect, useRef, useState } from 'react'
import { CommentAPI } from '../../../apis/CommentAPI'
import CommentItem from '../commentItem/CommentItem'
import SkeletonComment from '../Skeleton/SkeletonComment'

function CommentVideo({ idVideo, uuidVideo }) {
  const [reFetchCount, setReFetchCount] = useState(0)
  const [dataRender, setDataRender] = useState(undefined)

  const displayCommentRef = useRef()

  const { data: comment, isSuccess } = useQuery({
    queryKey: [`/api/videos/${idVideo.idVideo}/comments`, reFetchCount],
    queryFn: () => CommentAPI.getCommentVideo(idVideo.idVideo)
  })
  const [currentPage, setCurrentPage] = useState(comment?.data.meta.pagination.current_page)
  const [totalPage, setTotalPage] = useState(comment?.data.meta.pagination.total_pages)
  useEffect(() => {
    setReFetchCount((old) => (old += 1))
  }, [idVideo])
  useEffect(() => {
    if (isSuccess) {
      setDataRender((old) => comment.data.data)
      setCurrentPage(comment?.data.meta.pagination.current_page)
      setTotalPage(comment?.data.meta.pagination.total_pages)
    }
  }, [isSuccess])

  function handleScrollComment() {
    const { clientHeight, scrollTop, scrollHeight } = displayCommentRef.current
    console.log('clientHeight', clientHeight)
    console.log('scrollTop', scrollTop)
    console.log('scrollHeight', scrollHeight)
    if (scrollTop + clientHeight >= scrollHeight) {
      if (currentPage < totalPage) {
        CommentAPI.getCommentVideo(idVideo.idVideo, currentPage + 1).then((res) => {
          setDataRender((old) => {
            let oldBuffer = JSON.parse(JSON.stringify(old))
            let newBuffer = JSON.parse(JSON.stringify(res.data.data))
            return [...oldBuffer, ...newBuffer]
          })
          setCurrentPage(res.data.meta.pagination.current_page)
        })
      }
    }
  }

  return (
    <div
      className='webkit-scroll-hide relative w-[100%] flex-grow overflow-y-auto overflow-x-hidden border border-t-[#16182333] border-b-[#16182333] bg-[#f8f8f8] py-6 px-8'
      ref={displayCommentRef}
      onScroll={handleScrollComment}
    >
      {dataRender ? (
        dataRender.map((item, index) => (
          <div key={item.id}>
            <CommentItem comment={item} uuidVideo={uuidVideo} />
          </div>
        ))
      ) : (
        <div>
          <SkeletonComment />
          <SkeletonComment />
          <SkeletonComment />
        </div>
      )}
    </div>
  )
}
export default memo(CommentVideo)
