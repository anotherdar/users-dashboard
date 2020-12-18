import * as React from 'react'
import './styles/Sidebar.scss'

import { SidebarPaths } from "../routes"
import { NavigationLink } from './LinkItem'

export const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            {
                SidebarPaths.map(i => {
                    return (
                        <NavigationLink key={i.name} path={i.path} icon={i.icon}>{i.name}</NavigationLink>
                    )
                })
            }
        </div>
    )
}