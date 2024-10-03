'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface AuthButtonProps {
  icon?: React.ReactNode;
  name: string;
  href: string;
  rightIcon?: React.ReactNode;
}

export function AuthButton({ icon, name, href, rightIcon }: AuthButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  console.log(isPending, 'isPending');

  return (
    <a href={href} onClick={handleClick}>
      <Button
        variant="outline"
        className="w-full rounded-none h-[44px] 1920:h-[56px] text-[12px] xs:text-[14px] 1920:text-[16px] border border-muted-foreground group"
        edgesClassName="group-hover:bg-accent border border-muted-foreground"
        left="group-hover:!border-r-accent !border-r-background"
        right="group-hover:!border-l-accent !border-l-background"
        disabled={isPending}
      >
        <div className="flex justify-between items-center w-full">
          <div>{icon}</div>
          <div>
            <span className="hidden xs:inline">Continue with </span>
            {name}
          </div>
          <div className="w-[24px]">
            {isPending ? <LoadingSpinner /> : rightIcon}
          </div>
        </div>
      </Button>
    </a>
  );
}
