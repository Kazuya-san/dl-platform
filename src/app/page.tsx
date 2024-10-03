import { DownArrow } from '@/assets';
import FAQSection from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Hero } from '@/components/landing/hero';
import ScrollArrow from '@/components/landing/scroll-bottom';
import Section from '@/components/landing/section';
import { Spot } from '@/components/landing/spot';
import { sections } from '@/content';
import Image from 'next/image';

export default async function Home() {
  return (
    <div className="px-[32px] md:px-[60px] lg:px-[100px] xl:px-[120px] 2xl:px-[160px] 1920:px-[180px] overflow-hidden">
      <Hero />
      <Features />
      {sections.map((section) => (
        <Section
          key={section.dir}
          title={section.title}
          description={section.description}
          dir={section.dir}
          imageSrc={section.image}
        />
      ))}
      <FAQSection />
      <Spot />
      <ScrollArrow />
    </div>
  );
}
