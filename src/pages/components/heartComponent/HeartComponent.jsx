import React from 'react'
import { Heart, LikedHeart } from '../../../Icons/Icons'

function HeartComponent({ isLiked }) {
  return (
    <span className='mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] bg-[#1618230f]'>
      {isLiked ? <LikedHeart /> : <Heart />}
    </span>
  )
}

export default HeartComponent
