import * as React from 'react'

import './styles/Container.scss'

export const Container: React.FC = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}