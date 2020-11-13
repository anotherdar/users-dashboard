import * as React from 'react'

import './Header.scss'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <h1>LOGO</h1>
                </div>

                <div className="header-nav__actions">
                    user account
                </div>
            </nav>
        </header>
    )
}