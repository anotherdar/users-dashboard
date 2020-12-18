import * as React from "react"

import "./styles/Title.scss"

interface TitleProps {
    title: string,
    icon?: string,
    hasUnderLine?: boolean
}

export const Title: React.FC<TitleProps> = ({ title, icon, hasUnderLine }) => {
    return (
        <div className="title">
            <div className="title--center">
                <i className="material-icons">{icon}</i>
                <h1>{title}</h1>
            </div>
            {
                hasUnderLine && <hr />
            }
        </div>
    )
}