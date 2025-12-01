import type { FC } from 'react';
import { cn, Link, type ButtonProps } from '@heroui/react';
import { Button } from '../ui';
import { ArrowLeftIcon } from '../ui/icons';

export const BackToHomeButton: FC<ButtonProps> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Button
      className={cn('self-start text-foreground bg-white group', className)}
      variant="ghost"
      as={Link}
      href={href ?? '/'}
      startContent={
        <ArrowLeftIcon className="transition-transform duration-200 group-hover:-translate-x-1" />
      }
      {...props}
    >
      Назад к панели
    </Button>
  );
};
