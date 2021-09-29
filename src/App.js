import React, { useState } from "react";
import "./styles.css";
const fruitDictionary = {
  "🍇": "grape",
  "🍉": "melon",
  "🍒": "cherry",
  "🍓": "strawberry",
  "🍎": "apple",
  "🍍":
    "pine apple" 
};

const fruits = Object.keys(fruitDictionary);

export default function App() {
  const [fruit, setFruit] = useState(""); 
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    var inputFruit = event.target.value;
    setFruit(inputFruit);
    if (inputFruit in fruitDictionary) {
      setMeaning(fruitDictionary[inputFruit]);
    }
  }
  function fruitClickHandler(fruit) {
    setMeaning(fruitDictionary[fruit]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>inside outttttt</h1>
      <input
        onChange={changeHandler}
        value={fruit}
        placeholder={"Search your Fruit"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {fruit} </h2> 
      <h3> {meaning} </h3> 
      {
        
        fruits.map((fruit) => (
          <span
            onClick={() => fruitClickHandler(fruit)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {fruit}{" "}
          </span>
        ))
      }
    </div>
  );
}
