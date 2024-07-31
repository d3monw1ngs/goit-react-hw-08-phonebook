import React from 'react';
import { useAuth } from 'redux/hooks/useAuth';

export const UserMenu = () => {
    const { user, handleLogout } = useAuth();

  return (
    <div>
        <p>{user.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
