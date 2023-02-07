import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../../apis/UserAPI'

export default function ButtonUnfollow({ title, style, idUserUnFollow }) {
  const { userId } = useParams()
  const queryClient = useQueryClient()
  const followUnMutation = useMutation(User.unFollowUser)
  const handleUnFollow = () => {
    followUnMutation.mutate(idUserUnFollow, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [`/api/users/@`, userId], exact: true })
      }
    })
  }
  return (
    <div onClick={handleUnFollow} className={style}>
      {title}
    </div>
  )
}
