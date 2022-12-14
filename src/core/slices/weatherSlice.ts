import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useHTTP} from "../hooks/useHTTP"

interface State {
    isLoading: boolean,
    weatherCurrentData: any,
    weatherForecastData: any,
    selectedDate: number
}
const initialState: State = {
    isLoading: false,
    weatherCurrentData: {
        weather: [{
            main: "",
            description: ""
        }],
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
        },
        name: "Харьков",
        wind: {
            speed: ""
        },
        timezone: 0,
    },
    weatherForecastData: {
        list: [],
        city: {
            name: "Харьков"
        }
    },
    selectedDate: 0
}

export const currentWeather = createAsyncThunk<any , string>(
    "weather/fetchCurrentWeather",
    (city) => {
        const request = useHTTP()
        return request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=b444944c23dadcd075d20d6636323431`)
})

export const forecastDataWeather = createAsyncThunk<any , string>(
    "weather/fetchForecastWeather",
    (city) => {
        const request = useHTTP()
        return request(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=b444944c23dadcd075d20d6636323431`)
    }
)

const weatherDataSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        fetchCity: (state , action: PayloadAction<string>) => {
            state.weatherCurrentData.name = action.payload
            state.weatherForecastData.city.name = action.payload
        },
        selectedDate: (state , action: PayloadAction<number>) => {
            state.selectedDate = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(currentWeather.pending , (state) => {
            state.isLoading = true
        })
            .addCase(currentWeather.fulfilled , (state, action) => {
                state.isLoading = false
                state.weatherCurrentData = action.payload
            })
            .addCase(forecastDataWeather.pending , (state) => {
                state.isLoading = true
            })
            .addCase(forecastDataWeather.fulfilled , (state , action) => {
                state.isLoading = false
                state.weatherForecastData = action.payload
            })
    }
})

export const {actions: {fetchCity , selectedDate} , reducer} = weatherDataSlice



