import React from 'react';
import { useAuth } from '../../redux/hooks/useAuth';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
    const { handleRegister, isLoading, error } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const { name, email, password } = e.target.elements;
        handleRegister({ name: name.value, email: email.value, password: password.value });
    };

  return (
    <div className={css.RegFormContainer}>
        <h1>Register</h1>
        {error && <div className={css.RegFormError}>{error}</div>}
        <form onSubmit={handleSubmit} className={css.RegForm}>
            <div className={css.RegFormField}>
                <label>Name:</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={css.RegFormInput}
                />
            </div>
            <div className={css.RegFormField}>
                <label>Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={css.RegFormInput}                
                />
            </div>
            <div className={css.RegFormField}>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={css.RegFormInput}                
                />
            </div>
            <button type="submit" disabled={isLoading} className={css.RegFormBtn}>
                {isLoading ? 'Registering...' : 'Register'}
            </button>
        </form>
    </div>
  );
};
