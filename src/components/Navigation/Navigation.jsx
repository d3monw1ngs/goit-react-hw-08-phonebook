import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={css.nav}>
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
        </nav>
    );
};