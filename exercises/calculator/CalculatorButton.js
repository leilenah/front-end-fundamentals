import React from "react";

export const CalculatorButton = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  let className = "calc__input-btn";

  if (Number.isInteger(value)) {
    className += " calc__input-btn--gray";
  }

  return (
    <button class={className} onClick={handleClick}>
      {value}
    </button>
  );
};
