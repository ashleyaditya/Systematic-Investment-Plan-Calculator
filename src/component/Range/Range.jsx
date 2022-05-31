import React from "react";
import "./Range.css";

import { Slider } from "@mui/material";

export const Range = ({ heading, max, min, symbol }) => {
  const [svalue, setSValue] = React.useState(0);
  const [ivalue, setIValue] = React.useState(0);

  return (
    <>
      <div class="wrapper">
        <div class="heading">
          <h3>{heading}</h3>
          <input
            type="number"
            maxLength="250"
            min={min}
            max={max}
            id="monthly-investment"
            autoComplete="on"
            step="1"
            onInput={(e) => {
              setIValue(e.target.value);
              setSValue(e.target.value);
            }}
            value={ivalue}
          />
        </div>
        <div class="slider">
          <Slider
            color="secondary"
            min={500}
            max={100000}
            valueLabelDisplay="auto"
            onChange={(e) => {
              setSValue(e.target.value);
              setIValue(e.target.value);
            }}
            value={svalue}
          />
        </div>
      </div>
    </>
  );
};

export default Range;
