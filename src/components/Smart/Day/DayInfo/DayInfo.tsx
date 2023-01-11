import {DayInfoItem} from "./DayInfoItem";

import cloud from "../../../../assets/image/cloud.png";

import "./dayInfo.scss"

interface Props {
    weatherData: any
}

export interface WeatherInfo {
    "id": number,
    "icon_id": string,
    "name": string,
    "value": string
}

export const DayInfo = ({weatherData}: Props) => {
    const weatherInfo: WeatherInfo[] = [
        {
            "id": 1,
            "icon_id": "temp",
            "name": "Температура",
            "value": `${Math.round(weatherData.main.temp)}° - ощущается как ${Math.round(weatherData.main.feels_like)}°`,
        },
        {
            "id": 2,
            "icon_id": "pressure",
            "name": "Давление ",
            "value": `${Math.round(weatherData.main.pressure)} мм ртутного столба`,
        },
        {
            "id": 3,
            "icon_id": "precipitation",
            "name": "Осадки",
            "value": `${weatherData.weather[0].description}`,
        },
        {
            "id": 4,
            "icon_id": "wind",
            "name": "Ветер",
            "value": ` ${weatherData.wind.speed} м/с`,
        }
    ]

    return(
        <div className="day-weather day-weather_block_second">
            <div className="weather-item-wrapper">
                {
                    weatherInfo.map(info => (
                        <DayInfoItem key={info.id} weather={info}/>
                    ))
                }
            </div>
            <img src={cloud} alt="cloud" className="cloud-icon" />
        </div>
    )
}