import React from 'react';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
       const form = e.currentTarget;
       const userData = {
        email: form.elements.email.value,
        password: form.elements.password.value,
       };
       console.log('Submitting login form with data:', userData);
       dispatch(logIn(userData));
       form.reset();
    };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
            <p className={css.labelText}>Email</p>
            <input
                className={css.input}
                type="email"
                name="email"
                required
            />
        </label>
        <label className={css.label}>
            <p className={css.labelText}>Password</p>
            <input
                className={css.input}
                type="password"
                name="password"
                required
            />
        </label>
        <button className={css.button} type="submit">Log In</button>
    </form>
  );
};
