import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// pages
import RootLayout from './layouts/RootLayout.tsx';
import Dashboard, { tasksloader } from './pages/Dashboard.tsx';
import Profile from './pages/Profile.tsx';
import Announcements from './pages/Announcements.tsx';
import Schedule from './pages/Schedule.tsx';

// // router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksloader} />
      <Route path="Announcements" element={<Announcements />} />
      <Route path="profile" element={<Profile />} />
      <Route path="schedule" element={<Schedule />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
