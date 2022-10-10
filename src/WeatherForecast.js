import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast() {
  return (
  <div classname="WeatherForecast">
    <div className="row">
      <div className="col-2">
        <div className="Forecast-day">Tue</div>
            <div className="icon">
              <img className="icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="test-icon" width="42" />
            </div>
        <div className="Forecast-temperatures">
          <span className="Forecast-temp-max">87°</span>
          {" "}
          <span className="Forecast-temp-min">64°</span>
        </div>
      </div>
    </div>
  </div>
  );
}