import * as React from "react"
import SmallDevice from "../assets/smalldevices.svg"
import "./SmallScreen.scss"

export const SmallScreens: React.FC = () => {
    return (
        <div className="small-screen">
            <img src={SmallDevice} alt="no supported" className="small-screen--img" />

            <h1 className="small-screen--h">Ops sorry!</h1>
            <p className="small-screen--p">to give you the best of us, we don't support small screen devices.</p>
            <p className="small-screen--p">mobile app coming soon!, stay tune!</p>
        </div>
    )
}