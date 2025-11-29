import { Link } from 'react-router-dom';
import { UserDropdown } from './UserDropdown';
import { NotificationsDropdown } from './NotificationsDropdown';
import { useUser } from '@/entities/user';
import { AlfaLogo } from '@/shared/ui/icons';

export const Header = () => {
  const { data: user } = useUser();

  return (
    <header className="flex justify-center w-full bg-white border-b border-[#c3c0c0]">
      <div className="flex justify-between items-center gap-10 max-w-[1920px] w-full">
        <Link to="/" className="flex gap-5 items-center">
          <AlfaLogo />
          <div className="flex flex-col">
            <span className="font-medium">Альфа-Комфорт</span>
            <span className="text-[14px] text-[#666]">
              Система управления заявками
            </span>
          </div>
        </Link>
        <div
          className="flex justify-between items-center gap-4 pl-7 max-w-[440px] w-full h-full"
          style={{
            boxShadow: `
              -10px 0 16px rgba(0,0,0,0.05),   /* левая тень */
              10px 0 16px rgba(0,0,0,0.05)    /* правая тень */
            `,
          }}
        >
          <NotificationsDropdown />
          <UserDropdown
            fullName={`${user?.name} ${user?.surname}`}
            department={user?.department ?? ''}
          />
        </div>
      </div>
    </header>
  );
};
