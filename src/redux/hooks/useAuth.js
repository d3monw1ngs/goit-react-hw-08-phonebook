import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../auth/authOperations";
import { selectUser, selectIsLoggedIn } from "../auth/authSelectors";

export const useAuth = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logOut());
    };
    
    return {
        isLoggedIn,
        handleLogout,
        user,
    };
};