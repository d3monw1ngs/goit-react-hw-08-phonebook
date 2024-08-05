import { useAuth } from "../../redux/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const fromRegistration = location.state?.fromRegistration;

  if (isLoggedIn && !fromRegistration) {
    return <Navigate to={redirectTo} />
  }

  return <Component />;
};