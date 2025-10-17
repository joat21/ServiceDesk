import { Route, useNavigate, useHref, Routes } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';

import { MainLayout } from './layouts/MainLayout';
import { SignInPage } from '@/pages/sign-in';
import { ProfilePage } from '@/pages/profile';
import { CreateTicketPage } from '@/pages/create-ticket';

function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Дашборд</h1>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="create-ticket" element={<CreateTicketPage />} />
        </Route>
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
