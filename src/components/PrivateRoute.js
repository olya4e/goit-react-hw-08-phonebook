import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</div>;
};
