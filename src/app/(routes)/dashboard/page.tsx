import { Skeleton } from "@/components/ui/skeleton";
import GameCard from "@/components/GameCard";
import { cmgApi } from "@/apiHandler/fetcherBase";

export default async function ProfileClient() {
  const { tournaments } = await cmgApi.get("/api/core/tournaments/active", {
    "group-id": "36",
  });

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-[calc(100vh-85px)] flex-col">
  //       <div className="flex items-center justify-center flex-col">
  //         <Skeleton className="rounded-full w-[100px] h-[100px]" />
  //         <div className="space-y-2 mt-2">
  //           <Skeleton className="h-4 w-[250px]" />
  //           <Skeleton className="h-4 w-[200px]" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex px-8 gap-4 justify-center flex-wrap h-[calc(100vh-85px)]">
      {/* {new Array(6).fill(1).map((i, index) => (
        <GameCard
          key={index * i}
          url="/cod.PNG"
          title="COD Tournament"
          description="2v2 FREE ENTRY WARZONE KILL RACE"
          image="https://www.checkmategaming.com/images/ladders/1701636905414.png"
          tags={["NOVICE", "Amateur"]}
          prize="$100 PRIZE"
          entryFee="FREE ENTRY"
        />
      ))} */}
      {tournaments.map((i: any, index: number) => (
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
  );
}
