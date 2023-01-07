import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function MenuItem({ router, icon, title }) {
  return (
    <div className=''>
      <NavLink to={router} className={({ isActive }) => (isActive ? 'text-[#fe2c55]' : '')}>
        <div className='flex items-center rounded-md py-2 px-2 hover:bg-slate-100'>
          {icon}
          <span className='ml-2 text-base font-bold tracking-wide'>{title}</span>
        </div>
      </NavLink>
    </div>
  )
}
