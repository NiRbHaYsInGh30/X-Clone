
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
  const isAuthenticated = localStorage.getItem('logged in') === 'true';

  if (!isAuthenticated) {
    alert("Login first");
    return <Navigate to="/" />;
  }
 

  return <>{children}</>;
};
export   const LoginRoute=({children}:any)=>{
  const isAuthenticated = localStorage.getItem('logged in') === 'true';
  if(isAuthenticated){
    return  <Navigate to="/home" />;
  }
  return <>{children}</>;

}
export default ProtectedRoute;
