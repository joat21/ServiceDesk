import type { FC } from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Offices } from './Offices';
import { Categories } from './Categories';
import { Rating } from './Rating';
import { useUser } from '@/entities/user';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';

export const ProfilePage: FC = () => {
  const { data: user, isLoading } = useUser();

  if (!user || isLoading) return 'Загрузка...';

  return (
    <div className="flex flex-col gap-14 pt-12 w-full">
      <h1 className="sr-only">Профиль</h1>
      <BackToHomeButton />
      <div className="grid grid-cols-[650px_375px] gap-10 items-start mx-auto">
        <PersonalInfo user={user} />
        <Offices offices={user.office} />
        <Categories categories={user.categories ?? []} />
        <Rating rating={user.rating ?? 0} />
      </div>
    </div>
  );
};
