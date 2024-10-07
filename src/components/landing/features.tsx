// import React from 'react';
// import Image from 'next/image';
// import { features } from '@/content';

// export function Features() {
//   return (
//     <>
//       <div className="flex flex-col 900:flex-row items-stretch h-full justify-between md:my-52 gap-[24px]">
//         {features.map((feature, i) => (
//           <div
//             key={i}
//             className="900:max-w-[300px] text-wrap lg:max-w-[442px] 1920:max-w-[542px] w-full bg-card flex items-center justify-start flex-col px-[20px] py-[24px] sm:!p-[32px]"
//           >
//             <Image src={feature.icon} alt={feature.title} />
//             <h1 className="text-[20px] xsh:text-[24px] 900:text-[18px] break-all sm:break-normal text-center lg:text-[24px] 1920:text-[32px] mt-4 font-[family-name:var(--font-nippo)] tracking-widest uppercase">
//               {feature.title}
//             </h1>

//             <p className="text-[14px] 1920:text-[20px] mt-4 text-muted-foreground text-center">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const games = [
  {
    id: 1,
    name: 'Fortnite',
    image:
      'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=800&h=600&fit=crop',
    description: 'Battle Royale action, building, and exploration',
  },
  {
    id: 2,
    name: 'Call of Duty',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop',
    description: 'Fast-paced, action-packed multiplayer combat',
  },
  {
    id: 3,
    name: 'Coming Soon',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    description: 'Exciting new title on the horizon',
  },
  {
    id: 4,
    name: 'Coming Soon',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    description: 'Another thrilling game in development',
  },
];

export function Features() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase tracking-wider font-[family-name:var(--font-nippo)]">
          Featured Games
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {games.map((game) => (
              <CarouselItem
                key={game.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden rounded-none h-full flex flex-col shadow-xl">
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="relative h-[350px] w-full">
                      <Image
                        src={game.image}
                        alt={game.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col mt-7 justify-center items-center">
                      <h3 className="text-xl sm:text-3xl font-semibold text-primary mb-2 font-[family-name:var(--font-nippo)]">
                        {game.name}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-lg mb-4 flex-grow">
                        {game.description}
                      </p>
                      <Button
                        variant={'outline'}
                        className="w-[200px] rounded-none h-[44px] text-[12px] xs:text-[14px] 1920:text-[16px] border border-muted-foreground group transition-all duration-300 ease-in-out transform hover:scale-105"
                        edgesClassName="group-hover:bg-accent border border-muted-foreground"
                        left="group-hover:!border-r-accent !border-r-background"
                        right="group-hover:!border-l-accent !border-l-background"
                      >
                        Play Now <ChevronRight className="ml-2 h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 border-0" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 border-0" />
        </Carousel>
      </div>
    </section>
  );
}
