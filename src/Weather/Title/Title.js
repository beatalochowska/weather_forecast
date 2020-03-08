import React from "react";
import "./TitleStyles.css";
const INITIAL_DATA_VALUE = null;

function Title({ city }) {
  if (city !== INITIAL_DATA_VALUE) {
    return (
      <h1>
        <span>Weather in </span>
        <span className="cityName">{city}</span>
      </h1>
    );
  } else return <h1>To check weather type in the city.</h1>;
}

export default Title;
