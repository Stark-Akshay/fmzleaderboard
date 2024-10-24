"use client";
import { useEffect, useState } from "react";
import { leaderBoard } from "./utils/leaderboard";
import Cards from "./components/Cards";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await leaderBoard();
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
      <h1 className="text-xl font-bold text-center">FMZ leaderBoard</h1>

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
