import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeMain from '../Views/HomeMain/HomeMain'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  return (
    <div className='flex justify-center'>
      <div className='flex'>
        <div className='w-[330px]'>
          <SideBar />
        </div>
        <div className='w-[785px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
