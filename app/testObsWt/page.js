"use client";
import { useEffect, useState } from "react";
// import { leaderBoard } from "./utils/leaderboard";

import Image from "next/image";
import { newFetchWt } from "../utils/newFetchWt";

export default function TestPageWT() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await leaderBoard();
      const result = await newFetchWt();
      if (result) {
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
        <pre>{data}</pre>
      </section>
    </section>
  );
}
