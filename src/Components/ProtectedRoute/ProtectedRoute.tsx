
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }:any) => {
  const isAuthenticated = localStorage.getItem('logged in') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;