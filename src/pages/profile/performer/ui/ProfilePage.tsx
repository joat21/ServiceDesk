import type { FC } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Offices } from './Offices';
import { Categories } from './Categories';
import { Rating } from './Rating';
import { useUser } from '@/entities/user';

export const ProfilePage: FC = () => {
  const { data: user, isLoading } = useUser();

  if (!user || isLoading) return 'Загрузка...';

  return (
    <div className="flex items-center w-full">
      <div className="grid grid-cols-[650px_375px] gap-10 items-start mx-auto">
        <PersonalInfo user={user} />
        <Offices offices={user.office} />
        <Categories categories={user.categories ?? []} />
        <Rating rating={user.rating ?? 0} />
      </div>
    </div>
  );
};
