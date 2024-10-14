'use client';
import Image from 'next/image';
import { OslogoFull } from '@/assets';
import { usePathname } from 'next/navigation';

const noNavRoutes = ['/auth', '/reservation', '/confirmation'];

export const Footer = () => {
  const pathname = usePathname();

  if (noNavRoutes.includes(pathname)) return null;
  return (
    <div className="bg-card flex flex-col lg:flex-row justify-between px-8 items-center min-h-[180px] py-8 lg:py-0 w-full z-50 relative">
      <div className="h-[78px] text-muted-foreground flex-1 flex items-end justify-start text-[14px] sm:text-[16px] text-center text-wrap order-last lg:order-1 mt-4 lg:mt-0">
        © {new Date().getFullYear()} Destruction Labz, All rights reserved.
      </div>
      <Image
        src={OslogoFull}
        alt="oneshot.gg-logo"
        className="order-2 w-[132px] h-[78px] lg:ml-8"
      />
      <div className="h-[78px] flex-1 flex flex-col order-3 lg:flex-row text-[14px] sm:text-[16px] mt-5 lg:mt-0 lg:items-end items-center font-semibold justify-end gap-3 text-foreground">
        <p className="hover:opacity-75 transition cursor-pointer duration-100">
          Privacy Policy
        </p>
        <p className="hover:opacity-75 transition cursor-pointer duration-100">
          Terms of Service
        </p>
      </div>
      {/* <div className="bg-dark w-full flex items-center justify-center">
        <Image src={OslogoFull} alt="oneshot.gg-logo" />{' '}
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 mb-6 mt-5 justify-around w-full">
        <div className="text-foreground text-[14px] sm:text-[16px] sm:mt-10 text-center flex sm:w-full items-center justify-center text-wrap w-[90%]">
          © {new Date().getFullYear()} Destruction Labz, All rights reserved.
        </div>
        <div className="flex flex-col md:absolute right-10 top-[30%] text-[14px] font-bold sm:text-[16px] mt-2 md:mt-0 items-center justify-center gap-2 text-foreground float-right">
          <p className="hover:opacity-75 transition cursor-pointer duration-100">
            <PrivacyPolicy />
          </p>
          <p className="hover:opacity-75 transition cursor-pointer duration-100">
            <TermsOfSerivce />
          </p>
        </div>
      </div> */}
    </div>
  );
};
