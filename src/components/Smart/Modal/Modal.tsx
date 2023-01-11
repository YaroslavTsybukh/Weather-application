import React from "react"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {useAppSelector} from "../../../core/hooks/hooks";
import {v4 as uuidv4} from "uuid";
import {TransformedObject} from "../../../core/hooks/useDate";
import {Slider} from "./Slider/Slider";
import {setZero} from "../../../core/utils/setZero";
import {useDate} from "../../../core/hooks/useDate";

import "./modal.scss"

interface IProps {
    setOpen: (value: boolean) => void
}

export const Modal: React.FC<IProps> = ({setOpen}) => {
    const {selectedDate} = useAppSelector(state => state.weather)
    const workWithDate = useDate(selectedDate)

    const daysArr: TransformedObject[] =  workWithDate()

    return(
        <div className="modal-wrapper">
            <div className="modal-block">
                <div className="modal-block__cross" onClick={() => setOpen(false)}>
                    <GlobalSvgSelector id="Cross"/>
                </div>
                <Slider daysInfo={daysArr}/>
            </div>
        </div>
    )
}