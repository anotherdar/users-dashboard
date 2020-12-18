import * as React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { Title, DashboardCard } from "../components"

import { userSelector } from "../features/users/userSlice"
import { Path } from "../routes/routesPaths"

import "./styles/dashboard.scss"

export const DashBoard: React.FC = () => {
    const state = useSelector(userSelector)
    const history = useHistory()

    return (
        <div className="dashboard">
            <Title icon="dashboard" title="Hey! User, Welcome back!." />
            <div className="dashboard-content">
                <div className="dashboard-content--panel shadow">
                    <DashboardCard icon="people" size="sm">
                        <p>
                            users: {state.length}
                        </p>
                    </DashboardCard>
                    <DashboardCard
                        icon="person_add"
                        size="sm"
                        action={() => history.push(Path.userCreator)}
                    >
                        <p>
                            create
                        </p>
                    </DashboardCard>
                    <DashboardCard
                        icon="settings"
                        size="sm"
                        action={() => history.push(Path.settings)}
                    >
                        <p>
                            settings
                        </p>
                    </DashboardCard>
                    <DashboardCard
                        icon="help"
                        size="sm"
                        action={() => history.push(Path.help)}
                    >
                        <p>
                            help
                        </p>
                    </DashboardCard>
                </div>
                <div className="dashboard-content--panel">

                </div>
            </div>
        </div>
    )
}