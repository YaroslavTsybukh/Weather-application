import React from "react"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {useAppSelector} from "../../../core/hooks/hooks";
import {v4 as uuidv4} from "uuid";
import {TransformedObject} from "../Days/Days";
import {Slider} from "./Slider/Slider";
import {setZero} from "../../../core/utils/setZero";

import "./modal.scss"

interface IProps {
    setOpen: (value: boolean) => void
}

export const Modal: React.FC<IProps> = ({setOpen}) => {
    const {weatherForecastData: {list} , selectedDate} = useAppSelector(state => state.weather)

    //TODO: need refactor this piece
    const workWithDate = () => {
        const arr: TransformedObject[] = []

        const weekDay: string[] = ["Воскр" , "Пн" , "Вт" , "Ср" , "Чт" , "Пт" , "Сб"]
        const monthsName: string[] = ["янв", "февр", "март" , "апр", "май" , "июнь" , "июль" , "авг", "сент", "окт", "нояб", "дек"]

        const today = new Date()
        const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        const selectedDateValue = new Date(selectedDate * 1000)
        const selectedValue = `${selectedDateValue.getDate()} ${monthsName[selectedDateValue.getMonth()]}`

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
                time: `${setZero(fetchedDate.getHours())}:${setZero(fetchedDate.getMinutes())}:${setZero(fetchedDate.getSeconds())}`

            }
            arr.push(transformedObject)
        })

        const filteredArray: TransformedObject[] = arr.filter((item: TransformedObject) => {
            if(item.dateInfo == selectedValue) return item
        })

        return filteredArray
    }

    const daysArr: TransformedObject[] = workWithDate()

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