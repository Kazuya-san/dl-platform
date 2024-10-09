'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Banner } from '@/assets';
import { Button } from '@/components/ui/button';
import Bracket from '@/components/brackets';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BarChart, Trophy, Tv2 } from 'lucide-react';
import { TournamentJoinModal } from '@/components/join-tournament-modal';
import { useState } from 'react';

interface Player {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  tier: string;
}

const leaderboardData: Player[] = [
  {
    rank: 1,
    name: 'Alex Steele',
    avatar: '',
    points: 9800,
    tier: 'Diamond',
  },
  {
    rank: 2,
    name: 'Samantha Fox',
    avatar: '',
    points: 9600,
    tier: 'Diamond',
  },
  {
    rank: 3,
    name: 'David Kim',
    avatar: '',
    points: 9400,
    tier: 'Platinum',
  },
  {
    rank: 4,
    name: 'Emma Watson',
    avatar: '',
    points: 9200,
    tier: 'Platinum',
  },
  {
    rank: 5,
    name: 'Michael Jordan',
    avatar: '',
    points: 9000,
    tier: 'Gold',
  },
  {
    rank: 6,
    name: 'Sarah Connor',
    avatar: '',
    points: 8800,
    tier: 'Gold',
  },
  {
    rank: 7,
    name: 'John Doe',
    avatar: '',
    points: 8600,
    tier: 'Silver',
  },
  {
    rank: 8,
    name: 'Jane Smith',
    avatar: '',
    points: 8400,
    tier: 'Silver',
  },
  {
    rank: 9,
    name: 'Chris Evans',
    avatar: '',
    points: 8200,
    tier: 'Bronze',
  },
  {
    rank: 10,
    name: 'Natalie Portman',
    avatar: '',
    points: 8000,
    tier: 'Bronze',
  },
];

const prizes = [
  {
    name: '$25,000',
    description: '1st prize',
    details: 'Cash prize for the tournament winner.',
  },
  {
    name: 'Zeke digital jersey',
    description: '2nd prize',
    details: 'Exclusive in-game item. Limited edition digital jersey.',
  },
  {
    name: 'Alley katz gaming card',
    description: '3rd prize',
    details: 'Rare collectible card from the Alley Katz series.',
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Diamond':
      return 'bg-cyan-500 text-cyan-50';
    case 'Platinum':
      return 'bg-indigo-500 text-indigo-50';
    case 'Gold':
      return 'bg-yellow-500 text-yellow-50';
    case 'Silver':
      return 'bg-gray-400 text-gray-50';
    case 'Bronze':
      return 'bg-orange-500 text-orange-50';
    default:
      return 'bg-gray-500 text-gray-50';
  }
};

export default function TournamentPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Card className="max-w-[1800px] mx-auto my-8 border-card overflow-hidden">
        <div className="relative">
          <Image
            src={Banner}
            alt="Tournament Banner"
            width={1600}
            height={450}
            className="w-full h-[200px] sm:h-[400px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <CardHeader className="relative min-h-[150px] flex flex-col sm:flex-row items-end justify-between space-y-4 sm:space-y-0 pt-4 sm:pt-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-primary-foreground"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <CardTitle className="text-xl sm:text-4xl font-bold font-[family-name:var(--font-nippo)]">
                  Fortnite Ultimate Championship
                </CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary">$500</Badge>
                  <span className="text-sm text-muted-foreground">+376</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 h-[100px]">
              <Badge variant="outline" className="mb-2">
                Registration Open
              </Badge>
              {!submitted ? (
                <TournamentJoinModal
                  setTab={() => {
                    setSubmitted(true);
                    setActiveTab('brackets');
                  }}
                />
              ) : (
                <Button className="w-[100px]" size={'sm'} disabled>
                  Registered
                </Button>
              )}
              <span className="text-sm text-muted-foreground">
                October 30th 2024 | 12:00am
              </span>
            </div>
          </CardHeader>
        </div>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            className="w-full"
          >
            <TabsList className="grid w-full h-fit grid-cols-2 lg:grid-cols-6 mt-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="brackets">Brackets</TabsTrigger>
              <TabsTrigger value="prizes">Prizes</TabsTrigger>
              {/* <TabsTrigger value="stream">Stream</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <Card className="border-card">
                  <CardHeader className="bg-gradient-to-r from-green-700 to-primary/75 text-white">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center">
                      <BarChart className="w-6 h-6 mr-2" />
                      Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 h-[430px]">
                    <ScrollArea className="h-[430px]">
                      {leaderboardData.map((player, index) => (
                        <div
                          key={player.rank}
                          className={`flex items-center space-x-1 sm:space-x-3 px-2 py-3 sm:p-4 ${
                            index % 2 === 0 ? 'bg-background' : 'bg-muted'
                          } hover:bg-accent transition-colors duration-200`}
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 hidden sm:flex rounded-full ${
                              player.rank <= 3
                                ? 'bg-yellow-500 text-yellow-50'
                                : 'bg-gray-200 text-gray-700'
                            } items-center justify-center font-bold text-sm`}
                          >
                            {player.rank}
                          </div>
                          <Avatar className="w-10 h-10 border-2 border-primary">
                            <AvatarImage
                              src={player.avatar}
                              alt={player.name}
                            />
                            <AvatarFallback>
                              {player.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-grow">
                            <p className="font-semibold text-foreground">
                              {player.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {player.tier}
                            </p>
                          </div>
                          <Badge
                            className={`${getTierColor(player.tier)} font-bold rounded-sm`}
                          >
                            {player.points} pts
                          </Badge>
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
                <Card className="border-card">
                  <CardHeader className="bg-gradient-to-r from-green-700 to-primary/75 text-white">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center">
                      <Tv2 className="w-6 h-6 mr-2" />
                      Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 h-[430px] w-full">
                    <div className="aspect-video h-[430px] w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dAtTMCD7FH0?si=yjETXZqhU82k7m3U&autoplay=1&mute=1&loop=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-[430px] w-full"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="brackets">
              <Card className="border-card">
                <CardHeader>
                  <CardTitle>Tournament Brackets</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bracket />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="prizes">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr mt-6">
                {prizes.map((prize, index) => (
                  <Card
                    key={index}
                    className="bg-background text-white border-gray-800 flex flex-col items-center justify-center"
                  >
                    <CardContent className="p-6 flex-grow">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-green-600 rounded-full" />
                        <div className="absolute inset-1 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-5xl font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2">
                        {prize.name}
                      </h3>
                      <p className="text-gray-400 text-center mb-4">
                        {prize.description}
                      </p>
                      <p className="text-sm text-gray-500">{prize.details}</p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button disabled className="max-w-[120px] w-full">
                        Claim
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stream">
              <Card>
                <CardHeader>
                  <CardTitle>Live Stream</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Stream embed goes here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
