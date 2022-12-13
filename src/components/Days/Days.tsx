import {DayInfo} from "../Day/DayInfo/DayInfo";
import {Filters} from "./Filters/Filters";
import {WeatherCard} from "./Card/Card";
import "./days.scss"

export interface Day {
    id: number,
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
            id: 1,
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Ясно',
        },
        {
            id: 2,
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            id: 3,
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь',
        },
        {
            id: 4,
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Пасмурно',
        },
        {
            id: 5,
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Дождь',
        },
        {
            id: 6,
            day: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Ясно',
        },
        {
            id: 7,
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
                            <WeatherCard key={day.id} dayInfo={day}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}