import React from "react";


function Input(props) {
  const styleInput = {
    width: "100px",
    border: "2px solid black",
    padding: "15px",
    margin: "30px",
  };
  const styleDiv = { "text-align": "center" };
  return (
    <div className= "container">
    <div style={styleDiv}>
  <label>Enter name</label>
      <input
        type="text"
        style={styleInput}
        onChange={props.changed}
        value={props.currentName}
      />
      
    </div>
    </div>
  );
}

export default Input;
