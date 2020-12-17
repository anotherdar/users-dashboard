import * as React from 'react'

import { NavLink, useHistory } from 'react-router-dom'

import './LinkItem.scss'

interface NavigationLinkProps {
    path: string,
    icon?: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    const { path, children, icon } = props

    const { location } = useHistory()

    return (
        <NavLink
            to={path}
            activeClassName="link__active"
            isActive={() => path === location.pathname}
            className="link"
        >
            {icon &&
                <i className="material-icons">{icon}</i>
            }
            <h1
                style={{
                    marginLeft: icon ? "var(--sm-size)" : ""
                }}
            >{children}</h1>
        </NavLink>
    )
}