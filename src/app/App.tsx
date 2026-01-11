import { Route, useNavigate, useHref, Routes } from 'react-router-dom';
import { HeroUIProvider } from '@heroui/react';

import { AdminLayout } from './layouts/AdminLayout';
import { MainLayout } from './layouts/MainLayout';
import { RequireRole } from './router/RequireRole';
import { RedirectByRole } from './router/RedirectByRole';

import { ProfilePage } from '@/pages/profile';
import { CreateTicketPage } from '@/pages/create-ticket';
import { TicketPage } from '@/pages/ticket';
import { TicketsPage } from '@/pages/tickets';
import { PerformersPage } from '@/pages/performers';
import { OfficesPage } from '@/pages/offices';
import { PrioritiesPage } from '@/pages/priorities';
import { AnalystAssignmentsPage } from '@/pages/analyst-assignments';
import { AdminAssignmentsPage } from '@/pages/admin-assignments';
import { CategoriesPage } from '@/pages/categories';
import { OnboardingPage } from '@/pages/onboardnig';
import { NotFoundPage } from '@/pages/not-found';
import { NoAccessPage } from '@/pages/no-access';

import { Role } from '@/entities/user';

function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider locale={'ru-RU'} navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<RedirectByRole />} />

          <Route
            element={<RequireRole roles={[Role.Employee, Role.Performer]} />}
          >
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          <Route element={<RequireRole roles={[Role.Employee]} />}>
            <Route path="create-ticket" element={<CreateTicketPage />} />
          </Route>

          <Route path="tickets/:id" element={<TicketPage />} />
        </Route>

        <Route element={<RequireRole roles={[Role.Admin]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="performers" element={<PerformersPage />} />
            <Route path="offices" element={<OfficesPage />} />
          </Route>
        </Route>

        <Route element={<RequireRole roles={[Role.SuperAdmin]} />}>
          <Route path="/superadmin" element={<AdminLayout />}>
            <Route path="priorities" element={<PrioritiesPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="admins" element={<AdminAssignmentsPage />} />
            <Route path="analysts" element={<AnalystAssignmentsPage />} />
          </Route>
        </Route>

        <Route path="/403" element={<NoAccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
