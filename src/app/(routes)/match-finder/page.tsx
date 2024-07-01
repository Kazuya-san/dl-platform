import { cmgApi } from "@/apiHandler/fetcherBase";
import GameCard from "@/components/GameCard";

export default async function MatchFinder() {
  const { tournaments } = await cmgApi.get("/api/core/tournaments/active", {
    "group-id": "84",
  });

  return (
    <div className="flex px-8 gap-4 justify-center flex-wrap h-[calc(100vh-85px)]">
      {tournaments.map((i: any, index: number) => (
        <GameCard
          key={index}
          url={i.backgroundUrl}
          title={i.groupName}
          description={i.name.substring(0, 50) + "..."}
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

// export default function MatchFinder() {
//   return (
//     <div className="flex px-8 gap-4 justify-center flex-wrap h-[calc(100vh-85px)]">
//       {new Array(6).fill(1).map((i, index) => (
//         <GameCard
//           key={index * i}
//           url="https://i.pinimg.com/originals/1d/46/27/1d4627f8b0a294c5e98e87f6cdbeaa8d.jpg"
//           title="COD Tournament"
//           description="2v2 FREE ENTRY WARZONE KILL RACE"
//           image="https://www.checkmategaming.com/images/ladders/1701636905414.png"
//           tags={["NOVICE", "Amateur"]}
//           prize="$100 PRIZE"
//           entryFee="FREE ENTRY"
//         />
//       ))}
//     </div>
//   );
// }
