import React, { useState, useEffect } from "react";
import "./WeatherStyles.css";
const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
const INITIAL_DATA_VALUE = null;

const weatherInfo = (apiData, city) => {
  if (city === INITIAL_DATA_VALUE) {
    return "Type in city";
  } else if (apiData.list === undefined) {
    return "Didn't find the city";
  } else {
    const weather = apiData.list[0].weather[0].main;
    const temperature = apiData.list[0].main.temp;
    return `Temperature ${temperature}; Conditions: ${weather}`;
  }
};

const getWeatherData = (city, callback) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(result => {
      callback(result);
      console.log("Result");
      console.log(result);
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
        {city === INITIAL_DATA_VALUE ? (
          <h1 className="temperatureInfo_title">
            To check weather type in city
          </h1>
        ) : (
          <h1 className="temperatureInfo_title">Weather in {city}</h1>
        )}
        <form
          onSubmit={event => handleSubmit(event, setData, setCity, tempCity)}
        >
          <input
            type="text"
            onChange={event => handleChange(event, setTempCity)}
          />

          <button type="submit">submit</button>
        </form>

        {data === INITIAL_DATA_VALUE ? (
          <div>Loading...</div>
        ) : (
          <div>{weatherInfo(data, city)}</div>
        )}
      </div>
    </>
  );
}

export default Weather;
