import {WeatherSvgSelector} from "../../../assets/icons/weather/WeatherSvgSelector";
import {TransformedObject} from "../Days";

import "./card.scss"

interface Props {
    dayInfo: TransformedObject
}

export const WeatherCard = ( {dayInfo : {dateInfo , weekDay , feels_like , temp , weatherDescription , weatherMain}}: Props) => {
    return(
        <div className="days-weather-info">
            <p className="days-weather-info__day">{weekDay}</p>
            <p className="days-weather-info__date">{dateInfo}</p>
            <WeatherSvgSelector id={weatherMain} />
            <p className="days-weather-info__temp-day">{Math.round(temp)}°</p>
            <p className="days-weather-info__temp-night">{Math.round(feels_like)}°</p>
            <p className="days-weather-info__title">{weatherDescription}</p>
        </div>
    )
}