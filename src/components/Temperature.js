import React from "react";
import { useState } from "react";
import "./Temperature.css";

const Temperature = () => {
  const [degrees, setDegrees] = useState(72);

  const getTempColor = (temp) => {
    if (temp >= 80) {
      return "red";
    }
    if (temp >= 70 && temp < 80) {
      return "orange";
    }
    if (temp >= 60 && temp < 70) {
      return "yellow";
    }
    if (temp >= 50 && temp < 60) {
      return "green";
    }
    if (temp > 32 && temp < 50) {
      return "teal";
    }
    if (temp <= 32) {
      return "freezing";
    }
  };

  const tempColor = getTempColor(degrees);

  const increaseTemperature = () => {
    setDegrees(degrees + 1);
  };

  const decreseTemperature = () => {
    setDegrees(degrees - 1);
  };

  return (
    <section>
      <h2 className={tempColor}>{degrees} F</h2>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreseTemperature}>-</button>
    </section>
  );
};

export default Temperature;
