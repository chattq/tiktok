import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderAuth from './layouts/HeaderAuth/HeaderAuth'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HeaderProfile from './layouts/HeaderProfile/HeaderProfile'
import Login from './pages/Auth/Login/Login'
import LoginWithEmail from './pages/Auth/Login/LoginWithEmail/LoginWithEmail'
import SignUp from './pages/Auth/SignUp/SignUp'
import SignUpWithEmail from './pages/Auth/SignUp/SignUpWithEmail/SignUpWithEmail'
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
    },
    {
      path: '/login/email',
      element: (
        <HeaderAuth>
          <LoginWithEmail />
        </HeaderAuth>
      )
    },
    {
      path: '/signup',
      element: (
        <HeaderAuth>
          <SignUp />
        </HeaderAuth>
      )
    },
    {
      path: '/signup/email',
      element: (
        <HeaderAuth>
          <SignUpWithEmail />
        </HeaderAuth>
      )
    }
  ])
  return routerElement
}
