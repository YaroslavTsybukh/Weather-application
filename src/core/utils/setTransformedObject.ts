import {v4 as uuidv4} from "uuid";
import {setZero} from "./setZero";
import {TransformedObject} from "../hooks/useDate";

export const setTransformedObject = (list: any , monthsName: string[]) => {
    const arr: TransformedObject[] = []

    const weekDay: string[] = ["Воскр" , "Пн" , "Вт" , "Ср" , "Чт" , "Пт" , "Сб"]

    const today = new Date()
    const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

    list.forEach(({dt , main , weather}: any): void => {
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

    return arr
}