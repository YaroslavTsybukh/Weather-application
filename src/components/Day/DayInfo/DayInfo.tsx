import {WeatherSvgSelector} from "../../../assets/icons/weather/WeahertSvgSelector";
import {DayInfoItem} from "./DayInfoItem";

import cloud from "../../../assets/image/cloud.png";

import "./dayInfo.scss"

export interface WeatherInfo {
    "icon_id": string,
    "name": string,
    "value": string
}

export const DayInfo = () => {
    const weatherInfo: WeatherInfo[] = [
        {
            "icon_id": "temp",
            "name": "Температура",
            "value": "20° - ощущается как 17°",
        },
        {
            "icon_id": "pressure",
            "name": "Давление ",
            "value": "765 мм ртутного столба - нормальное",
        },
        {
            "icon_id": "precipitation",
            "name": "Осадки",
            "value": "Без осадков",
        },
        {
            "icon_id": "wind",
            "name": "Ветер",
            "value": "3 м/с юго-запад - легкий ветер",
        }
    ]
    return(
        <div className="day-weather day-weather_block_second">
            <div className="weather-item-wrapper">
                {
                    weatherInfo.map(info => (
                        <DayInfoItem weather={info}/>
                    ))
                }
            </div>
            <img src={cloud} alt="cloud" className="cloud-icon" />
        </div>
    )
}