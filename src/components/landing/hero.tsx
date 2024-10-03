import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Bolt } from '@/assets';
import SignOut from '../sign-out';

export function Hero() {
  return (
    <>
      <div className="flex items-center justify-center h-full mt-8 md:mt-16 xl:mt-0 min-h-[70vh] xl:min-h-screen 2400:min-h-[30vh] 2400:mt-[200px] 2400:mb-[300px]">
        <div className="mt-36 md:mt-[6rem] 1920:mt-[7.6rem] relative">
          <h1 className="text-left uppercase text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[10rem] 1600:text-[12rem] 1920:text-[240px] 2400:text-[300px] 1920:leading-[84%] font-[family-name:var(--font-nippo)]">
            The Arcade Awaits
          </h1>
          <p className="text-muted-foreground mb-8 text-[14px] max-w-[380px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px] 1920:text-[20px] 1920:max-w-[900px] mt-2 leading-[24.38px]">
            Connect with friends, compete against rivals, Build your profile,
            and climb the leaderboards. Unlock your true potential.
          </p>
          <SignOut>
            <Link className="hidden md:block" href={'/auth'}>
              <Button size={'lg'}>Sign-up</Button>
            </Link>
          </SignOut>
          <div className="md:absolute md:-right-[10%] sm:min-h-[800px] md:top-0 xl:right-0 -top-[20%] 1920:-top-[40%] dpr -z-50">
            <Image
              src={Bolt}
              alt="lightning bolt"
              priority
              className="w-full 2xl:opacity-80 h-full xl:w-[80%] 1600:w-[90%] 1920:w-full float-right dpr-img"
            />
          </div>
          <SignOut>
            <Link
              className="flex w-full items-center justify-center mb-10 md:hidden"
              href={'/auth'}
            >
              <Button>Sign-up</Button>
            </Link>
          </SignOut>
        </div>
      </div>
    </>
  );
}
