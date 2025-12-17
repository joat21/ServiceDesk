import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { useAuthUser } from '@/entities/user';
import { sidebarItems } from '@/shared/config/sidebarRoutes';

export const AdminLayout = () => {
  const user = useAuthUser();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          items={sidebarItems[user.roleName] ?? []}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <main className="flex flex-1 px-6">
          <div className="mx-auto max-w-7xl w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
