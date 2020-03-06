import React, { useState, useEffect } from "react";
import "./WeatherStyles.css";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Info from "./Info/Info";

const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
const INITIAL_DATA_VALUE = null;

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

const handleSubmit = (event, setData, setCity, tempCity) => {
  event.preventDefault();
  setCity(tempCity);
  setData(INITIAL_DATA_VALUE);
};

const handleChange = (event, setTempCity) => {
  setTempCity(event.target.value);
};

function Weather() {
  const [data, setData] = useState(INITIAL_DATA_VALUE);
  const [city, setCity] = useState(INITIAL_DATA_VALUE);
  const [tempCity, setTempCity] = useState(INITIAL_DATA_VALUE);

  useEffect(() => {
    if (data === INITIAL_DATA_VALUE) {
      getWeatherData(city, setData);
    }
  }, [data, city]);

  return (
    <>
      <div className="temperatureInfo">
        <Title city={city} tempCity={tempCity} />
        <Input
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          setData={setData}
          setCity={setCity}
          tempCity={tempCity}
          setTempCity={setTempCity}
        />

        <Info data={data} city={city} tempCity={tempCity} />
      </div>
    </>
  );
}

export default Weather;
