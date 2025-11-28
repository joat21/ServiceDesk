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
      <div className="flex flex-col gap-1">
        <span className="text-xl font-medium">{label}</span>
        <span className="text-[#666]">{value}</span>
      </div>
    </div>
  );
};
