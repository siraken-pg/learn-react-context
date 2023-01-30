import IndexPage from './pages/index';
import LoginPage from './pages/login';
import FirebaseIndexPage from './pages/firebase';
import FirebaseLoginPage from './pages/firebase/login';
import FirebaseSignUpPage from './pages/firebase/signup';

const MainRoutes = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const FirebaseRoutes = [
  {
    path: '/firebase',
    element: <FirebaseIndexPage />,
  },
  {
    path: '/firebase/login',
    element: <FirebaseLoginPage />,
  },
  {
    path: '/firebase/signup',
    element: <FirebaseSignUpPage />,
  },
];

export const routes = [...MainRoutes, ...FirebaseRoutes];
