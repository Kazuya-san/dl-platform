'use client';

import { DownArrow } from '@/assets';
import Image from 'next/image';

const ScrollArrow = () => {
  return (
    <a href="#spot" className="fixed bottom-7 right-7 cursor-pointer">
      <Image src={DownArrow} alt="Down Arrow" />
    </a>
  );
};

export default ScrollArrow;
