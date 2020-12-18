import * as React from 'react'

import './styles/Content.scss'

export const Content: React.FC = ({ children }) => {

    return (
        <div className="content">
            {children}
        </div>
    )
}