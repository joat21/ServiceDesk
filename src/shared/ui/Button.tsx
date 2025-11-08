import type { FC } from 'react';
import { cn, Button as HeroButton, type ButtonProps } from '@heroui/react';

const variantClassMap: Partial<
  Record<NonNullable<ButtonProps['variant']>, string>
> = {
  solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
  ghost: 'bg-transparent border border-[#c3c0c0] text-[#666]',
};

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'solid',
  children,
  ...props
}) => {
  return (
    <HeroButton
      className={cn(
        'px-5 py-1 rounded-lg text-base',
        variantClassMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </HeroButton>
  );
};
