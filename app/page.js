"use client";
import { useEffect, useState } from "react";
// import { leaderBoard } from "./utils/leaderboard";
import { leaderBoardFetch } from "./utils/leaderboardfetch";
import Cards from "./components/Cards";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await leaderBoard();
      const result = await leaderBoardFetch();
      if (result && Array.isArray(result.data)) {
        setData(result.data);
      } else {
        setError("Failed to fetch leaderboard data");
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <section>
        {error ? (
          <p>{error}</p>
        ) : data.length > 0 ? (
          <Cards data={data} />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </section>
  );
}
