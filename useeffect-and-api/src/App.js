import React, { useState } from "react";
import "./App.css";
import CryptoCoins from "./Components/CryptoCoins";
import CryptoMarkets from "./Components/CryptoMarkets";
import Nav from "./Components/Nav";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="App">
      <Nav setActiveTab={setActiveTab} />
      {activeTab === "dashboard" ? <CryptoCoins /> : <CryptoMarkets />}
    </div>
  );
}

export default App;
