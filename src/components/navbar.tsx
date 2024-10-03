'use client';

import { OSlogo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Home, Trophy, BarChart2, Users, LogOut } from 'lucide-react';

const noNavRoutes = ['/auth'];

const menuItems = [
  // { name: 'Profile', icon: Home, href: '/profile' },
  { name: 'Tournaments', icon: Trophy, href: '/tournaments' },
  // { name: 'Leaderboard', icon: BarChart2, href: '/leaderboard' },
  // { name: 'Teams', icon: Users, href: '/teams' },
];

export default function Navbar() {
  const { user, isLoading } = useUser();
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const throttledScrollChange = throttle(handleScroll, 600);

    window.addEventListener('scroll', throttledScrollChange);

    return () => {
      window.removeEventListener('scroll', throttledScrollChange);
    };
  }, []);

  if (noNavRoutes.includes(pathname)) return null;

  return (
    <nav className="fixed 2400:relative 0 top-0 w-full z-10 bg-background">
      <div className="mx-auto py-[16px] px-[32px]">
        <div className="flex items-center sm:items-center justify-between">
          <Link
            href={'/'}
            className={`transition-all duration-300 rounded-full`}
          >
            <Image src={OSlogo} alt="oneshot.gg logo" className="w-3/4 h-3/4" />
          </Link>

          {user && !isLoading && (
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}

          {!user && !isLoading && (
            <Link href={'/auth'}>
              <Button size={'sm'}>Sign-up</Button>
            </Link>
          )}

          {user && !isLoading && (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user.picture || undefined}
                    alt={user.name || 'User avatar'}
                  />
                  <AvatarFallback>
                    {user.name ? user.name[0].toUpperCase() : 'U'}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    href="/api/auth/logout"
                    prefetch={false}
                    className="flex items-center text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
