// CryptoMarkets.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoMarkets = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchDataMarkets = async () => {
      try {
        const response = await axios.get(
          "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/markets",
          {
            headers: {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key":
                "27002b1b3amsh68d601d7785cc7cp15f225jsnfb2123c1718c",
            },
            params: {
              referenceCurrencyUuid: "yhjMzLPhuIDl",
              limit: "50",
              offset: "0",
              orderBy: "24hVolume",
              orderDirection: "desc",
            },
          }
        );
        setMarkets(response.data.data.markets);
      } catch (error) {
        console.error("Error fetching market data", error);
      }
    };

    fetchDataMarkets();
  }, []);

  return (
    <div className="markets-div">
      <h1>Crypto Markets</h1>
      <div className="div-markets">
        {markets.map((market, index) => (
          <div key={index}>
            <h2>{market.exchange.name}</h2>
            <p className="markets-base">Base: {market.base.symbol}</p>
            <p className="markets-price">Price: {market.price}</p>
            <p className="markets-volume">24h Volume: {market["24hVolume"]}</p>
            <p className="markets-market-share">
              Market Share: {market.marketShare}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoMarkets;
