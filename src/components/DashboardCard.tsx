import * as React from "react"

import "./styles/DashboardCard.scss"

type CardSize = "sm" | "md" | "xl"

interface DashBoardCardProps {
    icon: string,
    action?: () => void,
    size?: CardSize
}

export const DashboardCard: React.FC<DashBoardCardProps> = ({ icon, action, children, size }) => {
    const cardSize = (type: CardSize): CardSize => {
        switch (type) {
            case "sm":
                return "sm"
            case "md":
                return "md"
            case "xl":
                return "xl"
            default:
                return "sm"
        }
    }
    return (
        <div className={`Dash-item pointer ${size && cardSize(size)}`} onClick={action}>
            <i className="material-icons">{icon}</i>
            {children}
        </div>
    )
}