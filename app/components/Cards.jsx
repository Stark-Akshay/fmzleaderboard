import React from "react";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((player, index) => (
        <div
          key={index}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h2>Player Name: {player.name}</h2>
          <p>Rank: {player.rank}</p>
          <p>Steam Name: {player.steamName || "N/A"}</p>
          <p>Cashouts: ${player.cashouts.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
