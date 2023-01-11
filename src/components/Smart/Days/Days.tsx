import {useState} from "react";
import {WeatherCard} from "./Card/Card";
import {Modal} from "../Modal/Modal";
import {Portal} from "../../Smart/Portal/Portal";
import {useDate} from "../../../core/hooks/useDate";
import {TransformedObject} from "../../../core/hooks/useDate";

import "./days.scss"

 export const Days = () => {
    const [open , setOpen] = useState(false)
    const workWithDate = useDate(0)

    const daysArr: TransformedObject[] = workWithDate()

    return (
        <>
            <div className="days-weather-wrapper">
                <div className="days-weather">
                    {
                        daysArr.map((day) => (
                            <WeatherCard key={day.id}
                                         dayInfo={day}
                                         setOpen={setOpen}/>
                        ))
                    }
                </div>
            </div>
            <Portal open={open}>
                <Modal setOpen={setOpen}/>
            </Portal>
        </>
    )
}