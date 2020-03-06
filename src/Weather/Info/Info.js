import React from "react";
const INITIAL_DATA_VALUE = null;

const weatherInfo = (apiData, city) => {
  if (city === INITIAL_DATA_VALUE) {
    return "Type in city";
  } else if (apiData.list === undefined) {
    return "Didn't find the city";
  } else {
    const weatherToday = apiData.list[0].weather[0].main;
    const weatherTommorow = apiData.list[1].weather[0].main;
    const temperatureToday = apiData.list[0].main.temp;
    const temperatureTommorow = apiData.list[1].main.temp;
    return (
      <>
        <div>Today:</div>
        <div>
          Temperature: {temperatureToday}&#186;C. Conditions: {weatherToday}
        </div>
        <div>Tommorow:</div>
        <div>
          Temperature: {temperatureTommorow}&#186;C. Conditions:{" "}
          {weatherTommorow}
        </div>
      </>
    );
  }
};

function Info(props) {
  return props.data === INITIAL_DATA_VALUE ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>{weatherInfo(props.data, props.city)}</div>
    </div>
  );
}

export default Info;
