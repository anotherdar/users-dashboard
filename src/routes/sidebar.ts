import { Path } from "./routesPaths"

export interface ISidebarPaths  {
    path: string,
    name: string
}

export const SidebarPaths: Array<ISidebarPaths> = [
    {
        path: Path.home,
        name: "home"
    },
    {
        path: Path.userCreator,
        name: "user creator"
    },
    {
        path: Path.users,
        name: "users"
    }
]

