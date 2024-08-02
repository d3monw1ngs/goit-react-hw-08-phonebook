import React from 'react';
import { useAuth } from '../../redux/hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const { user, handleLogout } = useAuth();

  return (
    <div clasName={css.userMenu}>
        <p>{user?.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
