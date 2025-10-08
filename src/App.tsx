import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ProfilePage } from './pages/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<h1>Дашборд</h1>} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
