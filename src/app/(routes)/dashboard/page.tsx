import { Skeleton } from "@/components/ui/skeleton";
import GameCard from "@/components/GameCard";
import { cmgApi } from "@/apiHandler/fetcherBase";
import Hero from "@/components/home/Hero";
import Event from "@/components/home/Events";
import Games from "@/components/home/Games";
import Section from "@/components/home/Sections";
import Footer from "@/components/Footer";

export default async function ProfileClient() {
  const { tournaments } = await cmgApi.get(
    "/api/core/tournaments/active",
    {
      "group-id": "36",
    },
    {
      cacheOptions: { next: { revalidate: 3600 } },
    }
  );

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
    <div className="px-8">
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
      {/* {tournaments.map((i: any, index: number) => (
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
      ))} */}
      <Hero />
      <Event />
      <Games />
      <Section
        sectionName="Arena"
        title="Competetive Gaming"
        description="Experience the thrill of competitive gaming in our state-of-the-art arena. Engage in adrenaline-pumping battles, showcase your gaming prowess, and climb the ranks to become the ultimate champion. Whether you're a seasoned player or just starting out, the Arena awaits you"
        buttonText="Enter Arena"
        buttonVariant="default"
        dir="rtl"
        imageSrc="https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fthe_beacon_harvesters_31b105f968%2Fthe_beacon_harvesters_31b105f968.jpg&w=2048&q=75"
      />
      <Section
        sectionName="Leaderboard"
        title="Ranking System"
        description="Our ranking system rewards skill and teamwork in competitive matches. Players climb ranks based on performance metrics like win-loss ratio and individual contributions. Reach higher ranks for exclusive rewards, tournaments, and community recognition, creating a competitive and rewarding gaming experience for all."
        buttonText="See Leaderboard"
        buttonVariant="default"
        dir="ltr"
        imageSrc="https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FSparkball_Splash_No_Name_f01592f622%2FSparkball_Splash_No_Name_f01592f622.jpg&w=1920&q=75"
      />
      <Footer />
    </div>
  );
}
