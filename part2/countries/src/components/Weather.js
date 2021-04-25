import { React, useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState({})

    const api_key = process.env.REACT_APP_API_KEY


useEffect(() => {
    axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
        .then(response =>
            setWeather(response.data.current))
}, [capital])

return (
    <div>
        <h2>Weather in {capital}</h2>
        <div><b>temperature: </b>{weather.temperature} Celsius</div>
        <img src={weather.weather_icons} alt="weather icon"/>
        <div><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</div>
        
    </div>
)

}

export default Weather

// ($env:REACT_APP_API_KEY='t0p53cr3t4p1k3yv4lu3') -and (npm start)