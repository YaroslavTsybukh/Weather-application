import React, {useMemo} from "react"
import {createPortal} from "react-dom";
import {useEffect} from "react";

import "../Modal/modal.scss"

interface IProps {
    open: boolean,
    children : JSX.Element
}

export const Portal: React.FC<IProps> = ({open , children}) => {
    const root = document.querySelector("#root") as HTMLElement
    const element = document.createElement("div") as HTMLElement

    useEffect(() => {
        element.classList.add("modal")
        root.after(element)

        return () => {
            element.remove()
        }
    })

    if(open) {
        return createPortal( children, element)
    } else {
        return null
    }
}