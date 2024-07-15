import GameCard from "@/components/GameCard";
import { cmgApi } from "@/apiHandler/fetcherBase";

async function Event() {
  const { tournaments } = await cmgApi.get(
    "/api/core/tournaments/active",
    {
      "group-id": "134",
    },
    {
      cacheOptions: { next: { revalidate: 3600 } },
    }
  );

  const data = tournaments.slice(0, 3);

  return (
    <div className="sm:container py-8">
      <div className="border-l-4 border-primary pl-2 my-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Events & Tournaments
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center md:flex-wrap">
        {data.map((i: any, index: number) => (
          <GameCard
            key={index}
            url={i.backgroundUrl}
            title={i.groupName}
            description={i.name}
            image={i.gameImageUrl}
            tags={["NOVICE", "Amateur", "VETERAN", "PRO"]}
            prize={`$${i.prize} PRIZE`}
            entryFee={i.cost > 0 ? `$${i.cost} ENTRY` : "FREE ENTRY"}
            startDate={i.startTime}
            tournamentPath={i.tournamentPath}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
