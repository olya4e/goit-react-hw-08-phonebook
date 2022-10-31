import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <Navigate to='/' /> : <Outlet />}</div>;
};
