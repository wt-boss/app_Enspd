import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

 const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  let location = useLocation();

  if (!token) {
    // Redirige vers la page de connexion et passe l'emplacement actuel dans l'état
    // afin de pouvoir y revenir après l'authentification
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute ;