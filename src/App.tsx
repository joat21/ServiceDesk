import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ProfilePage } from './pages/profile';
import { MainLayout } from './shared/ui';
import { SignInPage } from './pages/sign-in';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/sign-in" element={<SignInPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Дашборд</h1>} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
