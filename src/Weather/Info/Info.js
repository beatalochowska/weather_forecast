import React from "react";
const INITIAL_DATA_VALUE = null;

const weatherInfo = (apiData, city) => {
  if (city === INITIAL_DATA_VALUE) {
    return "Type in city";
  } else if (apiData.list === undefined) {
    return "Didn't find the city";
  } else {
    const weather = apiData.list[0].weather[0].main;
    const temperature = apiData.list[0].main.temp;
    return (
      <div>
        Temperature: {temperature}&#186;C. Conditions: {weather}
      </div>
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
