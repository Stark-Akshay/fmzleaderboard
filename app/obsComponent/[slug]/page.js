import { singlePersonFetch } from "@/app/utils/singlePersonFetch";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const result = await singlePersonFetch(slug);
  if (!result.data[0]) {
    redirect("/");
  }

  console.log(result);
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-transparent">
      <h2 className="text-finalsyellow text-4xl font-bold">
        #{result.data[0].rank}
      </h2>
    </div>
  );
}
