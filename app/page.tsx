
import Image from "next/image";
"use client";
import { useState } from "react";
import Calculator from "./calculator/page";

export default function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ eval used only for demo
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Calculator/>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Kelly Espera's Calculator</h1>

      <div className="bg-white shadow-xl rounded-2xl p-4 w-72">
        {/* Display */}
        <div className="bg-slate-800 rounded p-3 text-right text-2xl font-mono mb-4 text-green-400">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={handleClear}
            className="col-span-2 bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-xl font-semibold"
          >
            C
          </button>
          <button
            onClick={() => handleClick("/")}
            className="bg-indigo-400 hover:bg-indigo-500 text-white p-3 rounded-xl font-semibold"
          >
            ÷
          </button>
          <button
            onClick={() => handleClick("*")}
            className="bg-indigo-400 hover:bg-indigo-500 text-white p-3 rounded-xl font-semibold"
          >
            ×
          </button>

          {[7, 8, 9].map((n) => (
            <button
              key={n}
              onClick={() => handleClick(n.toString())}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl font-semibold"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleClick("-")}
            className="bg-indigo-400 hover:bg-indigo-500 text-white p-3 rounded-xl font-semibold"
          >
            −
          </button>

          {[4, 5, 6].map((n) => (
            <button
              key={n}
              onClick={() => handleClick(n.toString())}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl font-semibold"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => handleClick("+")}
            className="bg-indigo-400 hover:bg-indigo-500 text-white p-3 rounded-xl font-semibold"
          >
            +
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => handleClick(n.toString())}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl font-semibold"
            >
              {n}
            </button>
          ))}
          <button
            onClick={handleCalculate}
            className="row-span-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-xl font-semibold"
          >
            =
          </button>

          <button
            onClick={() => handleClick("0")}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 p-3 rounded-xl font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-xl font-semibold"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}
