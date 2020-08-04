import React, { useState, useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setInterval(() => {
        if (width === 100) return;
        setWidth(width => width + 1);
      }, 1000);
    };

    updateProgress();

    return clearInterval(updateProgress);
  });

  return (
    <div className="App">
      <ProgressBar width={`${width}%`} />
    </div>
  );
}
