import {Filters} from "./Filters/Filters";
import {WeatherCard} from "./Card/Card";
import {useAppSelector} from "../../core/hooks/hooks";
import { v4 as uuidv4 } from 'uuid';

import "./days.scss"

export interface TransformedObject {
    id: string,
    dateInfo: string,
    weekDay: string
    temp: number,
    feels_like: number,
    weatherDescription: string,
    weatherMain: string
}

export const Days = () => {
    const {list , city} = useAppSelector(state => state.weather.weatherForecastData)

    const workWithDate = () => {
        const arr: TransformedObject[] = []
        const weekDay: string[] = ["Воскр" , "Пн" , "Вт" , "Ср" , "Чт" , "Пт" , "Сб"]
        const monthsName: string[] = ["янв", "февр", "март" , "апр", "май" , "июнь" , "июль" , "авг", "сент", "окт", "нояб", "дек"]
        const today = new Date()
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        list.forEach(({dt , main , weather}:any) => {
            const date = new Date(dt * 1000)

            if(weekDay[today.getDay()] === weekDay[date.getDay()]){
                weekDay.splice(today.getDay() , 1 , "Сегодня")
            } else if (weekDay[tomorrow.getDay()] === weekDay[date.getDay()]){
                weekDay.splice(tomorrow.getDay() , 1 , "Завтра")
            }

            const transformedObject: TransformedObject = {
                id: uuidv4(),
                dateInfo: `${date.getDate()} ${monthsName[date.getMonth()]}`,
                weekDay: `${weekDay[date.getDay()]}`,
                temp: main.temp,
                feels_like: main.feels_like,
                weatherDescription: weather[0].description,
                weatherMain: weather[0].main
            }

            arr.push(transformedObject)
        })

        const filteredArray = arr.filter((item , index) => {
            if(arr[index+1] === undefined) return item
            if(item.dateInfo !== arr[index+1].dateInfo) return item
        })

        return filteredArray
    }

    const daysArr = workWithDate()

    return (
        <div className="days-weather-wrapper">
            <Filters />
            <div className="days-weather">
                {
                    daysArr.map((day) => (
                        <WeatherCard key={day.id} dayInfo={day} />
                    ))
                }
            </div>
        </div>
    )
}