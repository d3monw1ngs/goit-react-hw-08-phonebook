import React, { useState } from 'react';
import { useAuth } from 'redux/hooks/useAuth';
import css from './LoginForm.module.css';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, isLoading, error } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        handleLogin({ email, password });
    };

  return (
    <div className={css.loginContainer}>
        <h1>Login</h1>
        {error && <div className={css.loginError}>{error}</div>}
        <form onSubmit={handleSubmit} className={css.loginForm}>
            <div className={css.loginField}>
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className={css.loginInput}
                />
            </div>
            <div className={css.loginField}>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className={css.loginInput}
                />
            </div>
            <button type="submit" disabled={isLoading} className={css.loginBtn}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    </div>
  );
};
