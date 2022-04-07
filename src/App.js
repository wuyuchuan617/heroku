import React, { useState } from "react";

import logo from "./assets/images/logo.svg";
import "./styles/App.css";
import Skeleton from "@mui/material/Skeleton";
import SliderCustom from "./components/CommomComponent/Slider";

function App() {
  const [valuetext, setValueText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <h2 style={{ color: "white" }}>{valuetext}</h2>
        <h2 style={{ color: "white" }}>Love you</h2>
        <div className="w-1/3">
          <SliderCustom valuetext={valuetext} setValueText={setValueText} />
        </div>
        <c variant="rectangular" width={210} height={118} />
      </header>
    </div>
  );
}

export default App;
