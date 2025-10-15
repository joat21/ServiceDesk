import type { FC } from 'react';

type PersonalInfoItemProps = {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const PersonalInfoItem: FC<PersonalInfoItemProps> = ({
  label,
  value,
  icon: Icon,
}) => {
  return (
    <div className="flex gap-7 items-center">
      <Icon width={28} height={28} />
      <div className="flex flex-col gap-1.5">
        <span className="font-bold">{label}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};
