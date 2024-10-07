import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary rounded-none text-primary-foreground shadow-none hover:bg-accent-foreground relative hover:text-primary group',
        destructive:
          'bg-destructive rounded-none text-destructive-foreground shadow-sm hover:bg-destructive/90 relative group',
        outline:
          'border rounded-none border-input bg-background shadow-sm hover:bg-accent relative group',
        secondary:
          'bg-secondary rounded-none text-secondary-foreground shadow-sm hover:bg-secondary/80 relative group',
        ghost:
          'hover:bg-accent rounded-none hover:text-foreground relative group',
        link: 'text-primary rounded-none underline-offset-4 hover:underline relative group',
      },
      size: {
        xs: 'h-[28px] w-[64px] text-[12px] font-bold px-2',
        sm: 'h-[35px] w-[75px] text-[14px] font-bold px-3 text-xs',
        md: 'h-[46px] w-[94px] text-[16px] font-bold px-5',
        lg: 'h-[57px] w-[136px] text-[20px] font-bold px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  normal?: boolean;
  edgesClassName?: string;
  left?: string;
  right?: string;
}

const Edges = ({
  edgesClassName,
  left,
  right,
}: {
  edgesClassName: string | undefined;
  left?: string;
  right?: string;
}) => (
  <>
    <div
      className={cn(
        'w-1 h-[85%] bg-inherit border-inherit group-hover:bg-inherit absolute -left-1 ' +
          left,
        edgesClassName,
      )}
    ></div>
    <div
      className={cn(
        'w-1 h-[85%] bg-inherit border-inherit group-hover:bg-inherit absolute -right-1 ' +
          right,
        edgesClassName,
      )}
    ></div>
  </>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      left,
      right,
      asChild = false,
      normal = false,
      edgesClassName,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    //attach Edges to children if normal is false
    if (!normal) {
      const { children, ...rest } = props;
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...rest}
        >
          <Edges edgesClassName={edgesClassName} left={left} right={right} />
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
