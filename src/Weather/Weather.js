import React, { useState, useEffect } from "react";

function Weather() {
  const API_KEY = "9634c5e8feb4b0374fe763d401506e5b";

  const [data, setData] = useState(null);
  const [city] = useState("Warszawa");

  useEffect(() => {
    if (data === null) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    }
  }, [data, city]);
  const weather = data === null ? null : data.weather[0].main;
  const temp = data === null ? null : data.main.temp;

  return (
    <>
      <h1>Weather in Warsaw:</h1>
      <div>{weather}</div>
      <div>{temp}</div>
    </>
  );
}

export default Weather;
