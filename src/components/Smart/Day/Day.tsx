import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {DayInfo} from "./DayInfo/DayInfo";
import {useEffect, useMemo, useState} from "react";
import {useAppSelector} from "../../../core/hooks/hooks";
import {setZero} from "../../../core/utils/setZero";

import './day.scss'

export const Day = () => {
    const [date , setDate] = useState<string>("00:00:00")
    const {weatherCurrentData} = useAppSelector(state => state.weather)

    useEffect(() => {
        updateDate()
    } , [date])

    const updateDate = () => {

        setInterval(() => {
            const date = new Date()
            const hours = setZero(date.getHours())
            const minutes = setZero(date.getMinutes())
            const seconds = setZero(date.getSeconds())

            const time = hours + ":" + minutes + ":" + seconds
            setDate(time)
        } , 1000)
    }

    const weatherData = useMemo(() => {
        return <GlobalSvgSelector id={weatherCurrentData.weather[0].main}/>
    }, [weatherCurrentData.weather[0].main])

    return(
        <div className="day-weather-wrapper">
            <div className="day-weather day-weather_block_first">
                <div className="day-weather-info">
                    <p className="day-weather-info__temperature">{Math.round(weatherCurrentData.main.temp)}°</p>
                    <p className="day-weather-info__day">Сегодня</p>
                    <p className="day-weather-info__time">Время: {date}</p>
                    <p className="day-weather-info__city">Город: {weatherCurrentData.name}</p>
                </div>
                {weatherData}
            </div>
            <DayInfo weatherData={weatherCurrentData}/>
        </div>
    )
}