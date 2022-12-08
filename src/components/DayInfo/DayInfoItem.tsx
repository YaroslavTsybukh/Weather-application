import {WeatherInfo} from "./DayInfo";
import {WeatherSvgSelector} from "../../assets/icons/weather/WeahertSvgSelector";

interface Prop {
    weather: WeatherInfo
}

export const DayInfoItem = ({weather}: Prop) => {
    const {icon_id , name , value} = weather

    return(
        <div className="weather-item">
            <div className="weather-item__icon-block">
                <WeatherSvgSelector id={icon_id}/>
            </div>
            <p className="weather-item__name">{name}</p>
            <p className="weather-item__value">{value}</p>
        </div>
    )
}