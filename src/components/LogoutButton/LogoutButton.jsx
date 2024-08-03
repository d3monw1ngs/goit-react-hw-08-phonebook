import React from 'react';
import { logout } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import css from './LogoutButton.module.css';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    };

  return (
    <button className={css.logoutBtn} onClick={handleLogout}>
        Log Out
    </button>
  );
};
