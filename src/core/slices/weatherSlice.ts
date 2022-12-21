import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useHTTP} from "../hooks/http.hook"

interface State {
    isLoading: boolean,
    weatherCurrentData: any
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
}

export const currentWeather = createAsyncThunk<any , string>(
    "weather/fetchCurrent",
    (city) => {
        const request = useHTTP()
        return request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=b444944c23dadcd075d20d6636323431`)
})


const weatherDataSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        fetchCurrentCity: (state , action: PayloadAction<string>) => {
            state.weatherCurrentData.name = action.payload
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
    }
})
export const {actions: {fetchCurrentCity}} = weatherDataSlice
export const {reducer} = weatherDataSlice



