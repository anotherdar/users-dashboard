import * as React from 'react'

import { NavLink, useHistory } from 'react-router-dom'

import './LinkItem.scss'

interface NavigationLinkProps {
    path: string
}

export const NavigationLink:React.FC<NavigationLinkProps> = (props) => {
    const {path, children} = props

    const {location} = useHistory()

    console.log(path, path === location.pathname)

    return (
        <NavLink 
            to={path} 
            activeClassName="link__active"
            isActive={() => path === location.pathname} 
            className="link" 
        >
            <h1>{children}</h1>
        </NavLink>
    )
}