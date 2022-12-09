import {WeatherSvgSelector} from "../../../assets/icons/weather/WeahertSvgSelector";
import {Day} from "../Days";

import "./card.scss"

interface Props {
    dayInfo: Day
}

export const WeatherCard = ( {dayInfo} : Props) => {
    const {day , day_info , icon_id , temp_day , temp_night , info} = dayInfo
    return(
        <div className="days-weather-info">
            <p className="days-weather-info__day">{day}</p>
            <p className="days-weather-info__date">{day_info}</p>
            <WeatherSvgSelector id={icon_id} />
            <p className="days-weather-info__temp-day">{temp_day}</p>
            <p className="days-weather-info__temp-night">{temp_night}</p>
            <p className="days-weather-info__title">{info}</p>
        </div>
    )
}