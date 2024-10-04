import Image from 'next/image';
import { Fortnite, Trophy as GTrophy } from '@/assets';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Star, Trophy, TrophyIcon } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';
import { FaXbox } from 'react-icons/fa6';
import { getSession } from '@auth0/nextjs-auth0';
import { profileData } from '@/content';

export default async function ProfilePage() {
  const user = await getSession();
  const userObj = user?.user!;
  return (
    <div className="min-h-screen max-w-[1800px] mx-auto bg-black text-white">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary to-[#f7b500] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex items-center space-x-4 space-y-2 text-accent-foreground mb-4 sm:mb-0">
          <Image
            src={userObj.picture}
            alt={userObj.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold">{userObj.name}</h1>
            <div className="flex items-center space-x-2">
              <TrophyIcon width={20} height={20} className="sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">{profileData.rank}</span>
            </div>
            <p className="text-xs sm:text-sm">Joined {profileData.joinDate}</p>
          </div>
        </div>
        <Button className="w-full sm:w-auto">Add Friend</Button>
      </div>

      {/* Social Links */}
      <div className="bg-[#1c1c1c] p-2 flex flex-wrap justify-start pl-4 sm:pl-6 space-x-2 sm:space-x-4">
        {profileData.socialLinks.map((link, index) => (
          <Button
            key={index}
            normal
            variant="ghost"
            className="text-white text-xs sm:text-sm max-w-[120px] rounded-full"
          >
            @{userObj.given_name}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Matches */}
          <Card className="flex flex-col sm:flex-row justify-between gap-5 bg-transparent border-none">
            <Card className="rounded-none flex-1 mb-4 sm:mb-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm sm:text-base">
                  RECENT MATCHES
                </CardTitle>
                <div className="flex space-x-1">
                  {profileData.recentMatches.map((result, index) => (
                    <span
                      key={index}
                      className={`w-4 h-4 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-lg font-bold ${
                        result === 'W'
                          ? 'bg-green-500'
                          : result === 'L'
                            ? 'bg-red-500'
                            : 'bg-yellow-500'
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Earnings */}
            <Card className="rounded-none flex-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm sm:text-base">EARNINGS</CardTitle>
                <Star className="text-[#9eff00] w-4 h-4 sm:w-6 sm:h-6" />
              </CardHeader>
              <CardContent>
                <p className="text-xl sm:text-2xl font-bold">
                  {profileData.earnings}
                </p>
              </CardContent>
            </Card>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="trophies">
            <TabsList className="grid grid-cols-3 bg-card">
              <TabsTrigger value="trophies" className="text-xs sm:text-sm">
                TROPHIES
              </TabsTrigger>
              <TabsTrigger value="achievements" className="text-xs sm:text-sm">
                ACHIEVEMENTS
              </TabsTrigger>
              <TabsTrigger value="teams" className="text-xs sm:text-sm">
                TEAMS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="trophies" className="bg-card p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {profileData.trophies.map((trophy, index) => (
                  <Card key={index} className="bg-[#2a2a2a] rounded-none">
                    <CardHeader className="flex items-center justify-center flex-col p-2 sm:p-4">
                      <Image
                        src={GTrophy}
                        alt="trophy"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-12 sm:h-12"
                      />
                      <CardTitle className="text-xs sm:text-sm text-center mt-2">
                        {trophy.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center flex-col p-2 sm:p-4">
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        {trophy.tier}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-400">
                        {trophy.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <Button
                  variant="link"
                  className="text-[#9eff00] text-xs sm:text-sm mb-2 sm:mb-0"
                >
                  VIEW ALL
                </Button>
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <Trophy className="text-[#9eff00] w-4 h-4 sm:w-5 sm:h-5" />
                  <span>100</span>
                  <Trophy className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  <span>100</span>
                  <Trophy className="text-[#cd7f32] w-4 h-4 sm:w-5 sm:h-5" />
                  <span>100</span>
                </div>
              </div>
            </TabsContent>
            {/* Add content for other tabs */}
          </Tabs>

          {/* History */}
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">HISTORY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs sm:text-sm">
                        Game Title
                      </TableHead>
                      <TableHead className="text-xs sm:text-sm">
                        Platform
                      </TableHead>
                      <TableHead className="text-xs sm:text-sm">W</TableHead>
                      <TableHead className="text-xs sm:text-sm">L</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profileData.history.map((game, index) => (
                      <TableRow
                        key={index}
                        className="h-[40px] sm:h-[60px] border-background-2"
                      >
                        <TableCell className="text-xs sm:text-sm">
                          {game.title}
                        </TableCell>
                        <TableCell>
                          <FaXbox className="w-4 h-4 sm:w-5 sm:h-5" />
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {game.wins}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {game.losses}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Button
                variant="link"
                className="text-[#9eff00] mt-4 text-xs sm:text-sm"
              >
                VIEW ALL
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Activity */}
        <Card className="rounded-none h-full">
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">ACTIVITY</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] sm:h-[1450px]">
              {profileData.activity.map((item, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <PersonIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                    <span className="font-bold text-xs sm:text-sm">
                      {userObj.name}
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {item.type}
                    </span>
                  </div>
                  {item.type === 'posted' &&
                  item.content.startsWith('Image') ? (
                    <div className="relative h-32 sm:h-56 w-full">
                      <div className="absolute w-full bg-yellow-200 inset-0 flex items-center justify-center">
                        <Image
                          src={Fortnite}
                          alt="activity"
                          className="w-full h-full object-cover"
                        />
                        {/* <Play className="text-white w-8 h-8 sm:w-12 sm:h-12" /> */}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm">{item.content}</p>
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
