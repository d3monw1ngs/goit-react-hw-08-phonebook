import React from 'react';
import { useAuth } from '../../redux/hooks/useAuth';
import css from './LoginForm.module.css';

export const LoginForm = () => {
    const { handleLogin, isLoading, error } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        handleLogin({ email: email.value, password: password.value });
    };

  return (
    <div className={css.LoginFormContainer}>
        <h1>Login</h1>
        {error && <div className={css.LoginFormError}>{error}</div>}
        <form onSubmit={handleSubmit} className={css.LoginForm}>
            <div className={css.LoginFormField}>
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={css.LoginFormInput}
                />
            </div>
            <div className={css.LoginFormField}>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={css.LoginFormInput}
                />
            </div>
            <button type="submit" disabled={isLoading} className={css.LoginFormBtn}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    </div>
  );
};
