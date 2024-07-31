import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser, login, logout, register } from "redux/auth/authOperations";
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectAuthError, selectIsLoading } from "../redux/auth/authSelectors";

export const useAuth = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectIsRefreshing);
    const error = useSelector(selectAuthError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(fetchCurrentUser());
        }
    }, [dispatch, isLoggedIn]);

    const handleLogin = (userData) => {
        dispatch(login(userData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleRegister = (userData) => {
        dispatch(register(userData));
    };

    return {
        isLoggedIn,
        user,
        isRefreshing,
        error,
        isLoading,
        handleLogin,
        handleLogout,
        handleRegister,
    };
};