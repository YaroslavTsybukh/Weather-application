import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import './day.scss'

export const Day = () => {
    return(
        <div className={"container"}>
            <div className="day-weather-wrapper">
                <div className="day-weather day-weather_block_first">
                    <div className="day-weather-info">
                        <p className="day-weather-info__temperature">20°</p>
                        <p className="day-weather-info__day">Сегодня</p>
                        <p className="day-weather-info__time">Время: 21:54</p>
                        <p className="day-weather-info__city">Город: Харьков</p>
                    </div>
                    <GlobalSvgSelector id={"weather-day"} />
                </div>
                <div className="day-weather day-weather_block_second">

                </div>
            </div>
        </div>
    )
}