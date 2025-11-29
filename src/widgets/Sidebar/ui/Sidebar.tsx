import { type FC } from 'react';
import { Button, cn } from '@heroui/react';
import type { SidebarMenuItem } from '../model/types';
import { LogoutIcon, MenuIcon } from '@/shared/ui/icons';
import { MenuItem } from './MenuItem';

interface SidebarProps {
  items: SidebarMenuItem[];
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
  items,
}) => {
  return (
    <aside
      className={cn(
        'sticky top-0 flex flex-col max-w-[300px] w-full max-h-screen bg-[#efefef] transition-all duration-400',
        collapsed && 'max-w-16'
      )}
    >
      <div className="mb-20 px-4 pt-4">
        <Button
          size="sm"
          variant="light"
          onPress={() => setCollapsed(!collapsed)}
          isIconOnly
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="flex flex-col justify-between mb-12 px-5 pt-4">
        <div
          className={cn(
            'max-w-full opacity-100 overflow-hidden whitespace-nowrap transition-all duration-400',
            collapsed && 'max-w-0 opacity-0'
          )}
        >
          <p className="mb-2 text-2xl font-semibold">Система заявок</p>
          <p className="text-lg font-medium">Панель администратора</p>
        </div>
      </div>

      <nav className="flex flex-col flex-1">
        {items.map((item) => (
          <MenuItem key={item.label} item={item} collapsed={collapsed} />
        ))}
      </nav>

      <div className="self-end px-4 pb-5">
        <Button
          className="text-[#e24444] data-[hover=true]:bg-[#FFD7D7]"
          variant="light"
          size="sm"
          isIconOnly
        >
          <LogoutIcon />
        </Button>
      </div>
    </aside>
  );
};
