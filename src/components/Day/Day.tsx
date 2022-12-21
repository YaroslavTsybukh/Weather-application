import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {DayInfo} from "./DayInfo/DayInfo";
import {useEffect, useState} from "react";
import {useAppSelector} from "../../core/hooks/hooks";

import './day.scss'

export const Day = () => {
    const [date , setDate] = useState<string>("00:00:00")
    const {weatherData , city} = useAppSelector(state => state.weather)

    useEffect(() => {
        updateDate()
    } , [date])

    const updateDate = () => {
        const addZero = (num: number) => {
            if(num < 10){
                return `0${num}`
            }else{
                return num
            }
        }

        setInterval(() => {
            const date = new Date()
            const hours = addZero(date.getHours())
            const minutes = addZero(date.getMinutes())
            const seconds = addZero(date.getSeconds())

            const time = hours + ":" + minutes + ":" + seconds
            setDate(time)
        } , 1000)
    }

    return(
        <div className="container">
            <div className="day-weather-wrapper">
                <div className="day-weather day-weather_block_first">
                    <div className="day-weather-info">
                        <p className="day-weather-info__temperature">{Math.round(weatherData.main.temp)}°</p>
                        <p className="day-weather-info__day">Сегодня</p>
                        <p className="day-weather-info__time">Время: {date}</p>
                        <p className="day-weather-info__city">Город: {city}</p>
                    </div>
                    <GlobalSvgSelector id={"weather-day"}/>
                </div>
                <DayInfo weatherData={weatherData}/>
            </div>
        </div>
    )
}