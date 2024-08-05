import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { selectAuthError, selectIsLoading } from '../../redux/auth/authSelectors';
import css from './RegisterForm.module.css';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectAuthError);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(register({ name, email, password }));
        if (register.fulfilled.match(resultAction)) {
            toast.success('Registration successful!');
            navigate('/login'); // Redirect to login after successful registration
        } else {
            toast.error('Registration failed. Please try again.');
        }
    };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
            <p className={css.labelText}>User Name</p>
            <input
                className={css.input}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label className={css.label}>
            <p className={css.labelText}>Email</p>
            <input
                className={css.input}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            />
        </label>
        <button className={css.button} type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}    
        </button>
            {error && <p className={css.error}>{error}</p>}
    </form>
  );
};
