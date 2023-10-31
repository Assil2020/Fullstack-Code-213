import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoCoins = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchDataCoins = async () => {
      try {
        const response = await axios.get(
          "https://coinranking1.p.rapidapi.com/coins",
          {
            headers: {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key":
                "27002b1b3amsh68d601d7785cc7cp15f225jsnfb2123c1718c",
            },
          }
        );
        setCryptos(response.data.data.coins);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchDataCoins();
  }, []);

  return (
    <div className="coins-div">
      <h1>Crypto Currency</h1>
      <div className="div-coins">
        {cryptos.map((crypto, index) => (
          <div key={index}>
            <h2>{crypto.name}</h2>
            <p className="coins-symbole">Symbol: {crypto.symbol}</p>
            <p className="coins-price">Price: {crypto.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCoins;
