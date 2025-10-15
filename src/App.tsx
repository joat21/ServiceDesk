import { Route, useNavigate, useHref, Routes } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';

import { ProfilePage } from './pages/profile';
import { MainLayout } from './shared/ui';
import { SignInPage } from './pages/sign-in';

function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Дашборд</h1>} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
