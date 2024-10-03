import Link from 'next/link';
import { Button } from '../ui/button';
import SignOut from '../sign-out';

export function Spot() {
  return (
    <>
      <div
        id="spot"
        className="flex items-center flex-col justify-center h-full mt-8 md:mt-0 min-h-[60vh] 2xl:min-h-[60vh] 2400:min-h-[40vh]"
      >
        <h1 className="text-center uppercase text-[22px] sm:text-[36px] font-semibold font-[family-name:var(--font-nippo)]">
          Claim your spot
        </h1>
        <h1 className="text-center uppercase 1920:-mt-2 text-[22px] sm:text-[36px] font-semibold font-[family-name:var(--font-nippo)]">
          and begin your journey to the top
        </h1>
        <SignOut>
          <Link href={'/auth'}>
            <Button className="my-4">Sign-up</Button>
          </Link>
        </SignOut>
      </div>
    </>
  );
}
