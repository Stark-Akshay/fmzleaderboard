import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="mx-auto">
      {data.map((player, index) => (
        <Card player={player} key={index}></Card>
      ))}
    </div>
  );
};

export default Cards;
