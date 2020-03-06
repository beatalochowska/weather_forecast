import React from "react";
import "./TitleStyles.css";
const INITIAL_DATA_VALUE = null;

function Title(props) {
  return props.city === INITIAL_DATA_VALUE ? (
    <h1 className="temperatureInfo_title">To check weather type in city</h1>
  ) : (
    <h1 className="temperatureInfo_title">Weather in {props.city}</h1>
  );
}

export default Title;
