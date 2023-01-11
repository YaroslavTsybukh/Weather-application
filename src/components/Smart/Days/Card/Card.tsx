import React from "react";
import {TransformedObject} from "../../../../core/hooks/useDate";
import {useAppDispatch} from "../../../../core/hooks/hooks";
import {selectedDate} from "../../../../core/slices/weatherSlice";
import {WeatherCardView} from "../../../Simple/WeatherCardView";

import "./card.scss"

export interface IProps {
    dayInfo: TransformedObject,
    setOpen: (value: boolean) => void
}

export const WeatherCard: React.FC<IProps> = ( {dayInfo  , setOpen}) => {
    const {dt} = dayInfo
    const dispatch = useAppDispatch()

    const handleClick = (): void => {
        dispatch(selectedDate(dt as number))
    }

    return(
        <div className="days-weather-info" onClick={() => {setOpen(true); handleClick()}}>
            <WeatherCardView dayInfo={dayInfo} />
        </div>
    )
}

