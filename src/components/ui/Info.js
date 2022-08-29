import React from "react";

function Info({ data }) {
  const volume = Number(data.volume);
  const lastPrice = Number(data.lastPrice);
  const cryptoName = data.symbol;
  const percentChange = data.priceChangePercent;

  return (
    <div className="w-screen h-screen bg-emerald-600 text-white flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">{cryptoName}</h1>

      {volume ? (
        <div>
          <div className="text-4xl">Volume: {volume.toFixed(2)}</div>
          <div className="text-4xl">Price: {lastPrice.toFixed(5)} $</div>
          <div className="text-4xl">Percent Change: {percentChange}%</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Info;
