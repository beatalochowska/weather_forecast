import React from "react";

function Input(props) {
  return (
    <form
      onSubmit={event =>
        props.handleSubmit(event, props.setData, props.setCity, props.tempCity)
      }
    >
      <input
        type="text"
        onChange={event => props.handleChange(event, props.setTempCity)}
      />

      <button type="submit">submit</button>
    </form>
  );
}

export default Input;
