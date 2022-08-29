import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-screen flex justify-between bg-emerald-300 text-white h-20 ">
      <div>
        <Link to="/">
          <button className="max-w-full h-full px-5 text-3xl">Crypto Prices</button>
        </Link>
      </div>
      <div className="space-x-5 mr-12">
        <Link to="btc">
          <button className="h-full text-3xl">BTC</button>
        </Link>
        <Link to="eth">
          <button className="h-full text-3xl">ETH</button>
        </Link>
        <Link to="sol">
          <button className="h-full text-3xl">SOL</button>
        </Link>
        <Link to="xrp">
          <button className="h-full text-3xl">XRP</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
