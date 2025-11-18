import type { FC, PropsWithChildren } from 'react';

interface DetailsItemProps extends PropsWithChildren {
  label: string;
}

export const DetailsItem: FC<DetailsItemProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#666]">{label}</span>
      <div className="text-lg">{children}</div>
    </div>
  );
};
