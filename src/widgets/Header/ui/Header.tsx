import { Link } from 'react-router-dom';
import { AlfaLogo, NotificationIcon } from '../../../shared/ui/icons';
import { Button } from '@heroui/react';
import { UserDropdown } from './UserDropdown';

export const Header = () => {
  return (
    <header className="flex justify-center px-6 w-full bg-white">
      <div className="flex justify-between items-center gap-10 max-w-[1280px] w-full">
        <Link to="/" className="flex gap-5 items-center py-4">
          <AlfaLogo />
          <div className="flex flex-col">
            <span className="text-xl font-medium">Альфа-Комфорт</span>
            <span className="text-[#666]">Система управления заявками</span>
          </div>
        </Link>
        <div
          className="flex justify-between items-center gap-4 pl-7 py-2 max-w-[440px] w-full h-full"
          style={{ boxShadow: '-10px -4px 16px 0 rgba(0,0,0,0.08)' }}
        >
          <Button
            className="p-0 w-[60px] h-[60px] min-w-0 bg-[#fafafa]"
            radius="full"
          >
            <NotificationIcon />
          </Button>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
