import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Users,
  Award,
  Activity,
  GamepadIcon,
  MonitorIcon,
} from 'lucide-react';
import { Banner, Person } from '@/assets';

const profileData = {
  user: {
    name: 'CATSAKIMBO',
    avatar: '/placeholder.svg?height=80&width=80',
    banner: '/placeholder.svg?height=256&width=1024',
    rank: 'SILVER 80',
    earnings: 15920,
  },
  stats: {
    xpEarned: 11456,
    tournamentsEntered: 24,
    profileViews: 80,
  },
  recentMatches: [
    { result: 'W', variant: 'success' },
    { result: 'L', variant: 'destructive' },
    { result: 'W', variant: 'success' },
    { result: 'W', variant: 'success' },
    { result: 'T', variant: 'default' },
  ],
  winRate: 67,
  record: [
    {
      game: 'Call of Duty: Modern Warfare III',
      platform: 'Xbox',
      wins: 1,
      losses: 1,
    },
    {
      game: 'Call of Duty: Modern Warfare III',
      platform: 'Xbox',
      wins: 1,
      losses: 1,
    },
    {
      game: 'Call of Duty: Modern Warfare III',
      platform: 'Xbox',
      wins: 1,
      losses: 1,
    },
    {
      game: 'Call of Duty: Modern Warfare III',
      platform: 'Xbox',
      wins: 1,
      losses: 1,
    },
    {
      game: 'Call of Duty: Modern Warfare III',
      platform: 'Xbox',
      wins: 1,
      losses: 1,
    },
  ],
  achievements: [
    { name: 'First Blood', icon: Award },
    { name: 'Sharpshooter', icon: Award },
    { name: 'Team Player', icon: Award },
    { name: 'Survivor', icon: Award },
    { name: 'Tactician', icon: Award },
    { name: 'Veteran', icon: Award },
  ],
  trophies: [
    { name: 'Tournament Winner', icon: Trophy },
    { name: 'MVP', icon: Trophy },
    { name: 'Killstreak Master', icon: Trophy },
    { name: 'Objective King', icon: Trophy },
  ],
  teams: [
    { name: 'Alpha Squad', icon: Users },
    { name: 'Beta Team', icon: Users },
    { name: 'Delta Force', icon: Users },
    { name: 'Omega Group', icon: Users },
    { name: 'Zeta Unit', icon: Users },
    { name: 'Epsilon Crew', icon: Users },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-12 mt-[65px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="relative h-48 md:h-64 lg:h-[450px] rounded-lg overflow-hidden mb-6 lg:mb-8 border border-card">
          <Image
            src={Banner}
            alt="Profile banner"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 flex items-end">
            <Image
              src={Person}
              alt="Avatar"
              width={80}
              height={80}
              className="rounded-full border-4 border-background"
            />
            <div className="ml-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {profileData.user.name}
              </h1>
              <div className="flex items-center mt-2">
                <Badge
                  variant="secondary"
                  className="mr-2 text-sm md:text-base"
                >
                  {profileData.user.rank}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-yellow-500 text-background text-sm md:text-base"
                >
                  EARNINGS ${profileData.user.earnings.toLocaleString()}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            <Card className="border-card">
              <CardHeader>
                <CardTitle>Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 md:h-64 lg:h-80 bg-muted rounded-md flex items-center justify-center">
                  <Activity className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="border-card">
                <CardHeader>
                  <CardTitle>Recent Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    {profileData.recentMatches.map((match, index) => (
                      <Badge
                        key={index}
                        variant={
                          match.variant as
                            | 'destructive'
                            | 'default'
                            | 'secondary'
                            | 'outline'
                            | null
                            | undefined
                        }
                        className="text-lg md:text-xl lg:text-2xl px-3 py-1"
                      >
                        {match.result}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      {profileData.winRate}%
                    </div>
                    <div className="text-sm md:text-base lg:text-lg text-muted-foreground mt-2">
                      Win Rate
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-card">
                <CardHeader>
                  <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm md:text-base lg:text-lg mb-2">
                      <span>XP Earned</span>
                      <span>{profileData.stats.xpEarned.toLocaleString()}</span>
                    </div>
                    <Progress value={66} className="h-2 md:h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm md:text-base lg:text-lg mb-2">
                      <span>Tournaments Entered</span>
                      <span>{profileData.stats.tournamentsEntered}</span>
                    </div>
                    <Progress value={40} className="h-2 md:h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm md:text-base lg:text-lg mb-2">
                      <span>Profile Views</span>
                      <span>{profileData.stats.profileViews}</span>
                    </div>
                    <Progress value={20} className="h-2 md:h-3" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-card">
              <CardHeader>
                <CardTitle>Record</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50%]">Game Title</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>W</TableHead>
                      <TableHead>L</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profileData.record.map((game, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {game.game}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="text-sm md:text-base"
                          >
                            {game.platform === 'Xbox' ? (
                              <GamepadIcon className="w-4 h-4 mr-1" />
                            ) : (
                              <MonitorIcon className="w-4 h-4 mr-1" />
                            )}
                            {game.platform}
                          </Badge>
                        </TableCell>
                        <TableCell>{game.wins}</TableCell>
                        <TableCell>{game.losses}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="border-card">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {profileData.achievements.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-2 flex items-center justify-center">
                        <achievement.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                      <span className="text-xs md:text-sm text-center">
                        {achievement.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-card">
              <CardHeader>
                <CardTitle>Trophy Case</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {profileData.trophies.map((trophy, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-muted rounded-full mb-2 flex items-center justify-center">
                        <trophy.icon className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />
                      </div>
                      <span className="text-xs md:text-sm text-center">
                        {trophy.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-card">
              <CardHeader>
                <CardTitle>Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 md:gap-6">
                  {profileData.teams.map((team, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-2 flex items-center justify-center">
                        <team.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                      <span className="text-xs md:text-sm text-center">
                        {team.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
