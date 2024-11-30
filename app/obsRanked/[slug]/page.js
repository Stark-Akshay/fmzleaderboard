import { singlePersonFetchRanked } from "@/app/utils/singlePersonFetchRanked";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const result = await singlePersonFetchRanked(slug);
  if (!result.data[0]) {
    redirect("/");
  }
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-transparent">
      <h2 className="text-finalsyellow text-9xl font-bold">
        Rank: #{result.data[0].rank}
      </h2>
    </div>
  );
}
