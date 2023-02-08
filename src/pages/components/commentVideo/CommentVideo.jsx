import { useQuery } from '@tanstack/react-query'
import React, { memo, useEffect, useState } from 'react'
import { CommentAPI } from '../../../apis/CommentAPI'
import CommentItem from '../commentItem/CommentItem'

function CommentVideo({ idVideo }) {
  const [reFetchCount, setReFetchCount] = useState(0)
  const [dataRender, setDataRender] = useState(undefined)

  const { data: comment, isSuccess } = useQuery({
    queryKey: [`/api/videos/${idVideo.idVideo}/comments`, reFetchCount],
    queryFn: () => CommentAPI.getCommentVideo(idVideo.idVideo)
  })
  useEffect(() => {
    setReFetchCount((old) => (old += 1))
  }, [idVideo])
  useEffect(() => {
    if (isSuccess) {
      setDataRender((old) => comment.data.data)
    }
  }, [isSuccess])
  return (
    <>
      {dataRender
        ? dataRender.map((item, index) => (
            <div key={item.id}>
              <CommentItem comment={item} />
            </div>
          ))
        : null}
    </>
  )
}
export default memo(CommentVideo)
