import { Outlet, useHref, useNavigate } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';
import { Header } from '@/widgets/Header';

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center px-6">
          <div className="flex justify-center max-w-[1280px] w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </HeroUIProvider>
  );
};
