import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2><FormattedDate date={props.data.date} /></h2>
        <h1>{props.data.city}</h1>
          <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="units">°F</span>
          <br />
          <img className="icon" src={props.data.iconUrl} alt={props.data.description} />
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <br />
          <li><em>{props.data.humidity}%</em></li>
          <li><em>{Math.round(props.data.wind)} mph</em></li>
        </ul>
    </div>
  );
}