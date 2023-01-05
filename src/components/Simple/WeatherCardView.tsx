import React from "react";
import {WeatherSvgSelector} from "../../assets/icons/weather/WeatherSvgSelector";
import {IProps} from "../Smart/Days/Card/Card";

type ViewComponent = Omit<IProps , "setOpen">

export const WeatherCardView: React.FC<ViewComponent> = ({dayInfo : {dateInfo , weekDay , feels_like , temp , weatherDescription , weatherMain , time}}) => {
    return(
        <>
            <p className="days-weather-info__day">{weekDay}</p>
            <p className="days-weather-info__time">{time}</p>
            <p className="days-weather-info__date">{dateInfo}</p>
            <WeatherSvgSelector id={weatherMain} />
            <p className="days-weather-info__temp-day">{temp}°</p>
            <p className="days-weather-info__temp-night">{feels_like}°</p>
            <p className="days-weather-info__title">{weatherDescription}</p>
        </>
    )
}