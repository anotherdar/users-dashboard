import * as React from 'react'

import './Sidebar.scss'

import { NavigationLink } from './LinkItem'

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <NavigationLink path="/">Home</NavigationLink>
            <NavigationLink path="/user_creator">user creator</NavigationLink>
            <NavigationLink path="/users">Users</NavigationLink>
        </div>
    )
}