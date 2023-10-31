import React from "react";

const Nav = ({ setActiveTab }) => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "20px",
    backgroundImage:
      'url("https://media.istockphoto.com/id/1409529116/photo/crypto-currency-bitcoin-e-commerce-concept-on-digital-screen.webp?b=1&s=170667a&w=0&k=20&c=RXE8lXzTLBVUjnbyfht0soG3uzUeDRlcStf_Dc4dsQk=")',
    height: "500px",
    backgroundSize: "cover",
  };

  const buttonStyle = {
    margin: "10px",
  };

  return (
    <div style={navStyle}>
      <h1 style={{ color: "white" }}>Welcome to the Crypto Dashboard</h1>
      <div style={{ display: "flex" }}>
        <button
          className="btn-coins"
          style={buttonStyle}
          onClick={() => setActiveTab("dashboard")}
        >
          Crypto Currency
        </button>
        <button
          className="btn-markets"
          style={buttonStyle}
          onClick={() => setActiveTab("markets")}
        >
          Crypto Markets
        </button>
      </div>
    </div>
  );
};

export default Nav;
