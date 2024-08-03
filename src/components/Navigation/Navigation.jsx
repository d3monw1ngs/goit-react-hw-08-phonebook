import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
            {!isLoggedIn && (
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
            )}
                {isLoggedIn && <LogoutButton />} {/* Display LogoutButton if logged in */}    
        </nav>
    );
};