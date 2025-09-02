"use client";
import { useState } from "react";

export default function SlotMachine() {
  const symbols = ["🍒", "🍋", "🍇", "🍊", "🍉", "⭐", "💎"];
  const [slots, setSlots] = useState(["🍒", "🍋", "🍇"]);
  const [message, setMessage] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return; // prevent multiple clicks
    setIsSpinning(true);
    setMessage("");

    let count = 0;
    const interval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      count++;

      // stop after ~20 cycles
      if (count > 20) {
        clearInterval(interval);
        setIsSpinning(false);

        // final result
        const finalSlots = Array(3)
          .fill(null)
          .map(() => symbols[Math.floor(Math.random() * symbols.length)]);
        setSlots(finalSlots);

        if (finalSlots.every((s) => s === finalSlots[0])) {
          setMessage("🎉 You win! 🎉");
        } else {
          setMessage("Try again!");
        }
      }
    }, 100); // speed of spin
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-orange-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Kelly Espera's Slot Machine 🎰</h1>

      {/* Slot display */}
      <div className="flex gap-4 bg-white shadow-2xl rounded-2xl p-6 mb-4 text-6xl">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`w-20 h-20 flex items-center justify-center transition-transform duration-200 ${
              isSpinning ? "animate-bounce" : ""
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Spin button */}
      <button
        onClick={spin}
        disabled={isSpinning}
        className={`px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition-colors ${
          isSpinning
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-emerald-500 hover:bg-emerald-600 text-white"
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin 🎲"}
      </button>

      {/* Result message */}
      {message && (
        <p className="mt-4 text-xl font-semibold text-gray-700">{message}</p>
      )}
    </div>
  );
}
