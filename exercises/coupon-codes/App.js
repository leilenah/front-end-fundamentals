import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState(0);

  const getSymbols = () => {
    return Promise.resolve(["ULTA", "SEPH", "MAC", "KYL"]);
  };

  const getSymbolDetails = symbol => {
    const symbolDetails = {
      ULTA: {
        store: "Ulta",
        discount: "10%"
      },
      SEPH: {
        store: "Sephora",
        discount: "20%"
      },
      MAC: {
        store: "Mac Cosmetics",
        discount: "30%"
      },
      KYL: {
        store: "Kylie Cosmetics",
        discount: "40%"
      }
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resolve(symbolDetails[symbol])) {
          resolve(symbolDetails[symbol]);
        } else {
          reject("Coupoun symbol not found");
        }
      }, Math.random() * 3000);
    });
  };

  const handleLoadCoupons = async () => {
    let symbolCounter = 0;
    const symbols = await getSymbols();

    symbols.forEach(async symbol => {
      const symbolDetails = await getSymbolDetails(symbol);
      symbolCounter++;
      const percentage = (symbolCounter / symbols.length) * 100;
      setProgress(percentage);
    });
  };

  console.log(progress);

  return (
    <div className="App">
      <button onClick={handleLoadCoupons}>Load Coupons</button>
      <ProgressBar progress={progress} />
    </div>
  );
}
