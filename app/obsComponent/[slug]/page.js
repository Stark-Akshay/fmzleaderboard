// import { singlePersonFetch } from "@/app/utils/singlePersonFetch";
// import { redirect } from "next/navigation";

// export default async function Page({ params }) {
//   const slug = (await params).slug;
//   const result = await singlePersonFetch(slug);
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

import { singlePersonFetch } from "@/app/utils/singlePersonFetch";
import { redirect } from "next/navigation";

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function Page({ params }) {
  const slug = (await params).slug;

  // Fetch data
  const result = await singlePersonFetch(slug);

  if (!result.data || !result.data[0]) {
    redirect("/"); // Redirect to home if no data found
  }

  // Render page
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-transparent">
      <h2 className="text-finalsyellow text-9xl font-bold">
        Rank: #{result.data[0].rank}
      </h2>
    </div>
  );
}
