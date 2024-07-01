import { cmgApi } from "@/apiHandler/fetcherBase";
import GameCard from "@/components/GameCard";

export default async function Tournaments() {
  const { tournaments } = await cmgApi.get("/api/core/tournaments/active", {
    "group-id": "134",
  });

  return (
    <div className="flex px-8 gap-4 justify-center flex-wrap h-[calc(100vh-85px)]">
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
  );
}
