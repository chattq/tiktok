import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  const { userId } = useParams()
  const checkParams = Boolean(userId)
  return (
    <div className={checkParams ? 'pl-[10px]' : 'flex justify-center'}>
      <div className='flex'>
        <div className={checkParams ? 'w-[250px]' : 'w-[330px]'}>
          <SideBar />
        </div>
        <div className={checkParams ? 'w-full' : 'w-[785px]'}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
