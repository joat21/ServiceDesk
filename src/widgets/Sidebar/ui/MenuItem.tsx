import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cn, Tooltip } from '@heroui/react';
import type { SidebarMenuItem } from '../model/types';

interface MenuItemProps {
  item: SidebarMenuItem;
  collapsed: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ collapsed, item }) => {
  const { label, icon: Icon, path } = item;
  return (
    <Tooltip
      key={item.label}
      className="rounded-lg"
      content={item.label}
      placement="right"
      isDisabled={!collapsed}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            'flex items-center px-5 py-7 cursor-pointer hover:bg-[#c3c0c0] transition-all duration-400',
            isActive && 'bg-[#c3c0c0]'
          )
        }
      >
        <Icon width={24} height={24} />
        <span
          className={cn(
            'pl-2.5 max-w-[200px] opacity-100 text-lg overflow-hidden whitespace-nowrap transition-all duration-400',
            collapsed && 'pl-0 max-w-0 opacity-0'
          )}
        >
          {label}
        </span>
      </NavLink>
    </Tooltip>
  );
};
