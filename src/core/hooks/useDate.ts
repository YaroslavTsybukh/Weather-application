import {setTransformedObject} from "../utils/setTransformedObject";
import {useAppSelector} from "./hooks";

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

type UseDate = () => TransformedObject[]

export const useDate =(selectedDate: number): UseDate => {
    const {list} = useAppSelector(state => state.weather.weatherForecastData)


    const workWithDate = () => {
        const monthsName: string[] = ["янв", "февр", "март" , "апр", "май" , "июнь" , "июль" , "авг", "сент", "окт", "нояб", "дек"]

        let selectedValue: string

            if(selectedDate !== 0){
                const selectedDateValue = new Date(selectedDate * 1000)
                selectedValue = `${selectedDateValue.getDate()} ${monthsName[selectedDateValue.getMonth()]}`
            }

        const arr = setTransformedObject(list , monthsName)

        let filteredArray: TransformedObject[] = []

            if(selectedDate !== 0) {
                filteredArray = arr.filter((item: TransformedObject) => {
                    if(item.dateInfo == selectedValue) return item
                })
            }else{
                filteredArray = arr.filter((item: TransformedObject , index) => {
                    if(arr[index+1] === undefined) return item
                    if(item.dateInfo !== arr[index+1].dateInfo) return item
                })
            }

        return filteredArray
    }

    return workWithDate
}
