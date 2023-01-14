import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderAuth from './layouts/HeaderAuth/HeaderAuth'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HeaderProfile from './layouts/HeaderProfile/HeaderProfile'
import Login from './pages/Auth/Login'
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
          path: 'users/:userId',
          element: <InforUser />
        }
      ]
    },
    {
      path: '/profile',
      element: (
        <HeaderProfile>
          <Profile />
        </HeaderProfile>
      )
    },
    {
      path: '/login',
      element: (
        <HeaderAuth>
          <Login />
        </HeaderAuth>
      )
    }
  ])
  return routerElement
}
