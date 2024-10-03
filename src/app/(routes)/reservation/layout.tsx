import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-1 bg-background-2 mt-[95px]">
      <div className="flex items-center justify-center 2400:items-start py-12 ">
        <div className="mx-aut max-w-[500px] 1920:max-w-[592px] mt-10 sm:mt-0 min-h-[215px] w-full py-16 px-8 sm:py-[48px] sm:px-[30px] 1920:px-[56px] flex items-center justify-center flex-col gap-6 bg-transparent sm:bg-card-dark drop-shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
