"use client";

import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { user, isLoading } = useUser();
  return (
    <nav className="fixed top-0 w-full flex md:grid md:grid-cols-12 items-center justify-center px-8 lg:px-12 mx-auto h-full max-h-[70px] backdrop-blur-lg z-[10]">
      <div className="flex items-center md:col-span-3">
        <Link href="/dashboard">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://dl-one.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-footer.b49f032a.png&w=48&q=75"
            alt="logo"
            className="w-6 h-full"
          />
        </Link>
      </div>

      {user ? <NavbarLinks /> : <div className="col-span-6"></div>}

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          // eslint-disable-next-line @next/next/no-img-element

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src={user.picture as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="cursor-pointer">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/api/auth/logout">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : isLoading ? null : (
          <div className="flex items-center gap-x-2">
            <Button asChild>
              <Link href={"/auth"} className="font-semibold">
                Log in
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
