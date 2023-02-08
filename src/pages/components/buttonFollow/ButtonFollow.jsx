import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../../apis/UserAPI'

export default function ButtonFollow({ style, idUserFollow }) {
  const { userId } = useParams()
  const queryClient = useQueryClient()
  const followMutation = useMutation(User.followUser)
  const handleFollow = () => {
    followMutation.mutate(idUserFollow, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/users/@`, userId], exact: true })
      }
    })
  }

  return (
    <div onClick={handleFollow} className={style}>
      Follow
    </div>
  )
}
