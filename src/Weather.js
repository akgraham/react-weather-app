import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Monday 8:00",
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/01d@2x.png",
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
         <form>
          <div className="row">
            <div className="col-9">
              <input type="search" 
              placeholder="Enter a city..." 
              className="form-control"
              autoFocus="on" />
            </div>
             <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
             </div>
          </div>
        </form>
        <h2>{weatherData.date}</h2>
        <h1>{weatherData.city}</h1>
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="units">°F</span>
          <br />
          <img className="icon" src={weatherData.iconUrl} alt={weatherData.description} />
        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
          <br />
          <li><em>{weatherData.humidity}%</em></li>
          <li><em>{Math.round(weatherData.wind)} mph</em></li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let city = "Honolulu";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}