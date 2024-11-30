// import { singlePersonFetchRanked } from "@/app/utils/singlePersonFetchRanked";
// import { redirect } from "next/navigation";

// export default async function Page({ params }) {
//   const slug = (await params).slug;
//   const result = await singlePersonFetchRanked(slug);
//   if (!result.data[0]) {
//     redirect("/");
//   }
//   return (
//     <div className="w-full h-full flex flex-row justify-center items-center bg-transparent">
//       <h2 className="text-finalsyellow text-9xl font-bold">
//         Rank: #{result.data[0].rank}
//       </h2>
//     </div>
//   );
// }

import { singlePersonFetchRanked } from "@/app/utils/singlePersonFetchRanked";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const slug = (await params).slug;

  // Add revalidate logic
  const result = await singlePersonFetchRanked(slug, {
    next: { revalidate: 1800 }, // 30 minutes = 1800 seconds
  });

  if (!result.data[0]) {
    redirect("/");
  }

  const rank = result.data[0].rank;
  const change = result.data[0].change;

  // Determine styles and arrow
  const changeColor = change >= 0 ? "text-green-500" : "text-red-500";
  const arrow = change >= 0 ? "↑" : "↓";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
      <h2 className="text-finalsyellow text-9xl font-bold">Rank: #{rank}</h2>
      <h3 className={`text-center text-5xl font-bold ${changeColor}`}>
        Change: {arrow} {Math.abs(change)}
      </h3>
    </div>
  );
}
