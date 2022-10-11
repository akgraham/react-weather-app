import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
            <div className="forecast-icons">
                <WeatherIcon code={props.data.weather[0].icon} size={36} />
              </div>
            <div className="Forecast-temperatures">
              <span className="Forecast-temp-max">{maxTemperature()}</span>
              {" "}
              <span className="Forecast-temp-min">{minTemperature()}</span>
            </div>
      </div>
  );
}