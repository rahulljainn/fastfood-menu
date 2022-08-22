import React, { useState } from "react";
import "./styles.css";

var fastfoodguide = {
  "🍕": "pizza",
  "🍔": "burger",
  "🍟": "french fries",
  "🌭": "hot dog",
  "🍿": "popcorn"
};
var fastfoodweknow = Object.keys(fastfoodguide);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function foodhandeler(event) {
    var userinput = event.target.value;

    var meaning = fastfoodguide[userinput];

    if (meaning === undefined) {
      meaning = "this fast-food is not availabel right now sorry.";
    }
    setmeaning(meaning);
  }
  function fastfoodhandler(fastfood) {
    var meaning = fastfoodguide[fastfood];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1
        style={{
          color: "yellow",
          backgroundColor: "black",
          borderRadius: "1rem",
          fontStyle: "italic"
        }}
      >
        Fast-food menu..!
      </h1>
      <input
        onChange={foodhandeler}
        placeholder="search your fast food here..?"
      ></input>
      <h2>{meaning}</h2>
      <h3 style={{ fontSize: "bold", textDecoration: "underline" }}>
        {" "}
        Fast-food we have
      </h3>
      {fastfoodweknow.map(function (fastfood) {
        return (
          <span
            onClick={() => fastfoodhandler(fastfood)}
            style={{
              padding: " 1rem",
              fontSize: "2rem",
              backgroundColor: "cornflowerblue",
              cursor: "pointer"
            }}
          >
            {" "}
            {fastfood}
          </span>
        );
      })}
    </div>
  );
}
