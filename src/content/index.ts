import { Trophy, Person, Social, Leaderboards, Emblem } from '@/assets';
import { StaticImageData } from 'next/image';
import { FaTwitch, FaTiktok, FaYoutube } from 'react-icons/fa6';

export const features = [
  {
    icon: Person,
    title: 'Personalization',
    description:
      'Make your gamer profile stand out from the crowd. Customize your avatar, bio, and other details to showcase your unique personality and gaming style. Earn achievements, collect trophies, and leave your mark.',
  },
  {
    icon: Trophy,
    title: 'Competition',
    description:
      'Step into the Arena! Climb leaderboards, host and compete in tournaments. Battle it out for bragging rights and exclusive rewards.',
  },
  {
    icon: Social,
    title: 'Social',
    description:
      'Find your community. Our platform is a hub for like-minded gamers to connect, collaborate, and share their passion. Join the conversation, make new friends, and elevate your social gaming experience.',
  },
];

export const faqData = [
  {
    question: 'What is a Digital Arcade?',
    answer:
      'A digital arcade is a platform that recreates the experience of a traditional arcade. It offers a variety of games, competitive features, and social elements, allowing users to compete against others, earn achievements, and connect with a gaming community.',
  },
  {
    question: 'Why did we create One Shot?',
    answer:
      'We created One Shot to empower players and offer a fresh take on competitive and social gameplay. The landscape is changing drastically and creating a platform that is on the forefront of innovation and player preference is needed. We created One Shot to revolutionize the gaming landscape. Our goal is to empower players with a platform that offers innovative, competitive, and social gameplay experiences. With the industry rapidly evolving, we believe there is a need for a platform that prioritizes player satisfaction and cutting-edge features.',
  },
  {
    question: 'How old do I need to be to sign up?',
    answer:
      'Players need to be at least 14 years of age to sign up and compete on One Shot.',
  },
  {
    question: 'Do I need to download anything?',
    answer:
      'Players do not need to download any software to compete at this time.',
  },
  {
    question: 'When will I be able to do more?',
    answer:
      "Be sure to check your email for updates and stay connected via our socials for more information as we begin beta testing. Stay tuned for updates! We'll be sharing more details about our beta testing plans soon. Make sure to check your email and follow us on social media for the latest news.",
  },
];

interface sectionType {
  title: string;
  description: string;
  dir: 'rtl' | 'ltr' | 'auto';
  image: StaticImageData;
}

export const sections: sectionType[] = [
  {
    title: 'A New Era',
    description:
      'Experience gaming redefined. Our platform offers a fresh take on competition, combining skill, strategy, and social interaction. Prove your worth, climb the leaderboards, and earn real rewards. Join the first digital arcade and etch your name in gaming history.',
    dir: 'ltr',
    image: Leaderboards,
  },
  {
    title: 'Rise To The Top',
    description:
      'Ascend the ranks and dominate the arena. Face off against the best players and prove your skills. Our advanced ranking system ensures fair competition and accurate placement.',
    dir: 'rtl',
    image: Emblem,
  },
];

export const regions = [
  {
    name: 'Africa',
    value: 'africa',
  },
  {
    name: 'Asia',
    value: 'asia',
  },
  {
    name: 'Europe',
    value: 'europe',
  },
  {
    name: 'North America',
    value: 'northAmerica',
  },
  {
    name: 'South America',
    value: 'southAmerica',
  },
  {
    name: 'Australia',
    value: 'australia',
  },
  // {
  //   name: 'Antarctica',
  //   value: 'antarctica',
  // },
];

export const profileData = {
  username: 'Kazuya',
  rank: 'GOLD 80',
  joinDate: '10/5/2024',
  earnings: '$100,000',
  recentMatches: ['W', 'L', 'W', 'W', 'T'],
  socialLinks: [FaTwitch, FaTiktok, FaYoutube],
  trophies: [
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
    {
      name: 'RED BULL LEAGUE OF ITS OWN 2024',
      tier: 'GOLD TIER',
      date: '10/5/2024',
    },
  ],
  history: [
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
    {
      title: 'Call of Duty: Modern Warfare III',
      platform: 'xbox',
      wins: 1,
      losses: 1,
    },
  ],
  activity: [
    { type: 'posted', content: 'Image content here' },
    { type: 'achieved', content: 'Tournament Name 2024' },
    { type: 'posted', content: 'AAAAAAAAAAAAAAA $ lunch money' },
    { type: 'ranked', content: 'RANK GOLD 80' },
    {
      type: 'posted',
      content:
        "I wish M&K's ult was a command grab that M&K would actually have to aim and land. Like a lunging hug attack that goes on cooldown if it misses.\n\nIt should also definitely be a lot shorter.",
    },
    {
      type: 'posted',
      content:
        "I wish M&K's ult was a command grab that M&K would actually have to aim and land. Like a lunging hug attack that goes on cooldown if it misses.\n\nIt should also definitely be a lot shorter.",
    },
    { type: 'posted', content: 'Image content here' },
    { type: 'posted', content: 'Image content here' },
    { type: 'posted', content: 'AAAAAAAAAAAAAAA $ lunch money' },
    { type: 'posted', content: 'AAAAAAAAAAAAAAA $ lunch money' },
    {
      type: 'posted',
      content:
        "I wish M&K's ult was a command grab that M&K would actually have to aim and land. Like a lunging hug attack that goes on cooldown if it misses.\n\nIt should also definitely be a lot shorter.",
    },
  ],
};
