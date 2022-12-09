import {DayInfo} from "../Day/DayInfo/DayInfo";
import {Filters} from "./Filters/Filters";
import {WeatherCard} from "./Card/Card";
import "./days.scss"

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

export const Days = () => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Ясно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Пасмурно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Дождь',
        },
        {
            day: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Ясно',
        },
        {
            day: 'Вс',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Ясно',
        },
    ];

    return (
        <div className="container">
            <div className="days-weather-wrapper">
                <Filters />
                <div className="days-weather">
                    {
                        days.map(day => (
                            <WeatherCard dayInfo={day}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}