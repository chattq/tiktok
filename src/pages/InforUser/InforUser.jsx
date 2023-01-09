import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideBar from '../Home/Views/Sidebar/SideBar'

export default function InforUser() {
  const { id } = useParams()
  console.log(7, id)
  return <div>{id}</div>
}
