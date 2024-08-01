import { useAuth } from "../../redux/hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};