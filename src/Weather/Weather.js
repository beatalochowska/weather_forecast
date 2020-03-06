import React, { useState, useEffect } from "react";
import "./WeatherStyles.css";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Info from "./Info/Info";

const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
export const INITIAL_DATA_VALUE = null;

const getWeatherData = (city, callback) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(result => {
      callback(result);
    })
    .catch(err => console.log(err + "this is error"));
};

function Weather() {
  const [data, setData] = useState(INITIAL_DATA_VALUE);
  const [city, setCity] = useState(INITIAL_DATA_VALUE);

  const handleSubmit = tempCity => {
    setCity(tempCity);
    setData(INITIAL_DATA_VALUE);
  };

  useEffect(() => {
    if (data === INITIAL_DATA_VALUE) {
      getWeatherData(city, setData);
    }
  }, [data, city]);

  return (
    <div className="temperatureInfo">
      <Title city={city} />
      <Input handleSubmit={handleSubmit} setCity={setCity} />
      <Info data={data} city={city} />
    </div>
  );
}

export default Weather;
