import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2><FormattedDate date={props.data.date} /></h2>
        <h1>{props.data.city}</h1>
        <WeatherTemperature fahrenheit={props.data.temperature}/>
          <img className="icon" src={props.data.iconUrl} alt={props.data.description} width="120" />
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <br />
          <li><em>{props.data.humidity}%</em></li>
          <li><em>{Math.round(props.data.wind)} mph</em></li>
        </ul>
    </div>
  );
}