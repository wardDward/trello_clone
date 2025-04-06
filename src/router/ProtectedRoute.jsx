import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const {  isLoggedIn } = useSelector((state) => state.users);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export const RedirectAuthenticatedUser = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.users);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
