import { Path } from "./routesPaths"

export interface ISidebarPaths  {
    path: string,
    name: string,
    icon: string
}

export const SidebarPaths: Array<ISidebarPaths> = [
    {
        path: Path.home,
        name: "home",
        icon: "home"
    },
    {
        path: Path.userCreator,
        name: "user creator",
        icon: "person_add"
    },
    {
        path: Path.users,
        name: "users",
        icon: "person"
    }
]

