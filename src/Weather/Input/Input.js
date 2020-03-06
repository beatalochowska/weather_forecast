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
      onSubmit={event => {
        event.preventDefault();
        props.handleSubmit(tempCity);
      }}
    >
      <input type="text" onChange={event => setTempCity(event.target.value)} />

      <button type="submit">submit</button>
    </form>
  );
}

export default Input;
