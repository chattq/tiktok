import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { CommentAPI } from '../../../apis/CommentAPI'
import CommentItem from '../commentItem/CommentItem'

export default function CommentVideo({ idVideo }) {
  const [reFetchCount, setReFetchCount] = useState(0)
  useEffect(() => {
    setReFetchCount((old) => (old += 1))
  }, [idVideo])
  console.log(idVideo)
  const { data: comment, isSuccess } = useQuery({
    queryKey: [`/api/videos/${idVideo}/comments`, reFetchCount],
    queryFn: () => CommentAPI.getCommentVideo(idVideo.IdVideo)
  })
  if (isSuccess) {
    return (
      <>
        {comment
          ? comment.data.data.map((item, index) => (
              <div key={item.id}>
                <CommentItem comment={item} />
              </div>
            ))
          : null}
      </>
    )
  }
}
