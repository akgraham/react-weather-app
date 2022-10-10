import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h2>Monday 8:00</h2>
      <h1>Honolulu</h1>
        <span className="temperature">75</span>
        <span className="units">°F</span>
        <br />
        <img className="icon" src="https://openweathermap.org/img/wn/01d@2x.png" alt="sunny" />
      <ul>
        <li className="description">Sunny</li>
        <br />
        <li><em>Humidity: 15%</em></li>
        <li><em>Wind: 2 mph</em></li>
      </ul>
    </div>
  )
}