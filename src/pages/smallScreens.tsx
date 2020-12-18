import * as React from "react"
import SmallDevice from "../assets/smalldevices.svg"
import "./styles/ScreenMessage.scss"

export const SmallScreens: React.FC = () => {
    return (
        <div className="screen">
            <img src={SmallDevice} alt="no supported" className="screen--img" />

            <h1 className="screen--h">Ops sorry!</h1>
            <p className="screen--p">to give you the best of us, we don't support small screen devices.</p>
            <p className="screen--p">mobile app coming soon!, stay tune!</p>
        </div>
    )
}