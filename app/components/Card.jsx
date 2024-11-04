import React from "react";

const Card = ({ player }, index) => {
  return (
    <div
      key={index}
      className=" font-saira rounded-md border-solid border-white border-2
       h-auto w-full px-2 flex flex-row justify-between"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-finalsyellow text-4xl">#{player.rank}</h2>
      </div>

      <div className="flex flex-col items-end">
        <h2 className="text-white text-xl">{player.name}</h2>
        <h3 className="text-white text-xl">
          ${player.cashouts.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default Card;
