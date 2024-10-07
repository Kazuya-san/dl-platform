// import Link from 'next/link';
// import { Button } from '../ui/button';
// import Image from 'next/image';
// import { Bolt } from '@/assets';
// import SignOut from '../sign-out';

// export function Hero() {
//   return (
//     <>
//       <div className="flex items-center justify-center h-full mt-8 md:mt-16 xl:mt-0 min-h-[70vh] xl:min-h-screen 2400:min-h-[30vh] 2400:mt-[200px] 2400:mb-[300px]">
//         <div className="mt-36 md:mt-[6rem] 1920:mt-[7.6rem] relative">
//           <h1 className="text-left uppercase text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[10rem] 1600:text-[12rem] 1920:text-[240px] 2400:text-[300px] 1920:leading-[84%] font-[family-name:var(--font-nippo)]">
//             The Arcade Awaits
//           </h1>
//           <p className="text-muted-foreground mb-8 text-[14px] max-w-[380px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px] 1920:text-[20px] 1920:max-w-[900px] mt-2 leading-[24.38px]">
//             Connect with friends, compete against rivals, Build your profile,
//             and climb the leaderboards. Unlock your true potential.
//           </p>
//           <SignOut>
//             <Link className="hidden md:block" href={'/auth'}>
//               <Button size={'lg'}>Sign-up</Button>
//             </Link>
//           </SignOut>
//           <div className="md:absolute md:-right-[10%] sm:min-h-[800px] md:top-0 xl:right-0 -top-[20%] 1920:-top-[40%] dpr -z-50">
//             <Image
//               src={Bolt}
//               alt="lightning bolt"
//               priority
//               className="w-full 2xl:opacity-80 h-full xl:w-[80%] 1600:w-[90%] 1920:w-full float-right dpr-img"
//             />
//           </div>
//           <SignOut>
//             <Link
//               className="flex w-full items-center justify-center mb-10 md:hidden"
//               href={'/auth'}
//             >
//               <Button>Sign-up</Button>
//             </Link>
//           </SignOut>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import { Controller, GameOver, Legend } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const tournaments = [
  {
    id: 3,
    name: 'Medieval Legends',
    prize: '$12,000',
    image: Legend,
  },
  {
    id: 1,
    name: 'Cyberpunk Showdown',
    prize: '$10,000',
    image: GameOver,
  },
  {
    id: 2,
    name: 'Galactic Warfare',
    prize: '$15,000',
    image: Controller,
  },
];

export function Hero() {
  const [api, setApi] = React.useState<any>();
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    if (!api) return;
    api.on('select', () => {
      autoplay.current.reset();
    });
  }, [api]);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>
      <div className="relative h-full w-full flex items-center justify-center">
        <Carousel
          setApi={setApi}
          className="w-full"
          // plugins={[autoplay.current]}
        >
          <CarouselContent>
            {tournaments.map((tournament) => (
              <CarouselItem key={tournament.id}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="flex flex-col relative items-center justify-center p-6 h-[60vh] md:h-[70vh] lg:h-[90vh] font-[family-name:var(--font-nippo)]">
                    <div className="absolute inset-0">
                      <Image
                        src={tournament.image}
                        alt={tournament.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-black/70 to-transparent"></div>
                    </div>
                    <div className="relative z-10 text-center space-y-4">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        {tournament.name}
                      </h1>
                      <p className="text-2xl md:text-3xl text-primary font-bold">
                        Prize Pool: {tournament.prize}
                      </p>
                      <p className="text-xl md:text-2xl text-gray-300">
                        Compete. Conquer. Claim Glory.
                      </p>
                      <Link href={'/tournaments'}>
                        <Button className="w-[200px] mt-6 border-0" size={'lg'}>
                          Join Tournament
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0" />
        </Carousel>
      </div>
    </section>
  );
}
