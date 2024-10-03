import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid min-h-[100dvh] md:grid-cols-1 sm:bg-background-2">
      <Link className="m-4 absolute" href="/">
        <Button
          normal
          variant={'ghost'}
          className="gap-1 rounded-full"
          size={'sm'}
        >
          <ArrowLeft size={16} />
          Back
        </Button>
      </Link>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto max-w-[420px] 1920:max-w-[484px] w-full max-h-[645px] 1920:h-full px-8 sm:p-[48px] gap-6 bg-transparent flex flex-col items-center justify-center sm:bg-card-dark drop-shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
