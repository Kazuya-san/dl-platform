import Bracket from "@/components/brackets";
import {
  TournamentListingDocument,
  TournamentListingModel,
} from "@/schemas/tournament-listing.schema";
import { mongoose } from "@/utils/db";

const tagColors = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

export default async function Tournaments({
  params,
}: {
  params: { id: string };
}) {
  await mongoose;
  const tournament =
    await TournamentListingModel.findById<TournamentListingDocument>(params.id);

  return (
    <>
      <div className="flex w-full items-center gap-y-2 justify-center flex-col px-8 mb-2">
        <h1 className="text-2xl font-bold  mt-8">{tournament?.title}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="flex flex-wrap items-center gap-2 font-semibold">
          {tournament?.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded uppercase ${
                tagColors[index % 6]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://dl-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-footer.b49f032a.png&w=48&q=75"
          className="w-[20px] h-[40px] md:w-[35px] md:h-[60px]"
          alt="logo"
        />
        <div className="max-w-[100vw] w-full overflow-x-auto">
          <Bracket />
        </div>
      </div>
    </>
  );
}
