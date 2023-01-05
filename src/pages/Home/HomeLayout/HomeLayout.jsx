import React from 'react'
import HomeMain from '../Views/HomeMain/HomeMain'
import SideBar from '../Views/Sidebar/SideBar'

export default function HomeLayout() {
  return (
    <div>
      <div className='flex'>
        <div className=' inline-block min-w-[200px] bg-slate-600'>
          <SideBar />
        </div>
        <div>
          <HomeMain />
        </div>
      </div>
    </div>
  )
}
