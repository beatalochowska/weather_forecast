import React from "react";
import { INITIAL_DATA_VALUE } from "../../constants";

const weatherInfo = (apiData, city) => {
  if (city === INITIAL_DATA_VALUE) {
    return "Type in city";
  }
  if (apiData.list === undefined) {
    return "Didn't find the city";
  }

  const weatherToday = apiData.list[0].weather[0].main;
  const weatherTommorow = apiData.list[1].weather[0].main;
  const temperatureToday = apiData.list[0].main.temp;
  const temperatureTommorow = apiData.list[1].main.temp;

  return (
    <>
      <h3>Today:</h3>
      <p>
        Temperature: {temperatureToday}&#186;C. Conditions: {weatherToday}
      </p>
      <h3>Tommorow:</h3>
      <p>
        Temperature: {temperatureTommorow}&#186;C. Conditions: {weatherTommorow}
      </p>
    </>
  );
};

function Info(props) {
  return props.data === INITIAL_DATA_VALUE ? (
    <h4>Loading...</h4>
  ) : (
    <div>{weatherInfo(props.data, props.city)}</div>
  );
}

export default Info;
