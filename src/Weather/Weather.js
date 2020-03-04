import React, { useState, useEffect } from "react";
const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
const INITIAL_DATA_VALUE = null;

const weatherInfo = (apiData, city) => {
  if (apiData.weather == undefined) {
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

function Weather() {
  const [data, setData] = useState(INITIAL_DATA_VALUE);
  const [city, setCity] = useState("Warsaw");

  useEffect(() => {
    if (data === INITIAL_DATA_VALUE) {
      getWeatherData(city, setData);
    }
  }, [data, city]);

  return (
    <>
      <h1>Weather in {city}</h1>
      <input
        type="text"
        onChange={event => setCity(event.target.value)}
      ></input>
      <input
        type="submit"
        value="Submit"
        onClick={() => setData(INITIAL_DATA_VALUE)}
      />
      {console.log(city)}
      {data === INITIAL_DATA_VALUE ? (
        <div>Brak danych.</div>
      ) : (
        <div>{weatherInfo(data, city)}</div>
      )}
    </>
  );
}

export default Weather;
