import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Comment } from '../../../apis/CommentAPI'
import CommentItem from '../commentItem/CommentItem'

export default function CommentVideo({ idVideo }) {
  console.log(idVideo)
  if (idVideo) {
    const { data: comment } = useQuery({
      queryKey: [`/api/videos/${idVideo}/comments`, idVideo],
      queryFn: () => Comment.getCommentVideo(idVideo)
    })
    const dataComment = comment?.data.data
    return (
      <>
        {dataComment?.map((item, index) => (
          <div key={item.id}>
            <CommentItem comment={item} />
          </div>
        ))}
      </>
    )
  } else {
    return null
  }
}
