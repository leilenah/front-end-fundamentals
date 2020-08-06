import React from "react";

export const ProgressBar = ({ progress }) => (
  <div className="progress-bar" style={{ width: `${progress}%` }} />
);
