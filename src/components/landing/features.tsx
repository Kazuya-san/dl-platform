import React from 'react';
import Image from 'next/image';
import { features } from '@/content';

export function Features() {
  return (
    <>
      <div className="flex flex-col 900:flex-row items-stretch h-full justify-between md:my-52 gap-[24px]">
        {features.map((feature, i) => (
          <div
            key={i}
            className="900:max-w-[300px] text-wrap lg:max-w-[442px] 1920:max-w-[542px] w-full bg-card flex items-center justify-start flex-col px-[20px] py-[24px] sm:!p-[32px]"
          >
            <Image src={feature.icon} alt={feature.title} />
            <h1 className="text-[20px] xsh:text-[24px] 900:text-[18px] break-all sm:break-normal text-center lg:text-[24px] 1920:text-[32px] mt-4 font-[family-name:var(--font-nippo)] tracking-widest uppercase">
              {feature.title}
            </h1>

            <p className="text-[14px] 1920:text-[20px] mt-4 text-muted-foreground text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
