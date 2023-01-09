import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HomeLayout from './pages/Home/HomeLayout/HomeLayout'
import Following from './pages/Home/Views/Following/Following'
import HomeMain from './pages/Home/Views/HomeMain/HomeMain'
import Live from './pages/Home/Views/Live/Live'
import InforUser from './pages/InforUser/InforUser'
import Profile from './pages/Profile/Profile'

export default function useRouteElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: (
        <HeaderLayout>
          <HomeLayout />
        </HeaderLayout>
      ),
      children: [
        {
          path: '',
          element: <HomeMain />
        },
        {
          path: '/live',
          element: <Live />
        },
        {
          path: '/following',
          element: <Following />
        },
        {
          path: 'users/:id',
          element: <InforUser />
        }
      ]
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
