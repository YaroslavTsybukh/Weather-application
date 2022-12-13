import {createContext} from "react";

interface Context {
    theme: Theme,
    changeTheme: (theme: Theme) => void
}

export enum Theme {
    Dark = "dark",
    Light = "light"
}

export const ThemeContext = createContext<Context>({
    theme: Theme.Light,
    changeTheme: () => {}
})