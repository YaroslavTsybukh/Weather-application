import {Header} from "../components/Header/Header";
import {Day} from "../components/Day/Day"
import {Days} from "../components/Days/Days"
import {Spinner} from "../components/Spinner/Spinner"
import {useAppDispatch, useAppSelector} from "../core/hooks/hooks";
import {useEffect} from "react";
import {currentWeather, forecastDataWeather} from "../core/slices/weatherSlice";

export const HomePage = () => {
    const {isLoading , weatherCurrentData: {name} , weatherForecastData: {city}} = useAppSelector(state => state.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(currentWeather(name))
    } ,[name])

    useEffect(() => {
        dispatch(forecastDataWeather(city.name))
    },[city.name])

    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                {isLoading ? <Spinner/> :
                    <div className="container">
                        <Day/>
                        <Days />
                    </div>
                }
            </main>
        </>
    )
}