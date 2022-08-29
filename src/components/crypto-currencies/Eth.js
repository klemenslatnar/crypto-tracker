import React, { useEffect, useState } from "react";
import Info from "../ui/Info";

function Eth() {
  const [cryptoData, setCryptoData] = useState({});

  const sendData = async () => {
    try {
      const response = await fetch(
        "https://api2.binance.com/api/v3/ticker/24hr"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const data = await response.json();
      const eth = data.find((obj) => obj.symbol === "ETHUSDT");
      console.log(eth);

      const { volume, lastPrice, symbol, priceChangePercent } = eth;
      const value = {
        volume,
        lastPrice,
        symbol,
        priceChangePercent,
      };

      setCryptoData(value);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendData();
    const interval = setInterval(() => {
      sendData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen scrollbar-hide ">
      <Info data={cryptoData} />
    </div>
  );
}

export default Eth;
