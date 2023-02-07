import React from 'react'
import { Link } from 'react-router-dom'
export default function ItemShare({ icon, nameIcon }) {
  return (
    <Link className='relative flex items-center p-[11px_16px] align-middle hover:bg-[#16182308]'>
      <span className='text-[26px]'>{icon}</span>
      <span className='ml-3'>Chia sẻ với {nameIcon}</span>
    </Link>
  )
}
