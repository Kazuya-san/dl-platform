// import Link from 'next/link';
// import { Button } from '../ui/button';
// import SignOut from '../sign-out';

// export function Spot() {
//   return (
//     <>
//       <div
//         id="spot"
//         className="flex items-center flex-col justify-center h-full mt-8 md:mt-0 min-h-[60vh] 2xl:min-h-[60vh] 2400:min-h-[40vh]"
//       >
//         <h1 className="text-center uppercase text-[22px] sm:text-[36px] font-semibold font-[family-name:var(--font-nippo)]">
//           Claim your spot
//         </h1>
//         <h1 className="text-center uppercase 1920:-mt-2 text-[22px] sm:text-[36px] font-semibold font-[family-name:var(--font-nippo)]">
//           and begin your journey to the top
//         </h1>
//         <SignOut>
//           <Link href={'/auth'}>
//             <Button className="my-4">Sign-up</Button>
//           </Link>
//         </SignOut>
//       </div>
//     </>
//   );
// }

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Gift } from 'lucide-react';
import Link from 'next/link';
import { Rank1, Rank2 } from '@/assets';

const players = [
  {
    id: 1,
    name: 'Jumz',
    avatar: Rank2,
    xp: '350 XP earned 10/07 - 10/14',
    credits: '+30 credits',
    rank: 2,
  },
  {
    id: 2,
    name: 'RaN',
    avatar: Rank1,
    xp: '230 XP earned 10/07 - 10/14',
    credits: '+20 credits',
    rank: 1,
  },
  {
    id: 3,
    name: 'ZrK',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop',
    xp: '220 XP earned 10/07 - 10/14',
    credits: '+10 credits',
    rank: 3,
  },
];

export function Spot() {
  return (
    <section className="w-full py-16 my-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="text-center mb-28">
            <h2 className="text-5xl font-bold text-primary mb-2 uppercase tracking-wider font-[family-name:var(--font-nippo)]">
              Players of the Week
            </h2>
            <p>Placements reset every Sunday at 12 AM EST</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-end space-y-8 md:space-y-0 md:space-x-8">
            {players.map((player) => (
              <Card
                key={player.id}
                className={`bg-card border-2 rounded-none border-primary/20 w-full md:w-96 h-[450px] flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 ${
                  player.rank === 1 ? 'md:-translate-y-8' : ''
                }`}
              >
                <CardContent className="p-6 relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                  <div className="flex justify-center mb-4 relative">
                    <div className="relative w-24 h-24">
                      <Image
                        src={player.avatar}
                        alt={player.name}
                        width={200}
                        height={200}
                        // layout="fill"
                        objectFit="cover"
                        className="rounded-full border-4 border-primary"
                      />
                      <div
                        className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-black font-bold ${
                          player.rank === 1
                            ? 'bg-yellow-400'
                            : player.rank === 2
                              ? 'bg-gray-300'
                              : 'bg-yellow-600'
                        }`}
                      >
                        {player.rank === 1 ? (
                          <Trophy className="w-6 h-6" />
                        ) : (
                          player.rank
                        )}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary text-center mb-2">
                    {player.name}
                  </h3>
                  <p className="text-gray-400 text-center text-sm mb-2">
                    {player.xp}
                  </p>
                  <p className="text-success flex flex-row gap-2 items-center justify-center text-center font-semibold mb-4">
                    <Gift className="w-6 h-6" />
                    {player.credits}
                  </p>
                  <Link href={'/profile'}>
                    <Button className="w-[130px] bg-primary font-bold transition-all duration-300 ease-in-out hover:shadow-primary/50">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
