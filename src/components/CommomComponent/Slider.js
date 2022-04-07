import React, { useState } from "react";
import Slider from "@mui/material/Slider";

function SliderCustom(props) {
  const { valuetext, setValueText } = props;

  const marks = [
    {
      value: 0,

      label: "3",
    },
    {
      value: 20,
      label: "6",
    },
    {
      value: 40,
      label: "9",
    },
    {
      value: 60,
      label: "12",
    },
    {
      value: 80,
      label: "15",
    },
    {
      value: 100,
      label: "50",
    },
  ];

  const convertSliderValue = (value) => {
    switch (value) {
      case 0:
        value = 3;
        break;
      case 20:
        value = 6;
        break;
      case 40:
        value = 9;
        break;
      case 60:
        value = 12;
        break;
      case 80:
        value = 15;
        break;
      case 100:
        value = 50;
        break;

      default:
        break;
    }

    setValueText(value);
  };
  return (
    <Slider
      aria-label="Temperature"
      defaultValue={80}
      onChange={(e, value) => {
        convertSliderValue(value);
      }}
      valueLabelDisplay="off"
      step={null}
      marks={marks}
      min={0}
      max={100}
    />
  );
}

export default SliderCustom;
