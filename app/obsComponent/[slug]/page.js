import { singlePersonFetch } from "@/app/utils/singlePersonFetch";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const result = await singlePersonFetch(slug);
  console.log(result.data[0].rank);
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-transparent">
      <h2 className="text-finalsyellow text-4xl font-bold">
        #{result.data[0].rank}
      </h2>
    </div>
  );
}
