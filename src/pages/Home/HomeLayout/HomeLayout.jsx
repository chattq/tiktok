import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  const { userId } = useParams()
  const checkParams = Boolean(userId)
  return (
    <div className={checkParams ? ' pl-[10px] pt-[60px]' : 'relative flex justify-center pt-[60px]'}>
      <div className='mr-3 flex'>
        <div
          className={
            checkParams
              ? 'fixed z-10  h-[100vh] w-[240px] pt-4 scrollbar'
              : 'fixed z-10 ml-[-170px] h-[100vh] w-[330px] pt-[20px] scrollbar '
          }
        >
          <SideBar />
        </div>
        <div className={checkParams ? 'mr-3 w-full pt-8 pl-[270px]' : 'w-[785px] pl-[260px] pt-[35px] '}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
