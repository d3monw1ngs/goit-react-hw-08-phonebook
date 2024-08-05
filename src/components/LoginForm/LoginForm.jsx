import React, { useState } from 'react';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError, selectIsLoading } from '../../redux/auth/authSelectors';
import { toast } from 'react-toastify';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectAuthError);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(logIn({ email, password }));
        if (logIn.fulfilled.match(resultAction)) {
            toast.success('Login successful!');
            navigate('/contacts');
        } else {
            toast.error('Login failed. Please try again.');
        }
    };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
            <p className={css.labelText}>Email</p>
            <input
                className={css.input}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </label>
        <label className={css.label}>
            <p className={css.labelText}>Password</p>
            <input
                className={css.input}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </label>
        <button className={css.button} type="submit" disabled={isLoading}>
           {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>{error}</p>}
    </form>
  );
};
