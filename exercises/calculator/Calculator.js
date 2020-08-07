import React, { useState } from "react";
import { CalculatorButton } from "./CalculatorButton";

export const Calculator = () => {
  let calculation = [];
  const calcRows = [
    [7, 8, 9, "%"],
    [4, 5, 6, "x"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"]
  ];
  const [result, setResult] = useState(0);

  const handleInputClick = (value) => {
    console.log("input", value);

    // if input is =, run the calculation & return
    if (value === "=") {
      let temp1 = 0;
      let temp2 = 0;
      let result = 0;

      calculation.forEach((input) => {
        switch (input) {
          case "%":
            result = temp1 % input;
            break;
          case "x":
            result = temp * input;
            break;
          case "-":
            result = temp - input;
            break;
          case "+":
            result = temp + input;
            break;
          default:
            if (!temp1) {
              temp1 = input;
            }

            if (!temp2) {
              temp2 = input;
            }
        }
      });

      console.log("result", result);
    }

    calculation.push(value);
  };

  // TODO: display each number
  return (
    <div className="calc">
      <div className="calc__result">{result}</div>
      <div className="calc__inputs">
        {calcRows.map((row, i) => (
          <div className="calc__input-row" key={`row-${i}`}>
            {row.map((input) => (
              <CalculatorButton
                value={input}
                onClick={handleInputClick}
                key={`input-${i}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
