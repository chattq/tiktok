import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  const { userId } = useParams()
  const checkParams = Boolean(userId)
  return (
    <div className={checkParams ? 'mt-1 pl-[10px]' : 'relative mt-5 flex justify-center'}>
      <div className='relative flex'>
        <div className={checkParams ? 'fixed w-[250px] pt-4 ' : 'fixed ml-[-170px] w-[330px]'}>
          <SideBar />
        </div>
        <div className={checkParams ? 'w-full pt-8 pl-[250px]' : 'w-[785px] pl-[260px]'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
