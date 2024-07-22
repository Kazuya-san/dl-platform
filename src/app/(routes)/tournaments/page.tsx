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
    <>
      <div className="flex w-full items-center gap-y-2 justify-end px-8 mb-2">
        <TournamentListingCreateModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
        {[tournaments[0]].map((i: any, index: number) => (
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
    </>
  );
}
