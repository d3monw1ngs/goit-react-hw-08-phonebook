import { useSelector, useDispatch } from "react-redux";
import { logout } from "../auth/authOperations";
import { selectUser, selectIsLoggedIn } from "../auth/authSelectors";

export const useAuth = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());
    };
    
    return {
        isLoggedIn,
        handleLogout,
        user,
    };
};