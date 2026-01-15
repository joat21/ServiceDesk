import { cn, Link, type ButtonProps as HeroButtonProps } from '@heroui/react';
import { Button } from './Button';
import { ViewIcon } from './icons';

export const ViewButton = ({ className, ...props }: HeroButtonProps) => {
  return (
    <Button
      variant="light"
      as={Link}
      className={cn('p-2 rounded-lg min-w-0 w-fit min-h-10 h-10', className)}
      {...props}
    >
      <ViewIcon />
    </Button>
  );
};
