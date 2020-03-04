import React, { useState, useEffect } from "react";
const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";
const INITIAL_WEATHER_STATE = null;

function createWeatherDescription(apiData) {
  const weather = apiData.weather[0].main;
  const temperature = apiData.main.temp;
  const nextDayTemperature = apiData.main.temp;

  return `Mamy około ${temperature} stopni a pogodę po angielsku bym nazwała ${weather}.`;
}

function getWeather(city, callback) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(result => {
      callback(result);
    });
}

function Weather() {
  const [data, setData] = useState(INITIAL_WEATHER_STATE);
  const [city] = useState("Warszawa");

  useEffect(() => {
    if (data === INITIAL_WEATHER_STATE) {
      getWeather(city, setData);
    }
  }, [data, city]);

  if (data === INITIAL_WEATHER_STATE) {
    return <p>Brak danych, może się ładują. Chyba.</p>;
  }

  return <p>{createWeatherDescription(data)}</p>;
}

export default Weather;
