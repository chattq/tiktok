import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  const { userId } = useParams()
  const checkParams = Boolean(userId)
  return (
    <div className={checkParams ? ' pl-[10px] pt-[60px]' : 'relative flex justify-center pt-[80px]'}>
      <div className='relative flex'>
        <div className={checkParams ? 'fixed w-[200px] pt-4 ' : 'fixed ml-[-170px] w-[330px]'}>
          <SideBar />
        </div>
        <div className={checkParams ? 'w-full pt-8 pl-[250px]' : 'w-[785px] pl-[260px] pt-[15px]'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
