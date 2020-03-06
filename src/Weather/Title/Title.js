import React from "react";
import "./TitleStyles.css";
const INITIAL_DATA_VALUE = null;

function TitleContainer({ city }) {
  let message = "To check weather type in the city.";

  if (city !== INITIAL_DATA_VALUE) {
    message = `Weather in ${city}`;
  }

  return <Title message={message} />;
}

function Title({ message }) {
  return <h1 className="temperatureInfo_title">{message}</h1>;
}

export default TitleContainer;
