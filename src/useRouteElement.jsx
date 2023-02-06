import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderAuth from './layouts/HeaderAuth/HeaderAuth'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import HeaderProfile from './layouts/HeaderProfile/HeaderProfile'
import Login from './pages/Auth/Login/Login'
import LoginWithEmail from './pages/Auth/Login/LoginWithEmail/LoginWithEmail'
import SignUp from './pages/Auth/SignUp/SignUp'
import SignUpWithEmail from './pages/Auth/SignUp/SignUpWithEmail/SignUpWithEmail'

import HomeLayout from './pages/Home/HomeLayout/HomeLayout'
import Following from './pages/Home/Views/Following/Following'
import HomeMain from './pages/Home/Views/HomeMain/HomeMain'
import Live from './pages/Home/Views/Live/Live'
import InforUser from './pages/InforUser/InforUser'
import InforVideos from './pages/InforVideos/InforVideos'
import Upload from './pages/Upload/Upload'

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
      path: 'users/:userId',
      element: (
        <HeaderLayout>
          <HomeLayout />
        </HeaderLayout>
      ),
      children: [
        {
          path: '',
          element: <InforUser />
        }
      ]
    },
    {
      path: '/users/:userId/:videoId',
      element: <InforVideos />
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
    },
    {
      path: '/upload',
      element: (
        <HeaderLayout>
          <Upload />
        </HeaderLayout>
      )
    }
  ])
  return routerElement
}
