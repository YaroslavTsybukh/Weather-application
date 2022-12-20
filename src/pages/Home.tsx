import {Header} from "../components/Header/Header";
import {Day} from "../components/Day/Day"
import {Days} from "../components/Days/Days"
import {Spinner} from "../components/Spinner/Spinner"
import {useAppDispatch, useAppSelector} from "../core/hooks/hooks";
import {useEffect} from "react";
import {currentWeather} from "../core/slices/weatherSlice";

export const HomePage = () => {
    const {isLoading} = useAppSelector(state => state.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(currentWeather())
    } ,[])

    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                {isLoading ? <Spinner/> :
                    <>
                        <Day/>
                        <Days />
                    </>
                }
            </main>
        </>
    )
}