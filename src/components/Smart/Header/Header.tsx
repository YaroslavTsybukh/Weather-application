import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {useContext, useEffect , ChangeEvent ,KeyboardEvent, useState} from "react"
import {Theme, ThemeContext} from "../../../context/ThemeContext";
import {fetchCity} from "../../../core/slices/weatherSlice";
import {useAppDispatch} from "../../../core/hooks/hooks";
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';

import "./header.scss"

enum Color {
    Light_Blue = "#4793ff",
    Grey = "#939CB0"
}

export const Header = () => {
    const [text , setText] = useState("")
    const dispatch = useAppDispatch()
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

    const changeThemeColor = (): void => {
        theme.changeTheme(theme.theme == Theme.Light ? Theme.Dark : Theme.Light)
    }

    const CustomTextField = styled(TextField)({
        'label.Mui-focused': {
            color: Color.Grey,
        },
        'label': {
            color: theme.theme == "dark" ? 'white' : Color.Grey
        },
        '.MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: Color.Light_Blue,
            },
            '&:hover fieldset': {
                borderColor: Color.Light_Blue,
            },
            '&.Mui-focused fieldset': {
                borderColor: Color.Grey,
            },
            '& input': {
                color: Color.Grey,
            }
        },
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value)
    }

    const handleKeyboard = (e:KeyboardEvent<HTMLInputElement>): void => {
        if(e.code == "Enter") dispatch(fetchCity(text))
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
                    <CustomTextField  className="header-block__select-city"
                                      label="Search city"
                                      type="search"
                                      value={text}
                                      autoFocus
                                      onChange={handleChange}
                                      onKeyDown={handleKeyboard}/>
                </div>
            </div>
        </div>
    )
}