import React from 'react';
import { logOut } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import css from './LogoutButton.module.css';

export const LogoutButton = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logOut());
    };

  return (
    <button className={css.logoutBtn} onClick={handleLogout}>
        Log Out
    </button>
  );
};
