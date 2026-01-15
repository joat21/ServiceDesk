import type { FC } from 'react';
import {
  cn,
  Button as HeroButton,
  type ButtonProps as HeroButtonProps,
} from '@heroui/react';

const variantClassMap: Partial<
  Record<NonNullable<HeroButtonProps['variant']>, string>
> = {
  solid: 'bg-primary text-primary-foreground data-[hover=true]:bg-[#CA0808]',
  ghost:
    'bg-transparent border border-[#c3c0c0] text-[#666] data-[hover=true]:bg-[#ededed]',
};

export const Button: FC<HeroButtonProps> = ({
  className,
  variant = 'solid',
  children,
  disabled,
  ...props
}) => {
  return (
    <HeroButton
      variant={variant}
      className={cn(
        'px-5 py-1 rounded-lg min-h-8 h-8 text-base data-[hover=true]:opacity-100 hover:opacity-100',
        variantClassMap[variant],
        className,
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </HeroButton>
  );
};
