"use client";

import { useState, useMemo } from "react";

export default function BuySellPanel({ token }) {
  const [mode, setMode] = useState("buy");
  const [amount, setAmount] = useState("");

  const estimatedTokens = useMemo(() => {
    if (!amount || Number(amount) <= 0) return 0;

    return Number(amount) / token.price;
  }, [amount, token.price]);

  return (
    <div className="border rounded-2xl p-4 md:p-6 h-fit">

      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        {mode === "buy" ? "Buy Token" : "Sell Token"}
      </h2>

      {/* Buy / Sell Toggle */}
      <div className="grid grid-cols-2 gap-3 mb-6">

        <button
          onClick={() => setMode("buy")}
          className={`py-3 rounded-xl font-semibold transition ${
            mode === "buy"
              ? "bg-green-500 text-white"
              : "border"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() => setMode("sell")}
          className={`py-3 rounded-xl font-semibold transition ${
            mode === "sell"
              ? "bg-red-500 text-white"
              : "border"
          }`}
        >
          Sell
        </button>

      </div>

      {/* Amount */}
      <label className="block text-sm mb-2">
        Amount (SOL)
      </label>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-xl p-3 mb-6 outline-none"
      />

      {/* Price */}
      <div className="flex justify-between items-center gap-3 mb-4">

        <span className="text-gray-500 text-sm">
          Current Price
        </span>

        <span className="font-semibold text-sm break-all text-right">
          ${token.price.toFixed(8)}
        </span>

      </div>

      {/* Receive */}
      <div className="flex justify-between items-center gap-3 mb-8">

        <span className="text-gray-500 text-sm">
          You'll Receive
        </span>

        <span className="font-semibold text-sm break-all text-right">
          {estimatedTokens.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}{" "}
          {token.symbol}
        </span>

      </div>

      <button
        className={`w-full py-4 rounded-xl text-white font-bold transition text-sm md:text-base ${
          mode === "buy"
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {mode === "buy"
          ? `Buy ${token.symbol}`
          : `Sell ${token.symbol}`}
      </button>

    </div>
  );
}