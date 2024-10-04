'use client';
import React from 'react';
import Image from 'next/image';
import { OslogoFull } from '@/assets';
import { usePathname } from 'next/navigation';

const noNavRoutes = ['/auth', '/reservation'];

export const Footer = () => {
  const pathname = usePathname();

  if (noNavRoutes.includes(pathname)) return null;
  return (
    <div className="bg-card flex flex-col justify-center w-full h-[209px] pt-5 z-50 relative">
      <div className="bg-dark w-full flex items-center justify-center">
        <Image src={OslogoFull} alt="oneshot.gg-logo" />{' '}
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 mb-6 justify-around w-full">
        <div className="text-foreground text-[14px] sm:text-[16px] sm:mt-10 text-center flex sm:w-full items-center justify-center text-wrap w-[90%]">
          © {new Date().getFullYear()} Destruction Labz, All rights reserved.
        </div>
        <div className="flex flex-col md:absolute right-10 top-[30%] text-[14px] font-bold sm:text-[16px] mt-2 md:mt-0 items-center justify-center gap-2 text-foreground float-right">
          <p className="hover:opacity-75 transition cursor-pointer duration-100">
            Privacy Policy
          </p>
          <p className="hover:opacity-75 transition cursor-pointer duration-100">
            Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};
