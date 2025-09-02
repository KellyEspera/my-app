"use client";
import { useState } from "react";
import "./calculator.css"; // Import the CSS file

export default function Index () {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression safely
      const result = eval(input);
      setInput(result.toString());
    } catch {
      alert("Invalid expression!");
      setInput("");
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">🧮 Simple Calculator</h1>
      <div className="calculator">
        {/* Display */}
        <input
          type="text"
          className="display"
          value={input}
          placeholder="0"
          readOnly
        />

        {/* Buttons */}
        <div className="buttons">
          {/* First row */}
          <button onClick={handleClear} className="btn clear">C</button>
          <button onClick={handleBackspace} className="btn backspace">⌫</button>
          <button onClick={() => handleClick("%")} className="btn operator">%</button>
          <button onClick={() => handleClick("/")} className="btn operator">÷</button>

          {/* Second row */}
          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("*")} className="btn operator">×</button>

          {/* Third row */}
          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("-")} className="btn operator">−</button>

          {/* Fourth row */}
          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("+")} className="btn operator">+</button>

          {/* Fifth row */}
          <button onClick={() => handleClick("0")} className="btn zero">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={handleCalculate} className="btn equals">=</button>
        </div>
      </div>
    </div>
  );
}
