import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HomeLayout from './pages/Home/HomeLayout/HomeLayout'
import Profile from './pages/Profile/Profile'

export default function useRouteElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: (
        <HeaderLayout>
          <HomeLayout />
        </HeaderLayout>
      )
    },
    {
      path: '/profile',
      element: (
        <HeaderLayout>
          <Profile />
        </HeaderLayout>
      )
    }
  ])
  return routerElement
}
