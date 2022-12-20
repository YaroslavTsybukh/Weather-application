import {Theme, ThemeContext} from "../../context/ThemeContext";
import {ReactNode, useState} from "react";

const {Provider} = ThemeContext

interface Props {
    children : ReactNode
}

export const ThemeProvider = ({children}: Props) => {
    const [theme , setTheme] = useState<Theme>(JSON.parse(localStorage.getItem("theme")!) || Theme.Light)

    const changeTheme = (theme : Theme) => {
        setTheme(theme)
        localStorage.setItem("theme", JSON.stringify(theme))
    }

    return (
        <Provider value={{theme , changeTheme}}>
            {children}
        </Provider>
    )
}