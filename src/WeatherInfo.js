import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2><FormattedDate date={props.data.date} /></h2>
        <h1>{props.data.city}</h1>
        <WeatherTemperature fahrenheit={props.data.temperature}/>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <br />
          <li><em>Humidity: {props.data.humidity}%</em></li>
          <li><em>Wind: {Math.round(props.data.wind)} mph</em></li>
          <br />
          <br />
        </ul>
    </div>
  );
}