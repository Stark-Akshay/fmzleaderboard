import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex flex-col w-full items-start h-[100dvh] bg-finalsred  pt-10 gap-5 border-solid border-white border-4 p-10">
        {data.map((player, index) => (
          <Card player={player} key={index}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
