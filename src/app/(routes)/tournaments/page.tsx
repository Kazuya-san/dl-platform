import { cmgApi } from "@/apiHandler/fetcherBase";
import GameCard from "@/components/GameCard";
import { TournamentListingCreateModal } from "@/components/TournamentListingCreateModal";
import { Button } from "@/components/ui/button";
import {
  TournamentListingDocument,
  TournamentListingModel,
} from "@/schemas/tournament-listing.schema";
import { mongoose } from "@/utils/db";

export const dynamic = "force-dynamic";

export default async function Tournaments() {
  // const { tournaments } = await cmgApi.get(
  //   "/api/core/tournaments/active",
  //   {
  //     "group-id": "134",
  //   },
  //   {
  //     cacheOptions: { next: { revalidate: 3600 } },
  //   }
  // );
  await mongoose;
  const tournaments =
    await TournamentListingModel.find<TournamentListingDocument>({});

  return (
    <>
      <div className="flex w-full items-center gap-y-2 justify-end px-8 mb-2">
        <TournamentListingCreateModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
        {tournaments.map((i, index: number) => (
          <GameCard
            key={index}
            url={i.bannerUrl}
            title={i?.title}
            description={i?.description}
            tags={i?.tags}
            prize={`$${i?.prize} PRIZE`}
            entryFee={
              Number(i?.entryFee) > 0 ? `$${i?.entryFee} ENTRY` : "FREE ENTRY"
            }
            startDate={i?.startDate as string}
            startTime={i?.startTime}
          />
        ))}
      </div>
    </>
  );
}
