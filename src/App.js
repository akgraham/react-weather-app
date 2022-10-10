import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="Honolulu" />
       <footer>
         Coded by <a href="https://www.shecodes.io/graduates/34653-anolani-graham" rel="noreferrer" target="_blank">Anolani Graham</a>, open-sourced on {""}
         <a href="https://github.com/akgraham/react-weather-app" rel="noreferrer" target="_blank">
          GitHub</a> and hosted on <a href="https://profound-cranachan-77aabb.netlify.app/" rel="noreferrer" target="_blank"> Netlify</a>
       </footer>
      </div>
    </div>
  );
}