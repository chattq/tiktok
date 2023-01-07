import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderAuth from './layouts/HeaderAuth/HeaderAuth'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HeaderProfile from './layouts/HeaderProfile/HeaderProfile'
import Login from './pages/Auth/Login'
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
