import React, { useState, useEffect } from "react";
const INITIAL_DATA_VALUE = null;

function Input(props) {
  const [tempCity, setTempCity] = useState(INITIAL_DATA_VALUE);

  useEffect(() => {
    if (tempCity === "") {
      props.setCity(INITIAL_DATA_VALUE);
    }
  }, [tempCity]);

  return (
    <form
      onSubmit={event =>
        props.handleSubmit(event, props.setData, props.setCity, tempCity)
      }
    >
      <input
        type="text"
        onChange={event => props.handleChange(event, setTempCity)}
      />

      <button type="submit">submit</button>
    </form>
  );
}

export default Input;
