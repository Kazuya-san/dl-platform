import { cmgApi } from "@/apiHandler/fetcherBase";
import GameCard from "@/components/GameCard";
import { TournamentListingCreateModal } from "@/components/TournamentListingCreateModal";
import { Button } from "@/components/ui/button";

export default async function Tournaments() {
  const { tournaments } = await cmgApi.get(
    "/api/core/tournaments/active",
    {
      "group-id": "134",
    },
    {
      cacheOptions: { next: { revalidate: 3600 } },
    }
  );

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex w-full items-center gap-y-2 justify-end mr-24">
        <TournamentListingCreateModal />
      </div>
      <div className="flex flex-col md:flex-row px-8 gap-4 justify-center md:flex-wrap md:h-[calc(100vh-85px)]">
        {tournaments.map((i: any, index: number) => (
          <GameCard
            key={index}
            url={i.coverUrl}
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
