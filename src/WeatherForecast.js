import React from "react";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "de2c40e370d58e257faf07ba4ea95840"
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
  <div className="WeatherForecast">
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