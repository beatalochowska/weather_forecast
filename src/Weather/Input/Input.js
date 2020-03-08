import React, { useState, useEffect } from "react";
import { INITIAL_DATA_VALUE } from "../../constants";
import "./InputStyles.css";

function Input(props) {
  const [tempCity, setTempCity] = useState(INITIAL_DATA_VALUE);

  useEffect(() => {
    if (tempCity === "") {
      props.setCity(INITIAL_DATA_VALUE);
    }
  }, [tempCity]);

  return (
    <form
      className="cityForm"
      onSubmit={event => {
        event.preventDefault();
        props.handleSubmit(tempCity);
      }}
    >
      <input
        className="cityForm_input"
        type="text"
        onChange={event => setTempCity(event.target.value)}
      />

      <button className="cityForm_submit" type="submit">
        submit
      </button>
    </form>
  );
}

export default Input;
