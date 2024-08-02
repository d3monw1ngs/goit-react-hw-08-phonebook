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
    <div className={css.loginFormContainer}>
        <h1>Login</h1>
        {error && <div className={css.loginFormError}>{error}</div>}
        <form onSubmit={handleSubmit} className={css.loginForm}>
            <div className={css.loginFormField}>
                <label>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={css.loginFormInput}
                />
            </div>
            <div className={css.loginFormField}>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={css.loginFormInput}
                />
            </div>
            <button type="submit" disabled={isLoading} className={css.loginFormBtn}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    </div>
  );
};
