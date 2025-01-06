import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import BookmarksPage from './Pages/BookmarksPage';
import JobsPage from './Pages/JobsPage';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { LoginLoader } from './Loaders/LoginLoader';
import SignupLoader from './Loaders/SignupLoader';
import { RouterProvider } from 'react-router';
import More from './Pages/More';
import Notifications from './Pages/Notifications';
import Profile from './Pages/Profile';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLoader />
    },
    {
      path: '/signup',
      element: <SignupLoader />
    },
    {
      element: <Layout />,
      children: [
        {
          path: '/home',
          element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          )
        },
        {
          path: '/profile',
          element: (
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          )
        },
        {
          path: '/search',
          element: (
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          )
        },
        {
          path: '/more',
          element: (
            <ProtectedRoute>
              <More />
            </ProtectedRoute>
          )
        },
        {
          path: '/bookmarks',
          element: (
            <ProtectedRoute>
              <BookmarksPage />
            </ProtectedRoute>
          )
        },
        {
          path: '/notifications',
          element: (
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          )
        },
        {
          path: '/jobs',
          element: (
            <ProtectedRoute>
              <JobsPage />
            </ProtectedRoute>
          )
        },
        
      ]
    }
  ]);

  return (
        <RouterProvider router={router} />
  );
};

export default App;