import { Route, useNavigate, useHref, Routes } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';

import { MainLayout } from './layouts/MainLayout';
import { SignInPage } from '@/pages/sign-in';
import { ProfilePage } from '@/pages/profile';
import { CreateTicketPage } from '@/pages/create-ticket';
import { EmployeeTicketsPage } from '@/pages/tickets/employee';
import { TicketPage } from '@/pages/ticket';
import { useUser } from '@/entities/user';

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/sign-in', { replace: true });
  }

  const { error, isLoading } = useUser(!!token);

  if (isLoading) return 'Загрузка...';

  if (error) {
    localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
  }

  return (
    <HeroUIProvider locale={'ru-RU'} navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<EmployeeTicketsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create-ticket" element={<CreateTicketPage />} />
          <Route path="tickets/:id" element={<TicketPage />} />
        </Route>
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
