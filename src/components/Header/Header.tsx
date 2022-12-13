import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select"
import {useContext, useEffect} from "react"
import {Theme, ThemeContext} from "../../context/ThemeContext";

import "./header.scss"

export const Header = () => {
    const theme = useContext(ThemeContext)

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement
        const allProperties = [
            'theme-background',
            'block-color',
            'text-color',
            'card-background'
        ]

        allProperties.forEach(prop => {
            root.style.setProperty(`--${prop}-default` , `var(--${prop}-${theme.theme})`)
        })

    },[theme.theme])

    const options = [
        { value: 'Kharkov', label: 'Харьков' },
        { value: 'Gaysin', label: 'Гайсин' },
        { value: 'Kiev', label: 'Киев' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme == "dark" ? '#4F4F4F' : "rgba(71, 147, 255, 0.2)",
            borderRadius: "10px",
            width: "194px",
        }),
        placeholder: (styles: any) => ({
            ...styles,
            color: theme.theme == "dark" ? "white" : "black",
        })
    }

    const changeThemeColor = () => {
        theme.changeTheme(theme.theme == Theme.Light ? Theme.Dark : Theme.Light)
    }

    return (
        <div className="container">
            <div className="header-wrapper">
                <div className="header-block">
                    <GlobalSvgSelector id={"header-logo"} />
                    <div className="header-block__title">React weather</div>
                </div>
                <div className="header-block">
                    <div className="header-block__theme-color" onClick={changeThemeColor}>
                        <GlobalSvgSelector id={"theme-color"} />
                    </div>
                    <Select options={options} styles={colorStyles} className="header-block__select-city" />
                </div>
            </div>
        </div>
    )
}