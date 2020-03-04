import React, { useState, useEffect } from "react";
import "./WeatherStyles.css";
const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
const INITIAL_DATA_VALUE = null;

const weatherInfo = (apiData, city) => {
  if (city === INITIAL_DATA_VALUE) {
    return "Wpisz miasto";
  } else if (apiData.weather === undefined) {
    return "Nie znaleziono takiego miasta";
  } else {
    const weather = apiData.weather[0].main;
    const temp = apiData.main.temp;
    return `Temperature ${temp}; Conditions: ${weather}`;
  }
};

const getWeatherData = (city, callback) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(result => {
      callback(result);
      console.log(result);
    })
    .catch(err => console.log(err + "this is error"));
};

const updateData = (setData, setCity, tempCity, INITIAL_DATA_VALUE) => {
  setData(INITIAL_DATA_VALUE);
  setCity(tempCity);
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
        {city === INITIAL_DATA_VALUE ? (
          <h1 className="temperatureInfo_title">
            To check weather type in city
          </h1>
        ) : (
          <h1 className="temperatureInfo_title">Weather in {city}</h1>
        )}

        <input
          type="text"
          onChange={event => setTempCity(event.target.value)}
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={() =>
            updateData(setData, setCity, tempCity, INITIAL_DATA_VALUE)
          }
        />
        {console.log(city)}
        {data === INITIAL_DATA_VALUE ? (
          <div>Brak danych.</div>
        ) : (
          <div>{weatherInfo(data, city)}</div>
        )}
      </div>
    </>
  );
}

export default Weather;
