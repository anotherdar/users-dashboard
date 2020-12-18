import { UserCreator, Users } from "../features/users";
import { DashBoard } from "../pages/DashBoard";
import { Path } from "./routesPaths";
import { FC } from "react"

interface IHomeRoutes {
    path: Path,
    component: FC
}

export const HomeRoutes: Array<IHomeRoutes> = [
    {
        path: Path.userCreator,
        component: UserCreator
    },
    {
        path: Path.users,
        component: Users
    },

    {
        path: Path.home,
        component: DashBoard
    }
]