import React from 'react'
import { useRoutes } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'
import Profile from './pages/Profile/Profile'

export default function useRouteElement() {
    const routerElement = useRoutes([
        {
            path :'/profile',
            element: 
                <HeaderLayout>
                    <Profile />
                </HeaderLayout>
        }
    ])
    return routerElement
}
