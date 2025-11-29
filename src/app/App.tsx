import { Route, useNavigate, useHref, Routes } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';

import { AdminLayout } from './layouts/AdminLayout';
import { MainLayout } from './layouts/MainLayout';
import { SignInPage } from '@/pages/sign-in';
import { ProfilePage } from '@/pages/profile';
import { CreateTicketPage } from '@/pages/create-ticket';
import { TicketPage } from '@/pages/ticket';
import { TicketsPage } from '@/pages/tickets';
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
          <Route index element={<TicketsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create-ticket" element={<CreateTicketPage />} />
          <Route path="tickets/:id" element={<TicketPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="performers" element={<h1>Исполнители</h1>} />
          <Route path="offices" element={<h1>Офисы</h1>} />
        </Route>

        <Route path="/superadmin" element={<AdminLayout />}>
          <Route path="priorities" element={<h1>Приоритеты</h1>} />
          <Route path="categories" element={<h1>Категории</h1>} />
          <Route path="admins" element={<h1>Администраторы</h1>} />
          <Route path="analysts" element={<h1>Аналитики</h1>} />
        </Route>
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
