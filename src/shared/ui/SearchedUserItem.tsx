import type { SearchedUser } from '@/entities/user';

export const SearchedUserItem = (user: SearchedUser) => {
  return (
    <div className="flex flex-col gap-1">
      <span>
        {user.surname} {user.name} {user.patronymic}
      </span>
      <span className="text-[#666]">{user.email}</span>
    </div>
  );
};
