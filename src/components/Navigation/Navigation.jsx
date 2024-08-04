import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { useSelector } from 'react-redux';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
    const { user, handleLogout } = useAuth();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
            {!isLoggedIn ? (
                <>
                    <NavLink to="/register"
                             className={({ isActive }) => isActive ? css.activeNavLink : css.navLink}
                    >
                        Register
                    </NavLink>
                    <NavLink to="/login"
                             className={({ isActive }) => isActive ? css.activeNavLink : css.navLink}
                    >
                        Log In
                    </NavLink>
                </>
            ) : (
            <>
                <span className={css.user}>Welcome, {user.email}</span>
                <LogoutButton onLogout={handleLogout} />    
            </>
            )}
        </nav>
    );
};