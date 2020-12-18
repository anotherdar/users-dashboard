import * as React from "react"
import { useHistory } from "react-router-dom"

import settings from "../assets/working.svg"
import { Path } from "../routes/routesPaths"

export const Settings: React.FC = () => {
    const history = useHistory()
    return (
        <div className="screen">
            <i className="material-icons pointer" onClick={() => history.push(Path.home)}>arrow_back</i>
            <img src={settings} alt="no supported" className="screen--img" />

            <h1 className="screen--h">Oops sorry!</h1>
            <p className="screen--p">work in progress</p>
            <p className="screen--p">mobile app coming soon!, stay tune!</p>
        </div>
    )
}