import type { FC } from 'react';
import { Spinner, type SpinnerProps } from '@heroui/react';

interface PageLoaderProps extends SpinnerProps {
  label?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ label, ...props }) => {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <Spinner label={label} {...props} />
    </div>
  );
};
