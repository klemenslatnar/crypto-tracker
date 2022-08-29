import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Layout from "./components/ui/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Btc from "./components/crypto-currencies/Btc";
import Eth from "./components/crypto-currencies/Eth";
import Sol from "./components/crypto-currencies/Sol";
import Xrp from "./components/crypto-currencies/Xrp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Layout />}>
          <Route path="/btc" element={<Btc />} />
          <Route path="/eth" element={<Eth />} />
          <Route path="/sol" element={<Sol />} />
          <Route path="/xrp" element={<Xrp />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
