import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select"

import "./header.scss"

export const Header = () => {
    const options = [
        { value: 'Kharkov', label: 'Харьков' },
        { value: 'Gaysin', label: 'Гайсин' },
        { value: 'Kiev', label: 'Киев' }
    ]

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: "rgba(71, 147, 255, 0.2)",
            borderRadius: "10px",
            width: "194px",
        })
    }

    return (
        <div className="container">
            <div className="header-wrapper">
                <div className="header-block">
                    <GlobalSvgSelector id={"header-logo"} />
                    <div className="header-title">React weather</div>
                </div>
                <div className="header-block">
                    <GlobalSvgSelector id="theme-color" />
                    <Select options={options} styles={colorStyles} className="header-select-city"/>
                </div>
            </div>
        </div>
    )
}