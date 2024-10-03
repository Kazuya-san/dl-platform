import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SectionProps {
  title: string;
  description: string;
  buttonSize?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = 'Image Description',
  dir = 'auto',
}) => {
  return (
    <div className="sm:container py-8 sm:mt-36 sm:mb-16">
      <div className="grid md:grid-cols-7 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className={`${dir === 'rtl' && 'sm:order-last'} col-span-3`}>
          <h1 className="scroll-m-20 font-bold text-[24px] sm:text-[32px] 1920:text-[40px] font-[family-name:var(--font-nippo)] tracking-widest uppercase">
            {title}
          </h1>
          <p className="mt-3 text-[14px] sm:text-[16px] 1920:text-[20px] text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="relative w-full max-h-[396px] h-full col-span-4 flex items-center justify-center rounded-lg mt-6 md:mt-0">
          <Image
            className="rounded-md"
            src={imageSrc}
            alt={imageAlt}
            placeholder="blur"
            priority
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Section;
