import React, {useState} from "react";
import {WeatherCard} from "./Card/Card";
import {useAppSelector} from "../../../core/hooks/hooks";
import { v4 as uuidv4 } from 'uuid';
import {Modal} from "../Modal/Modal";
import {Portal} from "../../Smart/Portal/Portal";
import {setZero} from "../../../core/utils/setZero";
import "./days.scss"

export interface TransformedObject {
    id: string,
    dateInfo: string,
    weekDay: string
    temp: number,
    feels_like: number,
    weatherDescription: string,
    weatherMain: string,
    dt?: number,
    time?: string
}

export const Days = () => {
    const [open , setOpen] = useState(false)
    const {list} = useAppSelector(state => state.weather.weatherForecastData)

    //TODO: need refactor this piece
    const workWithDate = () => {
        const arr: TransformedObject[] = []

        const weekDay: string[] = ["Воскр" , "Пн" , "Вт" , "Ср" , "Чт" , "Пт" , "Сб"]
        const monthsName: string[] = ["янв", "февр", "март" , "апр", "май" , "июнь" , "июль" , "авг", "сент", "окт", "нояб", "дек"]

        const today = new Date()
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        list.forEach(({dt , main , weather}:any): void => {
            const fetchedDate = new Date(dt * 1000)

            if(weekDay[today.getDay()] === weekDay[fetchedDate.getDay()]){
                weekDay.splice(today.getDay() , 1 , "Сегодня")
            } else if (weekDay[tomorrow.getDay()] === weekDay[fetchedDate.getDay()]){
                weekDay.splice(tomorrow.getDay() , 1 , "Завтра")
            }

            const transformedObject: TransformedObject = {
                id: uuidv4(),
                dateInfo: `${fetchedDate.getDate()} ${monthsName[fetchedDate.getMonth()]}`,
                weekDay: `${weekDay[fetchedDate.getDay()]}`,
                temp: Math.round(main.temp),
                feels_like: Math.round(main.feels_like),
                weatherDescription: weather[0].description,
                weatherMain: weather[0].main,
                time: `${setZero(fetchedDate.getHours())}:${setZero(fetchedDate.getMinutes())}:${setZero(fetchedDate.getSeconds())}`,
                dt: dt
            }
            arr.push(transformedObject)
        })

        const filteredArray: TransformedObject[] = arr.filter((item: TransformedObject , index) => {
            if(arr[index+1] === undefined) return item
            if(item.dateInfo !== arr[index+1].dateInfo) return item
        })

        return filteredArray
    }

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