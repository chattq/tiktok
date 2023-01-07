import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import Following from './pages/Following/Following'
import HomeLayout from './pages/Home/HomeLayout/HomeLayout'
import HomeMain from './pages/Home/Views/HomeMain/HomeMain'
import Live from './pages/Live/Live'
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
