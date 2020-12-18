import * as React from "react"
import "./styles/Banner.scss"

type BannerMode = "warning" | "success" | "error"

interface BannerProperties {
    type: BannerMode,
    message: string
}

export const Banner: React.FC<BannerProperties> = ({ type, message }) => {
    const returnIcon = (mode: BannerMode): string => {
        switch (mode) {
            case "success":
                return "check_circle"
            case "warning":
                return "warning"
            case "error":
                return "error"
        }
    }
    const returnClassType = (mode: BannerMode): string => {
        switch (mode) {
            case "success":
                return "--success"
            case "warning":
                return "--warning"
            case "error":
                return "--error"
        }
    }
    return (
        <div className={`Banner Banner${returnClassType(type)}`}>
            <i className="material-icons">{returnIcon(type)}</i>
            <p>{message}</p>
        </div>
    )
}