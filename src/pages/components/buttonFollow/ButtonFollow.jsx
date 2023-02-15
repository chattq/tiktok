import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../../apis/UserAPI'

export default function ButtonFollow({ style, idUserFollow, isFollowed, uuidVideo, page, perPage }) {
  const { userId } = useParams()
  const queryClient = useQueryClient()
  const followMutation = useMutation(User.followUser)
  const unFollowMutation = useMutation(User.unFollowUser)
  const handleFollow = () => {
    if (isFollowed) {
      unFollowMutation.mutate(idUserFollow, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['/api/users/suggested', { page, perPage }], exact: true })
          queryClient.invalidateQueries({ queryKey: [`/api/users/@`, userId], exact: true })
          if (uuidVideo) {
            queryClient.invalidateQueries({ queryKey: ['/api/users/@', uuidVideo], exact: true })
          }
        }
      })
    } else {
      followMutation.mutate(idUserFollow, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['/api/users/suggested', { page, perPage }] })
          queryClient.invalidateQueries({ queryKey: [`/api/users/@`, userId], exact: true })
          if (uuidVideo) {
            queryClient.invalidateQueries({ queryKey: ['/api/users/@', uuidVideo], exact: true })
          }
        }
      })
    }
  }

  return (
    <div onClick={handleFollow} className={style}>
      {isFollowed ? 'Following' : 'Follow'}
    </div>
  )
}
